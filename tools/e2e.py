# Kiểm thử luồng chính bằng Chrome headless. Chạy: python3 tools/e2e.py <thư mục toeic-web> <thư mục ảnh>
import sys, pathlib
from playwright.sync_api import sync_playwright

root = pathlib.Path(sys.argv[1]).resolve(); shots = pathlib.Path(sys.argv[2]); shots.mkdir(exist_ok=True)
URL = root.joinpath('index.html').as_uri()
errors, ok = [], []

def check(cond, msg):
    (ok if cond else errors).append(msg)

with sync_playwright() as p:
    b = p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox'])
    def pg_ok(pg):
        m = pg.query_selector('.modal .primary')
        if m: m.click()
        pg.wait_for_timeout(250)
    def new_page(**kw):
        pg = b.new_context(**kw).new_page()
        pg.on('pageerror', lambda e: errors.append('JS: ' + str(e)))
        pg.on('console', lambda m: m.type in ('error', 'warning') and errors.append('console: ' + m.text))
        pg.on('dialog', lambda d: (errors.append('Dùng hộp thoại trình duyệt: ' + d.message), d.accept()))
        return pg

    # 1. Mất gốc → bài 1 → hoàn thành → bài 2 mở khóa
    pg = new_page()
    pg.clock.install()
    pg.goto(URL)
    check('Chào bạn' in pg.inner_text('#app'), 'Hiện màn hình chào')
    pg.screenshot(path=shots / '01-onboarding.png')
    pg.click('[data-act=ob-zero]'); pg.wait_for_timeout(250)
    check('Bài 1' in pg.inner_text('#app'), 'Trang chủ gợi ý Bài 1')
    pg.screenshot(path=shots / '02-home.png', full_page=True)
    pg.click('a.btn.primary')
    pg.click('[data-act=finish]')
    check('Còn' in pg.inner_text('#toast'), 'Chặn hoàn thành khi chưa làm bài tập')
    for q in pg.query_selector_all('#ex .q'):
        q.query_selector('.ch').click()
    check(len(pg.query_selector_all('#ex .exp')) == 4, 'Bài tập hiện giải thích sau khi chọn')
    pg.screenshot(path=shots / '03-lesson.png', full_page=True)
    pg.click('[data-act=finish]'); pg.wait_for_timeout(250)
    check('Bài 2' in pg.inner_text('#app'), 'Sau Bài 1 gợi ý Bài 2')
    pg.goto(URL + '#/path')
    check(pg.query_selector('a[href="#/lesson/s1-l2"]') is not None and pg.query_selector('li.locked a[href="#/lesson/s1-l2"]') is None, 'Bài 2 đã mở khóa trên Lộ trình')
    check(pg.query_selector('li.locked a[href="#/lesson/s1-l3"]') is not None, 'Bài 3 vẫn khóa')

    # 2. Đi qua mọi màn hình
    for r in ['practice', 'practice/1', 'practice/2', 'practice/3', 'practice/4', 'practice/5', 'practice/6', 'practice/7', 'practice/5/all',
              'review/wrong', 'review/flags', 'vocab', 'flash', 'tests', 'exam/full1', 'exam/mini1', 'stats', 'settings', 'lesson/s5-l1', 'lesson/s1-l12']:
        pg.goto(URL + '#/' + r); pg.wait_for_timeout(50)
        check(len(pg.inner_text('#app')) > 30, 'Màn hình #/' + r)
    pg.goto(URL + '#/practice/1'); pg.screenshot(path=shots / '04-part1.png', full_page=True)
    pg.goto(URL + '#/vocab'); pg.fill('#q', 'nhan vien')
    check('staff' in pg.inner_text('#wl'), 'Tìm từ không dấu “nhan vien” ra “staff”')
    # Flashcard
    pg.goto(URL + '#/flash/m2w')
    for _ in range(30):
        if pg.query_selector('.fc') is None: break
        pg.click('.fc'); pg.click('[data-act=fnext]')
    check('Xong phiên' in pg.inner_text('#app'), 'Hoàn thành một phiên flashcard')
    pg.goto(URL + '#/flash/w2m'); pg.click('[data-act=flip]'); pg.click('[data-act=grade][data-g="4"]')
    check(True, 'Flashcard lật thẻ & tự chấm')

    # 3. Kiểm tra cuối chặng: nộp bài
    pg.goto(URL + '#/run/cp-s1-u2')
    for _ in range(20):
        q = pg.query_selector('.q .ch')
        if q: q.click()
        btn = pg.query_selector('[data-act=next]')
        if 'Nộp' in btn.inner_text(): btn.click(); pg_ok(pg); break
        btn.click(); pg_ok(pg)
    check('/result/' in pg.url and '%' in pg.inner_text('.score'), 'Nộp bài checkpoint ra trang kết quả %')

    # 4. Bài test xếp lớp + bấm giờ tự chuyển L → R
    pg2 = new_page(viewport={'width': 390, 'height': 844})
    pg2.clock.install()
    pg2.goto(URL); pg2.click('[data-act=ob-test]'); pg2.wait_for_selector('a[href="#/run/placement"]')
    check('Bài test xếp lớp' in pg2.inner_text('#app'), 'Mở bài test xếp lớp từ màn chào')
    pg2.click('a.btn.primary')
    pg2.click('[data-play]')
    check(pg2.is_disabled('[data-play]'), 'Đoạn nghe chỉ phát 1 lần')
    pg2.screenshot(path=shots / '05-exam-mobile.png', full_page=True)
    pg2.clock.run_for(601_000)
    check('Reading' in pg2.inner_text('.exambar'), 'Hết giờ Listening tự chuyển Reading')
    check(pg2.is_disabled('[data-act=prev]'), 'Không quay lại Listening được')
    # Trả lời đúng hết phần đọc
    for _ in range(40):
        for q in pg2.query_selector_all('.q'):
            uid = q.get_attribute('data-uid')
            a = pg2.evaluate('u => { const x = TOEIC.qIndex[u]; return x.g.qs[x.i].a }', uid)
            q.query_selector_all('.ch')[a].click()
        btn = pg2.query_selector('[data-act=next]')
        if 'Nộp' in btn.inner_text(): btn.click(); pg_ok(pg2); break
        btn.click(); pg_ok(pg2)
    txt = pg2.inner_text('#app')
    check('/result/' in pg2.url and 'Giai đoạn' in txt, 'Kết quả xếp lớp có giai đoạn')
    pg2.screenshot(path=shots / '06-result-mobile.png', full_page=True)
    pg2.goto(URL + '#/home')
    check('Chào bạn' not in pg2.inner_text('#app'), 'Sau bài xếp lớp không quay lại màn chào')
    # Chế độ tối
    pg2.goto(URL + '#/settings'); pg2.check('#dark')
    check(pg2.evaluate('document.documentElement.classList.contains("dark")'), 'Bật chế độ tối')
    pg2.goto(URL + '#/stats'); pg2.screenshot(path=shots / '07-stats-dark.png', full_page=True)
    pg2.reload()
    check(pg2.evaluate('document.documentElement.classList.contains("dark")'), 'Chế độ tối được lưu sau khi tải lại')
    # Xuất / nhập
    pg2.goto(URL + '#/settings')
    with pg2.expect_download() as dl: pg2.click('[data-act=export]')
    f = dl.value.path(); data = open(f, encoding='utf-8').read()
    check('"onboarded": true' in data, 'Xuất dữ liệu JSON')
    pg2.click('[data-act=reset]'); pg_ok(pg2)
    check('Chào bạn' in pg2.inner_text('#app'), 'Xóa tiến độ về màn chào')
    pg2.goto(URL + '#/settings'); pg2.set_input_files('#impf', f); pg2.wait_for_timeout(300)
    check(pg2.evaluate('TOEIC.D.onboarded') is True, 'Nhập lại dữ liệu JSON')
    b.close()

print('ĐẠT %d mục' % len(ok))
for m in ok: print('  ✓', m)
print('LỖI %d mục' % len(errors))
for m in errors: print('  ✗', m)
