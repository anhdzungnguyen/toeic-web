/* Giai đoạn 1 – Nền tảng (0 → 300) */
TOEIC.addStage({
  id: 1, name: "Nền tảng", range: [0, 300], target: 300, gateTest: "mini1",
  desc: "Dành cho người mất gốc: phát âm, ngữ pháp cơ bản, từ vựng văn phòng và làm quen các dạng câu hỏi TOEIC. Học xong 23 bài, làm Thi thử mini số 1 đạt từ 300 điểm ước lượng để lên Giai đoạn 2.",
  units: [
    { id: "u1", title: "Chặng 1 – Phát âm", checkpoint: "cp-s1-u1" },
    { id: "u2", title: "Chặng 2 – Ngữ pháp nền", checkpoint: "cp-s1-u2" },
    { id: "u2b", title: "Chặng 3 – Từ loại & các kiểu câu", checkpoint: "cp-s1-u2b" },
    { id: "u2c", title: "Chặng 4 – Động từ & mệnh đề", checkpoint: "cp-s1-u2c" },
    { id: "u3", title: "Chặng 5 – Từ vựng & làm quen câu hỏi", checkpoint: "cp-s1-u3" }
  ]
});
