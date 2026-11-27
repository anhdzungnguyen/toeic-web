// In ra mọi từ vựng đang có (để tránh trùng khi soạn thêm).
// Chạy: node tools/listwords.js <thư mục toeic-web> [--topic]
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = process.argv[2] || '.';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const srcs = [...html.matchAll(/<script src="([^"]+)"/g)].map(m => m[1]).filter(s => !s.endsWith('app.js'));
const ctx = { console: { warn() {}, log() {} }, localStorage: { getItem: () => null, setItem() {} } };
ctx.window = ctx; vm.createContext(ctx);
for (const s of srcs) { const f = path.join(root, s); if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, 'utf8'), ctx, { filename: s }); }
const V = Object.values(ctx.TOEIC.vocab);
if (process.argv.includes('--topic')) {
  const by = {}; V.forEach(v => (by[v.topic || '(không)'] = by[v.topic || '(không)'] || []).push(v.w));
  for (const [t, ws] of Object.entries(by)) console.info(t + ' (' + ws.length + '): ' + ws.join(', '));
} else console.info(V.length + ' từ:\n' + V.map(v => v.w).sort((a, b) => a.localeCompare(b)).join(', '));
