/* Đề thi thử đầy đủ số 1 – Part 3: 13 hội thoại × 3 câu = 39 câu (câu 32–70).
   3 hội thoại 3 người (03, 07, 10) · 3 hội thoại kèm bảng (04, 08, 11) · 3 câu hàm ý (05, 09, 12). Độ khó tăng dần. */
TOEIC.full1 = TOEIC.full1 || {};
TOEIC.full1.p3 = [
  { id: "full1-p3-01", p: 3,
    script: [
      ["W", "Ken, the copier on our floor is out of order again, and I need forty copies of the sales report for the two o'clock meeting."],
      ["M", "Oh no. The repair technician isn't coming until tomorrow morning. Have you tried the one in the accounting department?"],
      ["W", "I did, but someone's using it for a huge printing job. They said it'll be at least an hour."],
      ["M", "The design team on the fifth floor just got a new high-speed printer. It can do forty copies in a few minutes."],
      ["W", "Really? Can anyone use it?"],
      ["M", "Yes, but you need an access code. Ask Rachel at the front desk. She's the one who gives them out."],
      ["W", "Great. I'll go and see her right away."]
    ],
    vi: "Nữ: Ken, máy photocopy ở tầng mình lại hỏng rồi, mà tôi cần 40 bản báo cáo doanh số cho cuộc họp lúc 2 giờ. – Nam: Ôi không. Thợ sửa phải sáng mai mới đến. Chị đã thử máy ở phòng kế toán chưa? – Nữ: Tôi thử rồi, nhưng có người đang in một khối lượng rất lớn. Họ bảo phải ít nhất một tiếng nữa. – Nam: Nhóm thiết kế ở tầng năm vừa có một máy in tốc độ cao mới. Nó in 40 bản chỉ trong vài phút. – Nữ: Thật à? Ai cũng dùng được chứ? – Nam: Được, nhưng chị cần mã truy cập. Hỏi Rachel ở quầy lễ tân, cô ấy là người cấp mã. – Nữ: Tuyệt. Tôi sẽ đến gặp cô ấy ngay.",
    qs: [
      { q: "What problem does the woman mention?", c: ["A report contains errors", "A meeting has been canceled", "A machine is not working", "A file has been deleted"], a: 2, e: "“the copier on our floor is <b>out of order</b> again” → máy photocopy hỏng = <b>một cái máy không hoạt động</b>. Bẫy: nghe “report”, “meeting” nhưng không có lỗi báo cáo hay họp bị hủy.", t: "paraphrase" },
      { q: "According to the man, when will a technician arrive?", c: ["This afternoon", "Tomorrow morning", "Later this week", "Next Monday"], a: 1, e: "“The repair technician isn't coming until <b>tomorrow morning</b>.”", t: "nghe-chi-tiet" },
      { q: "What will the woman most likely do next?", c: ["Speak with a receptionist", "Return to the accounting department", "Call a repair technician", "Postpone a meeting"], a: 0, e: "Anh ấy bảo “Ask Rachel <b>at the front desk</b>”, cô đáp “I'll go and see her right away” → <b>nói chuyện với lễ tân</b>.", t: "suy-luan" }
    ] },

  { id: "full1-p3-02", p: 3,
    script: [
      ["M", "Maria, the seafood supplier just called. Because of the storm, their boats didn't go out, so they can't deliver the salmon today."],
      ["W", "That's a problem. Salmon is in three of our dinner specials, and the dining room is fully booked tonight."],
      ["M", "I know. I checked with the market on Fifth Street, but they only have enough for about ten servings."],
      ["W", "Then let's replace the salmon with chicken in the pasta and the salad, and keep salmon only for the grilled dish."],
      ["M", "Good idea. I'll update the menu boards before we open at five."],
      ["W", "And please tell the servers at the staff meeting, so they can explain the changes to customers."]
    ],
    vi: "Nam: Maria, nhà cung cấp hải sản vừa gọi. Vì bão nên tàu của họ không ra khơi, họ không giao cá hồi hôm nay được. – Nữ: Gay rồi. Cá hồi có trong ba món đặc biệt buổi tối của mình, mà tối nay phòng ăn kín chỗ. – Nam: Tôi biết. Tôi đã hỏi chợ trên phố Fifth, nhưng họ chỉ đủ cho khoảng mười suất. – Nữ: Vậy thay cá hồi bằng gà trong món mì và món salad, chỉ giữ cá hồi cho món nướng. – Nam: Ý hay đấy. Tôi sẽ sửa bảng thực đơn trước khi mở cửa lúc 5 giờ. – Nữ: Và nhớ báo cho nhân viên phục vụ ở buổi họp nhân viên để họ giải thích thay đổi cho khách.",
    qs: [
      { q: "Where do the speakers most likely work?", c: ["At a fish market", "At a grocery store", "At a cooking school", "At a restaurant"], a: 3, e: "Có “dinner specials”, “the dining room is fully booked”, “menu boards”, “servers” → <b>nhà hàng</b>. Bẫy: “market”, “seafood supplier” chỉ là nơi họ mua hàng.", t: "suy-luan" },
      { q: "Why is the supplier unable to make a delivery?", c: ["A truck broke down", "The weather was bad", "An order was lost", "A payment was late"], a: 1, e: "“<b>Because of the storm</b>, their boats didn't go out” → bão = <b>thời tiết xấu</b>.", t: "paraphrase" },
      { q: "What does the woman ask the man to do?", c: ["Inform some employees", "Call another supplier", "Reduce some prices", "Open earlier than usual"], a: 0, e: "“please <b>tell the servers</b> at the staff meeting” → <b>thông báo cho một số nhân viên</b>. Bẫy: “open at five” là giờ mở cửa bình thường.", t: "nghe-chi-tiet" }
    ] },

  { id: "full1-p3-03", p: 3,
    script: [
      ["W", "Good afternoon. I'm organizing a training workshop for my company next Thursday, and I'd like to rent one of your meeting rooms."],
      ["M", "Certainly. How many participants are you expecting?"],
      ["W", "About twenty-five. We'll also need a projector and a microphone."],
      ["M", "Our Garden Room seats thirty, so that should be fine. Let me check with our technical manager about the equipment. Paul, are the projectors free next Thursday?"],
      ["M2", "Let me see. One is reserved for a wedding reception, but the other one is available. I'll set it up in the Garden Room that morning."],
      ["W", "Wonderful. Could we also have coffee and snacks served at around ten thirty?"],
      ["M", "Of course. I'll e-mail you our refreshment menu this afternoon so you can choose what you'd like."]
    ],
    vi: "Nữ: Chào buổi chiều. Tôi đang tổ chức một buổi tập huấn cho công ty vào thứ Năm tuần sau và muốn thuê một phòng họp của khách sạn. – Nam: Vâng ạ. Chị dự kiến bao nhiêu người tham dự? – Nữ: Khoảng 25 người. Chúng tôi cũng cần một máy chiếu và một micro. – Nam: Phòng Garden của chúng tôi có 30 chỗ, vậy là ổn. Để tôi hỏi trưởng bộ phận kỹ thuật về thiết bị. Paul, thứ Năm tuần sau máy chiếu còn trống không? – Nam 2: Để tôi xem. Một máy đã được đặt cho tiệc cưới, nhưng máy còn lại thì trống. Sáng hôm đó tôi sẽ lắp nó ở phòng Garden. – Nữ: Tuyệt quá. Chúng tôi có thể được phục vụ cà phê và đồ ăn nhẹ vào khoảng 10 giờ 30 không? – Nam: Tất nhiên. Chiều nay tôi sẽ gửi email thực đơn đồ ăn nhẹ để chị chọn.",
    qs: [
      { q: "What is the woman planning?", c: ["A wedding reception", "A product launch", "A training session", "A retirement party"], a: 2, e: "“I'm organizing a <b>training workshop</b> for my company” → <b>buổi tập huấn</b>. Bẫy: “wedding reception” là sự kiện khác đã đặt máy chiếu.", t: "y-chinh" },
      { q: "What does Paul confirm?", c: ["A room is large enough", "A projector is available", "A menu has been updated", "A payment has been received"], a: 1, e: "Paul (người nói thứ ba) nói “the other one <b>is available</b>. I'll set it up” → <b>một máy chiếu còn trống</b>. Bẫy: việc phòng đủ chỗ là người đàn ông thứ nhất nói.", t: "nghe-chi-tiet" },
      { q: "What will the woman receive this afternoon?", c: ["A rental contract", "A list of food options", "A map of the hotel", "A discount code"], a: 1, e: "“I'll e-mail you our <b>refreshment menu</b> this afternoon” → thực đơn đồ ăn nhẹ = <b>danh sách các món ăn để chọn</b>.", t: "paraphrase" }
    ] },

  { id: "full1-p3-04", p: 3,
    graphic: "<table><tr><th colspan=\"3\">Order Form #4471 – Halvorsen Insurance</th></tr><tr><th>Item</th><th>Quantity</th><th>Unit Price</th></tr><tr><td>Ergonomic chair</td><td>12</td><td>$150</td></tr><tr><td>Standing desk</td><td>6</td><td>$320</td></tr><tr><td>Filing cabinet</td><td>4</td><td>$95</td></tr><tr><td>Desk lamp</td><td>12</td><td>$28</td></tr></table>",
    script: [
      ["M", "Hi, this is Tom Reyes from Halvorsen Insurance. I placed an order with your store yesterday, and I need to make a change."],
      ["W", "Sure, Mr. Reyes. I have your order form on my screen. What would you like to change?"],
      ["M", "We've just hired two more people for our claims team, so we'll need two more of the standing desks."],
      ["W", "No problem. I'll update that now. Is everything else the same?"],
      ["M", "Yes. Oh, and will the delivery still be next Wednesday?"],
      ["W", "Unfortunately, the extra desks have to come from our warehouse in Denver, so the whole order will arrive on Friday instead. Is that all right?"],
      ["M", "That's fine, as long as it's here before the new employees start on Monday."]
    ],
    vi: "Nam: Chào chị, tôi là Tom Reyes ở công ty bảo hiểm Halvorsen. Hôm qua tôi đã đặt hàng ở cửa hàng chị và giờ cần sửa đổi một chút. – Nữ: Vâng, anh Reyes. Tôi đang xem phiếu đặt hàng của anh trên màn hình. Anh muốn đổi gì ạ? – Nam: Chúng tôi vừa tuyển thêm hai người cho nhóm giải quyết bồi thường, nên cần thêm hai bàn đứng nữa. – Nữ: Không vấn đề gì. Tôi cập nhật ngay. Những thứ khác giữ nguyên chứ ạ? – Nam: Vâng. À, vẫn giao hàng vào thứ Tư tuần sau chứ? – Nữ: Rất tiếc, số bàn thêm phải chuyển từ kho của chúng tôi ở Denver, nên cả đơn hàng sẽ đến vào thứ Sáu. Như vậy có được không ạ? – Nam: Được, miễn là hàng đến trước khi nhân viên mới bắt đầu làm vào thứ Hai.",
    qs: [
      { q: "Why is the man calling?", c: ["To cancel an order", "To complain about a product", "To ask about a refund", "To modify an order"], a: 3, e: "“I placed an order… and I <b>need to make a change</b>.” → <b>sửa đổi đơn hàng</b>.", t: "y-chinh" },
      { q: "Look at the graphic. How many standing desks will be delivered?", c: ["4", "6", "8", "12"], a: 2, e: "Phiếu ghi Standing desk số lượng 6; anh ấy cần “<b>two more</b> of the standing desks” → 6 + 2 = <b>8</b>. Bẫy: chọn ngay số 6 trong bảng.", t: "bieu-do" },
      { q: "Why will the delivery be delayed?", c: ["Some items must be shipped from another location", "A delivery truck needs repairs", "The man's office will be closed", "A payment has not been processed"], a: 0, e: "“the extra desks have to come from <b>our warehouse in Denver</b>” → <b>một số món phải chuyển từ nơi khác</b>.", t: "paraphrase" }
    ] },

  { id: "full1-p3-05", p: 3,
    script: [
      ["W", "Excuse me. My flight from Chicago landed late, and I've missed my connection to Toronto. I was booked on the four fifteen flight."],
      ["M", "I'm sorry about that. Let me look up other options for you. The next direct flight to Toronto leaves at seven forty, but it's completely full."],
      ["W", "Oh no. I have a client meeting there first thing tomorrow morning."],
      ["M", "Well, there's a flight at six that stops in Detroit. You'd arrive in Toronto just before eleven tonight."],
      ["W", "Eleven? Well, my hotel's right next to the airport."],
      ["M", "In that case, I'll put you on that one. And since the delay was caused by our airline, here's a voucher for dinner at any restaurant in the terminal."],
      ["W", "Thank you. That's very kind."]
    ],
    vi: "Nữ: Xin lỗi anh. Chuyến bay từ Chicago của tôi hạ cánh trễ nên tôi bị lỡ chuyến nối tiếp đi Toronto. Tôi được xếp trên chuyến 4 giờ 15. – Nam: Rất tiếc về chuyện đó. Để tôi tìm các phương án khác cho chị. Chuyến bay thẳng tiếp theo đi Toronto cất cánh lúc 7 giờ 40 nhưng đã kín chỗ. – Nữ: Ôi không. Sáng sớm mai tôi có cuộc họp với khách hàng ở đó. – Nam: Vậy có một chuyến lúc 6 giờ, dừng ở Detroit. Chị sẽ đến Toronto ngay trước 11 giờ đêm nay. – Nữ: 11 giờ à? À, khách sạn của tôi ở ngay cạnh sân bay. – Nam: Vậy tôi sẽ xếp chị vào chuyến đó. Và vì việc trễ chuyến là do hãng chúng tôi, đây là phiếu ăn tối tại bất kỳ nhà hàng nào trong nhà ga. – Nữ: Cảm ơn anh. Anh thật chu đáo.",
    qs: [
      { q: "Who most likely is the man?", c: ["A hotel receptionist", "A travel agent", "A taxi driver", "An airline employee"], a: 3, e: "Anh ấy tra chuyến bay, đổi chuyến cho khách và nói “the delay was caused by <b>our airline</b>” → <b>nhân viên hãng hàng không</b>.", t: "suy-luan" },
      { q: "What does the woman mean when she says, “my hotel's right next to the airport”?", c: ["She would like to change hotels", "She does not mind arriving late", "She needs directions to her hotel", "She plans to cancel her meeting"], a: 1, e: "Nghe giờ đến “just before eleven tonight” cô hơi ngập ngừng, rồi nói khách sạn <b>ngay cạnh sân bay</b> → đến muộn cũng không sao; người đàn ông hiểu ý nên đặt luôn: “In that case, I'll put you on that one.” → <b>cô không ngại đến muộn</b>.", t: "y-dinh" },
      { q: "What does the man give the woman?", c: ["A seat upgrade", "A meal voucher", "A taxi coupon", "A lounge pass"], a: 1, e: "“here's <b>a voucher for dinner</b>” → <b>phiếu ăn</b>.", t: "nghe-chi-tiet" }
    ] },

  { id: "full1-p3-06", p: 3,
    script: [
      ["M", "Good morning, Westside Dental Clinic. How can I help you?"],
      ["W", "Hi, this is Laura Chen. I have an appointment with Dr. Patel on Thursday at ten, but I need to reschedule. My company is sending me to a trade fair in Singapore that week."],
      ["M", "I see. Dr. Patel is fully booked the following week, but Dr. Morris has an opening on Monday at three. Would that work for you?"],
      ["W", "Actually, I'd prefer to stay with Dr. Patel. She's been treating this tooth from the beginning."],
      ["M", "Understood. Then the earliest I can offer is Tuesday the eighteenth at nine thirty."],
      ["W", "That's fine. Do I need to bring anything?"],
      ["M", "Just your current insurance card. The one we have on file expired last month."]
    ],
    vi: "Nam: Chào buổi sáng, phòng khám nha khoa Westside xin nghe. Tôi có thể giúp gì ạ? – Nữ: Chào anh, tôi là Laura Chen. Tôi có lịch hẹn với bác sĩ Patel lúc 10 giờ thứ Năm, nhưng tôi cần đổi lịch. Công ty cử tôi đi hội chợ thương mại ở Singapore tuần đó. – Nam: Tôi hiểu. Tuần sau đó bác sĩ Patel đã kín lịch, nhưng bác sĩ Morris còn trống lúc 3 giờ thứ Hai. Chị thấy có được không? – Nữ: Thật ra tôi muốn tiếp tục khám với bác sĩ Patel. Bà ấy đã điều trị chiếc răng này từ đầu. – Nam: Tôi hiểu. Vậy sớm nhất tôi có thể xếp là 9 giờ 30 thứ Ba ngày 18. – Nữ: Được ạ. Tôi có cần mang gì không? – Nam: Chỉ cần thẻ bảo hiểm hiện tại của chị. Thẻ chúng tôi lưu trong hồ sơ đã hết hạn tháng trước.",
    qs: [
      { q: "Why does the woman need to change her appointment?", c: ["She will be away on business", "She is feeling unwell", "She has a family event", "She has moved to a new city"], a: 0, e: "“My company is sending me to <b>a trade fair</b> in Singapore” → đi hội chợ do công ty cử = <b>đi công tác</b>.", t: "paraphrase" },
      { q: "Why does the woman decline the Monday appointment?", c: ["The time is inconvenient for her", "She wants to see a particular dentist", "The clinic is too far from her office", "The fee is higher on Mondays"], a: 1, e: "Lịch thứ Hai là với bác sĩ Morris, nhưng cô nói “<b>I'd prefer to stay with Dr. Patel</b>” → muốn khám <b>một nha sĩ cụ thể</b>.", t: "suy-luan" },
      { q: "What does the man ask the woman to bring?", c: ["A payment receipt", "A completed form", "A valid insurance card", "An X-ray image"], a: 2, e: "“Just your <b>current insurance card</b>. The one we have on file expired” → <b>thẻ bảo hiểm còn hiệu lực</b>.", t: "nghe-chi-tiet" }
    ] },

  { id: "full1-p3-07", p: 3,
    script: [
      ["M", "Sandra, Jeff, thanks for coming. As you know, the safety inspector is visiting the plant on Friday."],
      ["W", "Right. I've already checked the fire extinguishers on the assembly floor. They're all up to date."],
      ["M2", "But there's still an issue in the packaging area. The warning signs near the cutting machine have faded, and you can hardly read them."],
      ["M", "That's something the inspector would definitely notice. Jeff, can you order replacements today?"],
      ["M2", "I can, but our usual supplier takes about a week to ship."],
      ["W", "There's a print shop here in town that makes safety signs. My previous employer used them, and they had everything ready in a day."],
      ["M", "Perfect. Sandra, please send Jeff their contact information. And I'd like all of us to walk through the whole plant together on Thursday afternoon."]
    ],
    vi: "Nam: Sandra, Jeff, cảm ơn hai người đã đến. Như mọi người biết, thanh tra an toàn sẽ đến nhà máy vào thứ Sáu. – Nữ: Vâng. Tôi đã kiểm tra các bình chữa cháy ở khu lắp ráp. Tất cả đều còn hạn. – Nam 2: Nhưng khu đóng gói vẫn còn vấn đề. Các biển cảnh báo gần máy cắt đã phai màu, gần như không đọc được. – Nam: Đó là thứ thanh tra chắc chắn sẽ để ý. Jeff, anh đặt biển thay thế ngay hôm nay được không? – Nam 2: Được, nhưng nhà cung cấp quen của mình mất khoảng một tuần mới giao. – Nữ: Có một tiệm in ngay trong thị trấn chuyên làm biển an toàn. Công ty cũ của tôi từng dùng họ, và họ làm xong mọi thứ trong một ngày. – Nam: Tuyệt. Sandra, gửi cho Jeff thông tin liên lạc của họ nhé. Và tôi muốn cả ba chúng ta cùng đi kiểm tra toàn bộ nhà máy vào chiều thứ Năm.",
    qs: [
      { q: "What are the speakers preparing for?", c: ["A product launch", "A safety inspection", "A tour for clients", "An equipment installation"], a: 1, e: "“the <b>safety inspector</b> is visiting the plant on Friday” → họ chuẩn bị cho <b>đợt thanh tra an toàn</b>.", t: "y-chinh" },
      { q: "What problem does Jeff mention?", c: ["A cutting machine is broken", "Some fire extinguishers have expired", "Some signs are difficult to read", "A shipment was damaged"], a: 2, e: "Jeff: “The warning signs… have faded, and <b>you can hardly read them</b>” → <b>biển báo khó đọc</b>. Bẫy: “cutting machine” chỉ là vị trí; bình chữa cháy thì “up to date”.", t: "paraphrase" },
      { q: "What does the woman suggest?", c: ["Using a local business", "Postponing a visit", "Hiring more staff", "Contacting the usual supplier"], a: 0, e: "“There's <b>a print shop here in town</b> that makes safety signs” → đề xuất dùng <b>một doanh nghiệp địa phương</b> vì nhà cung cấp quen giao chậm.", t: "suy-luan" }
    ] },

  { id: "full1-p3-08", p: 3,
    graphic: "<table><tr><th colspan=\"4\">Maple Court – Available Units</th></tr><tr><th>Unit</th><th>Bedrooms</th><th>Monthly Rent</th><th>Available</th></tr><tr><td>2A</td><td>1</td><td>$1,150</td><td>Now</td></tr><tr><td>3C</td><td>2</td><td>$1,480</td><td>May 1</td></tr><tr><td>4B</td><td>2</td><td>$1,620</td><td>Now</td></tr><tr><td>5D</td><td>3</td><td>$1,900</td><td>June 1</td></tr></table>",
    script: [
      ["W", "Hi, I'm calling about the apartments listed on your Web site for the Maple Court building."],
      ["M", "Of course. Are you looking for anything in particular?"],
      ["W", "I'm relocating for a new position, and my husband and I need two bedrooms. One of them will be a home office."],
      ["M", "We have two units like that. One is available immediately, and the other one opens up next month."],
      ["W", "My job doesn't start until May, so moving in right away would mean paying rent on an empty apartment. I'd rather take the later one."],
      ["M", "That makes sense. Would you like to see it in person? The current tenants allow showings on Saturday mornings."],
      ["W", "Unfortunately, I won't be in town until the end of the month. Could you do a video tour instead?"],
      ["M", "Sure. I'll arrange one with the tenants and e-mail you a link."]
    ],
    vi: "Nữ: Chào anh, tôi gọi về các căn hộ của tòa Maple Court đăng trên trang web của anh. – Nam: Vâng ạ. Chị đang tìm căn như thế nào? – Nữ: Tôi chuyển đến vì công việc mới, vợ chồng tôi cần hai phòng ngủ. Một phòng sẽ làm văn phòng tại nhà. – Nam: Chúng tôi có hai căn như vậy. Một căn ở được ngay, căn còn lại tháng sau mới trống. – Nữ: Tháng Năm tôi mới bắt đầu đi làm, nên dọn vào ngay thì phải trả tiền thuê cho căn hộ bỏ trống. Tôi muốn lấy căn trống sau. – Nam: Hợp lý. Chị có muốn đến xem trực tiếp không? Người thuê hiện tại cho xem nhà vào các buổi sáng thứ Bảy. – Nữ: Tiếc là đến cuối tháng tôi mới tới thành phố. Anh có thể cho tôi xem qua video được không? – Nam: Được. Tôi sẽ sắp xếp với người thuê và gửi email đường link cho chị.",
    qs: [
      { q: "Why is the woman moving?", c: ["She is starting a new job", "Her current lease is ending", "She needs a larger kitchen", "She is returning to school"], a: 0, e: "“I'm relocating for <b>a new position</b>… My job doesn't start until May” → <b>bắt đầu công việc mới</b>.", t: "nghe-chi-tiet" },
      { q: "Look at the graphic. How much will the woman's monthly rent most likely be?", c: ["$1,150", "$1,480", "$1,620", "$1,900"], a: 1, e: "Cần <b>2 phòng ngủ</b> → căn 3C hoặc 4B. Cô chọn căn trống sau (“I'd rather take the later one”, việc bắt đầu tháng Năm) → 3C trống từ May 1 → <b>$1,480</b>. Bẫy: $1,620 là căn 2 phòng ở được ngay.", t: "bieu-do" },
      { q: "What does the man agree to do?", c: ["Lower the monthly rent", "Meet the woman on Saturday", "Arrange an online viewing", "Send a lease agreement"], a: 2, e: "Cô hỏi “Could you do <b>a video tour</b> instead?” – anh đồng ý “I'll arrange one… and e-mail you a link” → <b>xem nhà trực tuyến</b>. Bẫy: Saturday là lịch xem trực tiếp mà cô không đến được.", t: "paraphrase" }
    ] },

  { id: "full1-p3-09", p: 3,
    script: [
      ["M", "Hi, Priya. I heard the new project management software is being installed on everyone's computers this weekend."],
      ["W", "That's right. The IT team will do it remotely on Saturday night, so everyone will see the new program when they log in on Monday."],
      ["M", "The thing is, my team has a major product deadline on Monday, and we've been tracking everything in the old system."],
      ["W", "Don't worry. All of your existing tasks and files will be transferred automatically."],
      ["M", "Have you tested that transfer with a project as big as ours?"],
      ["W", "Well, we tested it with the finance department's data, and that went smoothly. But they don't have nearly as many files as you do. All right, I'll ask IT to hold off on your department until Tuesday, just to be safe."],
      ["M", "I'd appreciate that. Will there be any training on the new program?"],
      ["W", "Yes, there's a one-hour online session every afternoon next week. I'll send you the schedule."]
    ],
    vi: "Nam: Chào Priya. Tôi nghe nói phần mềm quản lý dự án mới sẽ được cài lên máy của mọi người vào cuối tuần này. – Nữ: Đúng vậy. Nhóm IT sẽ cài từ xa vào tối thứ Bảy, nên thứ Hai đăng nhập là mọi người thấy chương trình mới. – Nam: Vấn đề là nhóm tôi có hạn chót sản phẩm quan trọng vào thứ Hai, mà mọi thứ đều đang theo dõi trên hệ thống cũ. – Nữ: Đừng lo. Toàn bộ công việc và tệp hiện có sẽ được chuyển sang tự động. – Nam: Chị đã thử việc chuyển dữ liệu đó với một dự án lớn như của chúng tôi chưa? – Nữ: À, chúng tôi đã thử với dữ liệu của phòng tài chính và mọi việc trơn tru. Nhưng họ không có nhiều tệp như các anh. Thôi được, tôi sẽ bảo IT hoãn cài cho phòng anh đến thứ Ba cho chắc. – Nam: Cảm ơn chị. Có buổi đào tạo nào về chương trình mới không? – Nữ: Có, tuần sau chiều nào cũng có một buổi trực tuyến một tiếng. Tôi sẽ gửi lịch cho anh.",
    qs: [
      { q: "What are the speakers mainly discussing?", c: ["The introduction of a new computer program", "A change to a product deadline", "The hiring of additional IT staff", "The results of a financial audit"], a: 0, e: "Cả bài xoay quanh việc “the new project management <b>software is being installed</b>” → <b>đưa vào sử dụng một chương trình máy tính mới</b>. Bẫy: “deadline”, “finance” chỉ là chi tiết phụ.", t: "y-chinh" },
      { q: "Why does the man say, “Have you tested that transfer with a project as big as ours?”", c: ["To offer to help with a test", "To express doubt about a process", "To praise the IT team's work", "To request a larger budget"], a: 1, e: "Ngay trước hạn chót quan trọng, anh hỏi vặn xem đã thử với dự án lớn chưa → anh <b>nghi ngờ việc chuyển dữ liệu</b> có ổn không; Priya hiểu ý nên hoãn cài cho phòng anh “just to be safe”.", t: "y-dinh" },
      { q: "What does the woman decide to do?", c: ["Test the software with finance data", "Extend the man's deadline", "Install the program herself", "Delay a change for one department"], a: 3, e: "“I'll ask IT to <b>hold off on your department until Tuesday</b>” → <b>hoãn thay đổi cho một phòng ban</b>. Bẫy: dữ liệu tài chính là đã thử trước đó.", t: "suy-luan" }
    ] },

  { id: "full1-p3-10", p: 3,
    script: [
      ["W", "OK, let's finalize the plans for the company's twentieth anniversary dinner. Hannah, have you heard back from the Riverside Pavilion?"],
      ["W2", "Yes. They're holding the date for us, but they need a deposit by Friday, or they'll release it to another group."],
      ["M", "Before we pay anything, didn't the CEO say she wanted to invite our major clients as well? That would almost double the guest list."],
      ["W2", "That's right, and the Pavilion's main hall only holds a hundred and fifty people."],
      ["W", "Then we should look at the ballroom at the Harborview Hotel. It holds three hundred, and it's only a few minutes from our office."],
      ["M", "I'll call them this afternoon to see if it's available on the twenty-second."],
      ["W2", "And in the meantime, I'll ask the Pavilion whether they can give us a few more days before the deposit is due."],
      ["W", "Good. Let's meet again on Thursday to make a final decision."]
    ],
    vi: "Nữ: Được rồi, hãy chốt kế hoạch cho bữa tối kỷ niệm 20 năm thành lập công ty. Hannah, bên Riverside Pavilion đã trả lời chưa? – Nữ 2: Rồi. Họ đang giữ ngày cho mình, nhưng cần đặt cọc trước thứ Sáu, nếu không họ sẽ nhường cho đoàn khác. – Nam: Trước khi trả tiền, chẳng phải giám đốc điều hành nói muốn mời cả các khách hàng lớn sao? Như vậy số khách sẽ tăng gần gấp đôi. – Nữ 2: Đúng vậy, mà sảnh chính của Pavilion chỉ chứa được 150 người. – Nữ: Vậy mình nên xem phòng tiệc của khách sạn Harborview. Nó chứa được 300 người và chỉ cách văn phòng vài phút. – Nam: Chiều nay tôi sẽ gọi hỏi xem ngày 22 còn trống không. – Nữ 2: Trong lúc đó, tôi sẽ hỏi Pavilion xem có thể lùi hạn đặt cọc thêm vài ngày không. – Nữ: Tốt. Thứ Năm mình họp lại để quyết định cuối cùng.",
    qs: [
      { q: "What event are the speakers planning?", c: ["A client conference", "A product launch", "A retirement party", "An anniversary celebration"], a: 3, e: "“the company's twentieth <b>anniversary dinner</b>” → <b>lễ kỷ niệm thành lập</b>. Bẫy: “clients” chỉ là khách được mời thêm.", t: "y-chinh" },
      { q: "What concern does the man raise?", c: ["The number of guests may increase", "A deposit is too expensive", "A venue is too far from the office", "A date conflicts with a holiday"], a: 0, e: "“invite our major clients as well? That would <b>almost double the guest list</b>” → <b>số khách có thể tăng</b>.", t: "paraphrase" },
      { q: "What will Hannah do?", c: ["Visit a hotel ballroom", "Pay a deposit", "Request more time from a venue", "Send invitations to clients"], a: 2, e: "Hannah (người nữ thứ hai): “I'll ask the Pavilion whether they can <b>give us a few more days</b> before the deposit is due” → <b>xin địa điểm thêm thời gian</b>. Bẫy: gọi khách sạn Harborview là việc của người đàn ông.", t: "paraphrase" }
    ] },

  { id: "full1-p3-11", p: 3,
    graphic: "<table><tr><th colspan=\"2\">Home Delivery Schedule</th></tr><tr><th>Area</th><th>Delivery Day</th></tr><tr><td>Downtown</td><td>Monday</td></tr><tr><td>Northgate</td><td>Tuesday</td></tr><tr><td>Lakeside</td><td>Thursday</td></tr><tr><td>Hillcrest</td><td>Friday</td></tr></table>",
    script: [
      ["W", "Hello. I ordered a set of bookshelves from your Web site yesterday, but the confirmation e-mail didn't say when they'll arrive."],
      ["M", "Let me check that for you. Could I have your order number, please?"],
      ["W", "Sure, it's five-eight-two-zero-three."],
      ["M", "Thank you. I see the shelves are going to an address in Northgate."],
      ["W", "Oh, that's my old apartment. I moved to Lakeside last week and forgot to update my account."],
      ["M", "No problem. I'll change the delivery address now. Since your order is already packed, it'll go out on the next delivery day for your new area."],
      ["W", "Great. Will someone need to be home to sign for it?"],
      ["M", "Yes, because the order is over two hundred dollars. If that's inconvenient, you can pick it up at our warehouse instead."],
      ["W", "No, that's fine. I work from home."]
    ],
    vi: "Nữ: Xin chào. Hôm qua tôi đặt một bộ giá sách trên trang web của anh, nhưng email xác nhận không nói khi nào hàng đến. – Nam: Để tôi kiểm tra giúp chị. Chị cho tôi xin mã đơn hàng. – Nữ: Vâng, là 58203. – Nam: Cảm ơn chị. Tôi thấy giá sách đang được giao đến một địa chỉ ở Northgate. – Nữ: Ồ, đó là căn hộ cũ của tôi. Tuần trước tôi chuyển đến Lakeside và quên cập nhật tài khoản. – Nam: Không sao. Tôi sẽ đổi địa chỉ giao hàng ngay. Vì đơn của chị đã đóng gói xong, nó sẽ được giao vào ngày giao hàng gần nhất của khu vực mới. – Nữ: Tuyệt. Có cần người ở nhà để ký nhận không? – Nam: Có, vì đơn hàng trên 200 đô. Nếu bất tiện, chị có thể đến nhận ở kho của chúng tôi. – Nữ: Không, vậy được rồi. Tôi làm việc ở nhà.",
    qs: [
      { q: "Why is the woman calling?", c: ["To ask when an order will arrive", "To return a damaged item", "To change a payment method", "To order additional shelves"], a: 0, e: "“the confirmation e-mail <b>didn't say when they'll arrive</b>” → cô gọi để hỏi <b>khi nào hàng đến</b>.", t: "y-chinh" },
      { q: "Look at the graphic. On which day will the woman's order most likely be delivered?", c: ["Monday", "Tuesday", "Thursday", "Friday"], a: 2, e: "Đơn đang ghi Northgate (thứ Ba) nhưng cô đã chuyển đến <b>Lakeside</b>, và hàng sẽ đi “on the next delivery day for your new area” → theo bảng Lakeside giao <b>thứ Năm</b>. Bẫy: chọn thứ Ba theo địa chỉ cũ.", t: "bieu-do" },
      { q: "Why must someone sign for the delivery?", c: ["The item is fragile", "The item is being shipped from overseas", "The order exceeds a certain value", "The woman is a new customer"], a: 2, e: "“because the order is <b>over two hundred dollars</b>” → <b>giá trị đơn vượt một mức nhất định</b>.", t: "paraphrase" }
    ] },

  { id: "full1-p3-12", p: 3,
    script: [
      ["M", "Good morning. I run a small bakery downtown, and I'm interested in opening a business account here. My current bank keeps raising its monthly fee."],
      ["W", "I can help with that. Our standard business account has no monthly fee, as long as you keep a balance of at least five thousand dollars."],
      ["M", "Hmm. Most of the month I'm well above that, but right after I pay my suppliers, it drops quite a bit."],
      ["W", "I see. In that case, you might consider our Flex account. Its fee is waived if you make twenty or more card purchases a month."],
      ["M", "Twenty? I use my business card for practically every ingredient order."],
      ["W", "Then that's probably the better fit for you. To open it, I'll need your business license and your most recent tax statement."],
      ["M", "I have the license with me, but the tax documents are at my accountant's office."],
      ["W", "That's all right. I can start the application today, and you can upload the tax statement through our Web site later."]
    ],
    vi: "Nam: Chào buổi sáng. Tôi có một tiệm bánh nhỏ ở trung tâm và muốn mở tài khoản doanh nghiệp ở đây. Ngân hàng hiện tại cứ tăng phí hằng tháng. – Nữ: Tôi có thể giúp anh. Tài khoản doanh nghiệp tiêu chuẩn của chúng tôi miễn phí hằng tháng, miễn là anh duy trì số dư ít nhất 5.000 đô. – Nam: Hừm. Phần lớn thời gian trong tháng tôi có dư hơn nhiều, nhưng ngay sau khi trả tiền cho nhà cung cấp thì số dư giảm khá mạnh. – Nữ: Tôi hiểu. Vậy anh có thể cân nhắc tài khoản Flex. Phí được miễn nếu mỗi tháng anh thực hiện từ 20 giao dịch mua bằng thẻ trở lên. – Nam: Hai mươi à? Gần như đơn đặt nguyên liệu nào tôi cũng trả bằng thẻ doanh nghiệp. – Nữ: Vậy có lẽ tài khoản này hợp với anh hơn. Để mở, tôi cần giấy phép kinh doanh và tờ khai thuế gần nhất của anh. – Nam: Giấy phép thì tôi mang theo, nhưng giấy tờ thuế đang ở văn phòng kế toán của tôi. – Nữ: Không sao. Hôm nay tôi có thể bắt đầu hồ sơ, và sau đó anh tải tờ khai thuế lên qua trang web của chúng tôi.",
    qs: [
      { q: "Why does the man want to change banks?", c: ["His current bank is far from his business", "He was refused a loan", "His account was closed by mistake", "He is paying increasing charges"], a: 3, e: "“My current bank <b>keeps raising its monthly fee</b>” → phí cứ tăng = <b>đang phải trả phí ngày càng cao</b>.", t: "paraphrase" },
      { q: "What does the man mean when he says, “I use my business card for practically every ingredient order”?", c: ["He would like a higher credit limit", "He will easily meet a requirement", "He needs a replacement card", "He is worried about his spending"], a: 1, e: "Điều kiện miễn phí là “twenty or more card purchases a month”; anh nói gần như đơn nguyên liệu nào cũng quẹt thẻ → anh <b>dễ dàng đạt điều kiện</b> đó; người phụ nữ đáp “Then that's probably the better fit”.", t: "y-dinh" },
      { q: "What will the man most likely do later?", c: ["Bring his business license to the bank", "Submit a document online", "Visit a supplier", "Close his current account in person"], a: 1, e: "“you can <b>upload the tax statement through our Web site</b> later” → <b>nộp giấy tờ trực tuyến</b>. Bẫy: giấy phép kinh doanh thì anh đã mang theo rồi.", t: "suy-luan" }
    ] },

  { id: "full1-p3-13", p: 3,
    script: [
      ["W", "Mr. Alvarez, thanks for meeting with me. As the new head of the city library's archive, I wanted to talk to you about the grant we received to digitize our historical newspapers."],
      ["M", "Yes, it's an exciting project. How far along are you?"],
      ["W", "We've scanned about a third of the collection, but we've run into a problem. Many of the papers printed before 1920 are too fragile for our scanners. The pages tear when they're fed through."],
      ["M", "That's common with old newsprint. Have you thought about sending those volumes to a specialist? The university's conservation lab handles exactly that kind of material."],
      ["W", "We looked into it, but their fees would use up most of what's left of the grant."],
      ["M", "What if you offered them something in return? Their history students need hands-on research experience. They could help catalog your collection in exchange for a reduced rate."],
      ["W", "That's an interesting idea. It would also free up some of our staff for our public programs."],
      ["M", "I know the lab director quite well. I'll mention it to her when I see her next week."]
    ],
    vi: "Nữ: Ông Alvarez, cảm ơn ông đã gặp tôi. Với tư cách trưởng bộ phận lưu trữ mới của thư viện thành phố, tôi muốn trao đổi với ông về khoản tài trợ chúng tôi nhận được để số hóa các tờ báo lịch sử. – Nam: Vâng, đó là một dự án thú vị. Các bạn đã làm được đến đâu rồi? – Nữ: Chúng tôi đã quét khoảng một phần ba bộ sưu tập, nhưng đang gặp vấn đề. Nhiều tờ báo in trước năm 1920 quá mỏng manh so với máy quét. Trang báo bị rách khi đưa qua máy. – Nam: Chuyện đó thường gặp với giấy báo cũ. Bà đã nghĩ đến việc gửi các tập đó cho chuyên gia chưa? Phòng thí nghiệm bảo tồn của trường đại học xử lý đúng loại tài liệu đó. – Nữ: Chúng tôi đã tìm hiểu, nhưng phí của họ sẽ ngốn gần hết số tiền tài trợ còn lại. – Nam: Nếu bà đề nghị đáp lại họ thứ gì đó thì sao? Sinh viên ngành sử của họ cần kinh nghiệm nghiên cứu thực tế. Họ có thể giúp lập danh mục bộ sưu tập của bà để đổi lấy mức phí thấp hơn. – Nữ: Ý tưởng thú vị đấy. Như vậy cũng giúp một số nhân viên của chúng tôi rảnh tay cho các chương trình phục vụ công chúng. – Nam: Tôi khá thân với giám đốc phòng thí nghiệm. Tuần sau gặp bà ấy tôi sẽ đề cập chuyện này.",
    qs: [
      { q: "What project is the woman working on?", c: ["Publishing a book on local history", "Converting old newspapers into digital files", "Expanding the library's public programs", "Applying for a research grant"], a: 1, e: "“the grant we received to <b>digitize our historical newspapers</b>” → <b>chuyển báo cũ sang dạng tệp số</b>. Bẫy: khoản tài trợ đã nhận rồi, không phải đang xin.", t: "y-chinh" },
      { q: "Why does the woman reject the man's first suggestion?", c: ["The lab does not accept such materials", "It would take too much time", "The newspapers cannot be moved", "It would cost too much"], a: 3, e: "Gợi ý đầu là gửi cho phòng thí nghiệm bảo tồn; cô đáp “their fees would <b>use up most of what's left of the grant</b>” → <b>quá tốn kém</b>.", t: "paraphrase" },
      { q: "What does the man propose?", c: ["Purchasing more advanced scanners", "Training library staff to repair pages", "Trading work experience for a lower fee", "Postponing the project until next year"], a: 2, e: "“Their history students need <b>hands-on research experience</b>… <b>in exchange for a reduced rate</b>” → <b>đổi cơ hội thực hành lấy mức phí thấp hơn</b>.", t: "suy-luan" }
    ] }
];
