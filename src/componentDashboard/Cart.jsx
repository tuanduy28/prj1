import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import hook để điều hướng
import styles from "./Cart.module.css"; // Import CSS module

const Cart = ({ cartItems, onRemove }) => {
  const [successMessage, setSuccessMessage] = useState(""); // State để lưu thông báo xóa thành công
  const navigate = useNavigate(); // Khởi tạo hàm điều hướng

  // Tính tổng tiền
  const totalPrice = cartItems.reduce((total, item) => {
    const price = parseInt(item.price.replace(/\$|,/g, ""));
    return total + price;
  }, 0);

  // Hàm xử lý xóa và hiển thị thông báo
  const handleRemove = (index) => {
    onRemove(index); // Gọi hàm xóa từ component cha
    setSuccessMessage("Xóa thành công!"); // Cập nhật thông báo

    // Ẩn thông báo sau 2 giây
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Danh Sách</h2>

      {/* Hiển thị thông báo xóa thành công */}
      {successMessage && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}

      {/* Hiển thị khi danh sách trống */}
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Danh sách của bạn đang trống!</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {cartItems.map((item, index) => (
              <li key={index} className={styles.cartItem}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.cartImage}
                />
                <div className={styles.cartDetails}>
                  <span className={styles.cartName}>{item.name}</span>
                  <span className={styles.cartPrice}>{item.price}</span>
                </div>
                <button
                  className={styles.removeButton}
                  onClick={() => handleRemove(index)} // Gọi hàm xử lý xóa
                >
                  {/* Nội dung của nút xóa */}
                </button>
              </li>
            ))}
          </ul>
          <h3 className={styles.cartTotal}>
            Tổng tiền: ${totalPrice.toLocaleString()}
          </h3>
        </>
      )}

      {/* Nút quay về Dashboard và đặt lịch hẹn */}
      <div className={styles.buttonGroup}>
        <button
          className={styles.backButton} // Thay bằng class backButton
          onClick={() => navigate("/dashboard")}
        >
        </button>
        {cartItems.length > 0 && (
          <button
            className={styles.scheduleButton} // Thay bằng class scheduleButton
            onClick={() => navigate("/schedule")}
          >
            Đặt lịch hẹn
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
