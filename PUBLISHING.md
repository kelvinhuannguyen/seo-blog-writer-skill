# Bản website chờ duyệt

Website tĩnh nằm trong `docs/`, không cần cài thư viện, máy chủ xử lý hay khóa API. Nội dung gốc của skill vẫn ở thư mục gốc. Chỉ `docs/` được chọn làm nguồn GitHub Pages.

Địa chỉ dự kiến: https://kelvinhuannguyen.github.io/seo-blog-writer-skill/

## Chỉ thực hiện sau khi chủ repo đồng ý đăng

1. Rà lại thay đổi và xác nhận repo trên GitHub chưa có cập nhật xung đột.
2. Đưa các file website đã duyệt lên nhánh `main`.
3. Trong Settings → Pages, chọn Deploy from a branch, nhánh `main`, thư mục `/docs`, rồi Save. Nếu cấu hình hiện tại khác, kiểm tra trước khi thay đổi.
4. Chờ GitHub Pages triển khai thành công và kiểm tra địa chỉ HTTPS thật.
5. Kiểm tra lại hình ảnh, CSS, JavaScript, nút, liên kết và ảnh chia sẻ ở đường dẫn `/seo-blog-writer-skill/`.
6. Kiểm tra bản chia sẻ Facebook/Zalo sau khi trang và ảnh đã truy cập công khai. Nền tảng có thể lưu cache và cắt ảnh theo giao diện của họ.
7. Gửi người dùng địa chỉ đã kiểm chứng hoạt động.

## Metadata chia sẻ

Tiêu đề, mô tả, canonical, Open Graph và Twitter Card nằm trong `docs/index.html`. Ảnh chia sẻ PNG 1200 × 630 nằm tại `docs/assets/social-cover.png`; URL ảnh dùng địa chỉ HTTPS tuyệt đối.

## Phạm vi công khai

Trang chỉ giới thiệu skill và liên kết sang tài liệu/ChatGPT. Không xử lý mật khẩu, không thu thập biểu mẫu, không nhúng analytics hay mã bên thứ ba. Không đưa thông tin xác thực vào repo. Tên tài khoản GitHub trong các liên kết là thông tin công khai cần thiết cho địa chỉ dự án.

Liên kết mở skill được giữ từ README gốc: cần tài khoản và quyền truy cập ChatGPT phù hợp. Chưa xác nhận khả năng cài/mở skill bằng tài khoản người xem khác.
