import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Schedule.module.css"; // Import CSS module cho trang đặt lịch hẹn

const Schedule = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    cccd: "",
    email: "",
    phone: "",
    showroom: "",
    appointmentDate: "",
  });

  const navigate = useNavigate(); // Khởi tạo navigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const { cccd, phone, email } = formData;

    // Kiểm tra số CCCD phải có 12 chữ số
    if (cccd.length !== 12 || !/^\d{12}$/.test(cccd)) {
      alert("Vui lòng nhập số CCCD hợp lệ.");
      return false;
    }

    // Kiểm tra số điện thoại phải có từ 10 đến 11 số
    if (phone.length < 10 || phone.length > 11 || !/^\d{10,11}$/.test(phone)) {
      alert("Vui lòng nhập số điện thoại hợp lệ.");
      return false;
    }

    // Kiểm tra email phải có ký tự "@" với định dạng hợp lệ
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      alert("Vui lòng nhập email hợp lệ.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData);
      alert("Đặt lịch hẹn thành công!");
      // Thực hiện các xử lý tiếp theo như gửi dữ liệu lên server tại đây
    }
  };

  const handleExit = () => {
    navigate("/dashboard"); // Điều hướng về trang Dashboard
  };

  return (
    <div className={styles["schedule-container"]}>
      <h1 className={styles["schedule-title"]}>Đặt Lịch Hẹn</h1>
  
      {/* Nút Thoát */}
      <button onClick={handleExit} className={styles["exit-button"]}>
       
      </button>
  
      {/* Form đặt lịch */}
      <form className={styles["schedule-form"]} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Họ và Tên</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Nhập họ và tên"
            required
            title="Vui lòng nhập họ và tên của bạn."
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="cccd">Số CCCD</label>
          <input
            type="text"
            id="cccd"
            name="cccd"
            value={formData.cccd}
            onChange={handleChange}
            placeholder="Nhập số CCCD"
            required
            pattern="\d{12}"
            title="Số CCCD phải có 12 chữ số."
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Nhập email"
            required
            title="Email phải có định dạng @."
          />
        </div>
  
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Nhập số điện thoại"
            required
            title="Số điện thoại phải có 10 hoặc 11 chữ số."
          />
        </div>
  
        <div className="form-group">
  <label htmlFor="showroom">Showroom</label>
  <select
    id="showroom"
    name="showroom"
    value={formData.showroom}
    onChange={handleChange}
    required
    title="Vui lòng chọn showroom."
  >
    <option value="">Chọn showroom</option>
    <option value="Hồ Chí Minh">TP. Hồ Chí Minh</option>
    <option value="Hà Nội">Hà Nội</option>
  </select>
</div>

  
        <div className="form-group">
          <label htmlFor="appointmentDate">Ngày đặt lịch</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={formData.appointmentDate}
            onChange={handleChange}
            required
          />
        </div>
  
        <button type="submit" className={styles["submit-button"]}>
          Đặt lịch
        </button>
      </form>
    </div>
  );
  
};

export default Schedule;
