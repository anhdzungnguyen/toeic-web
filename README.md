# TOEIC 0 → 990 – Web học TOEIC Listening & Reading

Web tĩnh (HTML/CSS/JS thuần), giao diện tiếng Việt, không cần build. Mở `index.html` trực tiếp hoặc host tĩnh.
Dữ liệu là các file `.js` nạp bằng thẻ `<script>` (không dùng fetch). Tiến độ lưu localStorage, khóa `toeic990_v1`.

---

## 1. TRẠNG THÁI HIỆN TẠI (cập nhật 2026-11-27)

> ✅ **Web đã chạy được.** Đã kiểm thử bằng Chrome headless (`tools/e2e.py`): **42/42 mục đạt**, không có lỗi JavaScript.
> Dữ liệu đã rà bằng `tools/validate.js`: không trùng id, không trùng từ, cấu trúc đáp án hợp lệ, số câu từng đề đúng dàn ý.

### ✅ Đã xong và chạy được
| Phần | Nội dung |
|---|---|
| `index.html`, `css/style.css` | Khung trang, giao diện, chế độ tối, responsive |
| `js/core.js` | Lõi dữ liệu, lưu trữ, chấm điểm ước lượng, SRS. **Mới:** `T.mix` tự xáo thứ tự lựa chọn theo id câu (cố định giữa các lần mở) để đáp án đúng chia đều A/B/C/D; lời giải có “(A)…(D)” được đổi chữ theo. Muốn giữ nguyên thứ tự thì thêm `keepOrder: true` vào nhóm câu. |
| `js/speech.js`, `js/scenes.js` | Giọng đọc; 7 hình SVG: `woman_desk`, `man_cup`, `boxes`, `handshake`, `ladder`, `presenter`, `table_chairs` |
| `js/app.js` | **Đã viết xong**: kết quả thi, biểu đồ điểm, thống kê, cài đặt (tối/tốc độ đọc/xuất–nhập JSON/xóa tiến độ), toàn bộ hành động `data-act`, listener, cảnh báo rời trang khi đang thi |
| `data/stage1/*` | Giai đoạn 1 đủ **22 bài** (12 bài gốc + 10 bài ngữ pháp mới) (mỗi bài: giải thích, 10–14 từ, ví dụ, 3–5 nhóm bài tập) + **3 bài kiểm tra chặng** × 8 câu |
| `data/tests/placement.js` | Bài test xếp lớp **30 câu** (Nghe 13 · Đọc 17), đúng dàn ý |
| `data/tests/mini1.js` | Thi thử mini **50 câu** (Nghe 25 · Đọc 25), đủ 7 Part, có câu kèm bảng, chuỗi tin nhắn, đoạn kép. Không trùng câu với bài xếp lớp. Là bài thi chuyển GĐ1 → GĐ2 (≥ 300) |
| `data/stage2–5/*` | Khung 4 giai đoạn + 5 bài mẫu: s2-l1, s2-l2, s3-l1, s4-l1, s5-l1 |
| `data/parts/part1–7.js` | Ngân hàng luyện Part: 3 + 4 + 1 + 1 + 6 + 1 + 2 nhóm câu, có `lvl` |
| `data/tests/full1.js` | Khung đề đầy đủ (chưa có câu hỏi; màn hình đề hiện bảng cấu trúc) |
| `tools/` | `validate.js` (rà dữ liệu), `e2e.py` (kiểm thử trình duyệt). Không được `index.html` nạp |

**Số liệu hiện có:** 59 bài học (GĐ1 23 · GĐ2 23 · GĐ3 6 · GĐ4 6 · GĐ5 1 bài mẫu) · 1.218 từ vựng · 1.001 câu hỏi · 12 bài kiểm tra chặng · đề mini1, mini2 · ngân hàng luyện Part: P1 25, P2 61, P3 14, P4 12, P5 292, P6 29, P7 19 nhóm (tính cả câu trong bài học). **GĐ1 và GĐ2 đã đủ bài + bài thi chuyển giai đoạn.**

**Mới (2026-11-27):** giao diện mới (font Be Vietnam Pro, icon SVG, hero gradient); thêm 10 bài ngữ pháp GĐ1 (chặng u2b, u2c); trang **Ngữ pháp theo chủ đề** `#/grammar` theo cây 17 chủ đề (xem mục 2b); deploy Vercel tại https://toeic-0-990.vercel.app (chạy `npx vercel deploy --prod` trong thư mục này).

### 🟡 Chưa đủ so với mục tiêu
- Từ vựng GĐ1 ~480/500 (đủ 15 chủ đề × 16 từ trong `vocab-bank-1/2.js`); GĐ2 ~170/1.200.
- Ngữ pháp: 16/17 chủ đề đã có bài; chủ đề 13 (điều kiện & đảo ngữ) và 16 (mạo từ) chưa có câu luyện gắn nhãn riêng.
- GĐ2: chưa có bài chiến lược Part 1–4, Part 6, Part 7; chưa có đề `mini2` làm `gateTest` (≥ 500).
- Giai đoạn 3–5 mới có 1 bài mẫu mỗi giai đoạn; GĐ2–5 chưa có bài thi chuyển giai đoạn (`gateTest: null`).
- Ngân hàng luyện Part còn mỏng (Part 3, 4, 6 mỗi Part 1 nhóm).
- Đề đầy đủ `full1` chưa có câu hỏi.

### ⚠️ Lưu ý khi sửa dữ liệu
- Đổi nội dung câu hỏi hoặc thêm/bớt nhóm câu **trong một đề đã có người làm** sẽ làm lệch phần “xem lại” của các lần thi cũ (lịch sử lưu chỉ số lựa chọn). Muốn sửa nhiều thì tạo đề mới với id mới.

---

## 2. BƯỚC TIẾP THEO (theo thứ tự)
1. Bổ sung từ vựng Giai đoạn 1 lên ~500 từ: tạo `data/stage1/vocab-bank.js` gọi `TOEIC.addVocab(1, [...])` (chia nhiều file nếu dài), thêm thẻ script vào `index.html` trước `js/app.js`. Không trùng với từ đã có (validate.js sẽ báo).
2. Nội dung đầy đủ Giai đoạn 2 (dàn ý gợi ý: chiến lược Part 1–4, từ loại, thì hoàn thành, bị động, so sánh, liên từ, Part 6, đoạn đơn Part 7) + 2–3 bài kiểm tra chặng + đề `mini2` làm `gateTest` (≥ 500).
3. Làm tương tự cho Giai đoạn 3, 4, 5 (gateTest ≥ 700, ≥ 850).
4. Mở rộng `data/parts/` (mỗi Part tối thiểu 10 nhóm, trải đều lvl 1–5).
5. Viết `full1.js` đủ 200 câu theo cấu trúc thật.
6. Trước khi soạn từ mới: `node tools/listwords.js .` để tránh trùng. Sau mỗi lần thêm dữ liệu, chạy:
   ```
   node tools/validate.js .          # trong thư mục toeic-web
   python3 tools/e2e.py . shots      # cần Python Playwright + Chrome
   ```
   và tự rà để chắc không câu nào có 2 đáp án đúng.

---

## 2b. DANH MỤC CHUẨN CHO MỤC TIÊU 990 (đã thống nhất 2026-11-27)
Mọi nội dung mới phải xếp vào cây này và gắn nhãn `t` tương ứng để thống kê điểm yếu.

**I. Ngữ pháp – 17 chủ đề.** Cây nằm ở `TOEIC.GRAMMAR` trong `data/format.js` (trang `#/grammar`). Mỗi chủ đề có `tags` (nhãn câu hỏi) và `lessons` (bài học, dễ → khó). Chủ đề mới chưa có bài thì `tags: [], lessons: []` → hiện “Đang soạn”. Khi viết bài cho chủ đề đó: thêm nhãn vào `TOEIC.TAGS` (trỏ tới bài), rồi thêm vào `tags`/`lessons` của chủ đề.
1 Từ loại · 2 Thì · 3 Bị động · 4 Hòa hợp S–V · 5 Đại từ · 6 Giới từ · 7 Liên từ & trạng từ nối · 8 Mệnh đề quan hệ · 9 Mệnh đề danh từ · 10 To V / V-ing · 11 Phân từ & rút gọn mệnh đề trạng ngữ · 12 So sánh · 13 Điều kiện & đảo ngữ · 14 Modal & giả định · 15 Lượng từ · 16 Mạo từ · 17 Cấu trúc đặc biệt (so…that, such…that, too…to, It is…that, have sth done).
Nguyên tắc: GĐ1 dạy mức cơ bản của mỗi chủ đề, GĐ2–5 dạy phần nâng cao (ví dụ: thì tương lai hoàn thành, rút gọn MĐQH, đảo ngữ, giả định ở GĐ3–5).

**II. Từ vựng.** 20–25 chủ đề (văn phòng, nhân sự & tuyển dụng, hợp đồng, tài chính – ngân hàng – kế toán, marketing – bán hàng – CSKH, sản xuất – kho – vận chuyển, du lịch – khách sạn – nhà hàng, hội nghị – sự kiện, bất động sản – xây dựng – bảo trì, y tế – bảo hiểm, IT – thiết bị văn phòng, mua sắm – đơn hàng – hóa đơn – hoàn tiền…) + collocations + phrasal verbs + cặp từ dễ nhầm (affect/effect, rise/raise…) + paraphrase + từ vựng Part 5 cấp cao. Mục tiêu ~3.500 từ (300đ: 500 · 500đ: 1.200 · 700đ: 2.000 · 850đ: 2.800 · 990đ: 3.500). Việc cần làm: thêm trường chủ đề cho từ vựng và bộ lọc theo chủ đề ở trang Từ vựng.

**III. Listening.** Part 1 (hành động/vị trí; bẫy is being + V3 / has been + V3) · Part 2 (Wh-, Yes/No, câu hỏi đuôi, lựa chọn, đề nghị, câu trần thuật, trả lời gián tiếp; bẫy đồng âm/lặp từ/sai thì) · Part 3 (đọc trước câu hỏi, hàm ý, graphic, hội thoại 3 người) · Part 4 (thông báo, tin nhắn thoại, quảng cáo, bản tin, giới thiệu diễn giả, hướng dẫn tham quan; hàm ý, graphic) · kỹ năng chung (nhiều giọng, nối âm, dictation, shadowing). Hạn chế: giọng đọc là TTS của trình duyệt.

**IV. Reading.** Part 5 (phân loại câu ngữ pháp/từ vựng, < 20 giây/câu) · Part 6 (chèn câu, thì theo ngữ cảnh, từ nối) · Part 7 (đoạn đơn/kép/ba; email, quảng cáo, thông báo, bài báo, form, chat; ý chính, chi tiết, suy luận, NOT true, đồng nghĩa, chèn câu, hàm ý chat).

**V. Chiến lược & luyện đề.** Phân bổ 75 phút Reading (P5 ~10′, P6 ~8′, P7 ~55′), sổ lỗi theo nhãn, mini test & full test, biểu đồ điểm.

**Tính năng còn thiếu so với danh mục:** Dictation (nghe – gõ lại – so với transcript), lọc từ vựng theo chủ đề, full test 120 phút có câu hỏi thật, đồng bộ tiến độ giữa các máy.

---

## 2c. VIỆC CÒN THIẾU (tổng hợp sau review 2026-11-27)

**I. Ngữ pháp**
1. ~~Thì~~ **ĐÃ XONG 2026-11-27**: đủ 12 thì + các cách nói tương lai + động từ trạng thái + tương lai trong quá khứ + lùi thì + chọn thì theo ngữ cảnh Part 6 (s1-l23, s2-l16, s2-l17, s3-l2, checkpoint cp-s3-u1)
2. ~~Điều kiện & đảo ngữ~~ **ĐÃ XONG 2026-11-27**: s3-l1 (loại 0–3, hỗn hợp, unless/provided/in case/but for/otherwise), s3-l3 đảo ngữ điều kiện, s4-l1 đảo ngữ trạng từ phủ định (Not until, Only…, No sooner…than, Hardly…when), checkpoint cp-s4-u1
3–7. ~~To V/V-ing, mạo từ, lượng từ, liên từ, cấu trúc khác~~ **ĐÃ XONG 2026-11-27**: GĐ3 chặng 2 (`data/stage3/unit2-ngu-phap-tc2-a.js`: s3-l4 To V/V-ing nâng cao, s3-l5 Mạo từ & lượng từ nâng cao; `-b.js`: s3-l6 Liên từ nâng cao + checkpoint `cp-s3-u2`), GĐ4 s4-l2 Cấu trúc nâng cao (`data/stage4/unit1-cau-truc-nang-cao.js`: whereby, of which/whom, as if, wish, It's time, would rather, it takes, the reason for, not so much…as)

**II. ~~Từ vựng – ngữ pháp (Part 5 cấp cao)~~ ĐÃ XONG 2026-11-27:** GĐ4 chặng 2 (`data/stage4/unit2-tu-vung-p5-a.js`: s4-l3 Cặp từ dễ nhầm, s4-l4 Trạng từ hay gặp; `-b.js`: s4-l5 Collocation, s4-l6 ~150 cụm giới từ + checkpoint `cp-s4-u2`). Chủ đề 18 trong cây ngữ pháp; nhãn mới `cap-tu`, `trang-tu`, `collocation`.

**III. Từ vựng:** (2026-11-27: thêm `data/stage2/vocab-bank-1.js` 304 từ GĐ2 theo 16 chủ đề, có phrasal verbs) · GĐ2 lên ~1.200 · GĐ3–5 lên ~3.500 · phrasal verbs · paraphrase & đồng nghĩa

**IV. Kỹ năng & chiến lược:** (2026-11-27: ĐÃ CÓ GĐ2 chặng 4 – s2-l18..l23 chiến lược Part 1, 2, 3–4, 5, 6, 7 + checkpoint `cp-s2-u4`; còn thiếu: dictation, shadowing, chiến lược nâng cao GĐ3–5) Part 1 chiến lược · Part 2 câu hỏi đuôi / đề nghị / trần thuật / trả lời gián tiếp · Part 3–4 hàm ý, biểu đồ, hội thoại 3 người · Part 6 chèn câu, đại từ trỏ ngược · Part 7 đoạn đôi/ba, NOT true, đồng nghĩa, phân bổ thời gian · dictation, shadowing

**V. Ngân hàng câu & đề:** (2026-11-27: ĐÃ CÓ `data/tests/mini2.js` 50 câu = gateTest GĐ2 → GĐ3 ≥ 500; ĐÃ CÓ ngân hàng Part `data/parts/bank-p12.js` (P1 12, P2 20), `bank-p34.js` (P3 10, P4 10), `bank-p67.js` (P6 10, P7 12), lvl 1–5 – mỗi Part đã ≥ 10 nhóm; lựa chọn vị trí [1]–[4] không bị xáo) mỗi Part ≥ 10 nhóm · kiểm tra chặng GĐ3–5 · đề chuyển giai đoạn mini2 (≥ 500), GĐ3 (≥ 700), GĐ4 (≥ 850) · full1 đủ 200 câu · audio chất lượng cao nhiều giọng

**VI. Lỗi code: đã sửa ngày 2026-11-27** (ẩn mô tả tranh Part 1 khi thi/luyện, loại câu đề thi khỏi trang chủ đề, đồng hồ theo mốc kết thúc, trừ điểm đoán mò, audio đánh dấu khi thực sự phát + chia câu, SRS chỉ chấm khi đến hạn / 1 lần mỗi phiên / lưu mỗi thẻ / quên chỉ trừ EF 0,2, sao lưu JSON hỏng, id cố định cho mọi câu, làm lại bài xếp lớp không đổi giai đoạn, lọc HTML khi nhập file, gắn lại nhãn, giữ thứ tự lựa chọn dạng số, sửa hiển thị điện thoại).

**Quy ước dữ liệu bắt buộc (validate.js báo lỗi nếu sai):** mỗi nhóm câu có `id` cố định, không bao giờ đổi; mỗi câu (trừ Part 1–2) có nhãn `t` có trong `TOEIC.TAGS`; lời giải chỉ nhắc chữ cái dạng (A)…(D); lựa chọn giờ/giá viết theo thứ tự tăng dần (không bị xáo).

---

## 3. CẤU TRÚC THƯ MỤC
```
index.html            css/style.css
js/core.js            lõi dữ liệu, lưu trữ, chấm điểm, SRS
js/speech.js          giọng đọc
js/scenes.js          hình SVG Part 1
js/app.js             giao diện & điều hướng (nạp CUỐI CÙNG)
data/format.js        cấu trúc đề, nhãn lỗi
data/stage1..5/       giai đoạn, bài học, kiểm tra chặng
data/parts/partN.js   ngân hàng luyện theo Part
data/tests/*.js       xếp lớp, thi thử mini, thi thử đầy đủ
tools/                kiểm tra dữ liệu & kiểm thử (không nạp vào trang)
```
Thêm file mới thì thêm thẻ `<script src="...">` vào `index.html`, đặt **trước** `js/app.js`.

---

## 4. ĐỊNH DẠNG DỮ LIỆU & DÀN Ý ĐÃ THỐNG NHẤT

**Giai đoạn**
```js
TOEIC.addStage({ id: 1, name: "Nền tảng", range: [0, 300], target: 300, gateTest: "mini1", desc: "…",
  units: [{ id: "u1", title: "Chặng 1 – Phát âm", checkpoint: "cp-s1-u1" }, …] });
```
Năm giai đoạn: 1 [0,300] · 2 [300,500] · 3 [500,700] · 4 [700,850] · 5 [850,990]. Giai đoạn 2–5 tạm thời `gateTest: null`.

**Bài học**
```js
TOEIC.addLesson({ id: "s1-l1", stage: 1, unit: "u1", order: 1, minutes: 15, title: "…",
  sections: [{ h: "Tiêu đề", html: "<p>…</p>" }],
  ipa: [{ s: "/iː/", ex: "see, meet, sheep", note: "i kéo dài" }],    // tùy chọn
  examples: [{ en: "…", say: "câu để đọc (nếu en có ký hiệu IPA)", vi: "…" }],
  vocab: ["word|pos|/ipa/|nghĩa|đồng nghĩa (— nếu không có)|câu ví dụ|bản dịch"],
  exercises: [ /* nhóm câu hỏi, xem bên dưới */ ] });
```
Giá trị `pos` hợp lệ: `n`, `v`, `adj`, `adv`, `prep`, `conj`, `pron`, `phr v`, `phr`. Trong file dữ liệu: chuỗi để trong nháy kép, trích dẫn bên trong dùng “ ”.

**Nhóm câu hỏi** (dùng chung cho bài tập, luyện Part, đề thi):
```js
{ p: 5, q: "The bank ___ at 8:30.", c: ["open","opens","is opening","opening"], a: 1, e: "Giải thích…", t: "thi" }  // câu đơn
{ p: 2, say: "Where is the meeting?", c: ["…","…","…"], a: 0, e: "…", t: "hoi-dap" }                              // Part 2: 3 lựa chọn
{ p: 1, scene: "Mô tả tranh…", svg: "man_cup", c: [4 câu], a: 1, e: "…" }                                          // Part 1
{ p: 3, script: [["W","…"],["M","…"]], vi: "bản dịch", graphic: "<table>…</table>", qs: [{ q, c, a, e, t }, …] } // Part 3/4 (Part 4 dùng vai "N")
{ p: 7, passages: ["<p>…</p>", "<p>…</p>"], qs: [ … ] }                                                         // Part 6/7, đoạn kép, đoạn ba
```
- `p: 0` là bài tập nền tảng, không tính vào thống kê Part. Có `say` thì hiện nút nghe.
- `lvl` là mức độ khó 1–5. Ở màn Luyện Part, câu có `lvl` lớn hơn giai đoạn hiện tại sẽ bị ẩn.
- `t` là nhãn loại lỗi, lấy trong `data/format.js`.

**Đề thi / kiểm tra**
```js
TOEIC.addTest({ id: "mini1", kind: "mini", title: "Thi thử mini số 1", timing: { L: 720, R: 1140 }, groups: [ … ] });
```
- `kind` là một trong: `placement`, `checkpoint` (không cần `timing`, đạt khi ≥ 80%), `mini`, `full`.
- Nhóm có audio tự xếp vào Listening, còn lại vào Reading.
- Đề đầy đủ: `timing: {L: 2700, R: 4500}`, gồm P1 6, P2 25, P3 39, P4 30, P5 30, P6 16, P7 54 câu.

**Luyện theo Part:** `TOEIC.addPractice(5, [ nhóm, … ])`

**Dàn ý Giai đoạn 1 (22 bài)** – id bài giữ nguyên, số “Bài N” trong tiêu đề theo thứ tự học:
- u1 Phát âm: s1-l1..l3 (Bài 1–3)
- u2 Ngữ pháp nền: s1-l4..l9 (Bài 4–9)
- u2b Từ loại & các kiểu câu (`data/stage1/unit2b-tu-loai-cau.js`, checkpoint `cp-s1-u2b`): s1-l13 Tính từ, trạng từ & vị trí từ loại · s1-l14 Phủ định, câu hỏi, There is/are · s1-l15 Động từ khuyết thiếu · s1-l16 Lượng từ · s1-l17 So sánh (Bài 10–14)
- u2c Động từ & mệnh đề (`data/stage1/unit2c-dong-tu-menh-de.js`, checkpoint `cp-s1-u2c`): s1-l23 Quá khứ tiếp diễn & động từ trạng thái (Bài 15, order 0) · s1-l18 Hiện tại hoàn thành · s1-l19 To V / V-ing · s1-l20 Bị động cơ bản · s1-l21 Liên từ · s1-l22 Đại từ quan hệ (Bài 16–20)
- u3 Từ vựng & làm quen câu hỏi: s1-l10..l12 (Bài 21–23)

Dàn ý gốc 12 bài (u1–u3):
- u1 Phát âm:
  - l1 IPA nguyên âm
  - l2 Phụ âm khó (th, sh, âm cuối, đuôi -s/-ed)
  - l3 Trọng âm & nối âm
- u2 Ngữ pháp nền:
  - l4 Cấu trúc câu & to be
  - l5 Danh từ số ít/nhiều, mạo từ
  - l6 Đại từ
  - l7 Hiện tại đơn/tiếp diễn
  - l8 Quá khứ đơn & tương lai
  - l9 Giới từ thời gian/nơi chốn
- u3 Từ vựng & làm quen câu hỏi:
  - l10 Từ vựng văn phòng
  - l11 Câu hỏi Wh- (nền cho Part 2)
  - l12 Part 1 + email ngắn Part 7

**Dàn ý Giai đoạn 2 (23 bài)** – số “Bài N” trong tiêu đề theo thứ tự học, id giữ nguyên
- u1 Chiến lược đề thi: s2-l1 Bài 1 Cấu trúc đề & cách tính điểm
- u2 Ngữ pháp Part 5 cốt lõi (`data/stage2/unit2-ngu-phap-cot-loi.js`, checkpoint `cp-s2-u2`): s2-l2 Từ loại qua đuôi từ · s2-l3 Danh từ người/vật, -ed/-ing, danh từ ghép · s2-l4 Hòa hợp S–V · s2-l5 Thì nâng cao · s2-l16 Tương lai tiếp diễn & cách nói tương lai · s2-l17 Hoàn thành tiếp diễn, tương lai trong quá khứ, lùi thì (`unit2b-thi-nang-cao.js`, order 4.1 / 4.2) · s2-l6 Bị động nâng cao · s2-l7 Đại từ nâng cao
- u3 Ngữ pháp Part 5–6 mở rộng (`unit3-ngu-phap-mo-rong-a.js`: l8–l11, `-b.js`: l12–l15 + checkpoint `cp-s2-u3`): s2-l8 Giới từ đi kèm · s2-l9 Liên từ phụ thuộc & trạng từ nối · s2-l10 MĐQH nâng cao · s2-l11 Mệnh đề danh từ · s2-l12 Phân từ & rút gọn · s2-l13 Cấu trúc đặc biệt · s2-l14 So sánh nâng cao · s2-l15 Modal nâng cao & giả định
- u4 Chiến lược từng Part (`unit4-chien-luoc-nghe.js`: s2-l18 Part 1, s2-l19 Part 2, s2-l20 Part 3–4; `unit4-chien-luoc-doc.js`: s2-l21 Part 5, s2-l22 Part 6, s2-l23 Part 7 + checkpoint `cp-s2-u4`). gateTest GĐ2 = `mini2`.

**Từ vựng theo chủ đề:** `TOEIC.addVocab(stage, [...], "ma-chu-de")`, mã chủ đề ở `TOEIC.VOCAB_TOPICS` (data/format.js). Trang Từ vựng có bộ lọc chủ đề và nút thêm cả chủ đề vào ôn tập. Xem từ đã có: `node tools/listwords.js . [--topic]`.

**Giai đoạn 3:** u1 Ngữ pháp trung cấp: s3-l1 Bài 1 Câu điều kiện · s3-l2 Bài 2 Chọn thì theo ngữ cảnh Part 5–6 (`data/stage3/unit1-thi-tong-hop.js`, checkpoint `cp-s3-u1`) · s3-l3 Bài 3 Đảo ngữ điều kiện.

**Giai đoạn 3 (tiếp):** u2 Ngữ pháp trung cấp 2: s3-l4 Bài 4 To V/V-ing nâng cao · s3-l5 Bài 5 Mạo từ & lượng từ nâng cao · s3-l6 Bài 6 Liên từ nâng cao (checkpoint `cp-s3-u2`).

**Giai đoạn 4:** u1 Ngữ pháp nâng cao: s4-l1 Bài 1 Đảo ngữ (`data/stage4/stage4.js`) · s4-l2 Bài 2 Cấu trúc nâng cao (`data/stage4/unit1-cau-truc-nang-cao.js`); checkpoint `cp-s4-u1` (bài 1–2). u2 Từ vựng – ngữ pháp Part 5 cấp cao: s4-l3 Bài 3 Cặp từ dễ nhầm · s4-l4 Bài 4 Trạng từ · s4-l5 Bài 5 Collocation · s4-l6 Bài 6 Giới từ đi kèm (checkpoint `cp-s4-u2`).

**Khi deploy:** tăng số `?v=` trong mọi thẻ script/link của `index.html` để trình duyệt không trộn file cũ và mới. Nếu khởi động lỗi, trang hiện thông báo kèm nút Tải lại (xem script đầu `index.html`, `window.__booted`).

**Mẫu ở các giai đoạn sau**
- s2-l1 Cấu trúc đề & cách tính điểm
- s2-l2 Từ loại qua đuôi từ
- s3-l1 Câu điều kiện
- s4-l1 Đảo ngữ
- s5-l1 Bẫy tinh vi & paraphrase

**Đề Bài test xếp lớp (30 câu, L 10 phút / R 15 phút)**
- Nghe: P1 2, P2 5, P3 1 hội thoại (3 câu), P4 1 bài nói (3 câu).
- Đọc: P5 10, P6 1 đoạn (4 câu), P7 1 đoạn (3 câu).
- Kết quả xếp giai đoạn: dưới 300 → GĐ1; dưới 500 → GĐ2; dưới 700 → GĐ3; dưới 850 → GĐ4; còn lại → GĐ5.

**Đề Thi thử mini (50 câu, L 12 phút / R 19 phút)**
- Nghe: P1 3, P2 7, P3 9 (3 hội thoại, 1 hội thoại kèm bảng), P4 6 (2 bài nói).
- Đọc: P5 12, P6 4, P7 9 (một chuỗi tin nhắn 4 câu + một đoạn kép 5 câu).

---

## 5. CÁCH THÊM NỘI DUNG
- **Bài học mới:**
  1. Tạo file trong `data/stageN/`.
  2. Gọi `TOEIC.addLesson({...})` với `stage`, `unit`, `order` đúng.
  3. Thêm thẻ script vào `index.html`.
  4. Thứ tự mở khóa tính theo vị trí chặng, sau đó theo `order`.
- **Từ vựng ngoài bài học:** `TOEIC.addVocab(1, ["word|pos|/ipa/|nghĩa|đồng nghĩa|ví dụ|dịch", …])`. Người học bấm “+ Thêm vào ôn tập” ở mục Từ vựng.
- **Đề thi mới:** tạo `data/tests/ten-de.js` gọi `TOEIC.addTest`. Đề tự hiện ở mục Thi thử.
- **Id phải duy nhất và cố định:** mọi nhóm câu phải ghi `id:` trong dữ liệu (validate.js báo lỗi nếu thiếu). id nhóm câu hỏi và id đề không được trùng, vì sổ lỗi sai và lịch sử thi lưu theo id. Mở Console (F12) để xem cảnh báo `[TOEIC]` khi trùng id hoặc đáp án sai cấu trúc.

---

## 6. ĐƯA LÊN MẠNG
- **Netlify:** vào https://app.netlify.com/drop rồi kéo thả cả thư mục `toeic-web`. Web lên ngay.
- **Vercel:** đưa thư mục lên một repo GitHub. Vào https://vercel.com → Add New → Project → Import repo. Framework Preset chọn **Other**, để trống Build Command → Deploy.
- Mọi đường dẫn đều tương đối, nên mở `index.html` trực tiếp trên máy cũng chạy được.

## 7. LƯU Ý
- Điểm hiển thị chỉ là **ước lượng** theo tỉ lệ đúng, không phải bảng quy đổi của ETS.
- Số giọng đọc phụ thuộc trình duyệt. Chrome, Edge và Safari thường có nhiều giọng tiếng Anh.
- Toàn bộ câu hỏi là tự soạn, không chép đề thi thật của ETS.

Khi muốn làm tiếp: gửi lại file .zip này và nhắn “làm tiếp theo README”.
