/* Ngân hàng luyện Part 4 – Bài nói ngắn */
TOEIC.addPractice(4, [
  { id: "pr4-store", lvl: 2,
    script: [["N", "Attention, shoppers. Thank you for shopping at Fresh Market. The store will be closing in fifteen minutes. Please bring your final purchases to the registers at the front of the store. Also, don't forget that our weekend sale starts tomorrow. All fruits and vegetables will be thirty percent off. We look forward to seeing you again."]],
    vi: "Xin chú ý, quý khách. Cảm ơn quý khách đã mua sắm tại Fresh Market. Cửa hàng sẽ đóng cửa sau 15 phút nữa. Vui lòng mang hàng đến quầy thu ngân phía trước cửa hàng. Ngoài ra, đừng quên đợt giảm giá cuối tuần bắt đầu từ ngày mai: tất cả rau củ quả giảm 30%. Hẹn gặp lại quý khách.",
    qs: [
      { q: "Where is the announcement being made?", c: ["At a supermarket", "At a bank", "At a train station", "At a restaurant"], a: 0, e: "“Fresh Market… registers… fruits and vegetables” → <b>siêu thị</b>.", t: "suy-luan" },
      { q: "What will happen in fifteen minutes?", c: ["A sale will begin.", "The store will close.", "A delivery will arrive.", "New registers will open."], a: 1, e: "“The store will be <b>closing in fifteen minutes</b>.”", t: "nghe-chi-tiet" },
      { q: "What will be discounted tomorrow?", c: ["Bakery items", "Dairy products", "Fruits and vegetables", "Household goods"], a: 2, e: "“All <b>fruits and vegetables</b> will be thirty percent off.”", t: "nghe-chi-tiet" }
    ] }
]);
