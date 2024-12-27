import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.module.css"; // Import file CSS cho trang Cart

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  // Tính tổng giá tiền
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Giỏ Hàng</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Giỏ hàng của bạn đang trống!</p>
          <button className="back-button" onClick={() => navigate("/dashboard")}>
            Quay lại cửa hàng
          </button>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.src} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <h2 className="cart-item-name">{item.name}</h2>
                  <p className="cart-item-price">{item.price.toLocaleString()} USD</p>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(index)}
                >
                  Xóa
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Tổng tiền: {calculateTotalPrice().toLocaleString()} USD</h2>
            <button className="checkout-button">Thanh toán</button>
            <button className="back-button" onClick={() => navigate("/dashboard")}>
              Quay lại cửa hàng
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
