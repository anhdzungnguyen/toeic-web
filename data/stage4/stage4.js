/* Giai đoạn 4 – Nâng cao (700 → 850). Hiện có khung + 1 bài mẫu. */
TOEIC.addStage({
  id: 4, name: "Nâng cao", range: [700, 850], target: 850, gateTest: null,
  desc: "Ngữ pháp nâng cao (đảo ngữ, giả định, rút gọn mệnh đề), câu hỏi ý định người nói ở Part 3–4, đoạn ba ở Part 7 và quản lý thời gian. (Đang soạn: hiện có 1 bài mẫu.)",
  units: [{ id: "u1", title: "Chặng 1 – Ngữ pháp nâng cao" }]
});

TOEIC.addLesson({
  id: "s4-l1", stage: 4, unit: "u1", order: 1, minutes: 25, title: "Đảo ngữ",
  sections: [
    { h: "Đảo ngữ là gì?", html: "<p>Khi một số trạng từ mang nghĩa <b>phủ định hoặc hạn chế</b> đứng đầu câu, ta đảo <b>trợ động từ</b> lên trước chủ ngữ, giống cấu trúc câu hỏi:</p><p><i>We rarely see such results.</i> → <b>Rarely do we see</b> such results.</p>" },
    { h: "Các mẫu hay gặp trong TOEIC", html: "<ul><li><b>Rarely / Seldom / Hardly ever / Never</b> + trợ động từ + S + V</li><li><b>Not only</b> + trợ động từ + S + V, <b>but</b> … also …</li><li><b>Under no circumstances / In no way</b> + trợ động từ + S + V (tuyệt đối không)</li><li><b>Only after / Only when</b> + mệnh đề + trợ động từ + S + V</li><li>Đảo ngữ điều kiện: <b>Should</b> you need… = If you need…; <b>Had</b> I known… = If I had known…</li></ul><p>Mẹo Part 5: đầu câu là các từ trên → chọn đáp án có <b>trợ động từ đứng trước chủ ngữ</b>.</p>" }
  ],
  examples: [
    { en: "<b>Rarely do we see</b> such strong sales in winter.", vi: "Hiếm khi chúng tôi thấy doanh số mạnh như vậy vào mùa đông." },
    { en: "<b>Should you have</b> any questions, please call us.", vi: "Nếu bạn có bất kỳ câu hỏi nào, hãy gọi cho chúng tôi." },
    { en: "<b>Under no circumstances should</b> the doors be left open.", vi: "Trong bất kỳ trường hợp nào cũng không được để cửa mở." }
  ],
  vocab: [
    "rarely|adv|/ˈreəli/|hiếm khi|seldom|Rarely does the store run out of stock.|Cửa hàng hiếm khi hết hàng.",
    "seldom|adv|/ˈseldəm/|ít khi|rarely|Seldom have we received so many complaints.|Ít khi chúng tôi nhận nhiều phàn nàn đến vậy.",
    "hardly|adv|/ˈhɑːdli/|hầu như không|barely|There is hardly any time left.|Hầu như không còn thời gian.",
    "circumstance|n|/ˈsɜːkəmstəns/|hoàn cảnh, trường hợp|situation|Under no circumstances should you share your password.|Trong bất kỳ trường hợp nào cũng không được chia sẻ mật khẩu.",
    "eligible|adj|/ˈelɪdʒəbl/|đủ điều kiện|qualified|Full-time staff are eligible for the bonus.|Nhân viên toàn thời gian đủ điều kiện nhận thưởng.",
    "exceed|v|/ɪkˈsiːd/|vượt quá|surpass|Sales exceeded our expectations.|Doanh số vượt quá kỳ vọng của chúng tôi.",
    "renovation|n|/ˌrenəˈveɪʃn/|sự cải tạo, sửa sang|refurbishment|The lobby is closed for renovation.|Sảnh đóng cửa để cải tạo.",
    "prior to|prep|/ˈpraɪə tə/|trước khi|before|Please arrive prior to 9 A.M.|Vui lòng đến trước 9 giờ sáng."
  ],
  exercises: [
    { id: "s4-l1-ex0", p: 5, q: "Rarely ___ such strong sales in the first quarter.", c: ["we see", "do we see", "we do see", "seeing"], a: 1, e: "“Rarely” đứng đầu câu → đảo ngữ: <b>do we see</b>.", t: "ngu-phap" },
    { id: "s4-l1-ex1", p: 5, q: "Not only ___ the project on time, but she also stayed under budget.", c: ["she finished", "did she finish", "she did finish", "finishing"], a: 1, e: "“Not only” đầu câu → đảo trợ động từ: <b>did she finish</b>.", t: "ngu-phap" },
    { id: "s4-l1-ex2", p: 5, q: "Under no circumstances ___ leave the building during the fire drill.", c: ["employees should", "should employees", "employees", "do employees should"], a: 1, e: "“Under no circumstances” đầu câu → <b>should employees</b> leave.", t: "ngu-phap" },
    { id: "s4-l1-ex3", p: 5, q: "___ you require further assistance, please contact our help desk.", c: ["Should", "Would", "Had", "Unless"], a: 0, e: "Đảo ngữ điều kiện loại 1: <b>Should</b> you require… = If you require…", t: "ngu-phap" }
  ]
});
