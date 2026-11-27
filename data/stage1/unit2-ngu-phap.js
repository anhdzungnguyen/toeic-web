/* Giai đoạn 1 · Chặng 2 – Ngữ pháp nền (bài 4–9) */
TOEIC.addLesson({
  id: "s1-l4", stage: 1, unit: "u2", order: 1, minutes: 15, title: "Bài 4. Cấu trúc câu & động từ to be",
  sections: [
    { h: "Câu cơ bản: S + V + (O)", html: "<p>Mỗi câu tiếng Anh cần tối thiểu <b>chủ ngữ (S)</b> và <b>động từ (V)</b>. Thứ tự thường gặp: <b>S + V + O</b> (tân ngữ) hoặc <b>S + to be + tính từ / danh từ / nơi chốn</b>.</p><ul><li>The manager (S) sends (V) e-mails (O).</li><li>The office (S) is (V) busy.</li></ul><p>Khác tiếng Việt, câu có tính từ vẫn phải có động từ: nói “The office <b>is</b> busy”, không nói “The office busy”.</p>" },
    { h: "Động từ to be ở hiện tại", html: "<table><tr><th>Chủ ngữ</th><th>to be</th><th>Phủ định</th></tr><tr><td>I</td><td>am</td><td>am not</td></tr><tr><td>He / She / It / danh từ số ít</td><td>is</td><td>is not (isn't)</td></tr><tr><td>You / We / They / danh từ số nhiều</td><td>are</td><td>are not (aren't)</td></tr></table><p><b>Câu hỏi:</b> đảo to be lên trước chủ ngữ: <i>Is the receptionist in the lobby?</i> – <i>Yes, she is. / No, she isn't.</i></p>" }
  ],
  examples: [
    { en: "The meeting room <b>is</b> on the second floor.", vi: "Phòng họp ở tầng hai." },
    { en: "My colleagues <b>are</b> very busy today.", vi: "Đồng nghiệp của tôi hôm nay rất bận." },
    { en: "<b>Is</b> the store open on Sundays?", vi: "Cửa hàng có mở cửa vào Chủ nhật không?" },
    { en: "I <b>am not</b> ready for the presentation.", vi: "Tôi chưa sẵn sàng cho bài thuyết trình." }
  ],
  vocab: [
    "meeting|n|/ˈmiːtɪŋ/|cuộc họp|—|The meeting starts at ten.|Cuộc họp bắt đầu lúc mười giờ.",
    "receptionist|n|/rɪˈsepʃənɪst/|lễ tân|—|The receptionist will give you a visitor pass.|Lễ tân sẽ đưa bạn thẻ khách.",
    "company|n|/ˈkʌmpəni/|công ty|firm|The company has 300 employees.|Công ty có 300 nhân viên.",
    "customer|n|/ˈkʌstəmə(r)/|khách hàng|client|The customer asked for a discount.|Khách hàng đã xin giảm giá.",
    "open|adj|/ˈəʊpən/|mở cửa|—|The pharmacy is open 24 hours a day.|Nhà thuốc mở cửa 24 giờ mỗi ngày.",
    "busy|adj|/ˈbɪzi/|bận rộn|occupied|Mondays are always busy.|Thứ Hai lúc nào cũng bận.",
    "late|adj|/leɪt/|muộn, trễ|delayed|Sorry, I'm late.|Xin lỗi, tôi đến muộn.",
    "ready|adj|/ˈredi/|sẵn sàng|prepared|Your order is ready for pickup.|Đơn hàng của bạn đã sẵn sàng để nhận.",
    "lobby|n|/ˈlɒbi/|sảnh|entrance hall|Let's meet in the hotel lobby.|Hãy gặp nhau ở sảnh khách sạn.",
    "colleague|n|/ˈkɒliːɡ/|đồng nghiệp|coworker|She is a former colleague of mine.|Cô ấy là đồng nghiệp cũ của tôi."
  ],
  exercises: [
    { id: "s1-l4-ex0", q: "The meeting room ___ on the second floor.", c: ["am", "is", "are", "be"], a: 1, e: "Chủ ngữ “The meeting room” là danh từ số ít → <b>is</b>.", t: "ngu-phap" },
    { id: "s1-l4-ex1", q: "My colleagues ___ very busy today.", c: ["is", "am", "be", "are"], a: 3, e: "“My colleagues” là danh từ số nhiều → <b>are</b>.", t: "ngu-phap" },
    { id: "s1-l4-ex2", q: "___ the receptionist in the lobby now?", c: ["Is", "Are", "Do", "Does"], a: 0, e: "Câu hỏi với to be: đảo to be lên đầu. “the receptionist” số ít → <b>Is</b>.", t: "ngu-phap" },
    { id: "s1-l4-ex3", q: "Câu nào đúng?", c: ["Sends the manager e-mails.", "The manager e-mails sends.", "The manager sends e-mails.", "The manager busy today."], a: 2, e: "Thứ tự đúng là S + V + O: <b>The manager sends e-mails.</b> “The manager busy today” thiếu động từ <i>is</i>.", t: "ngu-phap" }
  ]
});

TOEIC.addLesson({
  id: "s1-l5", stage: 1, unit: "u2", order: 2, minutes: 15, title: "Bài 5. Danh từ số ít/nhiều & mạo từ",
  sections: [
    { h: "Số nhiều của danh từ", html: "<ul><li>Thêm <b>-s</b>: item → items, document → documents.</li><li>Từ kết thúc bằng s, x, sh, ch thì thêm <b>-es</b>: box → boxes.</li><li>Phụ âm + y thì đổi thành <b>-ies</b>: company → companies.</li><li>Một số từ bất quy tắc: person → people, man → men, child → children.</li></ul>" },
    { h: "Danh từ không đếm được", html: "<p>Một số danh từ <b>không</b> có số nhiều, không đi với a/an và dùng <i>much</i>, không dùng <i>many</i>. Các từ hay gặp trong TOEIC: <b>equipment, furniture, information, advice, luggage, baggage, money</b>.</p><p>Muốn đếm thì dùng đơn vị: <i>a piece of furniture</i>, <i>two pieces of advice</i>.</p>" },
    { h: "Mạo từ a / an / the", html: "<ul><li><b>a</b> + từ bắt đầu bằng <b>âm</b> phụ âm: a desk, a <u>u</u>niform (/j/).</li><li><b>an</b> + từ bắt đầu bằng <b>âm</b> nguyên âm: an item, an <u>h</u>our (h câm).</li><li><b>the</b>: khi người nghe đã biết đang nói về cái nào: <i>I bought a printer. The printer is fast.</i></li></ul><p>Quy tắc dựa vào <b>âm</b> đầu chứ không dựa vào chữ cái.</p>" }
  ],
  examples: [
    { en: "We need <b>a</b> new printer and <b>an</b> extra desk.", vi: "Chúng tôi cần một máy in mới và thêm một cái bàn." },
    { en: "How much <b>equipment</b> do we need?", vi: "Chúng ta cần bao nhiêu thiết bị?" },
    { en: "She gave me some useful <b>advice</b>.", vi: "Cô ấy đã cho tôi vài lời khuyên hữu ích." },
    { en: "The meeting lasted <b>an hour</b>.", vi: "Cuộc họp kéo dài một tiếng." }
  ],
  vocab: [
    "document|n|/ˈdɒkjumənt/|tài liệu, giấy tờ|paper|Please sign the documents.|Vui lòng ký các giấy tờ.",
    "equipment|n|/ɪˈkwɪpmənt/|thiết bị (không đếm được)|devices|The new equipment arrived yesterday.|Thiết bị mới đã đến hôm qua.",
    "furniture|n|/ˈfɜːnɪtʃə(r)/|đồ nội thất (không đếm được)|—|We bought new furniture for the lobby.|Chúng tôi đã mua nội thất mới cho sảnh.",
    "advice|n|/ədˈvaɪs/|lời khuyên (không đếm được)|suggestion|Thank you for your advice.|Cảm ơn lời khuyên của bạn.",
    "item|n|/ˈaɪtəm/|món hàng, mục|product|This item is out of stock.|Mặt hàng này đã hết.",
    "product|n|/ˈprɒdʌkt/|sản phẩm|goods|Our products are made in Vietnam.|Sản phẩm của chúng tôi được sản xuất tại Việt Nam.",
    "price|n|/praɪs/|giá|cost|Prices include tax.|Giá đã bao gồm thuế.",
    "shelf|n|/ʃelf/|kệ, giá (số nhiều: shelves)|—|Put the files on the top shelf.|Đặt các tập hồ sơ lên kệ trên cùng.",
    "hour|n|/ˈaʊə(r)/|giờ, tiếng đồng hồ|—|The store is open for another hour.|Cửa hàng còn mở thêm một tiếng nữa.",
    "luggage|n|/ˈlʌɡɪdʒ/|hành lý (không đếm được)|baggage|You can leave your luggage at the front desk.|Bạn có thể để hành lý ở quầy lễ tân."
  ],
  exercises: [
    { id: "s1-l5-ex0", q: "We need ___ new printer for the office.", c: ["an", "a", "much", "many"], a: 1, e: "“printer” đếm được, số ít, bắt đầu bằng âm phụ âm /p/ → <b>a</b>.", t: "mao-tu" },
    { id: "s1-l5-ex1", q: "How much ___ do we need for the new office?", c: ["furniture", "furnitures", "a furniture", "chairs"], a: 0, e: "<b>furniture</b> không đếm được: không thêm -s, không đi với “a”. “How much chairs” sai vì chairs đếm được phải dùng many.", t: "ngu-phap" },
    { id: "s1-l5-ex2", q: "She waited for ___ hour.", c: ["a", "many", "some", "an"], a: 3, e: "Chữ h trong hour câm, từ bắt đầu bằng âm nguyên âm /aʊ/ → <b>an</b> hour.", t: "mao-tu" },
    { id: "s1-l5-ex3", q: "Please put all the ___ on the shelf.", c: ["box", "boxes", "boxs", "a box"], a: 1, e: "Sau “all the” cần danh từ số nhiều. box kết thúc bằng x → thêm -es: <b>boxes</b>.", t: "ngu-phap" }
  ]
});

TOEIC.addLesson({
  id: "s1-l6", stage: 1, unit: "u2", order: 3, minutes: 15, title: "Bài 6. Đại từ",
  sections: [
    { h: "Bảng đại từ", html: "<table><tr><th>Chủ ngữ</th><th>Tân ngữ</th><th>Tính từ sở hữu</th><th>Đại từ sở hữu</th><th>Phản thân</th></tr><tr><td>I</td><td>me</td><td>my</td><td>mine</td><td>myself</td></tr><tr><td>you</td><td>you</td><td>your</td><td>yours</td><td>yourself</td></tr><tr><td>he</td><td>him</td><td>his</td><td>his</td><td>himself</td></tr><tr><td>she</td><td>her</td><td>her</td><td>hers</td><td>herself</td></tr><tr><td>it</td><td>it</td><td>its</td><td>—</td><td>itself</td></tr><tr><td>we</td><td>us</td><td>our</td><td>ours</td><td>ourselves</td></tr><tr><td>they</td><td>them</td><td>their</td><td>theirs</td><td>themselves</td></tr></table>" },
    { h: "Cách chọn nhanh trong Part 5", html: "<ul><li>Trước động từ (làm chủ ngữ) → <b>chủ ngữ</b>: <i>She</i> signed the contract.</li><li>Sau động từ hoặc giới từ → <b>tân ngữ</b>: Give it to <i>me</i>.</li><li>Trước danh từ → <b>tính từ sở hữu</b>: <i>her</i> assistant.</li><li>Đứng một mình, thay cho “tính từ sở hữu + danh từ” → <b>đại từ sở hữu</b>: This desk is <i>mine</i>.</li><li>Chủ ngữ và tân ngữ là cùng một người, hoặc sau <i>by</i> với nghĩa “tự mình” → <b>phản thân</b>: He did it <i>by himself</i>.</li></ul>" }
  ],
  examples: [
    { en: "Ms. Lee asked <b>her</b> assistant to send the contract.", vi: "Bà Lee nhờ trợ lý của mình gửi hợp đồng." },
    { en: "Mr. Kim reviewed the report <b>himself</b>.", vi: "Ông Kim tự mình xem lại báo cáo." },
    { en: "That office is <b>theirs</b>, and this one is <b>ours</b>.", vi: "Văn phòng kia là của họ, còn cái này là của chúng tôi." },
    { en: "Please call <b>us</b> if you have any questions.", vi: "Vui lòng gọi cho chúng tôi nếu bạn có câu hỏi." }
  ],
  vocab: [
    "assistant|n|/əˈsɪstənt/|trợ lý|aide|My assistant will call you back.|Trợ lý của tôi sẽ gọi lại cho bạn.",
    "supervisor|n|/ˈsuːpəvaɪzə(r)/|người giám sát, cấp trên trực tiếp|manager|Ask your supervisor for approval.|Hãy xin cấp trên của bạn phê duyệt.",
    "contract|n|/ˈkɒntrækt/|hợp đồng|agreement|Both sides signed the contract.|Hai bên đã ký hợp đồng.",
    "sign|v|/saɪn/|ký tên|—|Please sign at the bottom of the page.|Vui lòng ký ở cuối trang.",
    "review|v|/rɪˈvjuː/|xem xét, đánh giá lại|examine|We will review your application.|Chúng tôi sẽ xem xét đơn của bạn.",
    "team|n|/tiːm/|nhóm, đội|group|Our team won the sales award.|Nhóm chúng tôi đã giành giải doanh số.",
    "director|n|/dəˈrektə(r)/|giám đốc|head|The director will give a speech.|Giám đốc sẽ phát biểu.",
    "project|n|/ˈprɒdʒekt/|dự án|plan|The project will take six months.|Dự án sẽ mất sáu tháng.",
    "department|n|/dɪˈpɑːtmənt/|phòng ban|division|She works in the accounting department.|Cô ấy làm ở phòng kế toán.",
    "introduce|v|/ˌɪntrəˈdjuːs/|giới thiệu|present|Let me introduce our new director.|Xin giới thiệu giám đốc mới của chúng ta."
  ],
  exercises: [
    { id: "s1-l6-ex0", q: "Ms. Lee asked ___ assistant to send the contract.", c: ["she", "hers", "her", "herself"], a: 2, e: "Trước danh từ “assistant” cần tính từ sở hữu → <b>her</b>.", t: "dai-tu" },
    { id: "s1-l6-ex1", q: "Mr. Kim reviewed the report by ___.", c: ["himself", "he", "him", "his"], a: 0, e: "“by + đại từ phản thân” = tự mình làm → <b>by himself</b>.", t: "dai-tu" },
    { id: "s1-l6-ex2", q: "Please give the documents to ___ before noon.", c: ["I", "me", "my", "mine"], a: 1, e: "Sau giới từ “to” cần tân ngữ → <b>me</b>.", t: "dai-tu" },
    { id: "s1-l6-ex3", q: "That office is ours, and this one is ___.", c: ["their", "them", "they", "theirs"], a: 3, e: "Đứng một mình, thay cho “their office” → đại từ sở hữu <b>theirs</b>.", t: "dai-tu" }
  ]
});

TOEIC.addLesson({
  id: "s1-l7", stage: 1, unit: "u2", order: 4, minutes: 20, title: "Bài 7. Hiện tại đơn & hiện tại tiếp diễn",
  sections: [
    { h: "Hiện tại đơn – thói quen, sự thật, lịch cố định", html: "<p><b>S + V(s/es)</b>. Chủ ngữ là ngôi thứ ba số ít (he, she, it, danh từ số ít) thì động từ thêm <b>-s/-es</b>: <i>The store opens at nine.</i></p><p>Phủ định và câu hỏi dùng <b>do / does</b> + động từ nguyên mẫu: <i>He doesn't work on Sundays. Does she drive to work?</i></p><p>Dấu hiệu nhận biết: <b>usually, always, often, every day/week, once a month</b>.</p>" },
    { h: "Hiện tại tiếp diễn – đang xảy ra", html: "<p><b>S + am/is/are + V-ing</b>: <i>The technicians are repairing the elevator.</i></p><p>Dấu hiệu nhận biết: <b>now, right now, at the moment, currently, Look!, Listen!</b></p><p>Thì này rất hay gặp trong Part 1 (mô tả tranh): <i>A woman is typing on a keyboard.</i></p>" }
  ],
  examples: [
    { en: "The store usually <b>opens</b> at 9 A.M.", vi: "Cửa hàng thường mở cửa lúc 9 giờ sáng." },
    { en: "We <b>are preparing</b> a new sales report at the moment.", vi: "Hiện chúng tôi đang chuẩn bị một báo cáo doanh số mới." },
    { en: "Ms. Garcia <b>doesn't work</b> on Fridays.", vi: "Cô Garcia không làm việc vào thứ Sáu." },
    { en: "The company <b>is currently hiring</b> engineers.", vi: "Công ty hiện đang tuyển kỹ sư." }
  ],
  vocab: [
    "usually|adv|/ˈjuːʒuəli/|thường thường|normally|I usually arrive at eight.|Tôi thường đến lúc tám giờ.",
    "currently|adv|/ˈkʌrəntli/|hiện tại, hiện nay|now|The position is currently open.|Vị trí này hiện đang tuyển.",
    "deliver|v|/dɪˈlɪvə(r)/|giao (hàng)|ship|We deliver within three days.|Chúng tôi giao hàng trong vòng ba ngày.",
    "arrive|v|/əˈraɪv/|đến nơi|reach|The guests will arrive soon.|Khách sắp đến.",
    "factory|n|/ˈfæktri/|nhà máy|plant|The factory produces car parts.|Nhà máy sản xuất phụ tùng ô tô.",
    "repair|v|/rɪˈpeə(r)/|sửa chữa|fix|They are repairing the roof.|Họ đang sửa mái nhà.",
    "prepare|v|/prɪˈpeə(r)/|chuẩn bị|get ready|Please prepare the slides for the meeting.|Hãy chuẩn bị các slide cho cuộc họp.",
    "weekly|adj|/ˈwiːkli/|hằng tuần|—|We have a weekly team meeting.|Chúng tôi họp nhóm hằng tuần.",
    "headquarters|n|/ˌhedˈkwɔːtəz/|trụ sở chính|head office|Our headquarters is in Hanoi.|Trụ sở chính của chúng tôi ở Hà Nội.",
    "train|v|/treɪn/|đào tạo|teach|We train all new staff for two weeks.|Chúng tôi đào tạo tất cả nhân viên mới trong hai tuần."
  ],
  exercises: [
    { id: "s1-l7-ex0", q: "The store usually ___ at 9 A.M.", c: ["open", "opens", "is opening", "opening"], a: 1, e: "“usually” chỉ thói quen → hiện tại đơn; chủ ngữ số ít → <b>opens</b>.", t: "thi" },
    { id: "s1-l7-ex1", q: "Look! The technicians ___ the elevator now.", c: ["repair", "repairs", "repaired", "are repairing"], a: 3, e: "“Look!” và “now” → hiện tại tiếp diễn: <b>are repairing</b>.", t: "thi" },
    { id: "s1-l7-ex2", q: "Mr. Park ___ to work by bus every day.", c: ["goes", "go", "is going", "going"], a: 0, e: "“every day” → hiện tại đơn; “Mr. Park” là ngôi thứ ba số ít → <b>goes</b>.", t: "thi" },
    { id: "s1-l7-ex3", q: "We ___ a new sales report at the moment.", c: ["prepare", "prepares", "are preparing", "prepared"], a: 2, e: "“at the moment” → hiện tại tiếp diễn: <b>are preparing</b>.", t: "thi" }
  ]
});

TOEIC.addLesson({
  id: "s1-l8", stage: 1, unit: "u2", order: 5, minutes: 20, title: "Bài 8. Quá khứ đơn & tương lai",
  sections: [
    { h: "Quá khứ đơn", html: "<p><b>S + V-ed / V cột 2</b>, dùng cho việc đã xảy ra và đã kết thúc: <i>The company hired ten people last month.</i></p><p>Động từ bất quy tắc phải học thuộc: go → went, send → sent, buy → bought, meet → met, take → took.</p><p>Phủ định và câu hỏi dùng <b>did</b> + nguyên mẫu: <i>We didn't receive the invoice. Did you call the client?</i></p><p>Dấu hiệu nhận biết: <b>yesterday, last week/month/year, ... ago, in 2020</b>.</p>" },
    { h: "Tương lai: will và be going to", html: "<ul><li><b>will + V</b>: quyết định ngay lúc nói, lời hứa, dự đoán chung: <i>I'll call you back.</i></li><li><b>be going to + V</b>: kế hoạch đã có từ trước, hoặc dự đoán có căn cứ: <i>We are going to move to a new office. Look at those clouds – it's going to rain.</i></li></ul><p>Dấu hiệu nhận biết: <b>tomorrow, next week/month, soon, in two days</b>.</p>" }
  ],
  examples: [
    { en: "The company <b>launched</b> a new product last year.", vi: "Năm ngoái công ty đã ra mắt một sản phẩm mới." },
    { en: "Mr. Tanaka <b>retired</b> two years ago.", vi: "Ông Tanaka đã nghỉ hưu hai năm trước." },
    { en: "We <b>will announce</b> the winner tomorrow.", vi: "Chúng tôi sẽ công bố người thắng cuộc vào ngày mai." },
    { en: "They <b>are going to postpone</b> the conference.", vi: "Họ định hoãn hội nghị." }
  ],
  vocab: [
    "launch|v|/lɔːntʃ/|ra mắt (sản phẩm)|release|We will launch the app in June.|Chúng tôi sẽ ra mắt ứng dụng vào tháng Sáu.",
    "hire|v|/ˈhaɪə(r)/|thuê, tuyển dụng|employ|The hotel hired five new cooks.|Khách sạn đã tuyển năm đầu bếp mới.",
    "conference|n|/ˈkɒnfərəns/|hội nghị|convention|The conference will be held in Da Nang.|Hội nghị sẽ được tổ chức ở Đà Nẵng.",
    "postpone|v|/pəˈspəʊn/|hoãn lại|delay|The meeting was postponed until Friday.|Cuộc họp đã được hoãn đến thứ Sáu.",
    "complete|v|/kəmˈpliːt/|hoàn thành|finish|Please complete the form.|Vui lòng điền đầy đủ mẫu đơn.",
    "ago|adv|/əˈɡəʊ/|cách đây, trước đây|—|I joined the company five years ago.|Tôi vào công ty cách đây năm năm.",
    "tomorrow|adv|/təˈmɒrəʊ/|ngày mai|—|The office will be closed tomorrow.|Ngày mai văn phòng sẽ đóng cửa.",
    "recently|adv|/ˈriːsntli/|gần đây|lately|We recently moved to a larger office.|Gần đây chúng tôi đã chuyển đến văn phòng lớn hơn.",
    "retire|v|/rɪˈtaɪə(r)/|nghỉ hưu|—|She plans to retire next year.|Bà ấy dự định nghỉ hưu năm sau.",
    "announce|v|/əˈnaʊns/|thông báo, công bố|declare|The CEO announced a new plan.|Giám đốc điều hành đã công bố một kế hoạch mới."
  ],
  exercises: [
    { id: "s1-l8-ex0", q: "The company ___ ten new employees last month.", c: ["hire", "hires", "will hire", "hired"], a: 3, e: "“last month” → quá khứ đơn: <b>hired</b>.", t: "thi" },
    { id: "s1-l8-ex1", q: "We ___ the new product tomorrow.", c: ["launched", "will launch", "have launched", "launching"], a: 1, e: "“tomorrow” → tương lai: <b>will launch</b>. “launching” thiếu trợ động từ.", t: "thi" },
    { id: "s1-l8-ex2", q: "Mr. Tanaka retired two years ___.", c: ["ago", "last", "next", "since"], a: 0, e: "Khoảng thời gian + <b>ago</b> = cách đây: two years ago.", t: "thi" },
    { id: "s1-l8-ex3", q: "Look at those dark clouds. It ___ rain.", c: ["went to", "is going to", "goes to", "was"], a: 1, e: "Dự đoán có căn cứ (thấy mây đen) → <b>is going to</b>.", t: "thi" }
  ]
});

TOEIC.addLesson({
  id: "s1-l9", stage: 1, unit: "u2", order: 6, minutes: 20, title: "Bài 9. Giới từ thời gian & nơi chốn",
  sections: [
    { h: "in / on / at – thời gian", html: "<ul><li><b>at</b> + giờ cụ thể: at 9 A.M., at noon, at night.</li><li><b>on</b> + ngày, thứ: on Monday, on May 5.</li><li><b>in</b> + tháng, năm, mùa, buổi: in June, in 2025, in the morning.</li></ul><p>Mẹo nhớ: thời gian càng <b>rộng</b> thì dùng <b>in</b>, càng <b>cụ thể</b> thì dùng <b>at</b>.</p>" },
    { h: "by / until / during", html: "<ul><li><b>by</b> + thời điểm = <b>trước hoặc đúng</b> hạn đó (việc xảy ra một lần): <i>Submit the report by Friday.</i></li><li><b>until</b> = kéo dài <b>liên tục đến</b> lúc đó: <i>The store is open until 10 P.M.</i></li><li><b>during</b> + danh từ = <b>trong suốt</b>: <i>during the meeting</i>.</li></ul>" },
    { h: "Nơi chốn", html: "<ul><li><b>at</b> + địa điểm cụ thể: at the front desk, at the station.</li><li><b>on</b> + bề mặt, tầng: on the table, on the second floor.</li><li><b>in</b> + bên trong: in the office, in the drawer.</li><li><b>next to</b> (bên cạnh), <b>between A and B</b> (ở giữa), <b>behind</b> (đằng sau), <b>in front of</b> (đằng trước), <b>across from</b> (đối diện).</li></ul>" }
  ],
  examples: [
    { en: "The meeting starts <b>at</b> 10 A.M. <b>on</b> Monday.", vi: "Cuộc họp bắt đầu lúc 10 giờ sáng thứ Hai." },
    { en: "Please submit the form <b>by</b> the deadline.", vi: "Vui lòng nộp mẫu đơn trước hạn chót." },
    { en: "The parking lot is <b>behind</b> the building.", vi: "Bãi đỗ xe ở phía sau tòa nhà." },
    { en: "The bank is <b>across from</b> the post office.", vi: "Ngân hàng nằm đối diện bưu điện." }
  ],
  vocab: [
    "entrance|n|/ˈentrəns/|lối vào|entry|Use the side entrance after 6 P.M.|Sau 6 giờ tối hãy đi lối vào bên hông.",
    "floor|n|/flɔː(r)/|tầng; sàn nhà|level|The cafeteria is on the fifth floor.|Nhà ăn ở tầng năm.",
    "corner|n|/ˈkɔːnə(r)/|góc|—|There is a café on the corner.|Có một quán cà phê ở góc phố.",
    "parking lot|n|/ˈpɑːkɪŋ lɒt/|bãi đỗ xe|car park|The parking lot is behind the building.|Bãi đỗ xe ở phía sau tòa nhà.",
    "between|prep|/bɪˈtwiːn/|ở giữa (hai vật)|—|The bank is between the hotel and the park.|Ngân hàng ở giữa khách sạn và công viên.",
    "behind|prep|/bɪˈhaɪnd/|phía sau|—|The supply room is behind the kitchen.|Phòng vật tư ở phía sau bếp.",
    "across from|prep|/əˈkrɒs frəm/|đối diện|opposite|The pharmacy is across from the station.|Nhà thuốc nằm đối diện nhà ga.",
    "until|prep|/ənˈtɪl/|cho đến khi|till|The sale lasts until Sunday.|Đợt giảm giá kéo dài đến Chủ nhật.",
    "during|prep|/ˈdjʊərɪŋ/|trong suốt|throughout|Please turn off your phone during the show.|Vui lòng tắt điện thoại trong suốt buổi diễn.",
    "deadline|n|/ˈdedlaɪn/|hạn chót|due date|The deadline is next Monday.|Hạn chót là thứ Hai tới."
  ],
  exercises: [
    { id: "s1-l9-ex0", q: "The meeting starts ___ 10 A.M.", c: ["in", "on", "at", "during"], a: 2, e: "Giờ cụ thể → <b>at</b> 10 A.M.", t: "gioi-tu" },
    { id: "s1-l9-ex1", q: "Our office is ___ the second floor.", c: ["on", "in", "at", "to"], a: 0, e: "Tầng → <b>on</b> the second floor.", t: "gioi-tu" },
    { id: "s1-l9-ex2", q: "Please submit the report ___ Friday.", c: ["until", "during", "at", "by"], a: 3, e: "Nộp là việc xảy ra một lần, phải xong trước hạn → <b>by</b>. “until” dùng cho trạng thái kéo dài (open until, wait until).", t: "gioi-tu" },
    { id: "s1-l9-ex3", q: "The bank is ___ the post office and the café.", c: ["among", "between", "across", "behind"], a: 1, e: "“___ A and B” → <b>between</b>. “among” dùng cho từ ba đối tượng trở lên, không đi với “A and B”.", t: "gioi-tu" }
  ]
});
