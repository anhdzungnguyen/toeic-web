/* Cấu trúc đề TOEIC L&R hiện hành + nhãn loại lỗi (dùng cho thống kê và gợi ý bài ôn) */
TOEIC.FORMAT = {
  time: { L: 45 * 60, R: 75 * 60 },
  parts: {
    1: { name: "Mô tả tranh", sec: "L", n: 6, tip: "Nhìn tranh trước khi nghe: ai, đang làm gì, đồ vật ở đâu. Tranh không có người thì loại ngay câu có người đang làm và câu dạng 'is/are being + V3'." },
    2: { name: "Hỏi – đáp", sec: "L", n: 25, tip: "Tập trung vào từ để hỏi ở đầu câu (Who/Where/When/Why…). Cẩn thận với đáp án lặp lại từ hoặc có âm giống câu hỏi – thường là bẫy." },
    3: { name: "Hội thoại ngắn", sec: "L", n: 39, tip: "Đọc trước 3 câu hỏi khi chưa phát audio, gạch từ khóa. Thông tin thường xuất hiện theo đúng thứ tự câu hỏi." },
    4: { name: "Bài nói ngắn", sec: "L", n: 30, tip: "Câu đầu tiên cho biết loại bài nói (thông báo, quảng cáo, tin nhắn thoại, hướng dẫn…) và người nói là ai." },
    5: { name: "Điền từ vào câu", sec: "R", n: 30, tip: "Nhìn 4 đáp án trước: cùng gốc khác đuôi là câu từ loại – làm nhanh; khác nghĩa là câu từ vựng – đọc cả câu." },
    6: { name: "Điền vào đoạn văn", sec: "R", n: 16, tip: "Đọc cả câu trước và câu sau chỗ trống. Câu chèn phải nối mạch ý với cả hai phía." },
    7: { name: "Đọc hiểu", sec: "R", n: 54, tip: "Đọc câu hỏi trước rồi tìm từ khóa trong bài. Đáp án đúng thường diễn đạt lại (paraphrase), ít khi chép nguyên văn." }
  }
};

// n: tên hiển thị · l: id bài học gợi ý ôn lại
TOEIC.TAGS = {
  "phat-am": { n: "Phát âm", l: "s1-l2" },
  "bay-am": { n: "Bẫy âm giống nhau", l: "s1-l2" },
  "ngu-phap": { n: "Ngữ pháp", l: "s1-l4" },
  "thi": { n: "Thì của động từ", l: "s1-l7" },
  "dai-tu": { n: "Đại từ", l: "s1-l6" },
  "gioi-tu": { n: "Giới từ", l: "s1-l9" },
  "tu-loai": { n: "Từ loại", l: "s1-l13" },
  "cau-hoi": { n: "Câu hỏi & phủ định", l: "s1-l14" },
  "khuyet-thieu": { n: "Động từ khuyết thiếu", l: "s1-l15" },
  "luong-tu": { n: "Lượng từ", l: "s1-l16" },
  "so-sanh": { n: "So sánh", l: "s1-l17" },
  "hoan-thanh": { n: "Thì hiện tại hoàn thành", l: "s1-l18" },
  "to-v-ving": { n: "To V / V-ing", l: "s1-l19" },
  "bi-dong": { n: "Câu bị động", l: "s1-l20" },
  "lien-tu": { n: "Liên từ", l: "s1-l21" },
  "quan-he": { n: "Đại từ quan hệ", l: "s1-l22" },
  "mao-tu": { n: "Mạo từ", l: "s1-l5" },
  "dieu-kien": { n: "Câu điều kiện", l: "s3-l1" },
  "dao-ngu": { n: "Đảo ngữ", l: "s4-l1" },
  "de-thi": { n: "Cấu trúc đề & cách tính điểm", l: "s2-l1" },
  "hoa-hop": { n: "Hòa hợp chủ ngữ – động từ", l: "s2-l4" },
  "tu-noi": { n: "Trạng từ nối", l: "s2-l9" },
  "md-danh-tu": { n: "Mệnh đề danh từ", l: "s2-l11" },
  "rut-gon": { n: "Phân từ & rút gọn mệnh đề", l: "s2-l12" },
  "cau-truc": { n: "Cấu trúc đặc biệt", l: "s2-l13" },
  "gia-dinh": { n: "Thức giả định", l: "s2-l15" },
  "tu-vung": { n: "Từ vựng", l: "s1-l10" },
  "mo-ta-tranh": { n: "Mô tả tranh (Part 1)", l: "s1-l12" },
  "hoi-dap": { n: "Hỏi – đáp (Part 2)", l: "s1-l11" },
  "nghe-chi-tiet": { n: "Nghe chi tiết", l: "s1-l11" },
  "y-chinh": { n: "Ý chính / mục đích", l: "s1-l12" },
  "suy-luan": { n: "Suy luận", l: "s1-l12" },
  "y-dinh": { n: "Ý định người nói/viết", l: "s1-l12" },
  "paraphrase": { n: "Diễn đạt lại (paraphrase)", l: "s5-l1" },
  "bieu-do": { n: "Câu hỏi kèm biểu đồ/bảng", l: "s2-l1" },
  "chen-cau": { n: "Chèn câu", l: "s2-l1" },
  "doan-van": { n: "Điền đoạn văn", l: "s2-l1" },
  "doc-hieu": { n: "Đọc hiểu chi tiết", l: "s1-l12" },
  "lien-ket": { n: "Liên kết nhiều đoạn", l: "s2-l1" }
};

/* Cây chủ đề ngữ pháp cho mục tiêu 990 (Part 5, 6, một phần Part 7).
   tags: nhãn câu hỏi thuộc chủ đề (để thống kê & luyện) · lessons: id bài học theo thứ tự dễ → khó.
   Chủ đề chưa có bài sẽ hiện “Đang soạn”. */
TOEIC.GRAMMAR = [
  { id: "cau", n: "Câu cơ bản, câu hỏi & phủ định", tags: ["ngu-phap", "cau-hoi"], lessons: ["s1-l4", "s1-l14"],
    sub: ["S + V + O, động từ to be", "Phủ định & câu hỏi với do/does/did", "There is / There are"] },
  { id: "tu-loai", n: "1. Từ loại (Word Form)", tags: ["tu-loai"], lessons: ["s1-l13", "s1-l5", "s2-l2", "s2-l3"],
    sub: ["Vị trí danh từ / động từ / tính từ / trạng từ", "Hậu tố nhận diện (-tion, -ment, -ive, -ly, -able…)", "Danh từ chỉ người & chỉ vật (applicant / application)", "Danh từ đếm được, không đếm được, danh từ ghép", "Tính từ đuôi -ed và -ing"] },
  { id: "thi", n: "2. Thì động từ (Tenses)", tags: ["thi", "hoan-thanh"], lessons: ["s1-l7", "s1-l8", "s1-l23", "s1-l18", "s2-l5", "s2-l16", "s2-l17", "s3-l2"],
    sub: ["Đủ 12 thì: đơn, tiếp diễn, hoàn thành, hoàn thành tiếp diễn ở hiện tại / quá khứ / tương lai", "Các cách nói tương lai: hiện tại tiếp diễn, hiện tại đơn cho lịch trình, be about to / due to / scheduled to", "Động từ chỉ trạng thái, tương lai trong quá khứ, lùi thì câu gián tiếp", "Chọn thì theo ngữ cảnh cả đoạn (Part 6)", "Dấu hiệu nhận biết (since, by the time, as of next month…)", "Thì trong mệnh đề thời gian (when/once/as soon as + hiện tại)"] },
  { id: "bi-dong", n: "3. Thể bị động (Passive Voice)", tags: ["bi-dong"], lessons: ["s1-l20", "s2-l6"],
    sub: ["Bị động các thì, bị động với modal", "Phân biệt chủ động / bị động qua tân ngữ phía sau"] },
  { id: "hoa-hop", n: "4. Hòa hợp chủ ngữ – động từ", tags: ["hoa-hop"], lessons: ["s2-l4"],
    sub: ["Chủ ngữ là cụm dài, each/every", "A number of / the number of", "Either…or, neither…nor, along with"] },
  { id: "dai-tu", n: "5. Đại từ (Pronouns)", tags: ["dai-tu"], lessons: ["s1-l6", "s2-l7"],
    sub: ["Nhân xưng, sở hữu, phản thân (by himself)", "another / other / the other / others", "those who, anyone, each other"] },
  { id: "gioi-tu", n: "6. Giới từ (Prepositions)", tags: ["gioi-tu"], lessons: ["s1-l9", "s2-l8"],
    sub: ["Thời gian, nơi chốn (in/on/at, by/until, within/during)", "Giới từ đi kèm động từ, tính từ, danh từ (comply with, eligible for…)", "Giới từ hay liên từ (despite/although, because of/because, during/while)"] },
  { id: "lien-tu", n: "7. Liên từ & trạng từ nối", tags: ["lien-tu", "tu-noi"], lessons: ["s1-l21", "s2-l9"],
    sub: ["Liên từ kết hợp, tương quan (both…and, not only…but also)", "Liên từ phụ thuộc (unless, provided that, so that, even though)", "Trạng từ nối (however, therefore, moreover, otherwise) – quan trọng ở Part 6"] },
  { id: "quan-he", n: "8. Mệnh đề quan hệ", tags: ["quan-he"], lessons: ["s1-l22", "s2-l10"],
    sub: ["who / whom / whose / which / that", "Rút gọn mệnh đề quan hệ (V-ing / V3)", "Giới từ + which / whom"] },
  { id: "md-danh-tu", n: "9. Mệnh đề danh từ", tags: ["md-danh-tu"], lessons: ["s2-l11"],
    sub: ["what, whether, that", "wh- + to V"] },
  { id: "to-v", n: "10. Danh động từ & động từ nguyên mẫu", tags: ["to-v-ving"], lessons: ["s1-l19"],
    sub: ["V + to V / V + V-ing", "Giới từ + V-ing, look forward to / be committed to + V-ing", "Mục đích: in order to, so as to"] },
  { id: "phan-tu", n: "11. Phân từ & rút gọn mệnh đề trạng ngữ", tags: ["rut-gon"], lessons: ["s2-l12"],
    sub: ["Having done…", "When completed…, Once approved…"] },
  { id: "so-sanh", n: "12. So sánh (Comparisons)", tags: ["so-sanh"], lessons: ["s1-l17", "s2-l14"],
    sub: ["So sánh hơn, nhất, bằng; so sánh kép", "Bổ nghĩa so sánh: much / far / even + -er"] },
  { id: "dieu-kien", n: "13. Câu điều kiện & đảo ngữ", tags: ["dieu-kien", "dao-ngu"], lessons: ["s3-l1", "s3-l3", "s4-l1"],
    sub: ["Loại 0, 1, 2, 3, hỗn hợp", "Đảo ngữ điều kiện (Should you have…, Had we known…)", "Đảo ngữ với Only, Not until, Rarely"] },
  { id: "modal", n: "14. Động từ khuyết thiếu & thức giả định", tags: ["khuyet-thieu", "gia-dinh"], lessons: ["s1-l15", "s2-l15"],
    sub: ["can, could, may, must, should, will, would", "recommend / suggest / require that + V nguyên mẫu", "It is essential / imperative that…"] },
  { id: "luong-tu", n: "15. Từ hạn định & lượng từ", tags: ["luong-tu"], lessons: ["s1-l16"],
    sub: ["few / a few, little / a little, much / many", "most / almost, every / each / all"] },
  { id: "mao-tu", n: "16. Mạo từ (Articles)", tags: ["mao-tu"], lessons: ["s1-l5"],
    sub: ["a / an / the / không mạo từ"] },
  { id: "dac-biet", n: "17. Cấu trúc đặc biệt", tags: ["cau-truc"], lessons: ["s2-l13"],
    sub: ["so…that, such…that, too…to, enough", "Câu chẻ It is…that", "Nhờ vả: have / get something done"] }
];

/* Chủ đề từ vựng (lọc ở trang Từ vựng). Dùng: TOEIC.addVocab(stage, [...], "ma-chu-de") */
TOEIC.VOCAB_TOPICS = {
  "van-phong": "Văn phòng & hành chính", "nhan-su": "Nhân sự & tuyển dụng", "hop-dong": "Hợp đồng & pháp lý",
  "tai-chinh": "Tài chính, ngân hàng & kế toán", "marketing": "Marketing & bán hàng", "khach-hang": "Chăm sóc khách hàng",
  "san-xuat": "Sản xuất, kho bãi & vận chuyển", "du-lich": "Du lịch & khách sạn", "nha-hang": "Nhà hàng & ăn uống",
  "su-kien": "Hội nghị, sự kiện & họp", "bat-dong-san": "Bất động sản, xây dựng & bảo trì", "y-te": "Y tế & bảo hiểm",
  "cong-nghe": "Công nghệ & thiết bị", "mua-sam": "Mua sắm, đơn hàng & hoàn tiền", "giao-thong": "Giao thông & đi lại",
  "thoi-gian": "Thời gian, số lượng & từ thông dụng"
};
