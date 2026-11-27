/* Giai đoạn 3 – Tăng tốc (500 → 700). Hiện có khung + 1 bài mẫu. */
TOEIC.addStage({
  id: 3, name: "Tăng tốc", range: [500, 700], target: 700, gateTest: null,
  desc: "Ngữ pháp trung cấp (câu điều kiện, bị động, mệnh đề quan hệ, so sánh), đoạn kép Part 7 và câu hỏi kèm biểu đồ ở Part 3–4. (Đang soạn: hiện có 2 bài.)",
  units: [{ id: "u1", title: "Chặng 1 – Ngữ pháp trung cấp", checkpoint: "cp-s3-u1" }]
});

TOEIC.addLesson({
  id: "s3-l1", stage: 3, unit: "u1", order: 1, minutes: 25, title: "Bài 1. Câu điều kiện",
  sections: [
    { h: "Ba loại câu điều kiện", html: "<table><tr><th>Loại</th><th>Mệnh đề If</th><th>Mệnh đề chính</th><th>Dùng khi</th></tr><tr><td>1</td><td>If + hiện tại đơn</td><td>will / can + V</td><td>có thể xảy ra ở hiện tại, tương lai</td></tr><tr><td>2</td><td>If + quá khứ đơn (were)</td><td>would / could + V</td><td>không có thật ở hiện tại</td></tr><tr><td>3</td><td>If + had + V3</td><td>would have + V3</td><td>không có thật trong quá khứ</td></tr></table><p>Lưu ý: mệnh đề If <b>không</b> dùng will: <i>If it <s>will rain</s> rains…</i></p>" },
    { h: "Các từ thay cho If", html: "<ul><li><b>Unless</b> = If … not: <i>Unless you have a receipt, we cannot refund you.</i></li><li><b>Provided (that) / As long as</b> = miễn là.</li><li><b>Otherwise</b> = nếu không thì (đứng đầu câu sau).</li><li>Đảo ngữ (hay gặp ở Part 5 khó): <i>Should you need help…</i> = If you should need help…; <i>Had we known…</i> = If we had known…</li></ul>" }
  ],
  examples: [
    { en: "If the shipment <b>arrives</b> late, we <b>will contact</b> the customer.", vi: "Nếu lô hàng đến trễ, chúng tôi sẽ liên hệ khách hàng." },
    { en: "If I <b>had</b> more time, I <b>would join</b> the committee.", vi: "Nếu tôi có nhiều thời gian hơn, tôi sẽ tham gia ủy ban." },
    { en: "<b>Unless</b> the budget <b>is approved</b>, the project will stop.", vi: "Nếu ngân sách không được duyệt, dự án sẽ dừng lại." }
  ],
  vocab: [
    "unless|conj|/ənˈles/|trừ khi, nếu không|if not|Unless you hurry, you'll miss the bus.|Nếu không nhanh lên, bạn sẽ lỡ xe buýt.",
    "provided|conj|/prəˈvaɪdɪd/|miễn là, với điều kiện|as long as|You can leave early provided that your work is done.|Bạn có thể về sớm miễn là đã xong việc.",
    "otherwise|adv|/ˈʌðəwaɪz/|nếu không thì|or else|Save your file; otherwise, you may lose it.|Hãy lưu tệp, nếu không bạn có thể mất nó.",
    "budget|n|/ˈbʌdʒɪt/|ngân sách|—|The project is within budget.|Dự án nằm trong ngân sách.",
    "approve|v|/əˈpruːv/|phê duyệt|authorize|The director approved the plan.|Giám đốc đã phê duyệt kế hoạch.",
    "discount|n|/ˈdɪskaʊnt/|giảm giá|reduction|Members get a 10% discount.|Hội viên được giảm 10%.",
    "increase|v|/ɪnˈkriːs/|tăng|raise|Sales increased by 15 percent.|Doanh số tăng 15 phần trăm.",
    "revenue|n|/ˈrevənjuː/|doanh thu|income|Annual revenue reached $2 million.|Doanh thu năm đạt 2 triệu đô la."
  ],
  exercises: [
    { id: "s3-l1-ex0", p: 5, q: "If the shipment ___ late, we will contact the customer.", c: ["arrives", "arrived", "will arrive", "would arrive"], a: 0, e: "Điều kiện loại 1: If + hiện tại đơn → <b>arrives</b>.", t: "ngu-phap" },
    { id: "s3-l1-ex1", p: 5, q: "If I ___ more time, I would join the planning committee.", c: ["have", "had", "will have", "having"], a: 1, e: "Mệnh đề chính “would join” → điều kiện loại 2: If + quá khứ đơn → <b>had</b>.", t: "ngu-phap" },
    { id: "s3-l1-ex2", p: 5, q: "___ you have a receipt, we cannot give you a refund.", c: ["If", "Unless", "Provided", "Otherwise"], a: 1, e: "Nghĩa: nếu bạn KHÔNG có biên lai thì không hoàn tiền → <b>Unless</b>.", t: "ngu-phap" },
    { id: "s3-l1-ex3", p: 5, q: "Had we known about the delay, we ___ another supplier.", c: ["chose", "will choose", "would have chosen", "have chosen"], a: 2, e: "“Had we known” = If we had known → loại 3 → <b>would have chosen</b>.", t: "ngu-phap" }
  ]
});
