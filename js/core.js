/* Lõi: đăng ký dữ liệu, lưu tiến độ, chấm điểm, lặp lại ngắt quãng */
(function () {
  'use strict';
  const T = window.TOEIC = {
    stages: {}, lessons: {}, vocab: {}, tests: {}, groups: {}, qIndex: {},
    practice: { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [] },
    FORMAT: { parts: {}, time: {} }, TAGS: {}, scenes: {}
  };

  /* ---------- Đăng ký dữ liệu ---------- */
  // "Nhóm" = phần chung (tranh, hội thoại, đoạn văn) + danh sách câu hỏi qs.
  // Câu đơn viết gọn {p, q, c, a, e, t} sẽ tự được gói thành nhóm 1 câu.
  T.reg = function (g, id) {
    if (!g.qs) {
      g.qs = [{ q: g.q, say: g.say, c: g.c, a: g.a, e: g.e, t: g.t }];
      ['q', 'say', 'c', 'a', 'e', 't'].forEach(k => delete g[k]);
    }
    if (g.passage && !g.passages) g.passages = [g.passage];
    g.p = g.p || 0;
    if (!g.id) { g.id = id; g.autoId = true; } // id tự sinh theo vị trí – dữ liệu mới nên ghi id cố định

    if (T.groups[g.id] && T.groups[g.id] !== g) console.warn('[TOEIC] Trùng id nhóm:', g.id);
    T.groups[g.id] = g;
    g.qs.forEach((q, i) => {
      q.uid = g.id + '#' + i;
      if (!Array.isArray(q.c) || typeof q.a !== 'number' || q.a < 0 || q.a >= q.c.length)
        console.warn('[TOEIC] Câu hỏi sai cấu trúc đáp án:', q.uid);
      T.qIndex[q.uid] = { g, i };
      if (!g.keepOrder && !g.dyn) T.mix(q);
    });
    return g;
  };
  // Xáo thứ tự lựa chọn theo id câu (cố định giữa các lần mở trang) để đáp án đúng không dồn vào một chữ cái.
  // Bỏ qua câu dưới 3 lựa chọn, câu chỉ gồm ký hiệu IPA và câu có lựa chọn dạng số (giờ, giá, ngày – đề thật xếp tăng dần).
  // Các tham chiếu (A)…(D) trong lời giải được đổi theo.
  T.isNumChoice = c => /^\s*(\$|£|€|¥|\[\d\]|at\s+\d|by\s+\d|on\s+\d|in\s+\d|\d)/i.test(String(c).replace(/<[^>]+>/g, ''));
  T.mix = function (q) {
    if (!Array.isArray(q.c) || q.c.length < 3 || q.c.every(x => /^\/.+\/$/.test(x)) || q.c.every(T.isNumChoice)) return;
    let h = 2166136261; for (const ch of q.uid) h = Math.imul(h ^ ch.charCodeAt(0), 16777619) >>> 0;
    const ord = q.c.map((_, i) => i);
    for (let i = ord.length - 1; i > 0; i--) { h = Math.imul(h ^ (h >>> 15), 2246822519) >>> 0; const j = h % (i + 1); [ord[i], ord[j]] = [ord[j], ord[i]]; }
    const L = 'ABCD', pos = []; ord.forEach((o, n) => { pos[o] = n; });
    q.c = ord.map(o => q.c[o]); q.a = pos[q.a];
    if (q.e) q.e = q.e.replace(/\(([A-D])\)/g, (m, l) => (L.indexOf(l) < pos.length ? '(' + L[pos[L.indexOf(l)]] + ')' : m));
  };
  T.addStage = s => { s.units = s.units || []; T.stages[s.id] = s; };
  T.addWord = function (str, l) {
    const [w, pos, ipa, vi, syn, ex, exvi] = str.split('|').map(x => (x || '').trim());
    const id = w.toLowerCase();
    if (T.vocab[id]) { console.warn('[TOEIC] Từ bị trùng:', w); return id; }
    T.vocab[id] = { id, w, pos, ipa, vi, syn: syn === '—' ? '' : syn, ex, exvi, lesson: l && l.id, stage: l && l.stage, topic: (l && l.topic) || '' };
    return id;
  };
  T.addVocab = (stage, list, topic) => list.forEach(s => T.addWord(s, { id: null, stage, topic }));
  T.addLesson = function (l) {
    T.lessons[l.id] = l;
    l.vocabIds = (l.vocab || []).map(s => T.addWord(s, l));
    l.ex = (l.exercises || []).map((g, i) => { const r = T.reg(g, l.id + '-ex' + i); r.lvl = r.lvl || l.stage; return r; });
  };
  T.addTest = function (t) {
    t.groups = (t.groups || []).map((g, i) => { const r = T.reg(g, t.id + '-g' + i); r.inTest = t.id; return r; });
    T.tests[t.id] = t;
  };
  T.addPractice = function (part, list) {
    list.forEach(g => { g.p = g.p || part; T.practice[part].push(T.reg(g, g.id || ('pr' + part + '-' + T.practice[part].length))); });
  };
  T.stageLessons = function (sid) {
    const s = T.stages[sid];
    const ui = u => (s ? s.units.findIndex(x => x.id === u) : 0);
    return Object.values(T.lessons).filter(l => l.stage === sid)
      .sort((a, b) => ui(a.unit) - ui(b.unit) || (a.order || 0) - (b.order || 0));
  };

  /* ---------- Lưu trữ (có try/catch) ---------- */
  const KEY = 'toeic990_v1';
  T.defaults = () => ({ v: 1, onboarded: false, stage: 1, done: {}, cp: {}, srs: {}, partStats: {}, tagStats: {}, wrong: {}, flags: {}, history: [], streak: 0, lastDay: null, settings: { dark: false, rate: 1 } });
  T.storageOK = true;
  T.load = function () {
    let d = null;
    let raw = null;
    try { raw = localStorage.getItem(KEY); } catch (e) { T.storageOK = false; }
    try { d = JSON.parse(raw || 'null'); } catch (e) {
      // Dữ liệu hỏng: sao lưu chuỗi gốc trước khi lần lưu kế tiếp ghi đè
      try { localStorage.setItem(KEY + '_corrupt', raw); } catch (e2) {}
      T.corrupt = true;
    }
    T.D = Object.assign(T.defaults(), d && typeof d === 'object' ? d : {});
    T.D.settings = Object.assign(T.defaults().settings, T.D.settings || {});
    return T.D;
  };
  T.save = function () {
    try { localStorage.setItem(KEY, JSON.stringify(T.D)); T.storageOK = true; } catch (e) { T.storageOK = false; }
  };

  /* ---------- Ngày & chuỗi ngày học ---------- */
  const fmt = d => d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  T.today = () => fmt(new Date());
  T.addDays = (s, n) => { const [y, m, d] = s.split('-').map(Number); return fmt(new Date(y, m - 1, d + n)); };
  T.touch = function () {
    const D = T.D, t = T.today();
    if (D.lastDay !== t) { D.streak = D.lastDay === T.addDays(t, -1) ? (D.streak || 0) + 1 : 1; D.lastDay = t; }
    T.save();
  };
  T.streak = () => { const D = T.D, t = T.today(); return (D.lastDay === t || D.lastDay === T.addDays(t, -1)) ? D.streak : 0; };

  /* ---------- Ghi nhận kết quả từng câu ---------- */
  T.defTag = g => ({ 0: 'tu-vung', 1: 'mo-ta-tranh', 2: 'hoi-dap', 3: 'nghe-chi-tiet', 4: 'nghe-chi-tiet', 5: 'ngu-phap', 6: 'doan-van', 7: 'doc-hieu' })[g.p] || 'tu-vung';
  T.record = function (uid, ok, noSave) {
    const x = T.qIndex[uid]; if (!x) return;
    const D = T.D, g = x.g, q = g.qs[x.i], tag = q.t || T.defTag(g);
    // Ôn từ trong bài học chỉ chấm SRS khi từ đã đến hạn, để không đẩy lịch ôn đi quá nhanh
    const card = q.vid && D.srs[q.vid];
    if (card && card.due <= T.today()) T.srs.grade(q.vid, ok ? 4 : 1);
    if (g.dyn) { if (!noSave) T.touch(); return; }
    if (g.p) { const ps = D.partStats[g.p] = D.partStats[g.p] || { c: 0, n: 0 }; ps.n++; if (ok) ps.c++; }
    const ts = D.tagStats[tag] = D.tagStats[tag] || { c: 0, n: 0 }; ts.n++; if (ok) ts.c++;
    if (ok) delete D.wrong[uid];
    else D.wrong[uid] = { tag, d: T.today(), n: ((D.wrong[uid] || {}).n || 0) + 1 };
    if (!noSave) T.touch();
  };

  /* ---------- Quy đổi điểm ƯỚC LƯỢNG (không phải bảng quy đổi của ETS) ---------- */
  // Trừ phần đoán mò: chọn bừa đạt ~25% (Listening ~27% vì Part 2 chỉ có 3 lựa chọn) → quy về 0.
  T.scale = function (c, n, sec) {
    if (!n) return 5;
    const g = sec === 'L' ? 0.27 : 0.25, p = Math.max(0, (c / n - g) / (1 - g));
    const v = 5 + 490 * Math.pow(p, sec === 'L' ? 0.9 : 1.05);
    return Math.max(5, Math.min(495, Math.round(v / 5) * 5));
  };
  T.stageFromScore = s => s < 300 ? 1 : s < 500 ? 2 : s < 700 ? 3 : s < 850 ? 4 : 5;

  /* ---------- Lặp lại ngắt quãng (SM-2 rút gọn) ---------- */
  T.srs = {
    add(id) { if (T.vocab[id] && !T.D.srs[id]) T.D.srs[id] = { ef: 2.5, iv: 0, reps: 0, due: T.today() }; },
    grade(id, q) { // q: 1 quên, 3 khó, 4 nhớ, 5 dễ
      this.add(id); const c = T.D.srs[id]; if (!c) return;
      if (q < 3) { c.reps = 0; c.iv = 1; }
      else {
        c.reps++;
        c.iv = c.reps === 1 ? 1 : c.reps === 2 ? 3 : Math.round(c.iv * c.ef);
        if (q === 3) c.iv = Math.max(1, Math.round(c.iv * 0.7));
        if (q === 5) c.iv += 2;
      }
      // Quên: chỉ trừ 0.2 (như Anki) để từ không bị kẹt mãi ở mức dễ quên nhất
      c.ef = Math.max(1.3, q < 3 ? c.ef - 0.2 : c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.due = T.addDays(T.today(), c.iv);
    },
    due() { const t = T.today(); return Object.keys(T.D.srs).filter(k => T.vocab[k] && T.D.srs[k].due <= t); },
    learned() { return Object.keys(T.D.srs).filter(k => T.vocab[k] && T.D.srs[k].iv >= 7).length; }
  };
})();
