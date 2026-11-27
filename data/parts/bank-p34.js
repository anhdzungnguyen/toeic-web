/* Ngân hàng luyện Part 3–4 bổ sung (bank-p34): 10 hội thoại + 10 bài nói, lvl 1–5 */
TOEIC.addPractice(3, [
  { id: "pr3-b01", lvl: 1,
    script: [
      ["W", "Hello, this is Anna Kim. I booked a table for four people at seven o'clock tonight."],
      ["M", "Yes, Ms. Kim. I have your reservation here. How can I help you?"],
      ["W", "Two more coworkers want to join us. Can you change it to a table for six?"],
      ["M", "No problem. We have a large table by the window. Would you like that one?"],
      ["W", "Yes, please. And one of my coworkers doesn't eat meat. Do you have vegetarian dishes?"],
      ["M", "Yes, we have several. I'll put a note on your reservation for the chef."],
      ["W", "Thank you so much. See you tonight."]
    ],
    vi: "Nữ: Xin chào, tôi là Anna Kim. Tôi đã đặt bàn cho bốn người lúc bảy giờ tối nay. – Nam: Vâng, chị Kim. Tôi thấy đặt chỗ của chị đây. Tôi có thể giúp gì ạ? – Nữ: Có thêm hai đồng nghiệp muốn đi cùng. Anh đổi giúp thành bàn sáu người được không? – Nam: Không vấn đề gì. Chúng tôi có một bàn lớn cạnh cửa sổ. Chị có muốn bàn đó không? – Nữ: Có, cảm ơn anh. Và một đồng nghiệp của tôi không ăn thịt. Nhà hàng có món chay không? – Nam: Có, chúng tôi có vài món. Tôi sẽ ghi chú vào đặt chỗ của chị cho đầu bếp. – Nữ: Cảm ơn anh nhiều. Hẹn gặp tối nay.",
    qs: [
      { q: "Why is the woman calling?", c: ["To cancel a reservation", "To change the number of guests", "To ask about opening hours", "To order food for delivery"], a: 1, e: "“Two more coworkers want to join us. Can you change it to a <b>table for six</b>?” → từ 4 lên 6 người → <b>thay đổi số lượng khách</b>.", t: "y-chinh" },
      { q: "Where will the woman's group sit?", c: ["Near the kitchen", "On the patio", "By the window", "In a private room"], a: 2, e: "“We have a large table <b>by the window</b>.” – cô ấy đồng ý: “Yes, please.”", t: "nghe-chi-tiet" },
      { q: "What will the man do?", c: ["Leave a message for the chef", "Prepare a special dessert", "Call the woman's coworkers", "Give the woman a discount"], a: 0, e: "“I'll put a note on your reservation <b>for the chef</b>” → paraphrase: <b>để lại lời nhắn cho đầu bếp</b>.", t: "paraphrase" }
    ] },
  { id: "pr3-b02", lvl: 1,
    script: [
      ["M", "Excuse me. I'm looking for a coffee maker for my office."],
      ["W", "Sure. These are our Brewmaster models. How many people work in your office?"],
      ["M", "About twenty. So I need one that makes a lot of coffee at once."],
      ["W", "Then the 300 or the 400 would be best. They both make twelve cups at a time."],
      ["M", "OK. But my budget is under one hundred dollars."],
      ["W", "Then this one is perfect for you. And if you buy it today, we'll deliver it for free."],
      ["M", "Great. I'll take it. Can it arrive by Friday?"],
      ["W", "Yes. I'll arrange that now."]
    ],
    vi: "Nam: Xin lỗi, tôi đang tìm một máy pha cà phê cho văn phòng. – Nữ: Vâng. Đây là các mẫu Brewmaster của chúng tôi. Văn phòng anh có bao nhiêu người? – Nam: Khoảng hai mươi. Vậy tôi cần máy pha được nhiều cà phê một lúc. – Nữ: Vậy mẫu 300 hoặc 400 là tốt nhất. Cả hai đều pha 12 cốc một lần. – Nam: Được. Nhưng ngân sách của tôi dưới 100 đô. – Nữ: Vậy mẫu này rất hợp với anh. Và nếu anh mua hôm nay, chúng tôi giao hàng miễn phí. – Nam: Tuyệt. Tôi lấy cái này. Có giao kịp trước thứ Sáu không? – Nữ: Có. Tôi sẽ sắp xếp ngay.",
    graphic: "<table><tr><th>Model</th><th>Price</th></tr><tr><td>Brewmaster 100</td><td>$45</td></tr><tr><td>Brewmaster 200</td><td>$60</td></tr><tr><td>Brewmaster 300</td><td>$85</td></tr><tr><td>Brewmaster 400</td><td>$120</td></tr></table>",
    qs: [
      { q: "Who most likely is the woman?", c: ["A salesclerk", "An office manager", "A delivery driver", "A coffee shop owner"], a: 0, e: "Cô ấy giới thiệu “These are <b>our</b> Brewmaster models”, tư vấn mẫu và đề nghị giao hàng → <b>nhân viên bán hàng</b>.", t: "suy-luan" },
      { q: "Look at the graphic. How much will the man pay for the coffee maker?", c: ["$45", "$60", "$85", "$120"], a: 2, e: "Cần mẫu “the 300 or the 400”, nhưng ngân sách “<b>under one hundred dollars</b>”. Dò bảng: 400 giá $120 (quá ngân sách) → mẫu 300, <b>$85</b>.", t: "bieu-do" },
      { q: "What does the woman offer the man?", c: ["A free gift", "Free delivery", "A discount on coffee", "An extended warranty"], a: 1, e: "“If you buy it today, <b>we'll deliver it for free</b>.”", t: "nghe-chi-tiet" }
    ] },
  { id: "pr3-b03", lvl: 2,
    script: [
      ["M", "Excuse me. I was on Flight 302 from Chicago, but my suitcase didn't come out on the baggage belt."],
      ["W", "I'm sorry to hear that. May I see your baggage claim ticket?"],
      ["M", "Here it is. I have a meeting downtown in two hours, and all my presentation materials are in that bag."],
      ["W", "Let me check the system. It looks like your suitcase was put on the next flight. It lands at three thirty."],
      ["M", "Three thirty? My meeting starts at two."],
      ["W", "I understand. We can deliver the bag to your hotel this evening at no charge. Please fill out this form with the address."],
      ["M", "OK. I guess I'll have to print my materials again at the hotel."]
    ],
    vi: "Nam: Xin lỗi, tôi đi chuyến bay 302 từ Chicago nhưng vali của tôi không ra trên băng chuyền hành lý. – Nữ: Rất tiếc về chuyện đó. Cho tôi xem phiếu nhận hành lý của anh được không? – Nam: Đây. Hai tiếng nữa tôi có cuộc họp ở trung tâm, và toàn bộ tài liệu thuyết trình nằm trong vali đó. – Nữ: Để tôi kiểm tra hệ thống. Có vẻ vali của anh bị chuyển lên chuyến bay sau. Chuyến đó hạ cánh lúc ba giờ rưỡi. – Nam: Ba giờ rưỡi à? Cuộc họp của tôi bắt đầu lúc hai giờ. – Nữ: Tôi hiểu. Chúng tôi có thể giao vali đến khách sạn của anh tối nay, miễn phí. Anh vui lòng điền địa chỉ vào mẫu đơn này. – Nam: Được. Chắc tôi phải in lại tài liệu ở khách sạn thôi.",
    qs: [
      { q: "What problem does the man have?", c: ["He missed his flight.", "His luggage did not arrive.", "He lost his claim ticket.", "His hotel booking was canceled."], a: 1, e: "“My suitcase <b>didn't come out</b> on the baggage belt” → paraphrase: <b>hành lý không đến</b>. Phiếu nhận hành lý anh ấy vẫn có (“Here it is”).", t: "paraphrase" },
      { q: "What does the man mean when he says, “My meeting starts at two”?", c: ["He wants to change his meeting time.", "He cannot wait at the airport for his bag.", "He needs directions to downtown.", "He arrived earlier than expected."], a: 1, e: "Vali “lands at <b>three thirty</b>” nhưng họp lúc hai giờ → anh ấy <b>không thể chờ vali ở sân bay</b>. Nhân viên hiểu ý nên đề nghị giao vali đến khách sạn.", t: "y-dinh" },
      { q: "What is the man asked to do?", c: ["Complete a form", "Go to another counter", "Show his passport", "Pay a delivery fee"], a: 0, e: "“Please <b>fill out this form</b> with the address” → <b>điền mẫu đơn</b>. Việc giao vali là “at no charge” nên không phải trả phí.", t: "nghe-chi-tiet" }
    ] },
  { id: "pr3-b04", lvl: 2,
    script: [
      ["W", "Good morning. Oh, Mr. Patel. You're here for your two o'clock appointment with Dr. Lee?"],
      ["M", "Yes, but I'm a little early. I came straight from work."],
      ["W", "That's fine. Since this is your first visit, could you complete this patient information form and show me your insurance card?"],
      ["M", "Sure. Here's my card. Will I have to wait long?"],
      ["W", "Dr. Lee is running about fifteen minutes behind schedule. Oh, here's Nurse Garcia now."],
      ["W2", "Hello, Mr. Patel. I'll check your blood pressure and weight first, so the doctor can see you as soon as she's free."],
      ["M", "Great, thanks. Should I bring the form with me?"],
      ["W2", "Yes. You can finish it in the examination room."]
    ],
    vi: "Nữ: Chào buổi sáng. Ồ, anh Patel. Anh đến theo lịch hẹn hai giờ với bác sĩ Lee phải không? – Nam: Vâng, nhưng tôi đến hơi sớm. Tôi đi thẳng từ chỗ làm tới. – Nữ: Không sao. Vì đây là lần khám đầu tiên, anh điền giúp phiếu thông tin bệnh nhân này và cho tôi xem thẻ bảo hiểm nhé? – Nam: Vâng. Thẻ của tôi đây. Tôi có phải chờ lâu không? – Nữ: Bác sĩ Lee đang trễ lịch khoảng 15 phút. Ồ, y tá Garcia đến rồi. – Nữ 2: Chào anh Patel. Tôi sẽ đo huyết áp và cân nặng cho anh trước để bác sĩ khám ngay khi rảnh. – Nam: Tốt quá, cảm ơn. Tôi có cần mang theo phiếu không? – Nữ 2: Có. Anh có thể điền nốt trong phòng khám.",
    qs: [
      { q: "Where does the conversation most likely take place?", c: ["At a medical office", "At an insurance company", "At a fitness center", "At a pharmacy"], a: 0, e: "“appointment with <b>Dr. Lee</b>… patient information form… <b>Nurse</b> Garcia” → <b>phòng khám</b>. “insurance card” là bẫy lặp từ.", t: "suy-luan" },
      { q: "What does the man give the receptionist?", c: ["A prescription", "An insurance card", "A payment receipt", "A doctor's note"], a: 1, e: "Lễ tân xin “show me your <b>insurance card</b>” và anh ấy đáp “Here's my card.”", t: "nghe-chi-tiet" },
      { q: "What will the nurse do first?", c: ["Take some health measurements", "Call the doctor", "Schedule another appointment", "Collect the patient form"], a: 0, e: "“I'll check your <b>blood pressure and weight</b> first” → paraphrase: <b>đo một số chỉ số sức khỏe</b>. Phiếu thì anh ấy mang theo điền tiếp, không nộp.", t: "paraphrase" }
    ] },
  { id: "pr3-b05", lvl: 3,
    script: [
      ["W", "Hi. I'm here for a job interview at Brightway Marketing at ten. Could you tell me where their office is?"],
      ["M", "Actually, Brightway moved last week. They switched floors with the law office directly above them. The directory hasn't been updated yet."],
      ["W", "Oh, I'm glad I asked. So should I take the elevator?"],
      ["M", "Normally, yes, but the elevators are being inspected this morning. You'll have to use the stairs to the right of the main entrance."],
      ["W", "That's OK. I'm a bit early anyway."],
      ["M", "Before you go up, I need you to sign the visitor log and wear this badge while you're in the building."],
      ["W", "Sure, no problem."]
    ],
    vi: "Nữ: Chào anh. Tôi đến phỏng vấn xin việc ở Brightway Marketing lúc mười giờ. Anh chỉ giúp văn phòng của họ ở đâu được không? – Nam: Thật ra tuần trước Brightway đã chuyển. Họ đổi tầng với văn phòng luật ngay phía trên. Bảng chỉ dẫn chưa được cập nhật. – Nữ: Ồ, may mà tôi hỏi. Vậy tôi đi thang máy nhé? – Nam: Bình thường thì có, nhưng sáng nay thang máy đang được kiểm định. Chị phải đi cầu thang bộ bên phải lối vào chính. – Nữ: Không sao. Dù sao tôi cũng đến hơi sớm. – Nam: Trước khi chị lên, tôi cần chị ký sổ khách và đeo thẻ này khi ở trong tòa nhà. – Nữ: Vâng, không vấn đề gì.",
    graphic: "<table><tr><th>Floor</th><th>Tenant</th></tr><tr><td>2</td><td>Lindell Accounting</td></tr><tr><td>3</td><td>Brightway Marketing</td></tr><tr><td>4</td><td>Harmon Law Office</td></tr><tr><td>5</td><td>Nova Software</td></tr></table>",
    qs: [
      { q: "Why is the woman visiting the building?", c: ["To deliver some documents", "To attend an interview", "To meet a client", "To inspect the elevators"], a: 1, e: "“I'm here for a <b>job interview</b> at Brightway Marketing.” Kiểm định thang máy là việc của người khác.", t: "nghe-chi-tiet" },
      { q: "Look at the graphic. Which floor will the woman go to?", c: ["Floor 2", "Floor 3", "Floor 4", "Floor 5"], a: 2, e: "Bảng ghi Brightway ở tầng 3, nhưng họ “switched floors with the <b>law office directly above them</b>” và “The directory hasn't been updated”. Văn phòng luật ở tầng 4 → Brightway giờ ở <b>tầng 4</b>.", t: "bieu-do" },
      { q: "What does the man ask the woman to do?", c: ["Wait in the lobby", "Use the elevator", "Register as a visitor", "Show a photo ID"], a: 2, e: "“I need you to <b>sign the visitor log</b>” → paraphrase: <b>đăng ký khách</b>. Thang máy đang kiểm định nên không dùng được.", t: "paraphrase" }
    ] },
  { id: "pr3-b06", lvl: 3,
    script: [
      ["M", "Linda, Raj, thanks for coming. Packaging line two stopped again this morning. That's the third time this week."],
      ["W", "I know. The technician said the sensor needs to be replaced, but the part won't arrive until Monday."],
      ["M2", "We've got a large order for Hartley Foods that has to ship on Friday. If line two stays down, we won't finish in time."],
      ["M", "Could we move some of that work to line one?"],
      ["W", "Line one is already running at full capacity."],
      ["M2", "What about the night shift? A few workers told me they'd like extra hours."],
      ["M", "Good idea. Raj, check with them today, and I'll get approval for the overtime budget."]
    ],
    vi: "Nam: Linda, Raj, cảm ơn đã đến. Sáng nay dây chuyền đóng gói số hai lại dừng. Đó là lần thứ ba trong tuần. – Nữ: Tôi biết. Kỹ thuật viên nói cần thay cảm biến, nhưng phải đến thứ Hai linh kiện mới về. – Nam 2: Chúng ta có đơn hàng lớn cho Hartley Foods phải giao vào thứ Sáu. Nếu dây chuyền hai vẫn ngừng, chúng ta sẽ không kịp. – Nam: Chuyển bớt việc sang dây chuyền một được không? – Nữ: Dây chuyền một đang chạy hết công suất rồi. – Nam 2: Còn ca đêm thì sao? Vài công nhân nói với tôi họ muốn làm thêm giờ. – Nam: Ý hay đấy. Raj, hôm nay anh hỏi họ nhé, còn tôi sẽ xin duyệt ngân sách làm thêm giờ.",
    qs: [
      { q: "What problem are the speakers discussing?", c: ["A shipment was sent to the wrong customer.", "A machine keeps breaking down.", "Some workers have quit.", "A supplier raised its prices."], a: 1, e: "“Packaging line two <b>stopped again</b>… the <b>third time</b> this week” → <b>máy móc liên tục hỏng</b>.", t: "y-chinh" },
      { q: "What does the woman imply when she says, “Line one is already running at full capacity”?", c: ["Line one also needs repairs.", "Line one cannot handle any more work.", "Line one has finished the Hartley order.", "Line one should be shut down."], a: 1, e: "Đáp lại đề xuất “move some of that work to line one?” → hết công suất nghĩa là <b>dây chuyền một không nhận thêm việc được</b>.", t: "y-dinh" },
      { q: "What will Raj most likely do today?", c: ["Order a replacement part", "Contact a client", "Talk to some employees", "Approve a budget"], a: 2, e: "Raj là người nhắc đến ca đêm; người quản lý giao: “<b>Raj, check with them today</b>” (them = night-shift workers) → <b>nói chuyện với công nhân</b>. Duyệt ngân sách là việc của người quản lý.", t: "suy-luan" }
    ] },
  { id: "pr3-b07", lvl: 4,
    script: [
      ["W", "IT help desk, this is Mei. What seems to be the problem?"],
      ["M", "Hi, it's Victor in accounting. Ever since the software update last night, I can't open any of our spreadsheets. I keep getting an error message."],
      ["W", "You're the fourth person from your department to call this morning. We think the update conflicts with an older add-on you all use."],
      ["M", "Well, I've got quarterly figures due to the finance director by noon."],
      ["W", "In that case, I can roll your computer back to the previous version remotely. It takes about twenty minutes, and you'll need to save and close everything first."],
      ["M", "That's fine. I'll grab a coffee while you work on it."],
      ["W", "Great. And we'll e-mail everyone once a permanent fix is in place."]
    ],
    vi: "Nữ: Bộ phận hỗ trợ IT, Mei nghe đây. Anh gặp vấn đề gì ạ? – Nam: Chào chị, tôi là Victor bên kế toán. Từ khi cập nhật phần mềm tối qua, tôi không mở được bảng tính nào. Cứ hiện thông báo lỗi. – Nữ: Anh là người thứ tư trong phòng anh gọi sáng nay. Chúng tôi nghĩ bản cập nhật xung đột với một tiện ích cũ mà phòng anh đều dùng. – Nam: Chà, tôi phải nộp số liệu quý cho giám đốc tài chính trước trưa nay. – Nữ: Vậy thì tôi có thể đưa máy anh về phiên bản trước từ xa. Mất khoảng 20 phút, và anh cần lưu và đóng mọi thứ trước. – Nam: Được. Tôi đi lấy cà phê trong lúc chị xử lý. – Nữ: Tốt. Và chúng tôi sẽ gửi email cho mọi người khi có cách khắc phục lâu dài.",
    qs: [
      { q: "What problem does the man report?", c: ["He forgot his password.", "He cannot access some files.", "His computer will not turn on.", "His e-mail account is not working."], a: 1, e: "“I <b>can't open</b> any of our <b>spreadsheets</b>” → paraphrase: <b>không truy cập được một số tệp</b>.", t: "paraphrase" },
      { q: "What does the man mean when he says, “I've got quarterly figures due to the finance director by noon”?", c: ["He needs the problem solved quickly.", "He wants the director to call the help desk.", "He has already finished his report.", "He would like to reschedule a meeting."], a: 0, e: "Sau khi nghe lỗi do xung đột (chưa biết bao giờ sửa), anh nhấn mạnh hạn chót buổi trưa → <b>cần xử lý gấp</b>. Mei hiểu ý: “<b>In that case</b>, I can roll your computer back…”.", t: "y-dinh" },
      { q: "What does the woman say the IT department will do later?", c: ["Visit the accounting department", "Install a new add-on", "Notify staff about a solution", "Replace the man's computer"], a: 2, e: "“We'll <b>e-mail everyone</b> once a <b>permanent fix</b> is in place” → <b>thông báo cho nhân viên về cách khắc phục</b>.", t: "nghe-chi-tiet" }
    ] },
  { id: "pr3-b08", lvl: 4,
    script: [
      ["M", "Hello, Ms. Fischer. This is Paolo from the Grand Avenue Hotel events office. I'm calling to confirm the catering order for your seminar on Thursday."],
      ["W", "Thanks for calling. Actually, I was about to contact you. Registration closed yesterday, and we ended up with ten fewer attendees than we'd planned for."],
      ["M", "I see. Would you like me to adjust the coffee and tea service, then?"],
      ["W", "Yes, please match it to the new number. Everything else can stay as it is. People always seem to want extra water and fruit."],
      ["M", "Understood. One more thing: the Lakeview Room is being repainted, so we've moved you to the Harbor Room on the same floor. It's actually a bit larger."],
      ["W", "That works. Could you send me a revised invoice by e-mail?"],
      ["M", "Of course. You'll have it within the hour."]
    ],
    vi: "Nam: Chào chị Fischer. Tôi là Paolo, phòng sự kiện khách sạn Grand Avenue. Tôi gọi để xác nhận đơn đặt đồ ăn uống cho hội thảo thứ Năm của chị. – Nữ: Cảm ơn anh đã gọi. Thật ra tôi cũng định liên hệ anh. Hôm qua đã đóng đăng ký, và số người tham dự ít hơn dự kiến mười người. – Nam: Tôi hiểu. Vậy chị có muốn tôi điều chỉnh phần cà phê và trà không? – Nữ: Có, anh chỉnh cho khớp với số mới. Mọi thứ khác giữ nguyên. Mọi người lúc nào cũng muốn thêm nước và trái cây. – Nam: Đã rõ. Còn một việc: phòng Lakeview đang được sơn lại nên chúng tôi đã chuyển chị sang phòng Harbor cùng tầng. Phòng đó thực ra rộng hơn một chút. – Nữ: Được đấy. Anh gửi tôi hóa đơn điều chỉnh qua email được không? – Nam: Tất nhiên. Chị sẽ nhận được trong vòng một tiếng.",
    graphic: "<table><tr><th colspan=\"2\">Catering Order – Fischer Seminar</th></tr><tr><th>Item</th><th>Quantity</th></tr><tr><td>Coffee and tea service</td><td>40</td></tr><tr><td>Sandwich platters</td><td>6</td></tr><tr><td>Fruit trays</td><td>4</td></tr><tr><td>Bottled water</td><td>60</td></tr></table>",
    qs: [
      { q: "Why does the woman want to change the order?", c: ["The seminar date has moved.", "Attendance will be lower than expected.", "Her budget has been reduced.", "Some guests have dietary needs."], a: 1, e: "“We ended up with <b>ten fewer attendees</b> than we'd planned for” → paraphrase: <b>số người dự ít hơn dự kiến</b>.", t: "paraphrase" },
      { q: "Look at the graphic. Which quantity on the order form will be changed?", c: ["4", "6", "40", "60"], a: 2, e: "Chỉ điều chỉnh “the <b>coffee and tea service</b>” (“Everything else can stay as it is”). Dò bảng: cà phê và trà = <b>40</b> (sẽ thành 30).", t: "bieu-do" },
      { q: "What change has the hotel made?", c: ["It upgraded the catering menu.", "It assigned a different room.", "It changed the seminar time.", "It hired additional staff."], a: 1, e: "“The Lakeview Room is being repainted, so we've <b>moved you to the Harbor Room</b>” → <b>đổi sang phòng khác</b>.", t: "nghe-chi-tiet" }
    ] },
  { id: "pr3-b09", lvl: 5,
    script: [
      ["W", "So, where are we with the awards dinner? We're only nine days out."],
      ["M", "Mostly on track. The one hitch is Dr. Okafor. Her flight won't land until seven, so there's no way she'll make it in time to open the evening."],
      ["W2", "Then let's move her talk to just before the awards ceremony and ask the CEO to give the opening remarks instead."],
      ["W", "I doubt he'll mind. He's been wanting a bigger role at this event anyway."],
      ["M", "Fine, but that pushes everything back, and the venue needs us out by ten thirty."],
      ["W2", "Leave that to me. I'll have a word with the venue manager about staying open later. They owe us one after the sound problems last year."],
      ["W", "Perfect. Then, Tom, could you redo the printed programs once that's settled?"]
    ],
    vi: "Nữ: Tiệc trao giải đến đâu rồi? Chỉ còn chín ngày nữa thôi. – Nam: Phần lớn đúng tiến độ. Trục trặc duy nhất là tiến sĩ Okafor. Chuyến bay của bà ấy bảy giờ mới hạ cánh, nên không đời nào kịp mở đầu buổi tối. – Nữ 2: Vậy chuyển bài nói của bà ấy xuống ngay trước lễ trao giải, và mời giám đốc điều hành phát biểu khai mạc thay. – Nữ: Tôi nghĩ ông ấy chẳng phản đối đâu. Dù sao ông ấy cũng đang muốn có vai trò lớn hơn ở sự kiện này. – Nam: Được, nhưng như thế mọi thứ sẽ lùi lại, mà địa điểm yêu cầu chúng ta rời đi trước mười giờ rưỡi. – Nữ 2: Để tôi lo. Tôi sẽ nói chuyện với quản lý địa điểm về việc mở cửa muộn hơn. Họ nợ chúng ta một lần sau vụ sự cố âm thanh năm ngoái. – Nữ: Tuyệt. Vậy Tom, khi chuyện đó xong anh làm lại chương trình in giúp nhé?",
    graphic: "<table><tr><th colspan=\"2\">Annual Awards Dinner – Original Schedule</th></tr><tr><th>Time</th><th>Event</th></tr><tr><td>6:00</td><td>Reception</td></tr><tr><td>6:45</td><td>Welcome speech</td></tr><tr><td>7:15</td><td>Dinner</td></tr><tr><td>8:30</td><td>Awards ceremony</td></tr></table>",
    qs: [
      { q: "Look at the graphic. When was Dr. Okafor originally scheduled to speak?", c: ["6:00", "6:45", "7:15", "8:30"], a: 1, e: "“No way she'll make it in time to <b>open the evening</b>” và CEO sẽ “give the <b>opening remarks</b> instead” → bà ấy vốn phụ trách bài phát biểu chào mừng = <b>6:45</b>. 7:00 là giờ máy bay hạ cánh (bẫy); 8:30 là chỗ bài nói sẽ được dời tới gần.", t: "bieu-do" },
      { q: "Why does the second woman mention last year's event?", c: ["To suggest that the venue will cooperate", "To complain about a sound system", "To recommend a different venue", "To explain why the budget increased"], a: 0, e: "“They <b>owe us one</b> after the sound problems last year” → địa điểm nợ ân tình nên <b>nhiều khả năng sẽ đồng ý</b> mở cửa muộn hơn.", t: "suy-luan" },
      { q: "What is Tom asked to do?", c: ["Contact the venue manager", "Pick up the speaker at the airport", "Update some printed materials", "Speak with the CEO"], a: 2, e: "Tom là người nam: “Tom, could you <b>redo the printed programs</b>” → <b>cập nhật tài liệu in</b>. Liên hệ quản lý địa điểm là việc của người nữ thứ hai.", t: "paraphrase" }
    ] },
  { id: "pr3-b10", lvl: 5,
    script: [
      ["W", "Thanks for showing me the space, Mr. Ito. The location is ideal for a bakery, with the train station right across the street."],
      ["M", "It's been very popular. I've shown it to three other businesses this week alone."],
      ["W", "I can see why. My only concern is the kitchen. Those ovens look like they're at least twenty years old."],
      ["M", "The owner is aware of that. He's willing to replace them if you sign a five-year lease rather than the standard three."],
      ["W", "Five years is a big commitment for a new location. I'd need to run the numbers with my business partner first."],
      ["M", "Of course. Just keep in mind that another applicant is submitting paperwork on Friday."],
      ["W", "Understood. I'll call you by Thursday afternoon either way."]
    ],
    vi: "Nữ: Cảm ơn anh Ito đã dẫn tôi xem mặt bằng. Vị trí này lý tưởng cho tiệm bánh, ga tàu ngay bên kia đường. – Nam: Chỗ này được quan tâm lắm. Riêng tuần này tôi đã dẫn ba doanh nghiệp khác đến xem. – Nữ: Tôi hiểu vì sao. Điều tôi lo duy nhất là gian bếp. Mấy cái lò kia trông cũ ít nhất hai mươi năm. – Nam: Chủ nhà biết điều đó. Ông ấy sẵn sàng thay lò nếu chị ký hợp đồng thuê năm năm thay vì ba năm như thông thường. – Nữ: Năm năm là cam kết lớn với một địa điểm mới. Tôi cần tính toán với người cùng góp vốn trước. – Nam: Tất nhiên. Chỉ là chị nhớ cho, có một người khác sẽ nộp hồ sơ vào thứ Sáu. – Nữ: Tôi hiểu. Dù thế nào tôi cũng sẽ gọi anh trước chiều thứ Năm.",
    qs: [
      { q: "What is the woman concerned about?", c: ["The distance from public transportation", "The condition of some appliances", "The size of the dining area", "The cost of the monthly rent"], a: 1, e: "“My only concern is the kitchen. Those <b>ovens</b> look like they're at least <b>twenty years old</b>” → paraphrase: <b>tình trạng thiết bị</b>. Ga tàu ngay đối diện là điểm cộng, không phải mối lo.", t: "paraphrase" },
      { q: "What does the man imply when he says, “Just keep in mind that another applicant is submitting paperwork on Friday”?", c: ["The woman should make a decision soon.", "The property is no longer available.", "The owner prefers the other applicant.", "The paperwork must be submitted in person."], a: 0, e: "Cô ấy muốn có thời gian tính toán; anh ấy nhắc có người khác nộp hồ sơ thứ Sáu → <b>cô nên quyết định sớm</b>. Cô hiểu ý: “I'll call you by Thursday afternoon”.", t: "y-dinh" },
      { q: "What does the woman say she will do before calling Mr. Ito?", c: ["Visit the owner on Friday", "Review the costs with a colleague", "Sign a three-year lease", "Look at other properties"], a: 1, e: "“I'd need to <b>run the numbers with my business partner</b> first” → <b>xem xét chi phí cùng đồng nghiệp/đối tác</b>.", t: "suy-luan" }
    ] }
]);

TOEIC.addPractice(4, [
  { id: "pr4-b01", lvl: 1,
    script: [["N", "Attention, passengers on the nine fifteen train to Boston. Because of a signal problem near Hartford, this train will leave about thirty minutes late. The new departure time is nine forty-five. The train will now leave from Platform 6 instead of Platform 4. While you wait, free coffee is available at the café next to the ticket office. We are sorry for the delay, and thank you for your patience."]],
    vi: "Xin chú ý, hành khách đi chuyến tàu 9 giờ 15 đến Boston. Do sự cố tín hiệu gần Hartford, chuyến tàu này sẽ khởi hành trễ khoảng 30 phút. Giờ khởi hành mới là 9 giờ 45. Tàu sẽ khởi hành từ sân ga số 6 thay vì sân ga số 4. Trong lúc chờ, quý khách được dùng cà phê miễn phí tại quán cà phê cạnh phòng bán vé. Chúng tôi xin lỗi vì sự chậm trễ và cảm ơn quý khách đã kiên nhẫn.",
    qs: [
      { q: "Where is the announcement most likely being made?", c: ["At an airport", "At a train station", "At a bus stop", "At a café"], a: 1, e: "“passengers on the… <b>train</b>… <b>Platform</b> 6” → <b>ga tàu</b>. “café” là bẫy lặp từ.", t: "suy-luan" },
      { q: "What is the new departure time?", c: ["9:00", "9:15", "9:30", "9:45"], a: 3, e: "“The new departure time is <b>nine forty-five</b>.” 9:15 là giờ cũ.", t: "nghe-chi-tiet" },
      { q: "What is available near the ticket office?", c: ["Free drinks", "Free maps", "Newspapers", "Train schedules"], a: 0, e: "“<b>Free coffee</b> is available at the café next to the ticket office” → paraphrase: <b>đồ uống miễn phí</b>.", t: "paraphrase" }
    ] },
  { id: "pr4-b02", lvl: 1,
    script: [["N", "Hello, this message is for Mr. Brian Cole. This is Sarah from Bright Smile Dental Clinic. I'm calling to remind you about your appointment with Dr. Evans tomorrow at ten thirty. Please arrive ten minutes early to fill out a short form. If you need to change the time, please call us back at 555-0182. Also, our parking lot is closed for repairs this week, so please park on Main Street. Thank you, and see you tomorrow."]],
    vi: "Xin chào, tin nhắn này gửi anh Brian Cole. Tôi là Sarah ở Nha khoa Bright Smile. Tôi gọi để nhắc anh về lịch hẹn với bác sĩ Evans vào 10 giờ 30 sáng mai. Anh vui lòng đến sớm mười phút để điền một mẫu đơn ngắn. Nếu cần đổi giờ, xin gọi lại số 555-0182. Ngoài ra, bãi đỗ xe của chúng tôi đóng cửa để sửa chữa trong tuần này, vì vậy anh vui lòng đỗ xe trên phố Main. Cảm ơn anh, hẹn gặp ngày mai.",
    qs: [
      { q: "What is the purpose of the call?", c: ["To cancel an appointment", "To remind a patient about a visit", "To request a payment", "To introduce a new dentist"], a: 1, e: "“I'm calling to <b>remind you about your appointment</b>” → <b>nhắc bệnh nhân lịch khám</b>.", t: "y-chinh" },
      { q: "What is the listener asked to do?", c: ["Arrive a little early", "Bring an insurance card", "Pay in advance", "Call Dr. Evans"], a: 0, e: "“Please <b>arrive ten minutes early</b> to fill out a short form.”", t: "nghe-chi-tiet" },
      { q: "Why should the listener park on Main Street?", c: ["It is free of charge.", "It is closer to the entrance.", "The clinic's parking lot is being repaired.", "Parking is not allowed at night."], a: 2, e: "“Our <b>parking lot is closed for repairs</b> this week, so please park on Main Street.”", t: "nghe-chi-tiet" }
    ] },
  { id: "pr4-b03", lvl: 2,
    script: [["N", "Are you ready to get in shape this summer? Come to FitZone, the newest fitness center in Greenville! We're open twenty-four hours a day, seven days a week, and we have more than one hundred exercise machines. All members can use our swimming pool, and Premium members also get two free sessions with a personal trainer every month. This month only, new members who sign up for a Premium membership will pay ten dollars less per month. Visit our Web site to take a virtual tour of our facilities."]],
    vi: "Bạn đã sẵn sàng lấy lại vóc dáng mùa hè này chưa? Hãy đến FitZone, trung tâm thể hình mới nhất ở Greenville! Chúng tôi mở cửa 24 giờ mỗi ngày, bảy ngày mỗi tuần, với hơn một trăm máy tập. Mọi hội viên đều được dùng hồ bơi, và hội viên Premium còn được hai buổi tập miễn phí với huấn luyện viên cá nhân mỗi tháng. Chỉ trong tháng này, hội viên mới đăng ký gói Premium sẽ trả ít hơn 10 đô mỗi tháng. Hãy truy cập trang web của chúng tôi để tham quan ảo cơ sở vật chất.",
    graphic: "<table><tr><th>Membership</th><th>Monthly Fee</th></tr><tr><td>Basic</td><td>$25</td></tr><tr><td>Plus</td><td>$40</td></tr><tr><td>Premium</td><td>$55</td></tr><tr><td>Family</td><td>$80</td></tr></table>",
    qs: [
      { q: "What is being advertised?", c: ["A sports store", "A fitness center", "A swimming school", "A health food shop"], a: 1, e: "“Come to FitZone, the newest <b>fitness center</b> in Greenville!” Hồ bơi chỉ là một tiện ích (bẫy).", t: "y-chinh" },
      { q: "What do Premium members receive in addition to other benefits?", c: ["Free parking", "Personal training sessions", "Free towels", "Pool access"], a: 1, e: "“Premium members also get two free <b>sessions with a personal trainer</b>.” Hồ bơi thì “All members” đều được dùng.", t: "nghe-chi-tiet" },
      { q: "Look at the graphic. How much will a new Premium member pay per month this month?", c: ["$25", "$40", "$45", "$55"], a: 2, e: "Bảng: Premium = $55. Tháng này hội viên mới Premium “pay <b>ten dollars less</b> per month” → 55 − 10 = <b>$45</b>.", t: "bieu-do" }
    ] },
  { id: "pr4-b04", lvl: 2,
    script: [["N", "Good evening, this is Kelly Barnes with your weekend weather on Radio 98. After a warm and sunny Friday, a storm will move into the area on Saturday, bringing heavy rain and strong winds throughout the day. Because of this, the organizers of the Riverside Food Festival have moved the event from Saturday to Sunday. By Monday, the sunshine returns, with temperatures reaching twenty-eight degrees. Stay tuned for the traffic report after this short break."]],
    vi: "Chào buổi tối, tôi là Kelly Barnes với bản tin thời tiết cuối tuần trên Radio 98. Sau một ngày thứ Sáu ấm áp và nắng, một cơn bão sẽ đến khu vực vào thứ Bảy, mang theo mưa lớn và gió mạnh suốt cả ngày. Vì vậy, ban tổ chức Lễ hội Ẩm thực Riverside đã dời sự kiện từ thứ Bảy sang Chủ nhật. Đến thứ Hai, trời nắng trở lại với nhiệt độ lên tới 28 độ. Hãy tiếp tục theo dõi bản tin giao thông sau giờ nghỉ ngắn.",
    graphic: "<table><tr><th>Day</th><th>Forecast</th><th>High</th></tr><tr><td>Friday</td><td>Sunny</td><td>26°C</td></tr><tr><td>Saturday</td><td>Rainy</td><td>19°C</td></tr><tr><td>Sunday</td><td>Cloudy</td><td>22°C</td></tr><tr><td>Monday</td><td>Sunny</td><td>28°C</td></tr></table>",
    qs: [
      { q: "Who most likely is the speaker?", c: ["A radio announcer", "A festival organizer", "A restaurant chef", "A traffic officer"], a: 0, e: "“This is Kelly Barnes with your weekend weather <b>on Radio 98</b>” → <b>phát thanh viên</b>.", t: "suy-luan" },
      { q: "Why was the festival moved?", c: ["The park is being repaired.", "Bad weather is expected.", "Not enough tickets were sold.", "A storm damaged the stage."], a: 1, e: "“A storm will move into the area on Saturday… <b>Because of this</b>… moved the event” → vì <b>dự báo thời tiết xấu</b>. Bão chưa đến nên chưa làm hỏng gì (bẫy).", t: "nghe-chi-tiet" },
      { q: "Look at the graphic. What weather is expected on the day of the festival?", c: ["Sunny", "Cloudy", "Rainy", "Windy"], a: 1, e: "Lễ hội dời “from Saturday <b>to Sunday</b>”. Dò bảng: Chủ nhật = <b>Cloudy</b> (nhiều mây).", t: "bieu-do" }
    ] },
  { id: "pr4-b05", lvl: 3,
    script: [["N", "Welcome to the Dalton Chocolate Factory. I'm Grace, and I'll be leading today's tour. We'll begin in the mixing room, where our cocoa beans are roasted and ground, and then we'll walk through the packaging area. Because some of the machines there are extremely loud, we'll hand out ear protection before we go in. Now, I know a lot of you are wondering about samples. Well, the tour ends in our tasting room. Please leave your bags in the lockers by the entrance, as outside food and drinks aren't allowed on the factory floor. Let's get started."]],
    vi: "Chào mừng đến Nhà máy Sô-cô-la Dalton. Tôi là Grace, người dẫn đoàn tham quan hôm nay. Chúng ta sẽ bắt đầu ở phòng trộn, nơi hạt ca cao được rang và xay, sau đó đi qua khu đóng gói. Vì một số máy ở đó rất ồn, chúng tôi sẽ phát đồ bảo vệ tai trước khi vào. Tôi biết nhiều bạn đang thắc mắc về hàng nếm thử. À, chuyến tham quan kết thúc ở phòng nếm thử của chúng tôi. Vui lòng để túi trong tủ khóa cạnh lối vào, vì không được mang đồ ăn thức uống bên ngoài vào khu sản xuất. Chúng ta bắt đầu nhé.",
    qs: [
      { q: "Where most likely are the listeners?", c: ["At a candy factory", "At a cocoa farm", "At a supermarket", "At a cooking school"], a: 0, e: "“Welcome to the Dalton <b>Chocolate Factory</b>” → paraphrase: <b>nhà máy kẹo</b>. “cocoa beans” là bẫy cho “cocoa farm”.", t: "suy-luan" },
      { q: "What will listeners receive before entering the packaging area?", c: ["Safety glasses", "Hearing protection", "Free samples", "Locker keys"], a: 1, e: "“We'll hand out <b>ear protection</b> before we go in” → paraphrase: <b>đồ bảo vệ thính giác</b>.", t: "paraphrase" },
      { q: "What does the speaker imply when she says, “Well, the tour ends in our tasting room”?", c: ["Listeners will be able to try some products.", "The tour will be shorter than planned.", "The tasting room is closed today.", "Listeners must buy chocolate at the end."], a: 0, e: "Câu này trả lời thắc mắc “wondering about <b>samples</b>” → cuối chuyến <b>khách sẽ được nếm thử sản phẩm</b>.", t: "y-dinh" }
    ] },
  { id: "pr4-b06", lvl: 3,
    script: [["N", "Good afternoon, everyone, and thank you for joining us at the third annual Small Business Growth Forum. It's my pleasure to introduce our next speaker, Ms. Helena Ruiz. Ms. Ruiz started her online furniture company in her garage just eight years ago. Today, it employs over three hundred people and ships to more than twenty countries. Her recent book, Built to Last, explains how she grew the business without borrowing money from banks. After her talk, Ms. Ruiz will be signing copies of her book in the lobby. Please join me in welcoming Helena Ruiz."]],
    vi: "Chào buổi chiều mọi người, cảm ơn đã đến Diễn đàn Phát triển Doanh nghiệp Nhỏ thường niên lần thứ ba. Tôi rất hân hạnh giới thiệu diễn giả tiếp theo, bà Helena Ruiz. Bà Ruiz khởi nghiệp công ty nội thất trực tuyến trong ga-ra nhà mình chỉ tám năm trước. Ngày nay công ty có hơn ba trăm nhân viên và giao hàng tới hơn hai mươi quốc gia. Cuốn sách gần đây của bà, Built to Last, giải thích cách bà phát triển doanh nghiệp mà không vay tiền ngân hàng. Sau bài nói, bà Ruiz sẽ ký tặng sách ở sảnh. Xin mời mọi người cùng chào đón Helena Ruiz.",
    qs: [
      { q: "What is the main purpose of the talk?", c: ["To introduce a speaker", "To present an award", "To open a furniture store", "To explain a bank policy"], a: 0, e: "“It's my pleasure to <b>introduce our next speaker</b>, Ms. Helena Ruiz.”", t: "y-chinh" },
      { q: "What is mentioned about Ms. Ruiz's company?", c: ["It began in a small space at her home.", "It received loans from several banks.", "It has offices in twenty countries.", "It mainly sells books online."], a: 0, e: "“Started her online furniture company <b>in her garage</b>” → paraphrase: <b>bắt đầu ở một không gian nhỏ tại nhà</b>. Công ty “ships to” 20 nước chứ không có văn phòng; và “without borrowing money from banks”.", t: "paraphrase" },
      { q: "What will Ms. Ruiz do after her talk?", c: ["Answer questions online", "Autograph copies of her book", "Lead a tour of the lobby", "Meet with bank officials"], a: 1, e: "“Ms. Ruiz will be <b>signing copies of her book</b> in the lobby” → <b>ký tặng sách</b>.", t: "nghe-chi-tiet" }
    ] },
  { id: "pr4-b07", lvl: 4,
    script: [["N", "This is Mark Delaney with your eight o'clock traffic update. If you're heading north on Highway 9 this morning, expect delays of up to twenty minutes near the Lexington Bridge, where a truck lost part of its load in the right lane. Crews are on the scene and expect to have the lane cleared before nine. In addition, the exit for the stadium is closed all day while road crews repave the ramp. Drivers going to tonight's baseball game should take the following exit and follow the signs. And with the game expected to sell out, you'll want to leave home early. I'll be back with another update in fifteen minutes."]],
    vi: "Tôi là Mark Delaney với bản tin giao thông lúc tám giờ. Nếu sáng nay bạn đi về phía bắc trên Quốc lộ 9, hãy chuẩn bị chậm trễ tới 20 phút gần cầu Lexington, nơi một xe tải bị rơi một phần hàng xuống làn bên phải. Đội cứu hộ đã có mặt và dự kiến dọn xong làn trước chín giờ. Ngoài ra, lối ra sân vận động đóng cả ngày để đội thi công trải lại mặt đường dốc ra. Người lái xe đi xem trận bóng chày tối nay nên dùng lối ra kế tiếp và đi theo biển chỉ dẫn. Và vì trận đấu dự kiến bán hết vé, bạn nên ra khỏi nhà sớm. Tôi sẽ trở lại với bản tin cập nhật sau 15 phút.",
    graphic: "<table><tr><th colspan=\"2\">Highway 9 Northbound Exits</th></tr><tr><th>Exit</th><th>Destination</th></tr><tr><td>Exit 12</td><td>Downtown</td></tr><tr><td>Exit 14</td><td>Stadium</td></tr><tr><td>Exit 15</td><td>Airport</td></tr><tr><td>Exit 17</td><td>Harbor District</td></tr></table>",
    qs: [
      { q: "What has caused delays near the bridge?", c: ["Road construction", "Items that fell from a vehicle", "Heavy rain", "A broken traffic light"], a: 1, e: "“A truck <b>lost part of its load</b> in the right lane” → paraphrase: <b>hàng rơi từ một chiếc xe</b>. Thi công trải đường là ở lối ra sân vận động (bẫy).", t: "paraphrase" },
      { q: "Look at the graphic. Which exit should drivers going to the baseball game use today?", c: ["Exit 12", "Exit 14", "Exit 15", "Exit 17"], a: 2, e: "Lối ra sân vận động (Exit 14) đóng; người đi xem bóng chày “should take <b>the following exit</b>” → lối kế tiếp là <b>Exit 15</b>.", t: "bieu-do" },
      { q: "What does the speaker recommend?", c: ["Taking public transportation", "Allowing extra time to reach the game", "Buying tickets online", "Avoiding Highway 9 tonight"], a: 1, e: "“The game expected to sell out, <b>you'll want to leave home early</b>” → <b>dành thêm thời gian để đến sân</b>.", t: "suy-luan" }
    ] },
  { id: "pr4-b08", lvl: 4,
    script: [["N", "Before we wrap up, let's go over the customer survey results from last quarter. Overall satisfaction rose to eighty-seven percent, the highest it's been in three years. Customers especially liked our new online chat service. However, a number of people complained that it took too long to receive refunds, in some cases more than three weeks. Now, our competitors process refunds in five days. So starting next month, the finance team will review refund requests daily instead of weekly. Janet will be sending out the new procedure tomorrow, so please read it carefully before Monday."]],
    vi: "Trước khi kết thúc, chúng ta điểm qua kết quả khảo sát khách hàng quý trước. Mức hài lòng chung tăng lên 87%, cao nhất trong ba năm. Khách hàng đặc biệt thích dịch vụ chat trực tuyến mới của chúng ta. Tuy nhiên, khá nhiều người phàn nàn rằng nhận tiền hoàn quá lâu, có trường hợp hơn ba tuần. Trong khi đó, đối thủ của chúng ta xử lý hoàn tiền trong năm ngày. Vì vậy, từ tháng sau, nhóm tài chính sẽ xem xét yêu cầu hoàn tiền hằng ngày thay vì hằng tuần. Ngày mai Janet sẽ gửi quy trình mới, mọi người vui lòng đọc kỹ trước thứ Hai.",
    qs: [
      { q: "What did customers praise?", c: ["The store's location", "A new way to contact the company", "Faster delivery", "Lower prices"], a: 1, e: "“Customers especially liked our new <b>online chat service</b>” → paraphrase: <b>một cách mới để liên hệ công ty</b>.", t: "paraphrase" },
      { q: "What does the speaker imply when she says, “Now, our competitors process refunds in five days”?", c: ["The company's refund process must improve.", "The company should hire a competitor's staff.", "Most customers prefer the competitors.", "Refunds will no longer be offered."], a: 0, e: "Khách chờ hoàn tiền “more than three weeks” trong khi đối thủ chỉ 5 ngày → <b>quy trình hoàn tiền phải cải thiện</b>; ngay sau đó là giải pháp “review refund requests daily”.", t: "y-dinh" },
      { q: "What will listeners receive tomorrow?", c: ["A survey form", "Details about a new procedure", "A training schedule", "Refund checks"], a: 1, e: "“Janet will be sending out <b>the new procedure</b> tomorrow.”", t: "nghe-chi-tiet" }
    ] },
  { id: "pr4-b09", lvl: 5,
    script: [["N", "OK, everyone, welcome to your first day at the warehouse. Before you touch any of the equipment, you'll need to complete the safety training I'm about to give. First, the scanners you've been issued are linked to your employee number, so don't swap them, even for a minute; every item you scan is recorded under your name. Second, forklifts may only be operated by staff holding a valid certificate. I've heard people say, “It's just a few meters.” Well, a few meters is all it takes. If you're interested in getting certified, the company covers the course fee, and sessions are held on the first Tuesday of each month. Any questions before we head out to the floor?"]],
    vi: "Được rồi, chào mừng mọi người đến ngày làm việc đầu tiên ở nhà kho. Trước khi đụng vào bất kỳ thiết bị nào, các bạn cần hoàn thành buổi huấn luyện an toàn tôi sắp trình bày. Thứ nhất, máy quét được phát cho các bạn gắn với mã nhân viên, nên đừng đổi cho nhau, dù chỉ một phút; mọi món hàng bạn quét đều được ghi dưới tên bạn. Thứ hai, chỉ nhân viên có chứng chỉ hợp lệ mới được lái xe nâng. Tôi từng nghe người ta nói: “Chỉ vài mét thôi mà.” Ấy, chỉ vài mét là đủ xảy ra chuyện. Nếu bạn muốn lấy chứng chỉ, công ty chi trả học phí, các khóa học mở vào thứ Ba đầu tiên mỗi tháng. Có câu hỏi nào trước khi ra khu làm việc không?",
    qs: [
      { q: "Who most likely are the listeners?", c: ["Newly hired workers", "Forklift instructors", "Warehouse customers", "Safety inspectors"], a: 0, e: "“Welcome to <b>your first day</b> at the warehouse” → <b>nhân viên mới</b>.", t: "suy-luan" },
      { q: "Why should listeners not exchange scanners?", c: ["The scanners are expensive to replace.", "Each person's work is tracked individually.", "Each scanner works in only one area.", "The scanners must be charged regularly."], a: 1, e: "“Linked to your employee number… every item you scan is <b>recorded under your name</b>” → paraphrase: <b>công việc của mỗi người được theo dõi riêng</b>.", t: "paraphrase" },
      { q: "What does the speaker mean when he says, “Well, a few meters is all it takes”?", c: ["Even a short drive can cause an accident.", "The warehouse is smaller than it looks.", "Forklifts must be driven slowly.", "Getting certified takes little time."], a: 0, e: "Đáp lại lời biện hộ “It's just a few meters” khi lái xe nâng không có chứng chỉ → <b>chỉ một quãng ngắn cũng đủ gây tai nạn</b>.", t: "y-dinh" }
    ] },
  { id: "pr4-b10", lvl: 5,
    script: [["N", "In business news, Orion Motors announced on Tuesday that it will build its first electric-vehicle plant in the region, just outside Carlton. The facility is expected to create about two thousand jobs when it opens in three years. Local officials welcomed the news, although some residents have voiced concerns about increased traffic near the site. Orion's chief executive said the company had considered four other locations. Carlton won out, she explained, because of its rail connections and the technical college next door. Asked whether production might begin sooner, she replied, “We'd rather get it right than get it fast.” Construction is scheduled to start in the spring."]],
    vi: "Tin kinh tế: hôm thứ Ba, Orion Motors thông báo sẽ xây nhà máy xe điện đầu tiên trong khu vực, ngay ngoại ô Carlton. Nhà máy dự kiến tạo khoảng hai nghìn việc làm khi đi vào hoạt động sau ba năm nữa. Chính quyền địa phương hoan nghênh tin này, dù một số cư dân bày tỏ lo ngại về giao thông tăng gần khu đất. Giám đốc điều hành của Orion cho biết công ty đã cân nhắc bốn địa điểm khác. Bà giải thích Carlton được chọn nhờ kết nối đường sắt và trường cao đẳng kỹ thuật ngay bên cạnh. Khi được hỏi liệu có thể sản xuất sớm hơn không, bà đáp: “Chúng tôi thà làm cho đúng còn hơn làm cho nhanh.” Việc xây dựng dự kiến bắt đầu vào mùa xuân.",
    qs: [
      { q: "What is the news report mainly about?", c: ["A company's plan to open a factory", "The opening of a technical college", "The construction of a new rail line", "A decline in car sales"], a: 0, e: "“Orion Motors… <b>will build its first electric-vehicle plant</b>” → <b>kế hoạch mở nhà máy</b>. Trường cao đẳng và đường sắt chỉ là lý do chọn địa điểm.", t: "y-chinh" },
      { q: "According to the report, why was Carlton chosen?", c: ["Its taxes are low.", "It offers transportation links and access to training.", "Local residents voted for it.", "Land there is inexpensive."], a: 1, e: "“Because of its <b>rail connections</b> and the <b>technical college</b> next door” → paraphrase: <b>giao thông thuận tiện và nguồn đào tạo</b>. Cư dân thì lại lo ngại giao thông.", t: "paraphrase" },
      { q: "What does the executive imply when she says, “We'd rather get it right than get it fast”?", c: ["The opening will probably not be moved earlier.", "Construction has already begun.", "The plant will be smaller than planned.", "The company regrets choosing Carlton."], a: 0, e: "Câu trả lời cho câu hỏi “whether production might <b>begin sooner</b>” → ưu tiên làm đúng hơn làm nhanh, tức <b>khó có chuyện khai trương sớm hơn</b>. Xây dựng còn chưa bắt đầu (“scheduled to start in the spring”).", t: "y-dinh" }
    ] }
]);
