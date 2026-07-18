# Portfolio Trần Ngọc Huyền — 25040706

Website portfolio môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.

## Deploy GitHub Pages

Workflow trong `.github/workflows/deploy.yml` đăng trực tiếp thư mục `dist`, vì vậy không còn phụ thuộc vào bước `npm ci` trên GitHub Actions.

1. Đưa toàn bộ nội dung thư mục dự án lên nhánh `main`.
2. Vào **Settings → Pages**.
3. Ở **Build and deployment → Source**, chọn **GitHub Actions**.
4. Mở tab **Actions** và chạy lại workflow **Deploy to GitHub Pages** nếu cần.

## Chỉnh sửa source

Sau khi sửa mã nguồn:

```bash
npm install
npm run build
```

Commit cả thư mục `dist` mới để GitHub Pages triển khai phiên bản vừa sửa.
