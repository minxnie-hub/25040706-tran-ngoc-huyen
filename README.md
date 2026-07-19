# Portfolio Trần Ngọc Huyền — 25040706

Portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.

## Deploy GitHub Pages

Bản web đã build sẵn nằm trong thư mục `site/`. Workflow không chạy `npm install` hoặc `npm ci`, nên tránh lỗi npm trên GitHub Actions.

1. Thay toàn bộ nội dung repo bằng các file trong thư mục này.
2. Commit và push lên nhánh `main`.
3. Vào **Settings → Pages → Build and deployment → Source** và chọn **GitHub Actions**.
4. Mở tab **Actions** để theo dõi workflow `Deploy to GitHub Pages`.

> Không xóa thư mục `site/`: GitHub Pages lấy website trực tiếp từ thư mục này.

## Chạy source khi cần chỉnh sửa

```bash
npm install
npm run dev
```

Build mới:

```bash
npm run build
```

Sau đó sao chép toàn bộ nội dung `dist/` sang `site/` trước khi commit.

## Font tiếng Việt

Toàn bộ giao diện dùng font hệ thống hỗ trợ đầy đủ tiếng Việt. Font Georgia đã được loại bỏ khỏi các tiêu đề để tránh lỗi giãn ký tự có dấu trên Windows/Chrome.
