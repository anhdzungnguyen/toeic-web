/* Bài test xếp lớp – 30 câu (Nghe 13 · Đọc 17), Listening 10 phút, Reading 15 phút.
   Câu dễ ở đầu mỗi Part, khó dần về cuối để phân loại trình độ. */
TOEIC.addTest({
  id: "placement", kind: "placement", title: "Bài test xếp lớp",
  desc: "Làm hết sức mình, câu nào không biết thì chọn đại một đáp án. Kết quả chỉ dùng để xếp giai đoạn học phù hợp.",
  timing: { L: 600, R: 900 },
  groups: [
    /* ---------- Part 1 ---------- */
    { id: "placement-g0", p: 1, scene: "Hai người đứng đối diện nhau và bắt tay. Phía sau là một khung cửa sổ.", svg: "handshake",
      c: ["They're shaking hands.", "They're opening a window.", "They're sitting across from each other.", "They're carrying a box."], a: 0,
      e: "Hai người đang <b>bắt tay</b> (shaking hands). Có cửa sổ nhưng không ai mở; họ đứng chứ không ngồi.", t: "mo-ta-tranh" },
    { id: "placement-g1", p: 1, scene: "Một cái thang dựa vào bức tường, bên cạnh có cửa sổ. Không có người trong tranh.", svg: "ladder",
      c: ["A man is climbing a ladder.", "A ladder is leaning against a wall.", "A window is being cleaned.", "A ladder is lying on the ground."], a: 1,
      e: "Tranh không có người → loại (A) và (C). Thang đang <b>dựa vào tường</b> (leaning against a wall), không nằm dưới đất.", t: "mo-ta-tranh" },

    /* ---------- Part 2 ---------- */
    { id: "placement-g2", p: 2, say: "Where should I put these files?", c: ["On my desk, please.", "Yes, they fit well.", "I filed it yesterday."], a: 0, e: "Where → nơi chốn: <b>On my desk</b>. (C) bẫy âm files – filed.", t: "hoi-dap" },
    { id: "placement-g3", p: 2, say: "Would you like coffee or tea?", c: ["Yes, I would.", "Tea, please.", "At the coffee shop."], a: 1, e: "Câu hỏi lựa chọn (A or B) → chọn một: <b>Tea, please</b>. Không trả lời Yes/No.", t: "hoi-dap" },
    { id: "placement-g4", p: 2, say: "Why don't we take a short break?", c: ["Because it broke.", "It was quite short.", "Sure, let's do that."], a: 2, e: "“Why don't we…?” là lời <b>đề nghị</b>, không hỏi lý do → đồng ý: <b>Sure, let's do that</b>. (A) bẫy âm break – broke.", t: "hoi-dap" },
    { id: "placement-g5", p: 2, say: "Haven't you finished the budget report yet?", c: ["I'm working on it now.", "A larger budget.", "He reported it to the police."], a: 0, e: "Câu hỏi phủ định hỏi đã xong chưa → <b>I'm working on it now</b> (chưa, đang làm). (B), (C) lặp từ budget, report.", t: "hoi-dap" },
    { id: "placement-g6", p: 2, say: "The printer on this floor isn't working again.", c: ["I printed fifty copies.", "Let's use the one downstairs.", "Yes, on the fourth floor."], a: 1, e: "Câu trần thuật nêu vấn đề → đáp án đưa ra <b>giải pháp</b>: dùng máy ở tầng dưới.", t: "hoi-dap" },

    /* ---------- Part 3 ---------- */
    { id: "placement-g7", p: 3,
      script: [
        ["W", "Hi, I'm calling about the laptop I ordered last week. It was supposed to arrive on Monday, but I still haven't received it."],
        ["M", "I'm sorry about that. Can I have your order number, please?"],
        ["W", "Sure. It's four, five, eight, two."],
        ["M", "Thank you. It looks like the package was sent to your old address. I'll send a new one today by express delivery, at no extra cost."]
      ],
      vi: "Nữ: Chào anh, tôi gọi về chiếc laptop tôi đặt tuần trước. Đáng lẽ nó phải đến hôm thứ Hai nhưng tôi vẫn chưa nhận được. – Nam: Tôi xin lỗi về việc đó. Chị cho tôi xin mã đơn hàng được không? – Nữ: Vâng, 4582. – Nam: Cảm ơn chị. Có vẻ gói hàng đã được gửi đến địa chỉ cũ của chị. Hôm nay tôi sẽ gửi chiếc khác bằng chuyển phát nhanh, không tính thêm phí.",
      qs: [
        { q: "Why is the woman calling?", c: ["To cancel an order", "To report a missing delivery", "To change her payment method", "To ask about a discount"], a: 1, e: "“…I still haven't received it” → đơn hàng <b>chưa đến</b>.", t: "y-chinh" },
        { q: "What caused the problem?", c: ["The laptop was out of stock.", "The order number was incorrect.", "The package went to an old address.", "The delivery truck broke down."], a: 2, e: "“the package was sent to your <b>old address</b>.”", t: "nghe-chi-tiet" },
        { q: "What does the man offer to do?", c: ["Give a full refund", "Send a replacement by express delivery", "Call the delivery company", "Lower the price of the laptop"], a: 1, e: "“I'll send a new one today by <b>express delivery</b>, at no extra cost.”", t: "nghe-chi-tiet" }
      ] },

    /* ---------- Part 4 ---------- */
    { id: "placement-g8", p: 4,
      script: [["N", "Good morning, everyone, and welcome to Greenfield Bank. My name is Thomas, and I'll be leading your training this week. Today we'll start with a tour of the building. After lunch, you'll learn how to use our customer database. Before we begin, please pick up your ID badge from the table by the door. You'll need it to enter the building every day."]],
      vi: "Chào buổi sáng mọi người và chào mừng đến với Ngân hàng Greenfield. Tôi là Thomas, tôi sẽ phụ trách khóa đào tạo của các bạn tuần này. Hôm nay chúng ta bắt đầu bằng việc tham quan tòa nhà. Sau bữa trưa, các bạn sẽ học cách dùng cơ sở dữ liệu khách hàng. Trước khi bắt đầu, hãy lấy thẻ nhân viên trên bàn cạnh cửa. Các bạn sẽ cần thẻ để vào tòa nhà hằng ngày.",
      qs: [
        { q: "Who most likely are the listeners?", c: ["Bank customers", "New employees", "Tour guides", "Delivery drivers"], a: 1, e: "Có khóa đào tạo và thẻ để vào tòa nhà hằng ngày → <b>nhân viên mới</b>.", t: "suy-luan" },
        { q: "What will the listeners do after lunch?", c: ["Take a tour of the building", "Meet the bank president", "Learn to use a database", "Open new accounts"], a: 2, e: "“After lunch, you'll learn how to use our customer <b>database</b>.”", t: "nghe-chi-tiet" },
        { q: "What are the listeners asked to do?", c: ["Pick up an ID badge", "Sign a contract", "Turn off their phones", "Fill out a survey"], a: 0, e: "“please <b>pick up your ID badge</b> from the table by the door.”", t: "nghe-chi-tiet" }
      ] },

    /* ---------- Part 5 ---------- */
    { id: "placement-g9", p: 5, q: "All employees ___ required to wear name tags.", c: ["is", "are", "be", "being"], a: 1, e: "“All employees” số nhiều → <b>are</b> (be required to = được yêu cầu).", t: "hoa-hop" },
    { id: "placement-g10", p: 5, q: "Please send the invoice to ___ by Friday.", c: ["I", "me", "my", "mine"], a: 1, e: "Sau giới từ “to” → tân ngữ <b>me</b>.", t: "dai-tu" },
    { id: "placement-g11", p: 5, q: "The new branch will open ___ March.", c: ["in", "on", "at", "to"], a: 0, e: "Tháng → <b>in</b> March.", t: "gioi-tu" },
    { id: "placement-g12", p: 5, q: "Ms. Davis ___ the conference in Singapore last week.", c: ["attend", "attends", "attended", "will attend"], a: 2, e: "“last week” → quá khứ đơn: <b>attended</b>.", t: "thi" },
    { id: "placement-g13", p: 5, q: "The restaurant is ___ popular with tourists.", c: ["very", "many", "much", "lot"], a: 0, e: "Bổ nghĩa cho tính từ “popular” → <b>very</b>. “much” không đứng trước tính từ nguyên thể.", t: "tu-loai" },
    { id: "placement-g14", p: 5, q: "Customers can return items ___ 30 days of purchase.", c: ["within", "during", "until", "since"], a: 0, e: "<b>within</b> 30 days = trong vòng 30 ngày (tính từ lúc mua).", t: "gioi-tu" },
    { id: "placement-g15", p: 5, q: "The manager was ___ with the results of the survey.", c: ["please", "pleasing", "pleased", "pleasure"], a: 2, e: "Cảm xúc của người → tính từ -ed: <b>pleased with</b> = hài lòng với.", t: "tu-loai" },
    { id: "placement-g16", p: 5, q: "Mr. Lee's presentation was ___ informative.", c: ["extreme", "extremely", "extremity", "extremes"], a: 1, e: "Bổ nghĩa cho tính từ “informative” → trạng từ <b>extremely</b>.", t: "tu-loai" },
    { id: "placement-g17", p: 5, q: "___ the heavy rain, the outdoor concert was held as planned.", c: ["Despite", "Although", "Because", "However"], a: 0, e: "Theo sau là cụm danh từ “the heavy rain” → giới từ <b>Despite</b>. “Although” cần một mệnh đề (S + V).", t: "gioi-tu" },
    { id: "placement-g18", p: 5, q: "The board of directors has ___ approved the merger.", c: ["unanimity", "unanimous", "unanimously", "unanimousness"], a: 2, e: "Giữa trợ động từ “has” và động từ “approved” → trạng từ <b>unanimously</b> (nhất trí).", t: "tu-loai" },

    /* ---------- Part 6 ---------- */
    { id: "placement-g19", p: 6, passage: "<p><b>To:</b> All Tenants<br><b>From:</b> Riverside Apartments Management<br><b>Subject:</b> Water Shut-Off</p><p>Please be aware that the water supply will be turned off on Saturday, April 6, from 9 A.M. to 1 P.M. Workers <b>(1) ______</b> the main pipes in the basement during this time. We recommend that you <b>(2) ______</b> some water in advance for drinking and cooking. <b>(3) ______</b> If the work finishes early, the water will be turned back on immediately.</p><p>Thank you for your <b>(4) ______</b>.</p>",
      qs: [
        { q: "(1)", c: ["replaced", "will be replacing", "had replaced", "were replacing"], a: 1, e: "Sự việc ở tương lai (thứ Bảy tới, “during this time”) → <b>will be replacing</b>.", t: "thi" },
        { q: "(2)", c: ["store", "stored", "storing", "to storing"], a: 0, e: "“recommend that + S + <b>V nguyên mẫu</b>” → that you <b>store</b>.", t: "gia-dinh" },
        { q: "(3)", c: ["We apologize for any inconvenience this may cause.", "The rent will increase next month.", "The swimming pool is now open.", "Please park in the visitor parking lot."], a: 0, e: "Đoạn văn báo việc cắt nước gây bất tiện → câu <b>xin lỗi vì sự bất tiện</b> hợp mạch nhất.", t: "chen-cau" },
        { q: "(4)", c: ["patient", "patiently", "patience", "patients"], a: 2, e: "Sau tính từ sở hữu “your” cần danh từ: Thank you for your <b>patience</b> (sự kiên nhẫn). “patients” là “bệnh nhân”.", t: "tu-loai" }
      ] },

    /* ---------- Part 7 ---------- */
    { id: "placement-g20", p: 7, passage: "<p><b>Bella's Kitchen – Now Open in Downtown Hilltown!</b></p><p>Enjoy fresh Italian food made with local ingredients.</p><p><b>Grand opening specials, May 1–7:</b><br>• 20% off all lunch menus<br>• Free dessert with every dinner order over $30</p><p>Open Tuesday to Sunday, 11 A.M.–10 P.M. Closed Mondays.<br>Reservations recommended for groups of six or more. Call 555-0187.</p>",
      qs: [
        { q: "What is being advertised?", c: ["A cooking class", "A new restaurant", "A food delivery app", "A grocery store"], a: 1, e: "“Bella's Kitchen – <b>Now Open</b>…”, bán đồ ăn Ý → nhà hàng mới.", t: "y-chinh" },
        { q: "What is offered from May 1 to May 7?", c: ["Free parking", "A discount on lunch", "Free delivery", "Cooking lessons"], a: 1, e: "“20% off all lunch menus” được diễn đạt lại thành <b>a discount on lunch</b>.", t: "paraphrase" },
        { q: "What is indicated about Bella's Kitchen?", c: ["It is open every day.", "It only serves dinner.", "It is closed on Mondays.", "It does not take reservations."], a: 2, e: "“<b>Closed Mondays</b>.” Nhà hàng có nhận đặt chỗ và có phục vụ bữa trưa.", t: "doc-hieu" }
      ] }
  ]
});
