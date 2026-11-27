/* Giai đoạn 1 – 3 bài kiểm tra cuối chặng (mỗi bài 8 câu, đạt từ 80%) */
TOEIC.addTest({
  id: "cp-s1-u1", kind: "checkpoint", title: "Kiểm tra Chặng 1 – Phát âm",
  desc: "Ôn lại nguyên âm, phụ âm khó, đuôi -s/-ed, trọng âm và nối âm (bài 1–3).",
  groups: [
    { id: "cp-s1-u1-g0", say: "I need to check the schedule.", q: "Nghe câu và chọn từ bạn nghe được.", c: ["chick", "check", "cheek", "shake"], a: 1, e: "Câu là “I need to <b>check</b> the schedule” – /tʃek/.", t: "bay-am" },
    { id: "cp-s1-u1-g1", q: "Từ nào có nguyên âm ngắn /ɪ/?", c: ["seat", "leave", "ship", "food"], a: 2, e: "<b>ship</b> /ʃɪp/. seat, leave có /iː/ dài; food có /uː/.", t: "phat-am" },
    { id: "cp-s1-u1-g2", q: "Đuôi -ed trong “needed” đọc là gì?", c: ["/t/", "/d/", "/ɪd/"], a: 2, e: "need kết thúc bằng /d/ → -ed đọc <b>/ɪd/</b>.", t: "phat-am" },
    { id: "cp-s1-u1-g3", q: "Đuôi -ed trong “closed” đọc là gì?", c: ["/t/", "/d/", "/ɪd/"], a: 1, e: "close /kləʊz/ kết thúc bằng /z/ (hữu thanh) → -ed đọc <b>/d/</b>.", t: "phat-am" },
    { id: "cp-s1-u1-g4", q: "Đuôi -es trong “changes” đọc là gì?", c: ["/s/", "/z/", "/ɪz/"], a: 2, e: "change kết thúc bằng /dʒ/ → -es đọc <b>/ɪz/</b>.", t: "phat-am" },
    { id: "cp-s1-u1-g5", q: "Cách nhấn đúng của động từ “attend” là gì?", c: ["AT-tend", "at-TEND"], a: 1, e: "Động từ 2 âm tiết thường nhấn âm sau: at<b>TEND</b> /əˈtend/.", t: "phat-am" },
    { id: "cp-s1-u1-g6", q: "Từ nào nhấn trọng âm ở âm tiết ĐẦU?", c: ["available", "employee", "office", "attend"], a: 2, e: "<b>OF</b>fice /ˈɒfɪs/. available /əˈveɪləbl/ và attend /əˈtend/ nhấn âm thứ hai; employee nhấn âm thứ hai hoặc thứ ba tùy giọng.", t: "phat-am" },
    { id: "cp-s1-u1-g7", say: "Please pick it up at the front desk.", q: "Nghe và chọn câu bạn nghe được.", c: ["Please pick up the front desk.", "Please put it up at the front desk.", "Please pick it at the front desk.", "Please pick it up at the front desk."], a: 3, e: "“pick‿it‿up” đọc nối thành “pi-ki-tắp”.", t: "nghe-chi-tiet" }
  ]
});

TOEIC.addTest({
  id: "cp-s1-u2", kind: "checkpoint", title: "Kiểm tra Chặng 2 – Ngữ pháp nền",
  desc: "To be, danh từ và mạo từ, đại từ, các thì cơ bản, giới từ (bài 4–9).",
  groups: [
    { id: "cp-s1-u2-g0", q: "Ms. Nguyen ___ the new sales manager.", c: ["are", "is", "am", "be"], a: 1, e: "Chủ ngữ số ít → <b>is</b>.", t: "ngu-phap" },
    { id: "cp-s1-u2-g1", q: "Could you give me some ___ about the job?", c: ["advices", "advice", "an advice", "many advice"], a: 1, e: "<b>advice</b> không đếm được: không thêm -s, không đi với an/many.", t: "ngu-phap" },
    { id: "cp-s1-u2-g2", q: "I'll send ___ the file this afternoon.", c: ["you", "your", "yours", "yourself"], a: 0, e: "Sau động từ “send” cần tân ngữ → <b>you</b>.", t: "dai-tu" },
    { id: "cp-s1-u2-g3", q: "The employees prepared the room ___.", c: ["them", "themselves", "their", "they"], a: 1, e: "Cuối câu, nghĩa “tự họ làm” → đại từ phản thân <b>themselves</b>.", t: "dai-tu" },
    { id: "cp-s1-u2-g4", q: "The shuttle bus ___ every 30 minutes.", c: ["leave", "leaving", "leaves", "are leave"], a: 2, e: "Lịch cố định, lặp lại → hiện tại đơn; chủ ngữ số ít → <b>leaves</b>.", t: "thi" },
    { id: "cp-s1-u2-g5", q: "We ___ the contract yesterday.", c: ["sign", "signed", "will sign", "are signing"], a: 1, e: "“yesterday” → quá khứ đơn: <b>signed</b>.", t: "thi" },
    { id: "cp-s1-u2-g6", q: "The store is open ___ 9 P.M. every day.", c: ["by", "until", "during", "between"], a: 1, e: "Trạng thái mở cửa kéo dài đến 9 giờ → <b>until</b>.", t: "gioi-tu" },
    { id: "cp-s1-u2-g7", q: "Mr. Ali will arrive ___ June 3.", c: ["in", "at", "on", "during"], a: 2, e: "Ngày cụ thể → <b>on</b> June 3.", t: "gioi-tu" }
  ]
});

TOEIC.addTest({
  id: "cp-s1-u3", kind: "checkpoint", title: "Kiểm tra Chặng 5 – Từ vựng & làm quen câu hỏi",
  desc: "Từ vựng văn phòng, câu hỏi Wh-, Part 1 và đọc thông báo ngắn (bài 21–23).",
  groups: [
    { id: "cp-s1-u3-g0", q: "Please call ___ 302 if the printer breaks.", c: ["extension", "applicant", "salary", "résumé"], a: 0, e: "call <b>extension</b> 302 = gọi số máy lẻ 302.", t: "tu-vung" },
    { id: "cp-s1-u3-g1", q: "All ___ must submit a résumé before the interview.", c: ["cabinets", "memos", "applicants", "supplies"], a: 2, e: "Người nộp sơ yếu lý lịch là <b>applicants</b> (ứng viên).", t: "tu-vung" },
    { id: "cp-s1-u3-g2", p: 2, say: "When is your dentist appointment?", c: ["At the dental clinic.", "Yes, I have one.", "At four this afternoon."], a: 2, e: "When → thời gian: <b>At four this afternoon</b>.", t: "hoi-dap" },
    { id: "cp-s1-u3-g3", p: 2, say: "Who can give me directions to the station?", c: ["I'll direct the play.", "The receptionist can help you.", "At the station."], a: 1, e: "Who → người: <b>The receptionist</b>. (A) bẫy âm giống directions – direct; (C) lặp từ “station”.", t: "hoi-dap" },
    { id: "cp-s1-u3-g4", p: 2, say: "How much is the refund?", c: ["I found it.", "The full price you paid.", "Much better, thanks."], a: 1, e: "How much → số tiền: <b>The full price you paid</b>. (A) bẫy âm refund – found.", t: "bay-am" },
    { id: "cp-s1-u3-g5", p: 1, scene: "Một người phụ nữ ngồi ở bàn làm việc, đang gõ bàn phím trước màn hình máy tính. Bên phải có chồng sách.", svg: "woman_desk",
      c: ["She is standing next to the desk.", "She is cleaning the monitor.", "She is typing on a keyboard.", "She is stacking some books."], a: 2,
      e: "Cô ấy đang <b>gõ bàn phím</b>. Cô ấy ngồi chứ không đứng; chồng sách có trong tranh nhưng cô ấy không xếp sách.", t: "mo-ta-tranh" },
    { id: "cp-s1-u3-g6", p: 7, passage: "<p><b>NOTICE – Parking Lot Repairs</b></p><p>The parking lot behind Building A will be closed from Monday, June 10, to Wednesday, June 12, for repairs. During this time, staff may park in the lot across from the main entrance.</p><p>We apologize for the inconvenience.</p><p>– Facilities Department</p>",
      qs: [
        { q: "Why will the parking lot be closed?", c: ["For a company event", "For repairs", "Because it is full", "Because of a holiday"], a: 1, e: "“…will be closed … <b>for repairs</b>.”", t: "doc-hieu" },
        { q: "Where can staff park from June 10 to June 12?", c: ["Behind Building A", "On the street", "In the lot across from the main entrance", "In an underground garage"], a: 2, e: "“staff may park in the lot <b>across from the main entrance</b>.”", t: "doc-hieu" }
      ] }
  ]
});
