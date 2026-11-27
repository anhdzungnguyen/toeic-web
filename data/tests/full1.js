/* Đề thi thử đầy đủ số 1 – 200 câu, Listening 45 phút, Reading 75 phút.
   Câu hỏi nằm ở các file nạp TRƯỚC file này (mỗi file gán một phần vào TOEIC.full1):
   full1-p12.js (P1 6 + P2 25) · full1-p3.js (P3 13 hội thoại × 3) · full1-p4.js (P4 10 bài nói × 3)
   · full1-p56.js (P5 30 + P6 4 đoạn × 4) · full1-p7.js (P7 54: đoạn đơn 29, đoạn kép 2 × 5, đoạn ba 3 × 5).
   Id nhóm cố định dạng full1-p<Part>-<số>. */
(function () {
  const F = TOEIC.full1 || {};
  TOEIC.addTest({
    id: "full1", kind: "full", title: "Thi thử đầy đủ số 1",
    desc: "Đề đầy đủ 200 câu theo đúng cấu trúc TOEIC Listening & Reading: Listening 100 câu (45 phút), Reading 100 câu (75 phút). Hãy làm liền một lượt như thi thật.",
    timing: { L: 2700, R: 4500 },
    groups: [].concat(F.p12 || [], F.p3 || [], F.p4 || [], F.p56 || [], F.p7 || [])
  });
})();
