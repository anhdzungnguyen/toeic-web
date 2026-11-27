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

  // items: [{ r: 'W'|'M'|'W2'|'M2'|'N', t: 'câu cần đọc' }]
  S.speak = function (items, opt) {
    opt = opt || {};
    if (!S.ok) { if (T.toast) T.toast('Trình duyệt này không hỗ trợ đọc tiếng Anh. Hãy dùng Chrome, Edge hoặc Safari.'); if (opt.onend) opt.onend(); return; }
    if (!S.voices.length) load();
    if (typeof items === 'string') items = [{ t: items }];
    const rate = (opt.rate || 1) * ((T.D && T.D.settings.rate) || 1);
    try { speechSynthesis.cancel(); } catch (e) {}
    setTimeout(() => {
      items.forEach((it, i) => {
        const u = new SpeechSynthesisUtterance(it.t);
        const v = S.map[it.r || 'N'];
        if (v) { u.voice = v; u.lang = v.lang; } else u.lang = 'en-US';
        u.rate = rate;
        if (i === items.length - 1 && opt.onend) { u.onend = opt.onend; u.onerror = opt.onend; }
        speechSynthesis.speak(u);
      });
    }, 60);
  };
  S.stop = () => { if (S.ok) try { speechSynthesis.cancel(); } catch (e) {} };

  if (S.ok) { load(); speechSynthesis.onvoiceschanged = load; }
})();
