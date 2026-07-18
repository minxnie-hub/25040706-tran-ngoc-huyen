export type Task = { id: string; number: string; title: string; kicker: string; summary: string; meta: string[]; accent: string; preview: string | null; };

export const tasks: Task[] = [
  {
    "id": "task-1",
    "title": "Thao tác cơ bản với tệp tin và thư mục",
    "kicker": "Nền tảng công nghệ số",
    "summary": "Thực hành 12 thao tác với File Explorer, từ tạo thư mục đến khôi phục tệp trong Thùng rác.",
    "meta": [
      "12 thao tác",
      "14 ảnh minh chứng"
    ],
    "accent": "aqua",
    "preview": "./assets/tasks/task-1/image1.webp",
    "number": "01"
  },
  {
    "id": "task-2",
    "title": "Tìm kiếm và đánh giá thông tin học thuật",
    "kicker": "Kỹ năng nghiên cứu",
    "summary": "Đánh giá 10 tài liệu về hiệu quả và thách thức của blended learning theo các tiêu chí học thuật.",
    "meta": [
      "10 nguồn tham khảo",
      "Bảng đánh giá độ tin cậy"
    ],
    "accent": "sky",
    "preview": null,
    "number": "02"
  },
  {
    "id": "task-3",
    "title": "Viết prompt hiệu quả cho các tác vụ",
    "kicker": "Prompt engineering",
    "summary": "Thử nghiệm prompt cơ bản, cải tiến và nâng cao cho ba tác vụ học tập, kèm so sánh kết quả.",
    "meta": [
      "3 tác vụ",
      "3 cấp độ prompt",
      "9 ảnh minh chứng"
    ],
    "accent": "coral",
    "preview": "./assets/tasks/task-3/image2.webp",
    "number": "03"
  },
  {
    "id": "task-4",
    "title": "Giao tiếp và hợp tác trong môi trường số",
    "kicker": "Làm việc nhóm trực tuyến",
    "summary": "Ghi lại trải nghiệm sử dụng Trello, Google Docs, Discord và Google Drive trong dự án nhóm.",
    "meta": [
      "4 công cụ",
      "4 ảnh minh chứng"
    ],
    "accent": "mint",
    "preview": "./assets/tasks/task-4/image1.webp",
    "number": "04"
  },
  {
    "id": "task-5",
    "title": "Sử dụng AI tạo sinh để sáng tạo nội dung",
    "kicker": "Sáng tạo cùng AI",
    "summary": "Kết hợp Gemini, DALL·E và Canva AI để thiết kế infographic tiếng Anh về bảo vệ môi trường.",
    "meta": [
      "3 công cụ AI",
      "6 ảnh minh chứng",
      "Sản phẩm hoàn chỉnh"
    ],
    "accent": "lime",
    "preview": "./assets/tasks/task-5/image6.webp",
    "number": "05"
  },
  {
    "id": "task-6",
    "title": "Sử dụng AI có trách nhiệm trong học tập",
    "kicker": "Đạo đức & liêm chính học thuật",
    "summary": "Phân tích chính sách, quy trình sử dụng AI minh bạch và xây dựng nguyên tắc cá nhân có trách nhiệm.",
    "meta": [
      "Phân tích chính sách",
      "Bộ nguyên tắc cá nhân",
      "Infographic"
    ],
    "accent": "deep",
    "preview": "./assets/tasks/task-6/image1.webp",
    "number": "06"
  }
];
