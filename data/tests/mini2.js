/* Thi thử mini số 2 – 50 câu (Nghe 25 · Đọc 25), Listening 12 phút, Reading 19 phút.
   Đây là bài thi chuyển từ Giai đoạn 2 lên Giai đoạn 3 (cần ≥ 500 điểm ước lượng).
   Khó hơn mini1 một bậc; không trùng câu nào với placement, mini1 hay bài học. */
TOEIC.addTest({
  id: "mini2", kind: "mini", title: "Thi thử mini số 2",
  desc: "Đủ 7 Part, khó hơn đề mini số 1. Bài thi chuyển từ Giai đoạn 2 lên Giai đoạn 3 (cần ≥ 500 điểm ước lượng). Làm trong điều kiện như thi thật: mỗi đoạn nghe chỉ phát một lần.",
  timing: { L: 720, R: 1140 },
  groups: [
    /* ---------- Part 1 (3) ---------- */
    { id: "mini2-g0", p: 1, scene: "Một người đàn ông đứng cạnh cửa sổ, tay cầm một chiếc cốc.", svg: "man_cup",
      c: ["He's pouring coffee into a cup.", "He's holding a cup near a window.", "He's opening a window.", "He's washing some dishes."], a: 1,
      e: "Anh ấy chỉ đang <b>cầm cốc cạnh cửa sổ</b>. Không rót cà phê, không mở cửa sổ, không rửa bát – bẫy dùng từ “cup”, “window” có trong tranh nhưng sai động tác.", t: "mo-ta-tranh" },
    { id: "mini2-g1", p: 1, scene: "Nhiều thùng các-tông được xếp chồng lên nhau trên sàn nhà kho. Không có người trong tranh.", svg: "boxes",
      c: ["Some boxes are being loaded onto a truck.", "A worker is carrying a box.", "Some boxes have been stacked on the floor.", "Some boxes have been left open on a shelf."], a: 2,
      e: "Không có người → loại câu có người làm (A worker…) và bẫy <b>is being + V3</b> (đang được chất lên xe – cần người thực hiện). Thùng nằm trên sàn, không ở trên kệ → <b>have been stacked on the floor</b>.", t: "mo-ta-tranh" },
    { id: "mini2-g2", p: 1, scene: "Hai người phụ nữ ngồi đối diện nhau ở một bàn nhỏ trong quán cà phê; một người đang cầm và đọc tờ thực đơn.",
      c: ["The women are walking into a café.", "A server is clearing the table.", "They're standing at a counter.", "One of the women is reading a menu."], a: 3,
      e: "Hai người đang ngồi, một người <b>đang đọc thực đơn</b>. Họ không đi vào quán, không đứng ở quầy; trong tranh không có người phục vụ.", t: "mo-ta-tranh" },

    /* ---------- Part 2 (7) ---------- */
    { id: "mini2-g3", p: 2, say: "When will the renovation of the lobby be finished?", c: ["The contractor hasn't told us yet.", "In the main lobby.", "Yes, I finished it."], a: 0, e: "Trả lời gián tiếp cho câu hỏi When: <b>nhà thầu chưa báo</b> → chưa biết khi nào. (B) trả lời Where và lặp từ lobby; (C) câu hỏi Wh- không trả lời Yes/No, lặp từ finish.", t: "hoi-dap" },
    { id: "mini2-g4", p: 2, say: "Why was the shipment delayed?", c: ["By express mail.", "There was a problem at customs.", "Twelve boxes in total."], a: 1, e: "Why → lý do: <b>có trục trặc ở hải quan</b>. (A) trả lời How (cách gửi); (C) trả lời How many.", t: "hoi-dap" },
    { id: "mini2-g5", p: 2, say: "You've already reviewed the budget proposal, haven't you?", c: ["He proposed it last month.", "It has a lovely view.", "I'm going over it this afternoon."], a: 2, e: "Câu hỏi đuôi hỏi đã xem bản đề xuất chưa → <b>chiều nay tôi sẽ xem</b> (tức là chưa). (A) bẫy âm proposal – proposed, sai chủ ngữ He; (B) bẫy âm review – view.", t: "hoi-dap" },
    { id: "mini2-g6", p: 2, say: "Would you like me to book a meeting room for the interviews?", c: ["I read that book last week.", "Thanks, that would be a big help.", "She interviewed very well."], a: 1, e: "Lời đề nghị giúp → nhận lời: <b>Thanks, that would be a big help</b>. (A) bẫy từ đồng âm book (đặt chỗ / cuốn sách); (C) lặp từ interview, không đáp lời đề nghị.", t: "hoi-dap" },
    { id: "mini2-g7", p: 2, say: "Which printer should I use for the color brochures?", c: ["Yes, I printed them yesterday.", "In bright colors.", "The one next to the reception desk."], a: 2, e: "Which → chỉ ra cái nào: <b>The one next to the reception desk</b>. (A) câu hỏi Wh- không trả lời Yes; (B) lặp từ color, không nói máy nào.", t: "hoi-dap" },
    { id: "mini2-g8", p: 2, say: "Is the training session on Tuesday or Wednesday?", c: ["It's been moved to Thursday.", "The train leaves at noon.", "Yes, it is."], a: 0, e: "Câu hỏi lựa chọn; đáp án hợp lý có thể là phương án thứ ba: <b>đã dời sang thứ Năm</b>. (B) bẫy âm training – train; (C) câu hỏi lựa chọn không trả lời Yes.", t: "hoi-dap" },
    { id: "mini2-g9", p: 2, say: "I can't find the key to the supply cabinet.", c: ["It's a key issue for the team.", "Ms. Lee keeps a spare one at her desk.", "The supplies were very expensive."], a: 1, e: "Câu trần thuật nêu vấn đề → đưa giải pháp: <b>chị Lee có giữ một chìa dự phòng</b>. (A) lặp từ key với nghĩa khác (quan trọng); (C) lặp từ supply.", t: "hoi-dap" },

    /* ---------- Part 3 (9) ---------- */
    { id: "mini2-g10", p: 3,
      script: [
        ["M", "Good morning. I'm in room five twelve, and I was wondering if I could check out a little later than usual today. My flight doesn't leave until nine tonight."],
        ["W", "I'm afraid we're fully booked this weekend, so the latest we can offer is one o'clock."],
        ["M", "I see. I have a video conference with my office until noon, so I'll need somewhere to keep my suitcases after I check out."],
        ["W", "That's no problem. We'd be happy to store your luggage here at the front desk until you leave for the airport."]
      ],
      vi: "Nam: Chào buổi sáng. Tôi ở phòng 512, tôi muốn hỏi hôm nay có thể trả phòng muộn hơn bình thường một chút không. Chuyến bay của tôi 9 giờ tối mới cất cánh. – Nữ: Rất tiếc cuối tuần này chúng tôi kín phòng, nên muộn nhất chúng tôi có thể cho là 1 giờ. – Nam: Tôi hiểu. Tôi có cuộc họp trực tuyến với văn phòng đến trưa, nên sau khi trả phòng tôi cần chỗ để gửi va-li. – Nữ: Không vấn đề gì. Chúng tôi sẵn lòng giữ hành lý của anh ở quầy lễ tân cho đến khi anh ra sân bay.",
      qs: [
        { q: "Where does the woman most likely work?", c: ["At an airline counter", "At a travel agency", "At a hotel", "At a conference center"], a: 2, e: "Khách nói số phòng, xin <b>trả phòng muộn</b>, cô ấy giữ hành lý ở <b>quầy lễ tân</b> → khách sạn.", t: "suy-luan" },
        { q: "What does the man ask for?", c: ["A later check-out time", "A room upgrade", "A taxi reservation", "A refund for a meal"], a: 0, e: "“if I could <b>check out a little later</b> than usual” = trả phòng muộn hơn.", t: "nghe-chi-tiet" },
        { q: "What does the woman offer to do?", c: ["Change his flight", "Keep his bags", "Set up video equipment", "Extend his stay for one night"], a: 1, e: "“store your luggage” được diễn đạt lại thành <b>keep his bags</b> (giữ hành lý).", t: "paraphrase" }
      ] },
    { id: "mini2-g11", p: 3,
      graphic: "<table><tr><th>Package</th><th>Number of cards</th><th>Price</th></tr><tr><td>Basic</td><td>250</td><td>$30</td></tr><tr><td>Standard</td><td>500</td><td>$45</td></tr><tr><td>Premium</td><td>1,000</td><td>$70</td></tr><tr><td>Deluxe</td><td>2,000</td><td>$120</td></tr></table>",
      script: [
        ["W", "Hi, I'd like to order business cards for our new sales staff. We've just hired four people."],
        ["M", "Sure. How many cards does each person need?"],
        ["W", "About two hundred and fifty each. Is it possible to get them by Friday? They start meeting clients next Monday."],
        ["M", "Orders usually take a week, but if you pay a small rush fee, we can have them ready on Thursday."],
        ["W", "Let's do that. I'll e-mail you our logo file as soon as I get back to the office."]
      ],
      vi: "Nữ: Chào anh, tôi muốn đặt danh thiếp cho các nhân viên kinh doanh mới. Chúng tôi vừa tuyển bốn người. – Nam: Vâng. Mỗi người cần bao nhiêu tấm? – Nữ: Khoảng 250 tấm mỗi người. Có thể nhận trước thứ Sáu không? Thứ Hai tới họ bắt đầu gặp khách hàng. – Nam: Đơn hàng thường mất một tuần, nhưng nếu chị trả thêm một khoản phí làm gấp nhỏ, chúng tôi có thể làm xong vào thứ Năm. – Nữ: Vậy làm thế nhé. Về văn phòng tôi sẽ gửi email file logo cho anh ngay.",
      qs: [
        { q: "Why does the woman need business cards?", c: ["Her company has hired new employees.", "Her company has changed its logo.", "She is attending a trade show.", "Her old cards contain an error."], a: 0, e: "“We've just <b>hired four people</b>” → công ty có nhân viên mới.", t: "y-chinh" },
        { q: "Look at the graphic. Which package will the woman most likely choose?", c: ["Basic", "Standard", "Premium", "Deluxe"], a: 2, e: "Bốn người × 250 tấm = 1.000 tấm → theo bảng là gói <b>Premium</b>. Bẫy: nghe “250” rồi chọn ngay gói Basic.", t: "bieu-do" },
        { q: "What does the woman say she will do?", c: ["Pay by credit card", "Send a file", "Pick up the cards on Friday", "Call her new staff"], a: 1, e: "“I'll <b>e-mail you our logo file</b>” = gửi một tập tin.", t: "paraphrase" }
      ] },
    { id: "mini2-g12", p: 3,
      script: [
        ["W", "Raj, Tom, the client from Halston Foods is coming at two to see our new ordering app. Is everything ready?"],
        ["M", "The demo version is installed on all the tablets, but the projector in the conference room keeps shutting off."],
        ["M2", "I've already called the IT help desk. They're sending a technician at one o'clock."],
        ["W", "Good. But in case it isn't fixed in time, let's book the small meeting room on the fourth floor as a backup."],
        ["M2", "Sure, I'll reserve it right now."]
      ],
      vi: "Nữ: Raj, Tom, khách hàng của Halston Foods sẽ đến lúc 2 giờ để xem ứng dụng đặt hàng mới của mình. Mọi thứ sẵn sàng chưa? – Nam 1: Bản demo đã cài trên tất cả máy tính bảng, nhưng máy chiếu ở phòng hội nghị cứ tự tắt. – Nam 2: Tôi đã gọi bộ phận hỗ trợ IT rồi. Họ cử kỹ thuật viên đến lúc 1 giờ. – Nữ: Tốt. Nhưng phòng khi không sửa kịp, hãy đặt phòng họp nhỏ ở tầng bốn để dự phòng. – Nam 2: Vâng, tôi đặt ngay đây.",
      qs: [
        { q: "What is the purpose of the client's visit?", c: ["To sign a contract", "To interview job candidates", "To tour a new factory", "To see a demonstration of an app"], a: 3, e: "“coming at two <b>to see our new ordering app</b>” + “demo version” → xem <b>trình diễn ứng dụng</b>.", t: "y-chinh" },
        { q: "What problem is mentioned?", c: ["Some tablets are missing.", "A projector is not working properly.", "The client will arrive late.", "A room has been double-booked."], a: 1, e: "“the projector … <b>keeps shutting off</b>” = máy chiếu không hoạt động bình thường.", t: "paraphrase" },
        { q: "What will one of the men do next?", c: ["Reserve a room", "Contact the client", "Install some software", "Repair the projector"], a: 0, e: "Người phụ nữ đề nghị đặt phòng dự phòng, người đàn ông thứ hai đáp “I'll <b>reserve it</b> right now”. Việc sửa máy chiếu là của kỹ thuật viên.", t: "suy-luan" }
      ] },

    /* ---------- Part 4 (6) ---------- */
    { id: "mini2-g13", p: 4,
      script: [["N", "Welcome to the Greenfield Chocolate factory. My name is Alice, and I'll be your guide this morning. The tour lasts about ninety minutes, and we'll visit every stage of production, from roasting the cocoa beans to wrapping the finished bars. Before we begin, please put on the hairnets you were given at the entrance. Oh, and it gets quite warm near the ovens. There are lockers right behind you. At the end of the tour, we'll stop by our gift shop, where all visitors receive fifteen percent off any purchase."]],
      vi: "Chào mừng quý vị đến nhà máy sô-cô-la Greenfield. Tôi là Alice, hướng dẫn viên sáng nay. Chuyến tham quan kéo dài khoảng 90 phút, chúng ta sẽ đi qua mọi công đoạn sản xuất, từ rang hạt ca cao đến gói những thanh sô-cô-la thành phẩm. Trước khi bắt đầu, xin đội lưới trùm tóc đã được phát ở cửa vào. À, khu vực gần lò nướng khá nóng. Ngay sau lưng quý vị có tủ khóa. Cuối chuyến, chúng ta sẽ ghé cửa hàng quà tặng, nơi mọi khách tham quan được giảm 15% cho bất kỳ món hàng nào.",
      qs: [
        { q: "Where most likely are the listeners?", c: ["At a factory", "At a supermarket", "At a cooking school", "At a restaurant"], a: 0, e: "“Welcome to the Greenfield Chocolate <b>factory</b>… every stage of <b>production</b>”.", t: "suy-luan" },
        { q: "Why does the speaker say, “it gets quite warm near the ovens”?", c: ["To explain why the tour is short", "To suggest that listeners leave their coats behind", "To warn listeners not to touch the machines", "To apologize for a broken air conditioner"], a: 1, e: "Nói gần lò nướng khá nóng rồi chỉ ngay <b>tủ khóa phía sau</b> → ngụ ý khách nên <b>cởi áo khoác cất vào tủ</b>.", t: "y-dinh" },
        { q: "What will listeners receive at the gift shop?", c: ["A free box of chocolates", "A recipe book", "A discount on purchases", "A souvenir photo"], a: 2, e: "“receive <b>fifteen percent off</b> any purchase” = được <b>giảm giá</b>.", t: "paraphrase" }
      ] },
    { id: "mini2-g14", p: 4,
      script: [["N", "Hello, this is Carla Mendes from Westbrook Property Management, calling for the tenants of Suite 300. I want to let you know that plumbers will be replacing old pipes in the building this Saturday, so the water will be shut off from 8 A.M. until 2 P.M. If any of your staff plan to work that day, please note that the restrooms in the parking garage will remain open. Also, because the main entrance will be locked on Saturday, security needs to prepare temporary access cards. So please let me know by Thursday how many of your employees will be coming in. Thank you."]],
      vi: "Xin chào, tôi là Carla Mendes ở Công ty Quản lý Bất động sản Westbrook, gọi cho các khách thuê Phòng 300. Tôi muốn báo rằng thứ Bảy này thợ ống nước sẽ thay đường ống cũ trong tòa nhà, nên nước sẽ bị cắt từ 8 giờ sáng đến 2 giờ chiều. Nếu nhân viên của quý vị định làm việc hôm đó, xin lưu ý nhà vệ sinh ở bãi đỗ xe vẫn mở. Ngoài ra, vì cửa chính sẽ khóa vào thứ Bảy, bảo vệ cần chuẩn bị thẻ ra vào tạm thời. Vì vậy, vui lòng cho tôi biết trước thứ Năm có bao nhiêu nhân viên của quý vị sẽ đến. Xin cảm ơn.",
      qs: [
        { q: "Who most likely is the speaker?", c: ["A plumber", "A property manager", "A security guard", "A real estate agent"], a: 1, e: "Cô ấy gọi từ <b>Westbrook Property Management</b> cho khách thuê tòa nhà → người quản lý tòa nhà.", t: "suy-luan" },
        { q: "What time will the water most likely be turned back on?", c: ["8:00 A.M.", "10:00 A.M.", "2:00 P.M.", "4:00 P.M."], a: 2, e: "Nước bị cắt “from 8 A.M. <b>until 2 P.M.</b>” → có nước lại lúc 2 giờ chiều. 8 giờ là giờ bắt đầu cắt (bẫy).", t: "nghe-chi-tiet" },
        { q: "What are the listeners asked to do by Thursday?", c: ["Pick up new access cards", "Move some furniture", "Pay a maintenance fee", "Report how many staff will be in the building"], a: 3, e: "“let me know by Thursday <b>how many of your employees will be coming in</b>” = báo số nhân viên sẽ có mặt.", t: "paraphrase" }
      ] },

    /* ---------- Part 5 (12) ---------- */
    { id: "mini2-g15", p: 5, q: "The marketing director gave an ___ presentation on the company's expansion plans.", c: ["impress", "impressive", "impressively", "impression"], a: 1, e: "Giữa mạo từ “an” và danh từ “presentation” cần tính từ → <b>impressive</b> (ấn tượng).", t: "tu-loai" },
    { id: "mini2-g16", p: 5, q: "This time next week, Ms. Gomez ___ with the regional managers in Osaka.", c: ["was meeting", "has met", "will be meeting", "had met"], a: 2, e: "“This time next week” = một thời điểm cụ thể trong tương lai, hành động đang diễn ra lúc đó → tương lai tiếp diễn <b>will be meeting</b>.", t: "thi" },
    { id: "mini2-g17", p: 5, q: "By the end of this year, the company ___ more than 200 new stores worldwide.", c: ["opens", "will have opened", "has opened", "had opened"], a: 1, e: "“By + mốc tương lai” → hành động hoàn tất trước mốc đó: tương lai hoàn thành <b>will have opened</b>.", t: "thi" },
    { id: "mini2-g18", p: 5, q: "All visitors ___ to sign in at the security desk upon arrival.", c: ["require", "are required", "requiring", "have required"], a: 1, e: "Khách <b>được yêu cầu</b> ký tên (không tự yêu cầu) → bị động: <b>are required</b> to + V. “requiring” không làm động từ chính được.", t: "bi-dong" },
    { id: "mini2-g19", p: 5, q: "The consultant ___ recommendations helped us reduce costs will visit our office again in May.", c: ["who", "whom", "whose", "which"], a: 2, e: "Sau chỗ trống là danh từ “recommendations” (những đề xuất <b>của</b> chuyên gia) → đại từ quan hệ sở hữu <b>whose</b>.", t: "quan-he" },
    { id: "mini2-g20", p: 5, q: "___ the sharp rise in material costs, Corvan Furniture has kept its prices unchanged this year.", c: ["Although", "Despite", "Because", "Even though"], a: 1, e: "Sau chỗ trống là cụm danh từ (the sharp rise in material costs), không phải mệnh đề → giới từ <b>Despite</b> (mặc dù). Although / Even though / Because phải đi với mệnh đề (S + V).", t: "gioi-tu" },
    { id: "mini2-g21", p: 5, q: "The manager insisted that every employee ___ the safety training before Friday.", c: ["complete", "completes", "completed", "will complete"], a: 0, e: "Sau insist / recommend / require / suggest + that → giả định: động từ nguyên mẫu không chia, kể cả với chủ ngữ số ít → <b>complete</b>.", t: "gia-dinh" },
    { id: "mini2-g22", p: 5, q: "This year's sales figures are significantly ___ than last year's.", c: ["high", "higher", "highest", "the highest"], a: 1, e: "Có “than” → so sánh hơn: <b>higher</b>. “significantly” là trạng từ nhấn mạnh so sánh hơn (giống much, far).", t: "so-sanh" },
    { id: "mini2-g23", p: 5, q: "To ___ an order, please call our customer service line or visit our Web site.", c: ["put", "place", "set", "lay"], a: 1, e: "Cụm cố định <b>place an order</b> = đặt hàng.", t: "collocation" },
    { id: "mini2-g24", p: 5, q: "The new tracking system is expected to improve the ___ of our delivery service.", c: ["rely", "reliable", "reliably", "reliability"], a: 3, e: "Sau “the” và trước “of” cần danh từ → <b>reliability</b> (độ tin cậy).", t: "tu-loai" },
    { id: "mini2-g25", p: 5, q: "The conference room ___ the board meeting will be held is on the tenth floor.", c: ["where", "which", "what", "who"], a: 0, e: "Mệnh đề sau đã đủ thành phần (the board meeting will be held) và thay cho nơi chốn → <b>where</b> (= in which). “which” phải có giới từ đi kèm.", t: "quan-he" },
    { id: "mini2-g26", p: 5, q: "Ms. Tanaka is ___ qualified for the position, as she has ten years of experience in logistics.", c: ["largely", "closely", "highly", "nearly"], a: 2, e: "Cụm cố định <b>highly qualified</b> = rất đủ năng lực; mệnh đề “as she has ten years of experience” giải thích cho điều đó.", t: "collocation" },

    /* ---------- Part 6 (4) ---------- */
    { id: "mini2-g27", p: 6, passage: "<p><b>To:</b> All staff<br><b>From:</b> Finance Department<br><b>Subject:</b> New expense reporting system</p><p>Starting on October 1, all employees <b>(1) ______</b> to submit their expense reports through our new online system, ExpensePro. The paper forms that we currently use will no longer be accepted. <b>(2) ______</b></p><p>The new system allows you to upload photos of your receipts directly from your phone. <b>(3) ______</b>, reimbursements will be processed within five business days instead of the current two weeks.</p><p>Training sessions will be held next week in Conference Room B. Please sign up on the company intranet <b>(4) ______</b> September 25.</p>",
      qs: [
        { q: "(1)", c: ["will require", "requiring", "will be required", "have required"], a: 2, e: "Nhân viên <b>được yêu cầu</b> nộp báo cáo, mốc tương lai “Starting on October 1” → bị động tương lai: <b>will be required</b>.", t: "bi-dong" },
        { q: "(2)", c: ["Any paper forms received after that date will be returned to the sender.", "Our finance team recently moved to a new office.", "The conference room will be repainted next week.", "Please submit your vacation requests to your manager."], a: 0, e: "Câu trước nói mẫu giấy sẽ không được nhận nữa → câu chèn nói tiếp <b>mẫu giấy nộp sau ngày đó sẽ bị trả lại</b>; “that date” trỏ về October 1.", t: "chen-cau" },
        { q: "(3)", c: ["In addition", "However", "Otherwise", "For example"], a: 0, e: "Câu trước nêu một lợi ích (tải ảnh hóa đơn), câu sau nêu thêm lợi ích khác (hoàn tiền nhanh hơn) → <b>In addition</b> (ngoài ra).", t: "tu-noi" },
        { q: "(4)", c: ["until", "since", "by", "within"], a: 2, e: "Hạn chót cho việc đăng ký (làm một lần) → <b>by</b> September 25. “until” dùng cho hành động kéo dài liên tục đến mốc đó.", t: "gioi-tu" }
      ] },

    /* ---------- Part 7 (9) ---------- */
    { id: "mini2-g28", p: 7, passage: "<p><b>Hana Sato</b> (1:02 P.M.): Mike, the banner for our booth hasn't arrived yet. The trade show opens at 3.</p><p><b>Mike Reyes</b> (1:04 P.M.): Really? The printer told me it was shipped yesterday by overnight delivery.</p><p><b>Hana Sato</b> (1:05 P.M.): The organizers say nothing has been delivered to Hall C under our company's name.</p><p><b>Mike Reyes</b> (1:07 P.M.): Let me call the printer and get the tracking number.</p><p><b>Mike Reyes</b> (1:15 P.M.): Found it. It was delivered to the main reception desk by mistake.</p><p><b>Hana Sato</b> (1:16 P.M.): You're kidding. That's on the other side of the convention center.</p><p><b>Mike Reyes</b> (1:17 P.M.): I'm in a taxi about ten minutes away. I'll pick it up on my way in.</p><p><b>Hana Sato</b> (1:18 P.M.): Perfect. In the meantime, I'll finish arranging the product displays.</p>",
      qs: [
        { q: "What problem does Ms. Sato report?", c: ["A banner cannot be found.", "A booth is too small.", "The trade show has been postponed.", "Some products were damaged."], a: 0, e: "“the <b>banner</b> for our booth <b>hasn't arrived</b> yet” → không thấy tấm băng-rôn.", t: "doc-hieu" },
        { q: "At 1:16 P.M., what does Ms. Sato most likely mean when she writes, “You're kidding”?", c: ["She thinks Mr. Reyes is not telling the truth.", "She is surprised and frustrated by the mistake.", "She finds the situation funny.", "She wants Mr. Reyes to repeat the information."], a: 1, e: "Cô ấy nói ngay sau đó quầy lễ tân ở tận <b>phía bên kia</b> trung tâm hội nghị → “You're kidding” thể hiện sự <b>ngạc nhiên, bực mình</b>, không phải nghĩ anh nói đùa.", t: "y-dinh" },
        { q: "Where is Mr. Reyes when he sends the 1:17 P.M. message?", c: ["At the main reception desk", "In Hall C", "In a taxi", "At a printing company"], a: 2, e: "“I'm <b>in a taxi</b> about ten minutes away.”", t: "doc-hieu" },
        { q: "What will Ms. Sato most likely do next?", c: ["Call the printer", "Go to the reception desk", "Contact the organizers", "Set up some product displays"], a: 3, e: "“I'll finish <b>arranging the product displays</b>” → sắp xếp khu trưng bày sản phẩm. Việc lấy băng-rôn là của Mike.", t: "suy-luan" }
      ] },
    { id: "mini2-g29", p: 7, passages: [
        "<p><b>Northgate Business Forum – Registration</b><br>May 12–14 · Harbor Convention Center</p><table><tr><th>Registration type</th><th>By April 15</th><th>After April 15</th></tr><tr><td>Full conference (3 days)</td><td>$450</td><td>$520</td></tr><tr><td>Two-day pass</td><td>$320</td><td>$380</td></tr><tr><td>One-day pass</td><td>$180</td><td>$210</td></tr></table><p>All passes include lunch and access to the exhibition hall. The workshop on digital payments, held on May 14, requires a separate fee of $40. Groups of five or more from the same company receive a 15% discount on full conference registrations.</p>",
        "<p><b>From:</b> Daniel Okafor<br><b>To:</b> registration@northgateforum.com<br><b>Subject:</b> Registration<br><b>Date:</b> April 20</p><p>Hello,</p><p>I would like to register for this year's forum. Unfortunately, I have a client meeting on May 12, so I will only be able to attend on the remaining days. I am especially interested in the workshop on digital payments and would like to sign up for it as well.</p><p>Could you also let me know whether parking is available at the convention center? I will be driving from Lakewood.</p><p>Best regards,<br>Daniel Okafor</p>"
      ],
      qs: [
        { q: "What is the main purpose of the first text?", c: ["To announce registration fees for an event", "To advertise a new convention center", "To recruit speakers for a workshop", "To describe a change of venue"], a: 0, e: "Văn bản đầu là bảng <b>phí đăng ký</b> diễn đàn theo loại vé và thời hạn.", t: "y-chinh" },
        { q: "According to the first text, what is included in all passes?", c: ["Parking", "Lunch", "Hotel accommodation", "The workshop"], a: 1, e: "“All passes include <b>lunch</b> and access to the exhibition hall.” Hội thảo chuyên đề phải trả phí riêng.", t: "doc-hieu" },
        { q: "Which registration type will Mr. Okafor most likely choose?", c: ["Full conference", "Two-day pass", "One-day pass", "Group registration"], a: 1, e: "Anh bận ngày 12/5, chỉ dự được hai ngày còn lại (13–14/5) → <b>Two-day pass</b>.", t: "lien-ket" },
        { q: "How much will Mr. Okafor most likely pay in total?", c: ["$360", "$380", "$420", "$520"], a: 2, e: "Email gửi ngày 20/4, tức <b>sau 15/4</b> → vé hai ngày giá $380, cộng phí hội thảo $40 = <b>$420</b>. Bẫy: $360 là giá đăng ký sớm cộng hội thảo.", t: "lien-ket" },
        { q: "What does Mr. Okafor ask about?", c: ["Parking availability", "Hotel discounts", "Payment methods", "The workshop schedule"], a: 0, e: "“let me know whether <b>parking is available</b> at the convention center”.", t: "doc-hieu" }
      ] }
  ]
});
