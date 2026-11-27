/* Giai đoạn 5 – Về đích (850 → 990). Hiện có khung + 1 bài mẫu. */
TOEIC.addStage({
  id: 5, name: "Về đích", range: [850, 990], target: 990, gateTest: null,
  desc: "Bẫy tinh vi, paraphrase, câu hỏi suy luận và đề thi đầy đủ 200 câu với tốc độ thật. (Đang soạn: hiện có 1 bài mẫu.)",
  units: [{ id: "u1", title: "Chặng 1 – Bẫy & paraphrase" }]
});

TOEIC.addLesson({
  id: "s5-l1", stage: 5, unit: "u1", order: 1, minutes: 30, title: "Bẫy tinh vi & paraphrase",
  sections: [
    { h: "Paraphrase – chìa khóa của Part 7", html: "<p>Đáp án đúng gần như <b>không bao giờ</b> chép nguyên văn từ bài. Nó dùng từ đồng nghĩa hoặc khái quát hóa:</p><ul><li>“reimbursed for commuting expenses” → <i>compensation for travel costs</i></li><li>“under consideration” → <i>has not been finalized</i></li><li>“relocate” → <i>move to a new location</i></li></ul><p>Ngược lại, đáp án <b>chép đúng từ trong bài</b> nhưng sai ý là bẫy hay gặp nhất.</p>" },
    { h: "Các bẫy tinh vi khác", html: "<ul><li><b>Đúng thông tin nhưng sai đối tượng</b>: nói về chi nhánh A nhưng đáp án gán cho chi nhánh B.</li><li><b>Sai thời điểm</b>: “is under consideration” (đang xem xét) và “will begin” (chắc chắn sẽ bắt đầu) khác nhau.</li><li><b>Quá mạnh</b>: đáp án có “all, always, never, only” trong khi bài chỉ nói “some, often”.</li><li><b>Câu hỏi NOT</b>: tìm 3 ý có trong bài để loại, ý còn lại là đáp án.</li></ul>" }
  ],
  examples: [
    { en: "Bài: “Attendance is <b>mandatory</b>.” → Đáp án: “All staff are <b>required</b> to attend.”", vi: "mandatory = required (bắt buộc)" },
    { en: "Bài: “A shuttle service is <b>under consideration</b>.” → Đáp án: “It has <b>not been finalized</b>.”", vi: "đang được xem xét = chưa được chốt" }
  ],
  vocab: [
    "indicate|v|/ˈɪndɪkeɪt/|cho thấy, chỉ ra|show|What is indicated about the company?|Điều gì được nêu về công ty?",
    "imply|v|/ɪmˈplaɪ/|ngụ ý|suggest|What does the writer imply?|Người viết ngụ ý điều gì?",
    "merger|n|/ˈmɜːdʒə(r)/|sự sáp nhập|—|The merger was completed in March.|Việc sáp nhập hoàn tất vào tháng Ba.",
    "relocate|v|/ˌriːləʊˈkeɪt/|di dời, chuyển địa điểm|move|The factory will relocate to Binh Duong.|Nhà máy sẽ chuyển đến Bình Dương.",
    "defective|adj|/dɪˈfektɪv/|bị lỗi|faulty|Defective items can be exchanged.|Hàng bị lỗi có thể được đổi.",
    "reimburse|v|/ˌriːɪmˈbɜːs/|hoàn trả (chi phí)|refund|Travel expenses will be reimbursed.|Chi phí đi lại sẽ được hoàn trả.",
    "mandatory|adj|/ˈmændətəri/|bắt buộc|required|Safety training is mandatory.|Đào tạo an toàn là bắt buộc.",
    "tentative|adj|/ˈtentətɪv/|tạm thời, chưa chính thức|provisional|The schedule is still tentative.|Lịch trình vẫn chưa chính thức."
  ],
  exercises: [
    { p: 7, passage: "<p><b>MEMO</b><br><b>To:</b> All employees<br><b>From:</b> Hiroshi Sato, Operations Director<br><b>Re:</b> Relocation of the Customer Support Team</p><p>As part of our ongoing expansion, the Customer Support Team will relocate from the second floor of our Elm Street building to our newly renovated facility on Harbor Road, effective October 1. Staff members affected by the move will be reimbursed for any additional commuting expenses for the first three months.</p><p>A shuttle service between the two buildings is also under consideration. Further details will be shared at a mandatory meeting on September 15.</p>",
      qs: [
        { q: "What is the main purpose of the memo?", c: ["To announce a team's move to a new location", "To introduce a new operations director", "To explain a new expense policy for all staff", "To request volunteers for a shuttle service"], a: 0, e: "Câu chính: Customer Support Team “will <b>relocate</b>…” → thông báo chuyển địa điểm.", t: "y-chinh" },
        { q: "What is suggested about the shuttle service?", c: ["It will begin on October 1.", "It has not been finalized.", "It will be free for all employees.", "It has been canceled."], a: 1, e: "“<b>under consideration</b>” = đang xem xét → <b>chưa được chốt</b>. (A) là bẫy sai thời điểm.", t: "paraphrase" },
        { q: "What are affected staff members offered?", c: ["A higher salary", "Compensation for extra travel costs", "A reserved parking space", "Three extra vacation days"], a: 1, e: "“reimbursed for any additional commuting expenses” → <b>compensation for extra travel costs</b>.", t: "paraphrase" },
        { q: "The word “mandatory” in paragraph 2 is closest in meaning to", c: ["optional", "required", "brief", "weekly"], a: 1, e: "mandatory = <b>required</b> (bắt buộc).", t: "tu-vung" }
      ] }
  ]
});
