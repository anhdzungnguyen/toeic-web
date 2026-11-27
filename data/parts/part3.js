/* Ngân hàng luyện Part 3 – Hội thoại ngắn */
TOEIC.addPractice(3, [
  { id: "pr3-hotel", lvl: 2,
    script: [
      ["W", "Good evening. I have a reservation under the name Silva. I'm checking in for three nights."],
      ["M", "Welcome, Ms. Silva. I see you booked a standard room, but we're offering free upgrades to ocean-view rooms this week."],
      ["W", "That sounds wonderful. Is breakfast included?"],
      ["M", "Yes, breakfast is served in the restaurant on the second floor from six to ten. Here's your key card."]
    ],
    vi: "Nữ: Chào anh. Tôi có đặt phòng tên Silva, nhận phòng ba đêm. – Nam: Chào mừng chị Silva. Chị đặt phòng tiêu chuẩn, nhưng tuần này chúng tôi nâng hạng miễn phí lên phòng hướng biển. – Nữ: Tuyệt quá. Có bao gồm bữa sáng không? – Nam: Có, bữa sáng phục vụ ở nhà hàng tầng hai từ 6 đến 10 giờ. Đây là thẻ phòng của chị.",
    qs: [
      { q: "Where most likely are the speakers?", c: ["At a restaurant", "At a hotel front desk", "At an airport", "At a travel agency"], a: 1, e: "“reservation… checking in… key card” → <b>quầy lễ tân khách sạn</b>.", t: "suy-luan" },
      { q: "What does the man offer the woman?", c: ["A discount on meals", "A free room upgrade", "Late checkout", "Airport transportation"], a: 1, e: "“free <b>upgrades</b> to ocean-view rooms”.", t: "nghe-chi-tiet" },
      { q: "Where is breakfast served?", c: ["In the guest rooms", "In the lobby", "On the second floor", "By the pool"], a: 2, e: "“in the restaurant on the <b>second floor</b>”.", t: "nghe-chi-tiet" }
    ] }
]);
