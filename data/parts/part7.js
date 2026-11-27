/* Ngân hàng luyện Part 7 – Đọc hiểu */
TOEIC.addPractice(7, [
  { id: "pr7-sign", lvl: 1,
    passage: "<p><b>Lost and Found</b></p><p>Items found in the building are kept at the security desk on the first floor for 30 days. To claim an item, please show a photo ID. Unclaimed items will be donated to charity.</p>",
    qs: [
      { q: "Where are found items kept?", c: ["At the reception on the second floor", "At the security desk", "In the manager's office", "At a charity shop"], a: 1, e: "“kept at the <b>security desk</b> on the first floor”.", t: "doc-hieu" },
      { q: "What must people show to claim an item?", c: ["A receipt", "A business card", "A photo ID", "A membership card"], a: 2, e: "“please show a <b>photo ID</b>”.", t: "doc-hieu" }
    ] },
  { id: "pr7-review", lvl: 3,
    passage: "<p><b>Customer Review – CleanAir 300 Air Purifier</b> ★★★★☆</p><p>I bought the CleanAir 300 for my home office last month. It is quiet enough that I barely notice it during video calls, and the air feels noticeably fresher. My only complaint is that replacement filters are hard to find in local stores; I had to order them online, which took two weeks. Still, I would recommend it to anyone working from home.</p><p>– Minh Tran</p>",
    qs: [
      { q: "What does Mr. Tran like about the product?", c: ["Its low price", "Its quiet operation", "Its large size", "Its long warranty"], a: 1, e: "“quiet enough that I barely notice it” → <b>chạy êm</b>.", t: "paraphrase" },
      { q: "What problem does Mr. Tran mention?", c: ["The device broke after a month.", "Filters are difficult to buy in stores.", "The delivery was damaged.", "The instructions were unclear."], a: 1, e: "“replacement filters are <b>hard to find in local stores</b>”.", t: "paraphrase" },
      { q: "What is suggested about Mr. Tran?", c: ["He works from home.", "He owns a store.", "He sells air purifiers.", "He returned the product."], a: 0, e: "Mua cho <b>home office</b>, nhắc đến các cuộc gọi video và giới thiệu sản phẩm cho người làm việc tại nhà → ông ấy làm việc ở nhà.", t: "suy-luan" }
    ] }
]);
