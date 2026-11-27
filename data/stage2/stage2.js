/* Giai đoạn 2 – Làm quen đề (300 → 500). Hiện có khung + 2 bài mẫu. */
TOEIC.addStage({
  id: 2, name: "Làm quen đề thi", range: [300, 500], target: 500, gateTest: null,
  desc: "Nắm cấu trúc đề, chiến lược từng Part và toàn bộ ngữ pháp Part 5–6 ở mức trung cấp: từ loại, hòa hợp chủ ngữ – động từ, thì nâng cao, bị động, đại từ, giới từ, liên từ & trạng từ nối, mệnh đề quan hệ, mệnh đề danh từ, rút gọn mệnh đề, cấu trúc đặc biệt, so sánh và giả định.",
  units: [
    { id: "u1", title: "Chặng 1 – Chiến lược đề thi" },
    { id: "u2", title: "Chặng 2 – Ngữ pháp Part 5 cốt lõi", checkpoint: "cp-s2-u2" },
    { id: "u3", title: "Chặng 3 – Ngữ pháp Part 5–6 mở rộng", checkpoint: "cp-s2-u3" }
  ]
});

TOEIC.addLesson({
  id: "s2-l1", stage: 2, unit: "u1", order: 1, minutes: 20, title: "Bài 1. Cấu trúc đề TOEIC & cách tính điểm",
  sections: [
    { h: "Đề thi gồm 2 phần, 7 Part", html: "<table><tr><th>Phần</th><th>Part</th><th>Nội dung</th><th>Số câu</th></tr><tr><td rowspan=\"4\">Listening<br>~45 phút</td><td>1</td><td>Mô tả tranh</td><td>6</td></tr><tr><td>2</td><td>Hỏi – đáp (3 lựa chọn)</td><td>25</td></tr><tr><td>3</td><td>Hội thoại ngắn (có câu kèm biểu đồ)</td><td>39</td></tr><tr><td>4</td><td>Bài nói ngắn</td><td>30</td></tr><tr><td rowspan=\"3\">Reading<br>75 phút</td><td>5</td><td>Điền từ vào câu</td><td>30</td></tr><tr><td>6</td><td>Điền vào đoạn văn (có câu chèn)</td><td>16</td></tr><tr><td>7</td><td>Đọc hiểu: đoạn đơn, đoạn kép, đoạn ba</td><td>54</td></tr></table>" },
    { h: "Cách tính điểm", html: "<p>Mỗi phần Listening và Reading được quy đổi riêng ra thang <b>5–495</b>, tổng <b>10–990</b>. Không có điểm âm: <b>sai không bị trừ</b>, nên đừng bỏ trống câu nào. Bảng quy đổi thật của ETS khác nhau theo từng đề; điểm trong trang web này chỉ là <b>ước lượng</b>.</p>" },
    { h: "Phân bổ thời gian Reading", html: "<p>Gợi ý cho 75 phút: Part 5 khoảng <b>10 phút</b> (~20 giây/câu), Part 6 khoảng <b>8 phút</b>, Part 7 khoảng <b>55 phút</b>. Câu nào quá 1 phút thì đoán, đánh dấu ★ rồi làm tiếp, còn thời gian thì quay lại.</p>" }
  ],
  examples: [
    { en: "Listening: 100 questions · Reading: 100 questions", vi: "Nghe: 100 câu · Đọc: 100 câu" },
    { en: "Total score: 10–990", vi: "Tổng điểm: 10–990" }
  ],
  vocab: [
    "score|n|/skɔː(r)/|điểm số|mark|Her TOEIC score improved by 150 points.|Điểm TOEIC của cô ấy tăng 150 điểm.",
    "section|n|/ˈsekʃn/|phần, mục|part|The reading section takes 75 minutes.|Phần đọc kéo dài 75 phút.",
    "passage|n|/ˈpæsɪdʒ/|đoạn văn|text|Read the passage and answer the questions.|Đọc đoạn văn và trả lời câu hỏi.",
    "instructions|n|/ɪnˈstrʌkʃnz/|hướng dẫn|directions|Follow the instructions carefully.|Làm theo hướng dẫn một cách cẩn thận.",
    "guess|v|/ɡes/|đoán|—|If you don't know the answer, guess.|Nếu không biết đáp án, hãy đoán.",
    "skip|v|/skɪp/|bỏ qua|—|Skip difficult questions and come back later.|Bỏ qua câu khó và quay lại sau."
  ],
  exercises: [
    { id: "s2-l1-ex0", q: "Phần Listening của đề TOEIC L&R có bao nhiêu câu?", c: ["50", "100", "120", "200"], a: 1, e: "Listening <b>100 câu</b> (Part 1–4), Reading cũng 100 câu (Part 5–7).", t: "de-thi" },
    { id: "s2-l1-ex1", q: "Part nào chỉ có 3 lựa chọn A, B, C?", c: ["Part 1", "Part 2", "Part 5", "Part 7"], a: 1, e: "<b>Part 2</b> (Hỏi – đáp) chỉ có 3 lựa chọn; các Part còn lại có 4.", t: "de-thi" },
    { id: "s2-l1-ex2", q: "Tổng điểm TOEIC Listening & Reading nằm trong khoảng nào?", c: ["0–990", "10–990", "5–495", "0–1000"], a: 1, e: "Mỗi phần 5–495, tổng <b>10–990</b>.", t: "de-thi" },
    { id: "s2-l1-ex3", q: "Khi không biết đáp án, bạn nên làm gì?", c: ["Bỏ trống câu đó", "Đoán một đáp án, vì sai không bị trừ điểm", "Tô hai đáp án", "Chờ đến cuối giờ mới làm"], a: 1, e: "TOEIC <b>không trừ điểm</b> câu sai, bỏ trống thì chắc chắn mất điểm.", t: "de-thi" }
  ]
});

TOEIC.addLesson({
  id: "s2-l2", stage: 2, unit: "u2", order: 1, minutes: 25, title: "Bài 2. Từ loại qua đuôi từ",
  sections: [
    { h: "Nhận diện từ loại qua đuôi", html: "<table><tr><th>Từ loại</th><th>Đuôi hay gặp</th><th>Ví dụ</th></tr><tr><td>Danh từ</td><td>-tion, -sion, -ment, -ness, -ity, -ance/-ence, -er/-or (người)</td><td>decision, payment, productivity, assistance</td></tr><tr><td>Tính từ</td><td>-ful, -less, -ive, -able/-ible, -al, -ous, -ic</td><td>successful, productive, available, various</td></tr><tr><td>Trạng từ</td><td>-ly (tính từ + ly)</td><td>carefully, quickly, efficiently</td></tr><tr><td>Động từ</td><td>-ize, -ify, -en, -ate</td><td>organize, simplify, widen, create</td></tr></table>" },
    { h: "Vị trí quyết định từ loại", html: "<ul><li>Sau <b>a/an/the</b>, tính từ sở hữu, hoặc sau tính từ → <b>danh từ</b>: a <i>decision</i>, our <i>productivity</i>.</li><li>Trước danh từ, hoặc sau <b>to be / become / seem</b> → <b>tính từ</b>: a <i>successful</i> launch; it is <i>available</i>.</li><li>Bổ nghĩa cho động từ, tính từ hoặc cả câu → <b>trạng từ</b>: read <i>carefully</i>; <i>extremely</i> busy.</li></ul><p>Mẹo Part 5: thấy 4 đáp án cùng gốc khác đuôi thì <b>chỉ cần xét chỗ trống</b>, không cần dịch cả câu.</p>" }
  ],
  examples: [
    { en: "The board made a quick <b>decision</b>.", vi: "Hội đồng quản trị đã ra quyết định nhanh chóng." },
    { en: "It was a <b>successful</b> product launch.", vi: "Đó là một buổi ra mắt sản phẩm thành công." },
    { en: "Please drive <b>carefully</b>.", vi: "Vui lòng lái xe cẩn thận." }
  ],
  vocab: [
    "decision|n|/dɪˈsɪʒn/|quyết định|choice|The final decision will be made next week.|Quyết định cuối cùng sẽ được đưa ra vào tuần sau.",
    "successful|adj|/səkˈsesfl/|thành công|—|The event was very successful.|Sự kiện đã rất thành công.",
    "productivity|n|/ˌprɒdʌkˈtɪvəti/|năng suất|efficiency|New software improved productivity.|Phần mềm mới đã cải thiện năng suất.",
    "careful|adj|/ˈkeəfl/|cẩn thận|cautious|Be careful with the glass items.|Hãy cẩn thận với các món đồ thủy tinh.",
    "expand|v|/ɪkˈspænd/|mở rộng|grow|The company plans to expand overseas.|Công ty dự định mở rộng ra nước ngoài.",
    "responsibility|n|/rɪˌspɒnsəˈbɪləti/|trách nhiệm|duty|Training new staff is her responsibility.|Đào tạo nhân viên mới là trách nhiệm của cô ấy.",
    "competitive|adj|/kəmˈpetətɪv/|cạnh tranh|—|We offer competitive prices.|Chúng tôi đưa ra giá cạnh tranh.",
    "assistance|n|/əˈsɪstəns/|sự hỗ trợ|help|Thank you for your assistance.|Cảm ơn sự hỗ trợ của bạn."
  ],
  exercises: [
    { id: "s2-l2-ex0", p: 5, q: "The company made a ___ to expand into Asia.", c: ["decide", "decisive", "decision", "decisively"], a: 2, e: "Sau mạo từ “a” cần danh từ → <b>decision</b>.", t: "tu-loai" },
    { id: "s2-l2-ex1", p: 5, q: "Ms. Tran is a very ___ negotiator.", c: ["success", "successful", "succeed", "successfully"], a: 1, e: "Trước danh từ “negotiator” cần tính từ → <b>successful</b>.", t: "tu-loai" },
    { id: "s2-l2-ex2", p: 5, q: "Please read the safety instructions ___.", c: ["careful", "care", "carefully", "carefulness"], a: 2, e: "Bổ nghĩa cho động từ “read” → trạng từ <b>carefully</b>.", t: "tu-loai" },
    { id: "s2-l2-ex3", p: 5, q: "The new system increased ___ by 20 percent.", c: ["productive", "productivity", "produce", "productively"], a: 1, e: "Sau động từ “increased” cần tân ngữ là danh từ → <b>productivity</b>.", t: "tu-loai" }
  ]
});
