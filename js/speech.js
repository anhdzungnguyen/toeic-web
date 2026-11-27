/* Phát âm bằng giọng đọc có sẵn của trình duyệt (Web Speech API) */
(function () {
  'use strict';
  const T = window.TOEIC;
  const S = T.speech = { voices: [], map: {}, ok: 'speechSynthesis' in window };
  const FEM = /female|samantha|zira|susan|victoria|karen|moira|tessa|fiona|serena|libby|sonia|jenny|aria|hazel|kate|allison|ava|joanna|salli|emma|natasha|catherine/i;
  const MALE = /(^|[^e])male|daniel|david|mark|alex|fred|george|ryan|guy|thomas|oliver|arthur|aaron|matthew|james|william|christopher|eric|brian/i;

  function load() {
    if (!S.ok) return;
    S.voices = speechSynthesis.getVoices().filter(v => /^en([-_]|$)/i.test(v.lang));
    const all = S.voices, f = all.filter(v => FEM.test(v.name)), m = all.filter(v => !FEM.test(v.name) && MALE.test(v.name));
    S.map = {
      W: f[0] || all[0], W2: f[1] || f[0] || all[1] || all[0],
      M: m[0] || all[1] || all[0], M2: m[1] || m[0] || all[2] || all[0],
      N: all.find(v => v !== f[0] && v !== m[0] && /GB|AU|CA/i.test(v.lang)) || all.find(v => v !== f[0]) || all[0]
    };
  }

  // Chia đoạn dài thành từng câu: Chrome hay tự ngắt câu đọc dài hơn ~15 giây.
  // Không ngắt sau Mr. / Ms. / Dr. / St. / a.m. / p.m. / No. / số thập phân.
  const ABBR = /(?:\b(?:Mr|Mrs|Ms|Dr|St|Jr|Sr|No|Co|Inc|Ltd|vs|etc|approx|Ave|Rd)\.|\b[ap]\.m\.|\b[A-Z]\.)$/;
  S.split = function (text) {
    // (không dùng lookbehind trong regex để chạy được trên Safari cũ)
    const parts = String(text).match(/[^.!?]+(?:[.!?]+["”']?|$)/g) || [String(text)], out = [];
    parts.forEach(p => {
      const prev = out[out.length - 1];
      // Ghép lại nếu câu trước kết thúc bằng chữ viết tắt, hoặc phần sau không bắt đầu như câu mới (vd. số thập phân 3.5)
      if (prev != null && (ABBR.test(prev.trim()) || !/^\s+["“A-Z]/.test(p))) out[out.length - 1] += p; else out.push(p);
    });
    return out.map(s => s.trim()).filter(Boolean);
  };

  // items: [{ r: 'W'|'M'|'W2'|'M2'|'N', t: 'câu cần đọc' }]
  // opt: { rate, onstart (khi câu đầu tiên bắt đầu đọc), onend (khi xong hoặc lỗi, gọi đúng 1 lần) }
  S.speak = function (items, opt) {
    opt = opt || {};
    let ended = false, started = false;
    const end = () => { if (!ended) { ended = true; if (opt.onend) opt.onend(); } };
    if (!S.ok) { if (T.toast) T.toast('Trình duyệt này không hỗ trợ đọc tiếng Anh. Hãy dùng Chrome, Edge hoặc Safari.'); end(); return; }
    if (!S.voices.length) load();
    if (typeof items === 'string') items = [{ t: items }];
    const rate = (opt.rate || 1) * ((T.D && T.D.settings.rate) || 1);
    const list = []; items.forEach(it => S.split(it.t).forEach(t => list.push({ r: it.r, t })));
    try { speechSynthesis.cancel(); } catch (e) {}
    setTimeout(() => {
      list.forEach((it, i) => {
        const u = new SpeechSynthesisUtterance(it.t);
        const v = S.map[it.r || 'N'];
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
        u.rate = rate;
        u.onstart = () => { if (!started) { started = true; if (opt.onstart) opt.onstart(); } };
        u.onerror = end;
        if (i === list.length - 1) u.onend = end;
        speechSynthesis.speak(u);
      });
      // Không có giọng đọc nào bắt đầu sau 8 giây → coi như lỗi
      setTimeout(() => { if (!started) end(); }, 8000);
    }, 60);
  };
  S.stop = () => { if (S.ok) try { speechSynthesis.cancel(); } catch (e) {} };

  if (S.ok) { load(); speechSynthesis.onvoiceschanged = load; }
})();
