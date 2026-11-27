/* Thi thử mini số 1 – 50 câu (Nghe 25 · Đọc 25), Listening 12 phút, Reading 19 phút.
   Đây cũng là bài thi chuyển từ Giai đoạn 1 lên Giai đoạn 2 (cần ≥ 300 điểm ước lượng).
   Không trùng câu nào với bài test xếp lớp. */
TOEIC.addTest({
  id: "mini1", kind: "mini", title: "Thi thử mini số 1",
  desc: "Đủ 7 Part với số câu bằng khoảng 1/4 đề thật. Làm trong điều kiện như thi thật: mỗi đoạn nghe chỉ phát một lần.",
  timing: { L: 720, R: 1140 },
  groups: [
    /* ---------- Part 1 (3) ---------- */
    { p: 1, scene: "Một người đàn ông đứng cạnh tấm bảng có biểu đồ cột, một tay chỉ vào biểu đồ. Phía trước có vài người ngồi nghe.", svg: "presenter",
      c: ["The audience is standing in line.", "A man is pointing at a chart.", "A chart is being taken down.", "The man is turning off a projector."], a: 1,
      e: "Người đàn ông đang <b>chỉ vào biểu đồ</b>. Khán giả đang ngồi; không ai tháo biểu đồ hay tắt máy chiếu.", t: "mo-ta-tranh" },
    { p: 1, scene: "Một bàn tròn trống, hai bên có ghế, trên bàn có một bình hoa. Không có người.", svg: "table_chairs",
      c: ["Some people are eating at a table.", "Some chairs are being moved.", "Some flowers have been placed on a table.", "A waiter is setting the table."], a: 2,
      e: "Tranh không có người → loại (A), (B), (D). <b>have been placed</b> mô tả trạng thái: hoa đã được đặt trên bàn.", t: "mo-ta-tranh" },
    { p: 1, scene: "Một người phụ nữ ngồi ở bàn làm việc, nhìn vào màn hình máy tính.", svg: "woman_desk",
      c: ["She's hanging up a picture.", "She's leaving the office.", "She's answering the door.", "She's looking at a computer screen."], a: 3,
      e: "Cô ấy đang <b>nhìn màn hình máy tính</b>. Các câu khác mô tả động tác không có trong tranh.", t: "mo-ta-tranh" },

    /* ---------- Part 2 (7) ---------- */
    { p: 2, say: "Who's going to lead the training session?", c: ["It leaves at six.", "Ms. Brown from human resources.", "Yes, it's in session."], a: 1, e: "Who → người: <b>Ms. Brown</b>. (A) bẫy âm lead – leaves; (C) Yes/No và lặp từ session.", t: "hoi-dap" },
    { p: 2, say: "When will the new menu be ready?", c: ["By the end of the week.", "In the kitchen.", "I'm ready to order."], a: 0, e: "When → thời gian: <b>By the end of the week</b>. (C) lặp từ ready.", t: "hoi-dap" },
    { p: 2, say: "How did you get to the airport?", c: ["Around noon.", "At terminal B.", "I took a taxi."], a: 2, e: "How → cách thức: <b>I took a taxi</b>.", t: "hoi-dap" },
    { p: 2, say: "Isn't the store open on Sundays?", c: ["I'll open the window.", "Only in the afternoon.", "He stored them there."], a: 1, e: "Câu hỏi phủ định, hỏi cửa hàng có mở Chủ nhật không → <b>Chỉ mở buổi chiều</b>. (A) lặp từ open; (C) bẫy âm store – stored.", t: "hoi-dap" },
    { p: 2, say: "Should we print the handouts or e-mail them?", c: ["E-mailing would be faster.", "Yes, we should.", "Hand me that pen."], a: 0, e: "Câu hỏi lựa chọn → chọn một phương án: <b>E-mailing would be faster</b>.", t: "hoi-dap" },
    { p: 2, say: "Could you help me move these chairs?", c: ["The movie was great.", "They're very comfortable.", "Sure, where should they go?"], a: 2, e: "Lời nhờ giúp → đồng ý và hỏi thêm: <b>Sure, where should they go?</b> (A) bẫy âm move – movie.", t: "hoi-dap" },
    { p: 2, say: "The client wants to reschedule our meeting.", c: ["It was a great meeting.", "I'll check my calendar.", "Yes, she's our client."], a: 1, e: "Thông báo phải đổi lịch → phản hồi hợp lý: <b>I'll check my calendar</b> (để xem lịch trống).", t: "hoi-dap" },

    /* ---------- Part 3 (9) ---------- */
    { p: 3,
      script: [
        ["M", "Hello, Lakeside Grill. How can I help you?"],
        ["W", "Hi, I'd like to book a table for eight people this Friday at 7 P.M. It's for my team's dinner."],
        ["M", "Let me check... I'm sorry, we're fully booked at seven. We do have a table available at eight thirty."],
        ["W", "That's a bit late, but it should be fine. Could we sit in the private room?"],
        ["M", "Of course. The private room has a minimum charge of three hundred dollars, though."]
      ],
      vi: "Nam: Xin chào, nhà hàng Lakeside Grill nghe. – Nữ: Chào anh, tôi muốn đặt bàn cho tám người vào 7 giờ tối thứ Sáu này, cho bữa tối của nhóm tôi. – Nam: Để tôi kiểm tra… Rất tiếc, lúc bảy giờ đã kín chỗ. Chúng tôi còn một bàn lúc tám rưỡi. – Nữ: Hơi muộn, nhưng chắc không sao. Chúng tôi ngồi phòng riêng được không? – Nam: Được ạ. Tuy nhiên phòng riêng có mức chi tiêu tối thiểu là 300 đô la.",
      qs: [
        { q: "What is the purpose of the call?", c: ["To make a reservation", "To order food for delivery", "To complain about a meal", "To ask for directions"], a: 0, e: "“I'd like to <b>book a table</b>…” = đặt chỗ.", t: "y-chinh" },
        { q: "What time will the group most likely arrive?", c: ["At 7:00 P.M.", "At 7:30 P.M.", "At 8:00 P.M.", "At 8:30 P.M."], a: 3, e: "Bảy giờ đã kín chỗ, chỉ còn bàn lúc <b>tám rưỡi</b> và người phụ nữ đồng ý.", t: "suy-luan" },
        { q: "What does the man mention about the private room?", c: ["It is being renovated.", "It requires a minimum charge.", "It seats only six people.", "It is already reserved."], a: 1, e: "“The private room has a <b>minimum charge</b> of three hundred dollars.”", t: "nghe-chi-tiet" }
      ] },
    { p: 3,
      graphic: "<table><tr><th>Time</th><th>Session</th><th>Room</th></tr><tr><td>9:00</td><td>Marketing Basics</td><td>101</td></tr><tr><td>10:30</td><td>Social Media Strategy</td><td>204</td></tr><tr><td>1:00</td><td>Customer Service</td><td>305</td></tr><tr><td>3:00</td><td>Budget Planning</td><td>101</td></tr></table>",
      script: [
        ["W", "Excuse me, I'm looking for the social media session. Is it still in room two oh four?"],
        ["M", "Actually, it's been moved. The projector in two oh four isn't working, so that session is now in the same room as the budget planning session."],
        ["W", "Oh, thanks. And is there anywhere I can get coffee before it starts?"],
        ["M", "Yes, there's a coffee stand on the first floor, right by the elevators."]
      ],
      vi: "Nữ: Xin lỗi, tôi đang tìm phiên về mạng xã hội. Nó vẫn ở phòng 204 phải không? – Nam: Thật ra đã chuyển rồi. Máy chiếu ở phòng 204 bị hỏng, nên phiên đó giờ diễn ra cùng phòng với phiên lập ngân sách. – Nữ: Ồ, cảm ơn. Có chỗ nào mua cà phê trước khi bắt đầu không? – Nam: Có, có quầy cà phê ở tầng một, ngay cạnh thang máy.",
      qs: [
        { q: "Why was the session moved?", c: ["The room was too small.", "A projector is not working.", "The speaker arrived late.", "The room was double-booked."], a: 1, e: "“The <b>projector</b> in 204 <b>isn't working</b>.”", t: "nghe-chi-tiet" },
        { q: "Look at the graphic. Where will the social media session be held?", c: ["Room 101", "Room 204", "Room 305", "The first-floor lobby"], a: 0, e: "Phiên chuyển sang cùng phòng với Budget Planning; theo bảng, Budget Planning ở <b>phòng 101</b>.", t: "bieu-do" },
        { q: "Where can the woman get coffee?", c: ["In Room 305", "Near the elevators on the first floor", "Outside the building", "In a cafeteria on the second floor"], a: 1, e: "“a coffee stand on the first floor, right <b>by the elevators</b>.”", t: "nghe-chi-tiet" }
      ] },
    { p: 3,
      script: [
        ["W", "Kevin, are you ready for the move to the new office next Monday?"],
        ["M", "Almost. I've packed most of my files, but I still need some more boxes."],
        ["W", "The facilities department has extra ones. You can pick them up from the storage room on the third floor."],
        ["M", "Great. I'll go there after lunch. By the way, do you know if we're getting new desks?"],
        ["W", "Yes, new furniture will be delivered on Tuesday morning."]
      ],
      vi: "Nữ: Kevin, anh sẵn sàng chuyển sang văn phòng mới vào thứ Hai tới chưa? – Nam: Gần xong rồi. Tôi đã đóng gói gần hết hồ sơ, nhưng vẫn cần thêm thùng. – Nữ: Phòng hành chính có thùng dư. Anh lấy ở kho tầng ba nhé. – Nam: Tốt quá. Ăn trưa xong tôi sẽ qua. À, chị có biết mình có được bàn mới không? – Nữ: Có, nội thất mới sẽ được giao vào sáng thứ Ba.",
      qs: [
        { q: "What are the speakers preparing for?", c: ["A product launch", "An office move", "A job interview", "A holiday party"], a: 1, e: "“the <b>move to the new office</b> next Monday”.", t: "y-chinh" },
        { q: "What does the man need?", c: ["More boxes", "A new computer", "A parking pass", "Help with a report"], a: 0, e: "“I still need some more <b>boxes</b>.”", t: "nghe-chi-tiet" },
        { q: "What will happen on Tuesday?", c: ["Files will be packed.", "A meeting will be held.", "New furniture will arrive.", "The storage room will close."], a: 2, e: "“new furniture will be delivered on Tuesday morning” = <b>nội thất mới sẽ đến</b>.", t: "paraphrase" }
      ] },

    /* ---------- Part 4 (6) ---------- */
    { p: 4,
      script: [["N", "Attention, passengers on Flight 208 to Singapore. Due to bad weather, this flight has been delayed by approximately two hours. The new departure time is 4:15 P.M. We apologize for the inconvenience. To thank you for your patience, food vouchers are available at the service desk next to Gate 12. Please keep checking the screens for further updates."]],
      vi: "Xin chú ý, hành khách chuyến bay 208 đi Singapore. Do thời tiết xấu, chuyến bay bị hoãn khoảng hai tiếng. Giờ khởi hành mới là 4 giờ 15 chiều. Chúng tôi xin lỗi vì sự bất tiện. Để cảm ơn sự kiên nhẫn của quý khách, phiếu ăn được phát tại quầy dịch vụ cạnh cổng 12. Vui lòng tiếp tục theo dõi màn hình để cập nhật thông tin.",
      qs: [
        { q: "Why has the flight been delayed?", c: ["A mechanical problem", "Bad weather", "A shortage of crew members", "A late incoming plane"], a: 1, e: "“Due to <b>bad weather</b>…”", t: "nghe-chi-tiet" },
        { q: "What is the new departure time?", c: ["2:15 P.M.", "2:08 P.M.", "4:15 P.M.", "4:50 P.M."], a: 2, e: "“The new departure time is <b>4:15 P.M.</b>”", t: "nghe-chi-tiet" },
        { q: "What can passengers get at the service desk?", c: ["Seat upgrades", "Food vouchers", "Hotel rooms", "Free newspapers"], a: 1, e: "“<b>food vouchers</b> are available at the service desk”.", t: "nghe-chi-tiet" }
      ] },
    { p: 4,
      script: [["N", "Hi, Ms. Robinson. This is Daniel from Bright Smile Dental Clinic. I'm calling to remind you about your appointment tomorrow, Thursday, at 10 A.M. with Dr. Patel. Please arrive fifteen minutes early to fill out some forms. If you need to reschedule, please call us at 555-0142 before 5 P.M. today. Thank you, and see you tomorrow."]],
      vi: "Chào chị Robinson. Tôi là Daniel ở Nha khoa Bright Smile. Tôi gọi để nhắc chị về lịch hẹn ngày mai, thứ Năm, lúc 10 giờ sáng với bác sĩ Patel. Chị vui lòng đến sớm 15 phút để điền một số mẫu đơn. Nếu cần đổi lịch, vui lòng gọi số 555-0142 trước 5 giờ chiều hôm nay. Cảm ơn chị, hẹn gặp ngày mai.",
      qs: [
        { q: "Why is the speaker calling?", c: ["To confirm a payment", "To remind the listener of an appointment", "To introduce a new dentist", "To cancel a visit"], a: 1, e: "“I'm calling to <b>remind</b> you about your <b>appointment</b>…”", t: "y-chinh" },
        { q: "What is the listener asked to do?", c: ["Arrive early", "Bring her insurance card", "Call Dr. Patel directly", "Pay in advance"], a: 0, e: "“Please <b>arrive fifteen minutes early</b>…”", t: "nghe-chi-tiet" },
        { q: "By when should the listener call to reschedule?", c: ["10 A.M. tomorrow", "Before 5 P.M. today", "Thursday afternoon", "Within fifteen minutes"], a: 1, e: "“call us … <b>before 5 P.M. today</b>.”", t: "nghe-chi-tiet" }
      ] },

    /* ---------- Part 5 (12) ---------- */
    { p: 5, q: "The sales team ___ its monthly target in July.", c: ["reach", "reached", "reaching", "to reach"], a: 1, e: "Câu cần động từ chính; việc đã xảy ra (tháng Bảy) → <b>reached</b>.", t: "thi" },
    { p: 5, q: "Applications must be submitted ___ May 31.", c: ["by", "until", "since", "among"], a: 0, e: "Hạn chót cho một việc làm một lần → <b>by</b> May 31.", t: "gioi-tu" },
    { p: 5, q: "Mr. Chen is responsible for ___ the new employees.", c: ["train", "trained", "training", "trains"], a: 2, e: "Sau giới từ “for” → V-ing: <b>training</b>.", t: "ngu-phap" },
    { p: 5, q: "The museum is ___ located near the central station.", c: ["convenient", "conveniently", "convenience", "more convenient"], a: 1, e: "Bổ nghĩa cho “located” (phân từ) → trạng từ <b>conveniently</b>.", t: "tu-loai" },
    { p: 5, q: "Neither the manager ___ his assistant was at the meeting.", c: ["or", "nor", "and", "but"], a: 1, e: "Cặp cố định <b>neither … nor</b> (không… cũng không).", t: "ngu-phap" },
    { p: 5, q: "Our company offers a wide ___ of products.", c: ["range", "ranging", "ranged", "ranger"], a: 0, e: "Cụm cố định <b>a wide range of</b> = nhiều loại.", t: "tu-vung" },
    { p: 5, q: "The report ___ by the finance team last Friday.", c: ["completed", "was completed", "has completed", "completes"], a: 1, e: "Báo cáo được hoàn thành <b>bởi</b> nhóm tài chính → bị động quá khứ: <b>was completed</b>.", t: "ngu-phap" },
    { p: 5, q: "Ms. Ito prefers to work on ___ own.", c: ["her", "she", "hers", "herself"], a: 0, e: "Cụm cố định <b>on + tính từ sở hữu + own</b> = tự mình: on <b>her</b> own.", t: "dai-tu" },
    { p: 5, q: "The new software will help employees work more ___.", c: ["efficient", "efficiency", "efficiently", "efficiencies"], a: 2, e: "Bổ nghĩa cho động từ “work” → trạng từ <b>efficiently</b>.", t: "tu-loai" },
    { p: 5, q: "The seminar was ___ because the speaker was ill.", c: ["postponed", "invited", "delivered", "hired"], a: 0, e: "Diễn giả ốm → hội thảo bị <b>hoãn</b> (postponed).", t: "tu-vung" },
    { p: 5, q: "Ms. Park has worked at the company ___ 2015.", c: ["since", "for", "ago", "during"], a: 0, e: "Hiện tại hoàn thành + mốc thời gian → <b>since</b> 2015. “for” đi với khoảng thời gian (for ten years).", t: "thi" },
    { p: 5, q: "___ she was new to the team, Ms. Rossi quickly earned everyone's trust.", c: ["Despite", "Although", "Because of", "Even"], a: 1, e: "Theo sau là mệnh đề (she was…) và hai vế đối lập → <b>Although</b>. Despite / Because of đi với danh từ.", t: "ngu-phap" },

    /* ---------- Part 6 (4) ---------- */
    { p: 6, passage: "<p><b>To:</b> Mark Ellis<br><b>From:</b> Sunrise Office Supplies<br><b>Subject:</b> Your order #7731</p><p>Dear Mr. Ellis,</p><p>Thank you for your recent order. Unfortunately, the blue desk chairs you <b>(1) ______</b> are currently out of stock. We expect to receive more within two weeks. <b>(2) ______</b>, we can offer you the same chair in black, which is available now. <b>(3) ______</b> Please let us know which option you prefer by replying to this e-mail.</p><p>We apologize for the <b>(4) ______</b> and appreciate your business.</p><p>Sincerely,<br>Anna Lopez, Customer Service</p>",
      qs: [
        { q: "(1)", c: ["order", "ordered", "ordering", "orders"], a: 1, e: "Khách đã đặt hàng từ trước (“your recent order”) → quá khứ: <b>ordered</b>.", t: "thi" },
        { q: "(2)", c: ["Alternatively", "Therefore", "Similarly", "Finally"], a: 0, e: "Đưa ra một <b>lựa chọn khác</b> (ghế màu đen) → <b>Alternatively</b>.", t: "doan-van" },
        { q: "(3)", c: ["If you choose this option, the chairs will be shipped tomorrow.", "Our store first opened in 1998.", "We are currently hiring new staff.", "Your payment was declined yesterday."], a: 0, e: "Câu chèn nối tiếp ý về lựa chọn ghế đen và dẫn sang câu “let us know which option you prefer”.", t: "chen-cau" },
        { q: "(4)", c: ["inconvenient", "inconveniently", "inconvenience", "inconvenienced"], a: 2, e: "Sau “the” cần danh từ: apologize for the <b>inconvenience</b>.", t: "tu-loai" }
      ] },

    /* ---------- Part 7 (9) ---------- */
    { p: 7, passage: "<p><b>Linda Park</b> (9:12 A.M.): Hi Sam, are you still at the warehouse?</p><p><b>Sam Ortiz</b> (9:14 A.M.): Yes, I'm checking the shipment from Kodo Electronics.</p><p><b>Linda Park</b> (9:15 A.M.): Great. The client just called. They need 50 more monitors added to Friday's delivery.</p><p><b>Sam Ortiz</b> (9:17 A.M.): I'm not sure we have that many. Let me count.</p><p><b>Sam Ortiz</b> (9:25 A.M.): We only have 35 in stock. The rest could arrive Monday.</p><p><b>Linda Park</b> (9:26 A.M.): OK. I'll ask the client if a partial delivery works for them.</p>",
      qs: [
        { q: "Where is Mr. Ortiz?", c: ["At the client's office", "At a warehouse", "At an electronics store", "At an airport"], a: 1, e: "Linda hỏi “are you still at the warehouse?” và Sam trả lời <b>Yes</b>.", t: "doc-hieu" },
        { q: "What did the client request?", c: ["A lower price", "An earlier delivery date", "Additional monitors", "A different model"], a: 2, e: "“They need 50 more monitors” → <b>thêm màn hình</b> (additional monitors).", t: "paraphrase" },
        { q: "At 9:17 A.M., what does Mr. Ortiz mean when he writes, “Let me count”?", c: ["He will check how many monitors are available.", "He will calculate the shipping cost.", "He wants to count the number of employees.", "He needs to recheck an invoice."], a: 0, e: "Ngay trước đó anh nói không chắc có đủ chừng ấy → anh sẽ <b>đếm số màn hình còn trong kho</b>, và lúc 9:25 báo chỉ còn 35.", t: "y-dinh" },
        { q: "What will Ms. Park most likely do next?", c: ["Cancel the order", "Contact the client", "Visit the warehouse", "Order from another supplier"], a: 1, e: "“I'll ask the client…” → cô ấy sẽ <b>liên hệ khách hàng</b>.", t: "suy-luan" }
      ] },
    { p: 7, passages: [
        "<p><b>Maple City Community Center – Summer Classes</b></p><table><tr><th>Class</th><th>Day</th><th>Time</th><th>Fee</th></tr><tr><td>Beginner Photography</td><td>Monday</td><td>6–8 P.M.</td><td>$80</td></tr><tr><td>Watercolor Painting</td><td>Wednesday</td><td>6–8 P.M.</td><td>$95</td></tr><tr><td>Business English</td><td>Thursday</td><td>7–9 P.M.</td><td>$120</td></tr><tr><td>Yoga for Beginners</td><td>Saturday</td><td>9–10 A.M.</td><td>$60</td></tr></table><p>Classes begin the week of June 3 and run for eight weeks. Register online or at the front desk. Community center members receive a 10% discount on all fees.</p>",
        "<p><b>From:</b> Rachel Kim<br><b>To:</b> info@maplecitycc.org<br><b>Subject:</b> Class registration<br><b>Date:</b> May 20</p><p>Hello,</p><p>I would like to register for a class this summer. I work late on Mondays and Wednesdays, and I am busy on weekends, so the class on the remaining weekday evening is the only one I can take. I am also a member of the community center.</p><p>Could you tell me whether the textbook is included in the fee?</p><p>Thank you,<br>Rachel Kim</p>"
      ],
      qs: [
        { q: "How long do the summer classes last?", c: ["Four weeks", "Six weeks", "Eight weeks", "Ten weeks"], a: 2, e: "“run for <b>eight weeks</b>”.", t: "doc-hieu" },
        { q: "What is the purpose of Ms. Kim's e-mail?", c: ["To cancel a registration", "To sign up for a class and ask a question", "To apply for a teaching job", "To complain about a fee"], a: 1, e: "Cô ấy muốn <b>đăng ký lớp</b> và <b>hỏi</b> giáo trình có gồm trong học phí không.", t: "y-chinh" },
        { q: "Which class will Ms. Kim most likely take?", c: ["Beginner Photography", "Watercolor Painting", "Business English", "Yoga for Beginners"], a: 2, e: "Bận tối thứ Hai, thứ Tư và cuối tuần → lớp buổi tối còn lại là <b>thứ Năm: Business English</b>.", t: "lien-ket" },
        { q: "How much will Ms. Kim most likely pay for the class?", c: ["$60", "$108", "$120", "$132"], a: 1, e: "Lớp $120, cô ấy là hội viên nên được giảm 10% → 120 − 12 = <b>$108</b>.", t: "lien-ket" },
        { q: "What does Ms. Kim want to know?", c: ["Where the classes are held", "Whether the textbook is included in the fee", "Who teaches the class", "When registration closes"], a: 1, e: "“Could you tell me whether the <b>textbook is included</b> in the fee?”", t: "doc-hieu" }
      ] }
  ]
});
