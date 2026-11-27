// Kiểm tra dữ liệu: nạp mọi file theo đúng thứ tự trong index.html (trừ app.js) rồi rà lỗi.
// Chạy: node tools/validate.js <thư mục toeic-web>
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2];
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(s => !s.endsWith('app.js'));
const warns = [];
const ctx = { window: {}, console: { warn: (...a) => warns.push(a.join(' ')), log: console.log }, localStorage: { getItem: () => null, setItem() {} } };
ctx.window = ctx; vm.createContext(ctx);
for (const s of srcs) {
  const f = path.join(root, s);
  if (!fs.existsSync(f)) { console.log('THIẾU FILE:', s); process.exitCode = 1; continue; }
  vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: s });
}
const T = ctx.TOEIC; T.load();
const errs = [...warns], warnsOnly = [];
const fmt = new Set(Object.keys(T.TAGS));
for (const g of Object.values(T.groups)) {
  if (g.svg && !T.scenes[g.svg]) errs.push('Thiếu hình ' + g.svg + ' ở ' + g.id);
  // id phải ghi cố định trong dữ liệu: id theo vị trí sẽ lệch sổ lỗi, đánh dấu, lịch sử thi khi chèn thêm câu
  if (g.autoId) errs.push('Thiếu id cố định cho nhóm câu (đang tự sinh “' + g.id + '”) – thêm id: "' + g.id + '" vào dữ liệu');
  g.qs.forEach(q => {
    if (new Set(q.c).size !== q.c.length) errs.push('Trùng lựa chọn: ' + q.uid);
    if (q.t && !fmt.has(q.t)) errs.push('Nhãn lạ ' + q.t + ': ' + q.uid);
    if (!q.t && g.p !== 1 && g.p !== 2) errs.push('Thiếu nhãn t: ' + q.uid);
    // Lựa chọn bị xáo thứ tự, nên lời giải chỉ được nhắc chữ cái dạng (A)…(D) (sẽ tự đổi theo); “đáp án B” thì không
    if (q.e && /(đáp án|Đáp án|phương án|Phương án|lựa chọn|Lựa chọn|câu|Câu)\s+[A-D](?![\wÀ-ỹ)])/.test(q.e.replace(/<[^>]+>/g, ''))) errs.push('Lời giải nhắc chữ cái không có ngoặc (sẽ sai sau khi xáo): ' + q.uid);
    if (q.c.every(T.isNumChoice) && q.c.length > 2 && q.c.every(c => /[:$£€]/.test(c))) {
      const nums = q.c.map(c => { const m = String(c).match(/(d+)(?::(d+))?/); return m ? (+m[1]) * 60 + (+m[2] || 0) : NaN; });
      if (nums.every(n => !isNaN(n)) && nums.some((n, i) => i && n < nums[i - 1])) warnsOnly.push('Lựa chọn dạng số chưa xếp tăng dần: ' + q.uid);
    }
    if (g.p === 2 && q.c.length !== 3) errs.push('Part 2 phải có 3 lựa chọn: ' + q.uid);
    if ([1, 3, 4, 5, 6, 7].includes(g.p) && q.c.length !== 4) errs.push('Phải có 4 lựa chọn: ' + q.uid);
  });
}
for (const [k, tg] of Object.entries(T.TAGS)) if (!T.lessons[tg.l]) errs.push('Nhãn ' + k + ' trỏ tới bài chưa có: ' + tg.l);
for (const s of Object.values(T.stages)) s.units.forEach(u => { if (u.checkpoint && !T.tests[u.checkpoint]) errs.push('Thiếu checkpoint ' + u.checkpoint); });
const audio = g => !!(g.script || g.p === 1 || g.p === 2 || g.qs[0].say);
const info = t => { const c = { L: 0, R: 0, parts: {} }; t.groups.forEach(g => { const n = g.qs.length; c[audio(g) ? 'L' : 'R'] += n; c.parts[g.p] = (c.parts[g.p] || 0) + n; }); return c; };
for (const t of Object.values(T.tests)) { const c = info(t); console.log(t.id.padEnd(10), 'Nghe', c.L, '· Đọc', c.R, '· theo Part', JSON.stringify(c.parts)); }
const key = q => (q.q || '') + '|' + (q.say || '') + '|' + q.c.join('/');
const pl = new Set(T.tests.placement.groups.flatMap(g => g.qs.map(key)));
T.tests.mini1.groups.forEach(g => g.qs.forEach(q => { if (pl.has(key(q)) && !/^\(\d\)$/.test(q.q)) errs.push('Trùng câu giữa placement và mini1: ' + q.uid); }));
const ls = Object.values(T.lessons);
console.log('Bài học:', ls.length, '· Từ vựng:', Object.keys(T.vocab).length, '· Nhóm câu:', Object.keys(T.groups).length, '· Câu hỏi:', Object.keys(T.qIndex).length);
console.log('Phân bố đáp án:', JSON.stringify(Object.values(T.qIndex).reduce((m, x) => { const a = 'ABCD'[x.g.qs[x.i].a]; m[a] = (m[a] || 0) + 1; return m; }, {})));
if (warnsOnly.length) console.log('CẢNH BÁO:\n- ' + warnsOnly.join('\n- '));
console.log(errs.length ? 'LỖI:\n- ' + errs.join('\n- ') : 'Không có lỗi.');
if (errs.length) process.exitCode = 1;
