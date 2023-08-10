# Session

- Lưu trữ phiên làm việc của trình duyệt
- Tắt trình duyệt => Kết thúc phiên
- Khi mở lại trình duyệt => Tạo phiên mới
- Dữ liệu của session lưu trên server: file, database, redis,...

Hoạt động của session

- Khi trình duyệt mở => Tạo phiên mới => Tạo id
- Tạo 1 file, bản ghi lưu trữ với id đã được ở trên
- Tạo cookie với giá trị là id ở trên
- Muốn thêm dữ liệu vào session => Thêm dựa vào id ở trên
- Lần request tiếp theo => gửi cookie lên server => server dựa vào cookie đó để lấy nội dung trong session đã được lưu trên server
