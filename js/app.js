/* Giao diện, điều hướng và các màn hình */
(function () {
  'use strict';
  const T = window.TOEIC;
  const D = T.load();
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const app = $('#app');
  const L = ['A', 'B', 'C', 'D'];
  const POS = { n: 'danh từ', v: 'động từ', adj: 'tính từ', adv: 'trạng từ', prep: 'giới từ', conj: 'liên từ', pron: 'đại từ', 'phr v': 'cụm động từ', phr: 'cụm từ' };
  const SPK = { M: 'Nam', M2: 'Nam 2', W: 'Nữ', W2: 'Nữ 2', N: 'Người nói' };
  const KIND = { placement: 'Kiểm tra xếp lớp', checkpoint: 'Kiểm tra cuối chặng', mini: 'Thi thử mini', full: 'Thi thử đầy đủ' };
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const strip = s => String(s || '').replace(/<[^>]+>/g, '');
  const pct = (c, n) => (n ? Math.round((c / n) * 100) : 0);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
  const stageIds = () => Object.keys(T.stages).map(Number).sort((a, b) => a - b);
  const fmtT = s => String(Math.floor(s / 60)).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0');
  let ctx = { mode: 'practice' }, EX = null, FS = null, timer = null;

  document.documentElement.classList.toggle('dark', !!D.settings.dark);
  T.toast = function (msg) {
    const el = $('#toast'); el.textContent = msg; el.classList.add('show');
    clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('show'), 2800);
  };

  /* ================= Điều hướng ================= */
  const routes = { home, path, lesson, practice, grammar, review, vocab, flash, tests, exam: examIntro, run: examRun, result, stats, settings };
  function go(h) { if (location.hash === h) router(); else location.hash = h; }
  function router() {
    T.speech.stop(); stopTimer();
    const parts = (location.hash.replace(/^#\/?/, '') || 'home').split('/').map(decodeURIComponent);
    const name = parts[0];
    ctx = { mode: 'practice' };
    if (!D.onboarded && !['exam', 'run', 'result', 'settings'].includes(name)) { onboarding(); setNav(''); return; }
    (routes[name] || home).apply(null, parts.slice(1));
    setNav(name);
    if (name !== 'run') window.scrollTo(0, 0);
  }
  function setNav(name) {
    const m = { flash: 'vocab', review: 'practice', grammar: 'practice', exam: 'tests', run: 'tests', result: 'tests', lesson: 'path' };
    $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.r === (m[name] || name)));
  }
  function notFound() { app.innerHTML = '<p>Không tìm thấy nội dung. <a href="#/home">Về trang chủ</a></p>'; }

  /* ================= Logic lộ trình ================= */
  function isUnlocked(l) {
    if (D.done[l.id] || l.stage < D.stage) return true;
    if (l.stage > D.stage) return false;
    const ls = T.stageLessons(l.stage), i = ls.indexOf(l);
    return i <= 0 || !!D.done[ls[i - 1].id];
  }
  function nextStep() {
    const s = T.stages[D.stage] || T.stages[1], ls = T.stageLessons(s.id); let cp = null;
    for (const u of s.units) {
      const nd = ls.find(l => l.unit === u.id && !D.done[l.id]);
      if (nd) return cp ? { type: 'cp', test: cp, then: nd } : { type: 'lesson', lesson: nd };
      const t = u.checkpoint && T.tests[u.checkpoint];
      if (t && !cp && ls.some(l => l.unit === u.id) && !((D.cp[t.id] || 0) >= 0.8)) cp = t;
    }
    if (cp) return { type: 'cp', test: cp };
    const g = s.gateTest && T.tests[s.gateTest];
    return g ? { type: 'gate', test: g, stage: s } : { type: 'none' };
  }
  function lastEst() { for (let i = D.history.length - 1; i >= 0; i--) if (D.history[i].total != null) return D.history[i]; return null; }

  /* ================= Màn hình chào ================= */
  function onboarding() {
    app.innerHTML = `<section class="card center hero onb"><div class="eyebrow">Listening &amp; Reading</div><h1>Chào bạn! 👋</h1>
      <p>Đây là lộ trình TOEIC Listening &amp; Reading từ con số 0 đến 990. Trước tiên, trình độ hiện tại của bạn thế nào?</p>
      <button class="btn big" data-act="ob-zero">🌱 Mình mất gốc / gần như chưa biết gì<small class="muted">Vào thẳng Giai đoạn 1 – Nền tảng</small></button>
      <button class="btn big" data-act="ob-test">📝 Mình đã học, muốn làm bài test xếp lớp<small class="muted">30 câu nghe + đọc, khoảng 25 phút</small></button>
      <p class="small muted" style="margin-top:18px">Phần nghe dùng giọng đọc của trình duyệt. Hãy kiểm tra loa trước:</p>
      <button class="btn ghost" data-speak="Hello! Welcome to your TOEIC course.">🔊 Thử loa</button></section>`;
  }

  /* ================= Trang chủ ================= */
  function home() {
    const s = T.stages[D.stage] || T.stages[1], ns = nextStep(), due = T.srs.due().length, est = lastEst();
    const ls = T.stageLessons(s.id), frac = ls.length ? ls.filter(l => D.done[l.id]).length / ls.length : 0;
    const overall = Math.round(((D.stage - 1 + frac) / 5) * 100);
    let next;
    if (ns.type === 'lesson') next = `<p class="muted">Bài tiếp theo</p><h3>${esc(ns.lesson.title)}</h3><p class="small muted">⏱ khoảng ${ns.lesson.minutes || 15} phút</p><a class="btn primary" href="#/lesson/${ns.lesson.id}">▶ Học ngay</a>`;
    else if (ns.type === 'cp') next = `<p class="muted">Bạn đã học xong một chặng</p><h3>${esc(ns.test.title)}</h3><p class="small">Đạt từ 80% để chắc kiến thức trước khi đi tiếp.</p><a class="btn primary" href="#/exam/${ns.test.id}">📝 Làm bài kiểm tra</a>${ns.then ? ` <a class="btn ghost" href="#/lesson/${ns.then.id}">Học tiếp bài sau</a>` : ''}`;
    else if (ns.type === 'gate') next = `<p class="muted">Đã học hết bài của giai đoạn này</p><h3>Bài thi chuyển giai đoạn</h3><p class="small">Cần đạt từ <b>${ns.stage.target}</b> điểm ước lượng ở “${esc(ns.test.title)}”.</p><a class="btn primary" href="#/exam/${ns.test.id}">📝 Thi ngay</a>`;
    else next = `<p>Nội dung tiếp theo của giai đoạn này đang được soạn. Trong lúc chờ, hãy ôn từ vựng và luyện theo Part.</p><a class="btn" href="#/practice">🎯 Luyện tập</a>`;
    app.innerHTML = `${!T.storageOK ? '<p class="note bad">⚠️ Trình duyệt đang chặn lưu trữ, tiến độ có thể mất khi đóng trang. Vào ⚙️ Cài đặt để xuất dữ liệu.</p>' : ''}
      <section class="card hero"><div class="eyebrow">Giai đoạn ${s.id}/5 · mục tiêu ${s.target || 990} điểm</div><h2>${esc(s.name)} <span class="pill">${s.range[0]} → ${s.range[1]}</span></h2>${next}</section>
      <div class="grid3">
        <a class="card stat" href="#/flash"><div class="big">${due}</div><div class="small">từ cần ôn hôm nay</div></a>
        <a class="card stat" href="#/stats"><div class="big">${est ? est.total : '—'}</div><div class="small">điểm ước lượng${est ? `<br>L ${est.Ls} · R ${est.Rs}` : ''}</div></a>
        <div class="card stat"><div class="big">🔥${T.streak()}</div><div class="small">ngày học liên tục</div></div>
      </div>
      <section class="card"><h3>Tiến độ cả lộ trình: ${overall}%</h3><div class="bar"><i style="width:${overall}%"></i></div>${stageBars()}</section>`;
  }
  function stageBars() {
    return stageIds().map(id => {
      const s = T.stages[id], ls = T.stageLessons(id), d = ls.filter(l => D.done[l.id]).length;
      const w = id < D.stage ? 100 : pct(d, ls.length);
      return `<div class="sbar ${id === D.stage ? 'cur' : ''}"><div class="sbar-h"><span>GĐ ${id}. ${esc(s.name)}</span><span>${id < D.stage ? '✅ Đã qua' : ls.length ? d + '/' + ls.length + ' bài' : 'Đang soạn'}</span></div><div class="bar"><i style="width:${w}%"></i></div></div>`;
    }).join('');
  }

  /* ================= Lộ trình ================= */
  function path() {
    let h = '<h2>🗺️ Lộ trình 0 → 990</h2>';
    stageIds().forEach(id => {
      const s = T.stages[id], ls = T.stageLessons(id);
      h += `<details class="card stage" ${id === D.stage ? 'open' : ''}><summary><b>Giai đoạn ${id}: ${esc(s.name)}</b> <span class="pill">${s.range[0]}–${s.range[1]}</span> <span class="small">${id < D.stage ? '✅' : id === D.stage ? '📍 Đang học' : '🔒'}</span></summary><p class="small muted">${s.desc || ''}</p>`;
      s.units.forEach(u => {
        const ul = ls.filter(l => l.unit === u.id);
        h += `<h4>${esc(u.title)}</h4><ul class="lessons">`;
        h += ul.map(l => {
          const done = D.done[l.id], open = isUnlocked(l);
          return open
            ? `<li><span>${done ? '✅' : '▶️'}</span><a href="#/lesson/${l.id}">${esc(l.title)}</a><span class="small muted">${l.minutes || 15}′</span></li>`
            : `<li class="locked"><span>🔒</span><span class="t">${esc(l.title)}</span><a class="btn sm ghost" href="#/lesson/${l.id}">Xem trước</a></li>`;
        }).join('') || '<li class="small muted">Nội dung đang được soạn.</li>';
        const t = u.checkpoint && T.tests[u.checkpoint];
        if (t) { const b = D.cp[t.id]; h += `<li><span>${b >= 0.8 ? '🏅' : '📝'}</span><a href="#/exam/${t.id}">${esc(t.title)}</a><span class="small muted">${b != null ? 'Cao nhất ' + pct(b, 1) + '%' : ''}</span></li>`; }
        h += '</ul>';
      });
      const g = s.gateTest && T.tests[s.gateTest];
      if (g) h += `<p>🚪 <b>Chuyển giai đoạn:</b> <a href="#/exam/${g.id}">${esc(g.title)}</a> – cần ≥ ${s.target} điểm ước lượng.</p>`;
      h += '</details>';
    });
    app.innerHTML = h;
  }

  /* ================= Bài học ================= */
  function lesson(id) {
    const l = T.lessons[id]; if (!l) return notFound();
    const preview = !isUnlocked(l);
    const rv = reviewGroup(l);
    let h = `<a class="back" href="#/path">← Lộ trình</a><h2>${esc(l.title)}</h2>
      <p class="small muted">Giai đoạn ${l.stage} · khoảng ${l.minutes || 15} phút${D.done[l.id] ? ' · ✅ Đã hoàn thành' : ''}</p>
      ${preview ? '<p class="note">👀 Bạn đang <b>xem trước</b>. Học xong bài trước để mở khóa và tính tiến độ.</p>' : ''}
      <div class="steps">${['Giải thích', 'Từ mới', 'Ví dụ', 'Bài tập', 'Ôn từ cũ'].map((s, i) => `<button class="chip" data-scroll="sec${i + 1}">${i + 1}. ${s}</button>`).join('')}</div>`;
    h += `<section id="sec1" class="card"><h3>1. Giải thích</h3>${(l.sections || []).map(s => `<h4>${s.h}</h4><div class="prose">${s.html}</div>`).join('')}${l.ipa ? ipaTable(l.ipa) : ''}</section>`;
    h += `<section id="sec2" class="card"><h3>2. Từ mới (${l.vocabIds.length})</h3><div class="words">${l.vocabIds.map(wordCard).join('') || '<p class="muted">Bài này không có từ mới.</p>'}</div></section>`;
    h += `<section id="sec3" class="card"><h3>3. Ví dụ</h3>${(l.examples || []).map(x => `<div class="exm"><button class="icon" data-speak="${esc(x.say || strip(x.en))}">🔊</button><div><div>${x.en}</div><div class="small muted">${x.vi}</div></div></div>`).join('') || '<p class="muted">—</p>'}</section>`;
    h += `<section id="sec4" class="card"><h3>4. Bài tập</h3><div id="ex">${l.ex.map(g => groupHTML(g, { mode: 'practice' })).join('')}</div></section>`;
    h += `<section id="sec5" class="card"><h3>5. Ôn lại từ các bài trước</h3>${rv ? groupHTML(rv, { mode: 'practice' }) : '<p class="muted">Chưa có từ cũ để ôn – đây là những bài đầu tiên.</p>'}</section>`;
    h += preview ? '<a class="btn" href="#/path">← Quay lại lộ trình</a>'
      : `<div class="finish"><button class="btn primary" data-act="finish" data-id="${l.id}">✔ Hoàn thành bài học</button><p class="small muted">Làm hết phần Bài tập để hoàn thành.</p></div>`;
    app.innerHTML = h;
  }
  function ipaTable(list) {
    return `<div class="tablewrap"><table class="ipa"><tr><th>Âm</th><th>Ví dụ</th><th>Cách đọc (gần đúng)</th><th></th></tr>${list.map(x => `<tr><td class="sym">${x.s}</td><td>${x.ex}</td><td>${x.note}</td><td><button class="icon" data-speak="${esc(x.ex.replace(/,/g, '.'))}">🔊</button></td></tr>`).join('')}</table></div>`;
  }
  function wordCard(id) {
    const v = T.vocab[id]; if (!v) return '';
    const s = D.srs[id];
    const st = !s ? '' : s.iv >= 7 ? '<span class="pill ok">Đã thuộc</span>' : '<span class="pill">Đang ôn</span>';
    return `<div class="word"><div><b class="w">${esc(v.w)}</b> <span class="muted">${esc(v.ipa)}</span> <em class="pos">${esc(POS[v.pos] || v.pos)}</em> <button class="icon" data-speak="${esc(v.w)}" aria-label="Phát âm">🔊</button> ${st}</div>
      <div class="vi">${esc(v.vi)}</div>${v.syn ? `<div class="small">≈ Đồng nghĩa: ${esc(v.syn)}</div>` : ''}
      ${v.ex ? `<div class="ex"><button class="icon" data-speak="${esc(v.ex)}">🔊</button> <i>${esc(v.ex)}</i><br><span class="muted">${esc(v.exvi)}</span></div>` : ''}
      ${!s ? `<button class="btn sm ghost" data-act="addword" data-id="${esc(id)}">+ Thêm vào ôn tập</button>` : ''}</div>`;
  }
  function distractors(v, n) {
    const pool = Object.values(T.vocab).filter(x => x !== v && x.w !== v.w);
    const same = shuffle(pool.filter(x => x.pos === v.pos)), rest = shuffle(pool.filter(x => x.pos !== v.pos));
    return same.concat(rest).slice(0, n);
  }
  function reviewGroup(l) {
    const pool = Object.values(T.vocab).filter(v => v.lesson && v.lesson !== l.id && D.done[v.lesson]);
    if (pool.length < 4) return null;
    const due = new Set(T.srs.due());
    const pick = shuffle(pool).sort((a, b) => (due.has(b.id) ? 1 : 0) - (due.has(a.id) ? 1 : 0)).slice(0, 5);
    const qs = pick.map(v => {
      const opts = shuffle([v].concat(distractors(v, 3)));
      return { q: `“${esc(v.vi)}” là từ nào?`, c: opts.map(o => esc(o.w)), a: opts.indexOf(v), vid: v.id, t: 'tu-vung',
        e: `<b>${esc(v.w)}</b> ${esc(v.ipa)} (${esc(POS[v.pos] || v.pos)}) – ${esc(v.vi)}. Ví dụ: <i>${esc(v.ex)}</i>` };
    });
    return T.reg({ p: 0, dyn: true, qs }, 'rv-' + l.id + '-' + Date.now());
  }
  function finishLesson(id) {
    const l = T.lessons[id], left = $$('#ex .q').filter(q => !q.dataset.done).length;
    if (left) { T.toast(`Còn ${left} câu bài tập chưa làm.`); $('#sec4').scrollIntoView({ behavior: 'smooth' }); return; }
    const first = !D.done[id];
    D.done[id] = T.today(); l.vocabIds.forEach(w => T.srs.add(w)); T.touch();
    T.toast(first ? '🎉 Hoàn thành bài học! Từ mới đã vào lịch ôn tập.' : 'Đã cập nhật.');
    go('#/home');
  }

  /* ================= Hiển thị câu hỏi (dùng chung) ================= */
  function audioItems(g) {
    if (g.script) return g.script.map(x => ({ r: x[0], t: x[1] }));
    const q = g.qs[0];
    if (g.p === 1) return q.c.map((c, i) => ({ r: 'N', t: L[i] + '. ' + strip(c) }));
    if (g.p === 2) return [{ r: 'W', t: q.say }].concat(q.c.map((c, i) => ({ r: 'M', t: L[i] + '. ' + strip(c) })));
    if (q && q.say) return [{ r: 'W', t: q.say }];
    return null;
  }
  // mode: 'practice' (chấm ngay) | 'exam' (không chấm, nghe 1 lần) | 'review' (xem lại sau thi)
  function groupHTML(g, o) {
    o = o || {}; const mode = o.mode || 'practice', ans = o.ans || {};
    const audio = audioItems(g), hide = (g.p === 1 || g.p === 2) && mode !== 'review';
    let h = `<div class="group ${hide ? 'hidetext' : ''}" data-g="${esc(g.id)}">`;
    if (g.p) h += `<div class="ptag">Part ${g.p} · ${esc(T.FORMAT.parts[g.p].name)}</div>`;
    if (g.scene) h += `<figure class="scene">${(g.svg && T.scenes[g.svg]) || ''}<figcaption>🖼️ <b>Tranh:</b> ${g.scene}</figcaption></figure>`;
    if (audio) {
      const used = mode === 'exam' && o.played && o.played[g.id];
      h += `<div class="audio"><button class="btn play" data-play="${esc(g.id)}" ${used ? 'disabled' : ''}>${used ? '🔇 Đã phát' : '▶ Nghe'}</button>`;
      if (mode !== 'exam') h += `<button class="btn ghost" data-play="${esc(g.id)}" data-slow="1">🐢 Nghe chậm</button>`;
      if (hide && mode === 'practice') h += '<button class="btn ghost sm" data-act="showtext">Hiện chữ</button>';
      if (mode === 'exam') h += '<span class="small muted">Chỉ được nghe 1 lần như thi thật</span>';
      h += '</div>';
    }
    if (g.graphic) h += `<div class="graphic">${g.graphic}</div>`;
    if (g.passages) h += `<div class="passages ${g.passages.length > 1 ? 'multi' : ''}">${g.passages.map((p, i) => `<article class="passage">${g.passages.length > 1 ? `<span class="pill">Văn bản ${i + 1}</span>` : ''}${p}</article>`).join('')}</div>`;
    g.qs.forEach((q, i) => {
      const chosen = ans[q.uid];
      const n = o.num != null ? (o.num + i) + '. ' : '';
      const qt = q.q || (g.p === 1 ? 'Chọn câu mô tả đúng nhất bức tranh.' : g.p === 2 ? 'Chọn câu đáp lại phù hợp nhất.' : '');
      h += `<div class="q ${mode === 'review' ? 'revealed' : ''}" data-uid="${esc(q.uid)}"><div class="qt"><span>${n}${qt}</span>${g.dyn ? '' : `<button class="flag ${D.flags[q.uid] ? 'on' : ''}" data-act="flag" data-uid="${esc(q.uid)}" title="Đánh dấu câu khó">★</button>`}</div><div class="chs">`;
      q.c.forEach((c, j) => {
        let cls = 'ch';
        if (mode === 'exam' && chosen === j) cls += ' sel';
        if (mode === 'review') { if (j === q.a) cls += ' ok'; else if (chosen === j) cls += ' bad'; }
        h += `<button class="${cls}" data-uid="${esc(q.uid)}" data-i="${j}" ${mode === 'review' ? 'disabled' : ''}><b>${L[j]}</b><span class="ct"> ${c}</span></button>`;
      });
      h += `</div>${mode === 'review' ? expHTML(q, chosen) : '<div class="expwrap"></div>'}</div>`;
    });
    if (g.script && mode !== 'exam') h += transcriptHTML(g, mode === 'review');
    return h + '</div>';
  }
  function transcriptHTML(g, show) {
    return `<details class="transcript" ${show ? 'open' : 'hidden'}><summary>📝 Transcript &amp; bản dịch</summary>${g.script.map(x => `<p><b>${SPK[x[0]] || x[0]}:</b> ${x[1]}</p>`).join('')}${g.vi ? `<div class="vi-tr"><b>Bản dịch:</b> ${g.vi}</div>` : ''}</details>`;
  }
  function expHTML(q, chosen) {
    const ok = chosen === q.a, tag = T.TAGS[q.t];
    return `<div class="exp ${ok ? 'ok' : ''}"><b>${chosen == null ? '⏺ Chưa trả lời' : ok ? '✅ Chính xác!' : '❌ Chưa đúng'}</b> · Đáp án đúng: <b>${L[q.a]}</b> – ${q.c[q.a]}<div>${q.e || ''}</div>${tag ? `<div class="small muted">Dạng câu: ${tag.n}</div>` : ''}</div>`;
  }
  function onChoice(b) {
    const uid = b.dataset.uid, i = +b.dataset.i, x = T.qIndex[uid]; if (!x) return;
    const qEl = b.closest('.q'), q = x.g.qs[x.i];
    if (ctx.mode === 'exam') {
      EX.ans[uid] = i;
      $$('.ch', qEl).forEach(c => c.classList.toggle('sel', c === b));
      updatePalette(); return;
    }
    if (qEl.dataset.done) return;
    qEl.dataset.done = '1'; qEl.classList.add('revealed');
    $$('.ch', qEl).forEach((c, j) => { c.disabled = true; if (j === q.a) c.classList.add('ok'); else if (j === i) c.classList.add('bad'); });
    $('.expwrap', qEl).innerHTML = expHTML(q, i);
    T.record(uid, i === q.a);
    const gEl = b.closest('.group');
    if (!$$('.q', gEl).some(e => !e.dataset.done)) { const tr = $('.transcript', gEl); if (tr) tr.hidden = false; }
  }
  function playGroup(b) {
    const g = T.groups[b.dataset.play], items = g && audioItems(g); if (!items) return;
    if (ctx.mode === 'exam') {
      if (EX.played[g.id]) return;
      EX.played[g.id] = 1; b.disabled = true; b.textContent = '🔊 Đang phát…';
      T.speech.speak(items, { onend: () => { b.textContent = '🔇 Đã phát'; } });
    } else T.speech.speak(items, { rate: b.dataset.slow ? 0.7 : 1 });
  }

  /* ================= Luyện theo Part & sổ lỗi ================= */
  const partPool = p => T.practice[p].concat(Object.values(T.lessons).flatMap(l => l.ex).filter(g => g.p === p));
  function practice(p, all) {
    if (!p) {
      let h = `<h2>🎯 Luyện tập</h2><a class="card" href="#/grammar"><b>📐 Ngữ pháp theo chủ đề</b><div class="small muted">17 chủ đề cho mục tiêu 990 · xem tỉ lệ đúng từng chủ đề và luyện riêng phần yếu</div></a><h3>Luyện theo Part</h3><div class="parts">`;
      for (let k = 1; k <= 7; k++) {
        const f = T.FORMAT.parts[k], s = D.partStats[k];
        h += `<a class="card" href="#/practice/${k}"><b>Part ${k}</b> · ${f.name}<div class="small muted">${f.sec === 'L' ? '🎧 Nghe' : '📖 Đọc'} · ${partPool(k).length} nhóm câu · ${s ? 'Đúng ' + pct(s.c, s.n) + '%' : 'Chưa làm'}</div></a>`;
      }
      h += `</div><div class="grid2" style="margin-top:12px"><a class="card" href="#/review/wrong"><b>📕 Sổ lỗi sai</b><div class="small muted">${Object.keys(D.wrong).filter(u => T.qIndex[u]).length} câu cần ôn</div></a><a class="card" href="#/review/flags"><b>★ Câu đã đánh dấu</b><div class="small muted">${Object.keys(D.flags).filter(u => T.qIndex[u]).length} câu</div></a></div>`;
      app.innerHTML = h; return;
    }
    p = +p; const f = T.FORMAT.parts[p]; if (!f) return notFound();
    const pool = partPool(p), gs = pool.filter(g => (g.lvl || 1) <= (all ? 99 : D.stage)), hidden = pool.length - gs.length;
    app.innerHTML = `<a class="back" href="#/practice">← Luyện tập</a><h2>Part ${p}: ${f.name}</h2><div class="note">💡 ${f.tip}</div>
      ${gs.map(g => `<div class="card"><span class="pill">Mức ${g.lvl || 1}</span>${groupHTML(g, { mode: 'practice' })}</div>`).join('') || '<p class="muted">Chưa có câu luyện tập ở mức của bạn.</p>'}
      ${hidden ? `<a class="btn ghost" href="#/practice/${p}/all">Hiện thêm ${hidden} nhóm câu khó hơn</a>` : ''}`;
  }
  /* ================= Ngữ pháp theo chủ đề ================= */
  function topicGroups(tp) {
    const set = new Set(), tags = new Set(tp.tags);
    Object.values(T.qIndex).forEach(x => { if (tags.has(x.g.qs[x.i].t)) set.add(x.g); });
    return [...set];
  }
  function topicStat(tp) {
    return tp.tags.reduce((m, t) => { const s = D.tagStats[t]; if (s) { m.c += s.c; m.n += s.n; } return m; }, { c: 0, n: 0 });
  }
  function grammar(id) {
    const G = T.GRAMMAR || [];
    if (!id) {
      let h = `<a class="back" href="#/practice">← Luyện tập</a><h2>📐 Ngữ pháp theo chủ đề</h2>
        <p class="muted">Đủ 17 chủ đề ngữ pháp cho mục tiêu 990 (trọng tâm Part 5, 6). Mỗi chủ đề gồm bài lý thuyết và câu luyện tập gắn nhãn chủ đề; tỉ lệ đúng được tính từ mọi câu bạn đã làm.</p><div class="parts">`;
      G.forEach(tp => {
        const ls = tp.lessons.filter(l => T.lessons[l]), n = topicGroups(tp).reduce((s, g) => s + g.qs.length, 0), st = topicStat(tp);
        h += `<a class="card" href="#/grammar/${tp.id}"><b>${esc(tp.n)}</b><div class="small muted">${ls.length ? ls.length + ' bài · ' + n + ' câu luyện' : 'Đang soạn'}${st.n ? ' · đúng ' + pct(st.c, st.n) + '%' : ''}</div>${st.n ? `<div class="bar" style="margin-top:8px"><i style="width:${pct(st.c, st.n)}%"></i></div>` : ''}</a>`;
      });
      app.innerHTML = h + '</div>'; return;
    }
    const tp = G.find(x => x.id === id); if (!tp) return notFound();
    const ls = tp.lessons.map(l => T.lessons[l]).filter(Boolean), gs = topicGroups(tp), st = topicStat(tp);
    let h = `<a class="back" href="#/grammar">← Ngữ pháp</a><h2>${esc(tp.n)}</h2>
      ${st.n ? `<div class="pbar"><span>Đúng</span><div class="bar"><i style="width:${pct(st.c, st.n)}%"></i></div><span>${pct(st.c, st.n)}% (${st.n} câu)</span></div>` : ''}
      <section class="card"><h3>Nội dung cần nắm</h3><ul>${tp.sub.map(s => `<li>${esc(s)}</li>`).join('')}</ul></section>
      <section class="card"><h3>Bài học</h3>${ls.length ? `<ul class="lessons">${ls.map(l => `<li><span>${D.done[l.id] ? '✅' : isUnlocked(l) ? '▶️' : '🔒'}</span><a href="#/lesson/${l.id}">${esc(l.title)}</a><span class="small muted">GĐ ${l.stage}</span></li>`).join('')}</ul>` : '<p class="muted">Bài cho chủ đề này đang được soạn.</p>'}</section>`;
    h += `<h3>Luyện tập (${gs.reduce((s, g) => s + g.qs.length, 0)} câu)</h3>${gs.length ? gs.map(g => `<div class="card">${groupHTML(g, { mode: 'practice' })}</div>`).join('') : '<p class="muted">Chưa có câu luyện tập cho chủ đề này.</p>'}`;
    app.innerHTML = h;
  }
  function review(kind) {
    const isW = kind !== 'flags', src = isW ? D.wrong : D.flags;
    const uids = Object.keys(src).filter(u => T.qIndex[u]);
    let h = `<a class="back" href="#/practice">← Luyện tập</a><h2>${isW ? '📕 Sổ lỗi sai' : '★ Câu đã đánh dấu'}</h2>`;
    if (!uids.length) { app.innerHTML = h + `<p class="muted">${isW ? 'Chưa có câu sai nào. Câu trả lời sai trong bài học, luyện tập và bài thi sẽ tự động được lưu vào đây.' : 'Bấm ★ cạnh câu hỏi để đánh dấu câu khó.'}</p>`; return; }
    const byTag = {};
    uids.forEach(u => { const x = T.qIndex[u], tag = isW ? src[u].tag : (x.g.qs[x.i].t || T.defTag(x.g)); (byTag[tag] = byTag[tag] || new Set()).add(x.g); });
    if (isW) h += '<p class="small muted">Trả lời đúng một câu (ở đây hoặc bất kỳ đâu) sẽ xóa nó khỏi sổ lỗi.</p>';
    Object.entries(byTag).sort((a, b) => b[1].size - a[1].size).forEach(([tag, set]) => {
      const tg = T.TAGS[tag] || { n: tag }, ls = tg.l && T.lessons[tg.l];
      h += `<h3>${tg.n} <span class="pill">${set.size}</span></h3>${ls ? `<p class="small">Bài nên ôn: <a href="#/lesson/${ls.id}">${esc(ls.title)}</a></p>` : ''}` + [...set].map(g => `<div class="card">${groupHTML(g, { mode: 'practice' })}</div>`).join('');
    });
    app.innerHTML = h;
  }

  /* ================= Từ vựng & Flashcard ================= */
  function vocab() {
    const all = Object.values(T.vocab);
    app.innerHTML = `<h2>📚 Từ vựng</h2>
      <div class="grid3"><div class="card stat"><div class="big">${Object.keys(D.srs).length}</div><div class="small">đang học</div></div><div class="card stat"><div class="big">${T.srs.learned()}</div><div class="small">đã thuộc</div></div><div class="card stat"><div class="big">${T.srs.due().length}</div><div class="small">cần ôn hôm nay</div></div></div>
      <a class="btn primary" href="#/flash">🃏 Ôn flashcard</a>
      <input id="q" class="search" type="search" placeholder="🔍 Tìm từ tiếng Anh hoặc nghĩa tiếng Việt (gõ không dấu cũng được)…" autocomplete="off">
      <select id="vf"><option value="">Tất cả (${all.length} từ)</option><option value="learning">Đang học</option><option value="new">Chưa học</option>${stageIds().map(i => `<option value="${i}">Giai đoạn ${i}</option>`).join('')}</select>
      <select id="vt"><option value="">Mọi chủ đề</option>${Object.entries(T.VOCAB_TOPICS || {}).map(([k, n]) => { const c = all.filter(v => v.topic === k).length; return c ? `<option value="${k}">${esc(n)} (${c})</option>` : ''; }).join('')}</select>
      <div id="vacts"></div>
      <div id="wl" class="words"></div>`;
    const draw = () => {
      const q = norm($('#q').value), f = $('#vf').value, tp = $('#vt').value;
      const list = all.filter(v => (!q || norm(v.w + ' ' + v.vi + ' ' + v.syn).includes(q)) && (!tp || v.topic === tp) && (!f || (f === 'learning' ? D.srs[v.id] : f === 'new' ? !D.srs[v.id] : String(v.stage) === f)));
      const fresh = list.filter(v => !D.srs[v.id]);
      $('#vacts').innerHTML = tp && fresh.length ? `<button class="btn sm" data-act="addtopic" data-ids="${esc(fresh.map(v => v.id).join('|'))}">+ Thêm ${fresh.length} từ chủ đề này vào ôn tập</button>` : '';
      $('#wl').innerHTML = (list.slice(0, 80).map(v => wordCard(v.id)).join('') + (list.length > 80 ? `<p class="muted">… còn ${list.length - 80} từ, hãy gõ để lọc.</p>` : '')) || '<p class="muted">Không tìm thấy.</p>';
    };
    $('#q').addEventListener('input', draw); $('#vf').addEventListener('change', draw); $('#vt').addEventListener('change', draw); draw();
  }
  function flash(mode, extra) {
    if (!mode) {
      const due = T.srs.due().length, has = Object.keys(D.srs).filter(k => T.vocab[k]).length;
      app.innerHTML = `<h2>🃏 Flashcard</h2><p>Hôm nay cần ôn <b>${due}</b> từ.${!has ? ' Hãy hoàn thành bài học đầu tiên để có từ ôn tập.' : ''}</p>
        ${has ? `<div class="grid3">${[['w2m', '👀 Nhìn từ → đoán nghĩa', 'Tự chấm mức nhớ'], ['m2w', '🇻🇳 Nhìn nghĩa → chọn từ', '4 lựa chọn'], ['listen', '🎧 Nghe → chọn từ', 'Luyện tai']].map(([m, a, b]) => `<a class="card" href="#/flash/${m}${due ? '' : '/extra'}"><b>${a}</b><div class="small muted">${b}</div></a>`).join('')}</div>` : ''}
        ${!due && has ? '<p class="small muted">Không có từ đến hạn – chọn một chế độ để ôn thêm ngẫu nhiên các từ đã học.</p>' : ''}`;
      return;
    }
    let q = T.srs.due();
    if (!q.length || extra) q = Object.keys(D.srs).filter(k => T.vocab[k]);
    if (!q.length) return go('#/flash');
    FS = { mode, queue: shuffle(q).slice(0, 20), i: 0, retry: new Set(), right: 0 };
    drawCard();
  }
  function drawCard() {
    const f = FS; f.answered = false;
    if (f.i >= f.queue.length) {
      T.touch();
      app.innerHTML = `<div class="card center flash"><h2>🎉 Xong phiên ôn!</h2><p>${f.queue.length} lượt · nhớ đúng ${f.right}.</p><a class="btn primary" href="#/home">Về trang chủ</a> <a class="btn" href="#/vocab">Từ vựng</a></div>`;
      return;
    }
    const v = T.vocab[f.queue[f.i]], head = `<div class="small muted">${f.i + 1}/${f.queue.length}</div>`;
    if (f.mode === 'w2m') {
      app.innerHTML = `<div class="flash card">${head}<div class="fw">${esc(v.w)}</div><div class="muted">${esc(v.ipa)} · ${esc(POS[v.pos] || v.pos)} <button class="icon" data-speak="${esc(v.w)}">🔊</button></div>
        <div id="back" hidden><div class="fvi">${esc(v.vi)}</div><p><i>${esc(v.ex)}</i><br><span class="muted">${esc(v.exvi)}</span></p><p class="small muted">Bạn nhớ từ này thế nào?</p>
        <div class="grade">${[[1, 'Quên', 'bad'], [3, 'Khó', ''], [4, 'Nhớ', ''], [5, 'Dễ', 'ok']].map(([g, t, c]) => `<button class="btn ${c}" data-act="grade" data-g="${g}">${t}</button>`).join('')}</div></div>
        <button class="btn primary" id="flipb" data-act="flip">Lật thẻ</button></div>`;
    } else {
      const opts = shuffle([v].concat(distractors(v, 3)));
      app.innerHTML = `<div class="flash card">${head}${f.mode === 'm2w' ? `<div class="fvi">${esc(v.vi)}</div><div class="small muted">${esc(POS[v.pos] || v.pos)}</div>` : `<button class="btn" data-speak="${esc(v.w)}">🔊 Nghe lại</button>`}
        <div class="chs">${opts.map(o => `<button class="ch fc" data-act="fpick" data-ok="${o === v ? 1 : 0}">${esc(o.w)}</button>`).join('')}</div><div id="fres"></div></div>`;
      if (f.mode === 'listen') T.speech.speak([{ r: 'N', t: v.w }]);
    }
  }

  /* ================= Thi & kiểm tra ================= */
  function testInfo(t) {
    const n = gs => gs.reduce((s, g) => s + g.qs.length, 0);
    return { n: n(t.groups), nL: n(t.groups.filter(g => audioItems(g))), nR: n(t.groups.filter(g => !audioItems(g))) };
  }
  const gateOf = t => Object.values(T.stages).find(s => s.gateTest === t.id && s.id === D.stage);
  function formatTable() {
    return `<table class="tbl"><tr><th>Part</th><th>Nội dung</th><th>Số câu</th></tr>${[1, 2, 3, 4, 5, 6, 7].map(p => `<tr><td>${p}</td><td>${T.FORMAT.parts[p].name}</td><td>${T.FORMAT.parts[p].n}</td></tr>`).join('')}</table><p class="small muted">Listening khoảng 45 phút (100 câu) · Reading 75 phút (100 câu) · Tổng 10–990 điểm.</p>`;
  }
  function tests() {
    const all = Object.values(T.tests);
    const best = id => {
      const hs = D.history.filter(r => r.id === id); if (!hs.length) return '';
      const sc = hs[0].total != null;
      return ` · Cao nhất: <b>${Math.max(...hs.map(r => (sc ? r.total : Math.round(r.pct * 100))))}${sc ? '' : '%'}</b>`;
    };
    const row = t => { const n = testInfo(t).n; return `<div class="row-item"><div><b>${esc(t.title)}</b><div class="small muted">${n ? n + ' câu' : 'Đang soạn'}${t.timing ? ' · ' + Math.round((t.timing.L + t.timing.R) / 60) + ' phút' : ''}${best(t.id)}</div></div><a class="btn sm ${n ? 'primary' : ''}" href="#/exam/${t.id}">${n ? 'Làm bài' : 'Xem'}</a></div>`; };
    const sec = (title, kinds) => { const l = all.filter(t => kinds.includes(t.kind)); return l.length ? `<div class="card"><h3>${title}</h3>${l.map(row).join('')}</div>` : ''; };
    const hist = D.history.map((r, i) => [r, i]).reverse().slice(0, 15), sc = D.history.filter(r => r.total != null);
    app.innerHTML = `<h2>📝 Thi thử &amp; kiểm tra</h2>${sec('Thi thử', ['mini', 'full'])}${sec('Kiểm tra cuối chặng', ['checkpoint'])}${sec('Kiểm tra xếp lớp', ['placement'])}
      <div class="card"><h3>Lịch sử thi</h3>${sc.length ? lineChart(sc) : ''}${hist.length ? hist.map(([r, i]) => `<div class="row-item"><div>${esc(r.title)}<div class="small muted">${new Date(r.date).toLocaleString('vi-VN')}</div></div><a href="#/result/${i}"><b>${r.total != null ? r.total : Math.round(r.pct * 100) + '%'}</b> →</a></div>`).join('') : '<p class="muted">Chưa có lần thi nào.</p>'}</div>`;
  }
  function examIntro(id) {
    const t = T.tests[id]; if (!t) return notFound();
    const inf = testInfo(t), tm = t.timing, gate = gateOf(t);
    let h = `<a class="back" href="#/${D.onboarded ? 'tests' : ''}">← Quay lại</a><h2>${esc(t.title)}</h2><p class="muted">${KIND[t.kind] || ''}</p>`;
    if (!inf.n) { app.innerHTML = h + `<div class="card"><p>⚙️ Đề này mới có khung và bộ máy chấm, chưa có câu hỏi. Cấu trúc đề thật:</p>${formatTable()}</div>`; return; }
    const resume = EX && EX.test === t;
    h += `<div class="card"><ul>
      <li>Số câu: <b>${inf.n}</b> (Nghe ${inf.nL} · Đọc ${inf.nR})</li>
      ${tm ? `<li>Thời gian: Listening ${Math.round(tm.L / 60)} phút · Reading ${Math.round(tm.R / 60)} phút. Hết giờ Listening sẽ tự chuyển sang Reading, hết giờ Reading sẽ tự nộp bài.</li>` : '<li>Không giới hạn thời gian.</li>'}
      <li>Mỗi đoạn nghe chỉ phát <b>1 lần</b>, không có transcript trong lúc làm. Đã sang Reading thì không quay lại Listening.</li>
      <li>Bấm ★ để đánh dấu câu khó. Giải thích chi tiết hiện sau khi nộp bài.</li>
      ${t.kind === 'checkpoint' ? '<li>Đạt từ <b>80%</b> để được gợi ý học tiếp.</li>' : ''}
      ${t.kind === 'placement' ? '<li>Kết quả sẽ xếp (hoặc xếp lại) giai đoạn học của bạn.</li>' : ''}
      ${gate ? `<li>Đây là bài thi chuyển giai đoạn: cần đạt <b>${gate.target}</b> điểm ước lượng.</li>` : ''}
      </ul>${t.desc ? `<p>${t.desc}</p>` : ''}
      <button class="btn ghost" data-speak="This is a sound check. Can you hear me clearly?">🔊 Thử loa</button>
      <a class="btn primary" href="#/run/${id}">${resume ? '▶ Tiếp tục bài đang làm' : 'Bắt đầu làm bài'}</a></div>`;
    app.innerHTML = h;
  }
  function examRun(id) {
    const t = T.tests[id]; if (!t || !testInfo(t).n) return examIntro(id);
    if (!EX || EX.test !== t) {
      const pages = t.groups.filter(g => audioItems(g)).concat(t.groups.filter(g => !audioItems(g)));
      let k = 1; const num = pages.map(g => { const s = k; k += g.qs.length; return s; });
      EX = { test: t, pages, num, total: k - 1, secOf: pages.map(g => (audioItems(g) ? 'L' : 'R')), ans: {}, played: {}, idx: 0,
        left: t.timing ? { L: t.timing.L || 0, R: t.timing.R || 0 } : null };
      EX.sec = EX.secOf[0];
    }
    ctx = { mode: 'exam' };
    renderExam(); startTimer();
  }
  function locked(pi) { return EX.secOf[pi] !== EX.sec; }
  function renderExam() {
    const ex = EX, g = ex.pages[ex.idx], last = ex.idx === ex.pages.length - 1;
    const pal = ex.pages.map((pg, pi) => pg.qs.map((q, i) => `<button class="pq ${ex.ans[q.uid] != null ? 'done' : ''} ${pi === ex.idx ? 'cur' : ''} ${D.flags[q.uid] ? 'fl' : ''}" data-act="jump" data-p="${pi}" data-uid="${esc(q.uid)}" ${locked(pi) ? 'disabled' : ''}>${ex.num[pi] + i}</button>`).join('')).join('');
    app.innerHTML = `<div class="exambar"><div><b>${esc(ex.test.title)}</b><div class="small muted">${ex.sec === 'L' ? '🎧 Listening' : '📖 Reading'}</div></div>${ex.left ? `<div class="timer" id="timer">${fmtT(ex.left[ex.sec])}</div>` : ''}<button class="btn sm danger" data-act="submit">Nộp bài</button></div>
      <details class="palette-wrap"><summary>Danh sách câu (${Object.keys(ex.ans).length}/${ex.total})</summary><div class="palette" id="palette">${pal}</div></details>
      <div class="card">${groupHTML(g, { mode: 'exam', ans: ex.ans, num: ex.num[ex.idx], played: ex.played })}</div>
      <div class="navrow"><button class="btn" data-act="prev" ${ex.idx === 0 || locked(ex.idx - 1) ? 'disabled' : ''}>← Trước</button><button class="btn primary" data-act="next">${last ? 'Nộp bài' : 'Tiếp →'}</button></div>`;
    window.scrollTo(0, 0);
  }
  function updatePalette() {
    $$('#palette .pq').forEach(b => b.classList.toggle('done', EX.ans[b.dataset.uid] != null));
    const s = $('.palette-wrap summary'); if (s) s.textContent = `Danh sách câu (${Object.keys(EX.ans).length}/${EX.total})`;
  }
  function startTimer() {
    stopTimer(); if (!EX || !EX.left) return;
    timer = setInterval(() => {
      if (!EX) return stopTimer();
      const s = EX.sec; EX.left[s] = Math.max(0, EX.left[s] - 1);
      const el = $('#timer'); if (el) { el.textContent = fmtT(EX.left[s]); el.classList.toggle('warn', EX.left[s] < 60); }
      if (EX.left[s] === 0) {
        if (s === 'L' && EX.secOf.includes('R')) { T.speech.stop(); T.toast('⏰ Hết giờ Listening – chuyển sang Reading'); EX.sec = 'R'; EX.idx = EX.secOf.indexOf('R'); renderExam(); }
        else { T.toast('⏰ Hết giờ! Bài đã được nộp tự động.'); submitExam(); }
      }
    }, 1000);
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }
  function submitExam() {
    stopTimer(); T.speech.stop();
    const ex = EX; EX = null; ctx = { mode: 'practice' };
    const t = ex.test;
    const r = { id: t.id, kind: t.kind, title: t.title, date: new Date().toISOString(), parts: {}, L: { c: 0, n: 0 }, R: { c: 0, n: 0 }, tags: {}, ans: ex.ans };
    ex.pages.forEach((g, pi) => g.qs.forEach(q => {
      const ok = ex.ans[q.uid] === q.a, sec = ex.secOf[pi], pk = g.p || 0;
      r[sec].n++; if (ok) r[sec].c++;
      const pp = r.parts[pk] = r.parts[pk] || { c: 0, n: 0 }; pp.n++; if (ok) pp.c++;
      if (!ok) { const tg = q.t || T.defTag(g); r.tags[tg] = (r.tags[tg] || 0) + 1;
      }
      T.record(q.uid, ok, true);
    }));
    const c = r.L.c + r.R.c, n = r.L.n + r.R.n;
    r.pct = n ? c / n : 0;
    if (t.kind !== 'checkpoint') {
      // Nếu đề thiếu một kỹ năng thì ước lượng kỹ năng đó theo kỹ năng còn lại
      r.Ls = r.L.n ? T.scale(r.L.c, r.L.n, 'L') : T.scale(r.R.c, r.R.n, 'L');
      r.Rs = r.R.n ? T.scale(r.R.c, r.R.n, 'R') : T.scale(r.L.c, r.L.n, 'R');
      r.total = r.Ls + r.Rs;
    }
    if (t.kind === 'checkpoint') {
      D.cp[t.id] = Math.max(D.cp[t.id] || 0, r.pct);
      r.msg = r.pct >= 0.8 ? `🏅 Đạt ${pct(c, n)}% (từ 80% trở lên). Bạn có thể học tiếp chặng sau.` : `Bạn đạt ${pct(c, n)}%, chưa tới 80%. Hãy ôn lại các bài ở chặng này rồi làm lại.`;
    } else if (t.kind === 'placement') {
      D.stage = T.stageFromScore(r.total); D.onboarded = true;
      const s = T.stages[D.stage];
      r.msg = `📍 Bạn được xếp vào <b>Giai đoạn ${D.stage}${s ? ': ' + esc(s.name) : ''}</b>.`;
    } else {
      const s = T.stages[D.stage];
      if (s && s.gateTest === t.id) {
        if (r.total >= s.target) {
          if (T.stages[D.stage + 1]) { D.stage++; r.msg = `🎉 Đạt ${r.total} ≥ ${s.target} điểm. Bạn đã lên <b>Giai đoạn ${D.stage}</b>!`; }
          else r.msg = `🎉 Đạt ${r.total} ≥ ${s.target} điểm. Bạn đã hoàn thành giai đoạn cuối cùng!`;
        } else r.msg = `Cần ${s.target} điểm để lên giai đoạn sau, bạn đạt ${r.total}. Hãy ôn các phần yếu bên dưới rồi thi lại.`;
      }
    }
    D.history.push(r);
    while (D.history.length > 60) D.history.shift();
    T.touch();
    go('#/result/' + (D.history.length - 1));
  }

  /* ================= Kết quả ================= */
  function result(i) {
    const r = D.history[+i]; if (!r) return notFound();
    const t = T.tests[r.id], n = r.L.n + r.R.n, c = r.L.c + r.R.c;
    const parts = Object.entries(r.parts).filter(([, v]) => v.n);
    const weak = parts.filter(([k]) => +k).sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n)[0];
    let h = `<a class="back" href="#/tests">← Thi thử</a><h2>${esc(r.title)}</h2><p class="small muted">${new Date(r.date).toLocaleString('vi-VN')}</p>`;
    h += `<section class="card score">${r.total != null
      ? `<div class="big">${r.total}<small> / 990</small></div><p>Listening <b>${r.Ls}</b> · Reading <b>${r.Rs}</b> · Đúng ${c}/${n} câu</p><p class="small muted">⚠️ Đây chỉ là điểm <b>ước lượng</b> theo tỉ lệ đúng, không phải bảng quy đổi chính thức của ETS.</p>`
      : `<div class="big">${pct(c, n)}%</div><p>Đúng ${c}/${n} câu</p>`}
      ${r.msg ? `<p class="note">${r.msg}</p>` : ''}</section>`;
    h += `<section class="card"><h3>Theo từng Part</h3><table class="tbl"><tr><th>Part</th><th>Đúng</th><th>Tỉ lệ</th></tr>${parts.map(([k, v]) => `<tr class="${weak && weak[0] === k && v.c < v.n ? 'weak' : ''}"><td>${+k ? 'Part ' + k + ' · ' + T.FORMAT.parts[k].name : 'Nền tảng'}</td><td>${v.c}/${v.n}</td><td>${pct(v.c, v.n)}%</td></tr>`).join('')}</table>`;
    const tags = Object.entries(r.tags).sort((a, b) => b[1] - a[1]).slice(0, 4);
    if (tags.length) h += `<h4>Lỗi gặp nhiều nhất</h4><ul>${tags.map(([k, v]) => { const tg = T.TAGS[k] || { n: k }, l = tg.l && T.lessons[tg.l]; return `<li>${tg.n}: <b>${v}</b> câu${l ? ` – ôn <a href="#/lesson/${l.id}">${esc(l.title)}</a>` : ''}</li>`; }).join('')}</ul>`;
    h += '</section>';
    if (t) {
      const wrong = t.groups.filter(g => g.qs.some(q => r.ans[q.uid] !== q.a));
      h += `<section class="card"><h3>Xem lại câu sai (${wrong.reduce((s, g) => s + g.qs.filter(q => r.ans[q.uid] !== q.a).length, 0)})</h3>${wrong.map(g => `<div class="card">${groupHTML(g, { mode: 'review', ans: r.ans })}</div>`).join('') || '<p>🎉 Bạn không sai câu nào!</p>'}</section>`;
      h += `<div class="finish"><a class="btn primary" href="#/exam/${t.id}">↻ Làm lại</a> <a class="btn" href="#/home">🏠 Trang chủ</a></div>`;
    } else h += '<p class="muted">Đề này không còn trong dữ liệu nên không xem lại được từng câu.</p>';
    app.innerHTML = h;
  }

  /* ================= Biểu đồ điểm ================= */
  function lineChart(all) {
    const hist = all.slice(-20), W = 600, H = 220, pl = 40, pr = 14, pt = 14, pb = 28, n = hist.length;
    const y = v => (pt + (H - pt - pb) * (1 - v / 990)).toFixed(1);
    const x = i => (n === 1 ? (pl + W - pr) / 2 : pl + ((W - pl - pr) * i) / (n - 1)).toFixed(1);
    let s = `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Biểu đồ điểm ước lượng qua các lần thi">`;
    [0, 300, 500, 700, 850, 990].forEach(v => { s += `<line class="gl" x1="${pl}" x2="${W - pr}" y1="${y(v)}" y2="${y(v)}"/><text class="tl" x="${pl - 6}" y="${+y(v) + 4}" text-anchor="end">${v}</text>`; });
    if (n > 1) s += `<polyline class="ln" points="${hist.map((r, i) => x(i) + ',' + y(r.total)).join(' ')}"/>`;
    hist.forEach((r, i) => {
      const d = new Date(r.date);
      s += `<circle class="dt" cx="${x(i)}" cy="${y(r.total)}" r="4"/><text class="tv" x="${x(i)}" y="${+y(r.total) - 9}">${r.total}</text>`;
      if (n <= 10 || i % Math.ceil(n / 10) === 0) s += `<text class="tl" x="${x(i)}" y="${H - 8}" text-anchor="middle">${d.getDate()}/${d.getMonth() + 1}</text>`;
    });
    return s + '</svg>';
  }

  /* ================= Thống kê ================= */
  function stats() {
    const done = Object.keys(D.done).filter(id => T.lessons[id]).length;
    const learning = Object.keys(D.srs).filter(k => T.vocab[k]).length, learned = T.srs.learned();
    const ps = [1, 2, 3, 4, 5, 6, 7].map(p => [p, D.partStats[p]]);
    const weakP = ps.filter(([, s]) => s && s.n >= 3).sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n)[0];
    const weakT = Object.entries(D.tagStats).filter(([, s]) => s.n >= 3).sort((a, b) => a[1].c / a[1].n - b[1].c / b[1].n).slice(0, 3);
    const sc = D.history.filter(r => r.total != null);
    let h = `<h2>📊 Thống kê</h2><div class="grid3">
      <div class="card stat"><div class="big">${learned}</div><div class="small">từ đã thuộc<br>${learning} đang học · ${Object.keys(T.vocab).length} tổng</div></div>
      <div class="card stat"><div class="big">${done}</div><div class="small">bài học đã xong<br>trên ${Object.keys(T.lessons).length} bài</div></div>
      <div class="card stat"><div class="big">🔥${T.streak()}</div><div class="small">ngày học liên tục</div></div></div>`;
    h += `<section class="card"><h3>Tỉ lệ đúng theo Part</h3>${ps.map(([p, s]) => `<div class="pbar"><span>Part ${p}</span><div class="bar"><i style="width:${s ? pct(s.c, s.n) : 0}%"></i></div><span>${s ? pct(s.c, s.n) + '% (' + s.n + ' câu)' : 'Chưa làm'}</span></div>`).join('')}
      ${weakP ? `<p class="note">Part yếu nhất: <b>Part ${weakP[0]} – ${T.FORMAT.parts[weakP[0]].name}</b> (${pct(weakP[1].c, weakP[1].n)}%). <a href="#/practice/${weakP[0]}">Luyện ngay →</a></p>` : '<p class="small muted">Làm ít nhất 3 câu ở một Part để thấy Part yếu nhất.</p>'}</section>`;
    h += `<section class="card"><h3>Loại lỗi cần cải thiện</h3>${weakT.length ? '<ul>' + weakT.map(([k, s]) => { const tg = T.TAGS[k] || { n: k }, l = tg.l && T.lessons[tg.l]; return `<li><b>${tg.n}</b>: đúng ${pct(s.c, s.n)}% (${s.n} câu)${l ? ` – ôn <a href="#/lesson/${l.id}">${esc(l.title)}</a>` : ''}</li>`; }).join('') + '</ul>' : '<p class="small muted">Chưa đủ dữ liệu.</p>'}</section>`;
    h += `<section class="card"><h3>Tiến bộ điểm ước lượng</h3>${sc.length ? lineChart(sc) : '<p class="small muted">Làm một bài thi thử để thấy biểu đồ.</p>'}</section>`;
    app.innerHTML = h;
  }

  /* ================= Cài đặt ================= */
  function settings() {
    app.innerHTML = `<h2>⚙️ Cài đặt</h2>
      ${!T.storageOK ? '<p class="note bad">⚠️ Trình duyệt đang chặn lưu trữ (có thể do chế độ ẩn danh). Hãy xuất dữ liệu thường xuyên.</p>' : ''}
      <section class="card">
        <label class="row-item sw"><span>🌙 Chế độ tối</span><input type="checkbox" id="dark" ${D.settings.dark ? 'checked' : ''}></label>
        <div class="row-item" style="display:block"><div>🔊 Tốc độ đọc: <b id="ratev">${D.settings.rate}×</b></div><input type="range" id="rate" min="0.6" max="1.3" step="0.1" value="${D.settings.rate}">
        <button class="btn sm" data-act="testvoice">Thử giọng hội thoại</button> <span class="small muted">${T.speech.ok ? T.speech.voices.length + ' giọng tiếng Anh' : 'Trình duyệt không hỗ trợ đọc'}</span></div>
      </section>
      <section class="card"><h3>Dữ liệu học tập</h3><p class="small muted">Tiến độ được lưu trên trình duyệt này. Xuất file để sao lưu hoặc chuyển sang máy khác.</p>
        <button class="btn" data-act="export">⬇️ Xuất dữ liệu (JSON)</button> <button class="btn" data-act="copydata">📋 Sao chép dữ liệu</button> <button class="btn" data-act="import">⬆️ Nhập dữ liệu</button>
        <textarea id="datatxt" class="search" rows="4" readonly hidden></textarea><input type="file" id="impf" accept=".json,application/json" hidden>
        <hr style="border:0;border-top:1px solid var(--line)">
        <a class="btn" href="#/exam/placement">📝 Làm lại bài test xếp lớp</a> <button class="btn danger" data-act="reset">🗑 Xóa toàn bộ tiến độ</button>
      </section>
      <p class="small muted center">Giai đoạn hiện tại: ${D.stage} · Điểm hiển thị là ước lượng, không phải điểm chính thức của ETS.</p>`;
    $('#dark').addEventListener('change', e => { D.settings.dark = e.target.checked; document.documentElement.classList.toggle('dark', D.settings.dark); T.save(); });
    $('#rate').addEventListener('input', e => { D.settings.rate = +e.target.value; $('#ratev').textContent = D.settings.rate + '×'; T.save(); });
    $('#impf').addEventListener('change', e => {
      const f = e.target.files[0]; if (!f) return;
      const rd = new FileReader();
      rd.onload = () => {
        try {
          const o = JSON.parse(rd.result); if (!o || typeof o !== 'object' || !o.settings) throw 0;
          Object.keys(D).forEach(k => delete D[k]);
          Object.assign(D, T.defaults(), o); D.settings = Object.assign(T.defaults().settings, o.settings);
          T.save(); document.documentElement.classList.toggle('dark', !!D.settings.dark);
          T.toast('✅ Đã nhập dữ liệu.'); router();
        } catch (err) { T.toast('❌ File không hợp lệ.'); }
      };
      rd.readAsText(f);
    });
  }

  /* ================= Hộp xác nhận trong trang (thay confirm() – bị chặn khi nhúng trong khung) ================= */
  function ask(msg, yes, no) {
    return new Promise(res => {
      const d = document.createElement('div'); d.className = 'modal';
      d.innerHTML = `<div class="modal-box" role="dialog" aria-modal="true"><p>${msg}</p><div class="navrow"><button class="btn" data-a="0">${no || 'Hủy'}</button><button class="btn primary" data-a="1">${yes || 'Đồng ý'}</button></div></div>`;
      const done = v => { d.remove(); document.removeEventListener('keydown', key); res(v); };
      const key = e => { if (e.key === 'Escape') done(false); };
      d.addEventListener('click', e => { const b = e.target.closest('[data-a]'); if (b) done(b.dataset.a === '1'); else if (e.target === d) done(false); });
      document.addEventListener('keydown', key);
      document.body.appendChild(d); d.querySelector('.primary').focus();
    });
  }

  /* ================= Hành động (data-act) ================= */
  function fGrade(ok, q) {
    const f = FS, id = f.queue[f.i];
    T.srs.grade(id, q);
    if (ok) f.right++;
    else if (!f.retry.has(id)) { f.retry.add(id); f.queue.push(id); }
  }
  const ACT = {
    'ob-zero'() { D.onboarded = true; D.stage = 1; T.touch(); go('#/home'); },
    'ob-test'() { go('#/exam/placement'); },
    showtext(b) { const g = b.closest('.group'); g.classList.toggle('showtext'); b.textContent = g.classList.contains('showtext') ? 'Ẩn chữ' : 'Hiện chữ'; },
    flag(b) {
      const u = b.dataset.uid;
      if (D.flags[u]) delete D.flags[u]; else D.flags[u] = T.today();
      b.classList.toggle('on', !!D.flags[u]); T.save();
      const pq = $(`#palette .pq[data-uid="${CSS.escape(u)}"]`); if (pq) pq.classList.toggle('fl', !!D.flags[u]);
    },
    finish(b) { finishLesson(b.dataset.id); },
    addword(b) { T.srs.add(b.dataset.id); T.save(); b.outerHTML = '<span class="pill">Đang ôn</span>'; },
    addtopic(b) { const ids = b.dataset.ids.split('|').filter(id => T.vocab[id]); ids.forEach(id => T.srs.add(id)); T.save(); T.toast('Đã thêm ' + ids.length + ' từ vào ôn tập'); const tp = $('#vt').value; vocab(); $('#vt').value = tp; $('#vt').dispatchEvent(new Event('change')); },
    prev() { if (EX.idx > 0 && !locked(EX.idx - 1)) { EX.idx--; renderExam(); } },
    next() {
      if (EX.idx === EX.pages.length - 1) return ACT.submit();
      if (EX.secOf[EX.idx + 1] !== EX.sec) {
        return ask('Chuyển sang phần Reading? Sau khi chuyển sẽ không quay lại Listening được.', 'Sang Reading').then(y => {
          if (!y || !EX) return; T.speech.stop(); EX.sec = EX.secOf[EX.idx + 1]; EX.idx++; renderExam();
        });
      }
      EX.idx++; renderExam();
    },
    jump(b) { const p = +b.dataset.p; if (!locked(p)) { EX.idx = p; renderExam(); } },
    submit() {
      const blank = EX.total - Object.keys(EX.ans).length;
      ask(blank ? `Bạn còn <b>${blank}</b> câu chưa trả lời. Vẫn nộp bài?` : 'Nộp bài?', 'Nộp bài').then(y => { if (y && EX) submitExam(); });
    },
    flip() { $('#back').hidden = false; $('#flipb').hidden = true; T.speech.speak([{ r: 'N', t: T.vocab[FS.queue[FS.i]].w }]); },
    grade(b) { const g = +b.dataset.g; fGrade(g >= 4, g); FS.i++; drawCard(); },
    fpick(b) {
      if (FS.answered) return; FS.answered = true;
      const ok = b.dataset.ok === '1', v = T.vocab[FS.queue[FS.i]];
      $$('.fc').forEach(x => { x.disabled = true; if (x.dataset.ok === '1') x.classList.add('ok'); else if (x === b) x.classList.add('bad'); });
      fGrade(ok, ok ? 4 : 1);
      $('#fres').innerHTML = `<p class="exp ${ok ? 'ok' : ''}">${ok ? '✅ Chính xác!' : '❌ Chưa đúng.'} <b>${esc(v.w)}</b> ${esc(v.ipa)} – ${esc(v.vi)}<br><i>${esc(v.ex)}</i></p><button class="btn primary" data-act="fnext">Tiếp →</button>`;
      T.speech.speak([{ r: 'N', t: v.w }]);
    },
    fnext() { FS.i++; drawCard(); },
    export() {
      const blob = new Blob([JSON.stringify(D, null, 1)], { type: 'application/json' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'toeic990-tien-do-' + T.today() + '.json';
      document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 1000);
    },
    import() { $('#impf').click(); },
    reset() {
      ask('Xóa toàn bộ tiến độ, từ vựng đang ôn và lịch sử thi? <b>Không thể hoàn tác.</b>', 'Xóa hết').then(y => { if (!y) return;
      Object.keys(D).forEach(k => delete D[k]); Object.assign(D, T.defaults()); T.save();
      document.documentElement.classList.remove('dark'); T.toast('Đã xóa tiến độ.'); go('#/home'); });
    },
    copydata() {
      const txt = JSON.stringify(D);
      const show = () => { const t = $('#datatxt'); t.hidden = false; t.value = txt; t.select(); T.toast('Hãy sao chép đoạn dữ liệu đang được chọn.'); };
      try { navigator.clipboard.writeText(txt).then(() => T.toast('✅ Đã sao chép dữ liệu. Dán vào một file .json để lưu.'), show); } catch (e) { show(); }
    },
    testvoice() { T.speech.speak([{ r: 'W', t: 'Excuse me, where is the meeting room?' }, { r: 'M', t: "It's on the third floor, next to the elevator." }, { r: 'N', t: 'Thank you for listening.' }]); }
  };

  /* ================= Sự kiện ================= */
  app.addEventListener('click', e => {
    const sp = e.target.closest('[data-speak]'); if (sp) { T.speech.speak([{ r: 'N', t: sp.dataset.speak }]); return; }
    const pl = e.target.closest('[data-play]'); if (pl) { playGroup(pl); return; }
    const sc = e.target.closest('[data-scroll]'); if (sc) { const el = document.getElementById(sc.dataset.scroll); if (el) el.scrollIntoView({ behavior: 'smooth' }); return; }
    const ch = e.target.closest('.ch[data-uid]'); if (ch) { if (!ch.disabled) onChoice(ch); return; }
    const a = e.target.closest('[data-act]'); if (a && ACT[a.dataset.act]) ACT[a.dataset.act](a, e);
  });
  window.addEventListener('beforeunload', e => { if (EX) { e.preventDefault(); e.returnValue = ''; } });
  window.addEventListener('hashchange', router);
  router();
})();
