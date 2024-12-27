import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SupercarPage.module.css";

const SuperPage = ({ supercarCars }) => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (supercarName) => {
    setCartMessage(`${supercarName} đã được thêm vào giỏ hàng`);
    setTimeout(() => setCartMessage(""), 3000); // Thông báo sẽ biến mất sau 3 giây
  };

  return (
    <div className={styles.pageContainer}>
      {/* Nút thoát */}
      <button
        className={styles.exitButton}
        onClick={() => navigate("/dashboard")}
      >
      </button>
      <button
          className="cartButton"
          onClick={() => navigate("/cart")} // Điều hướng tới trang Cart
        >
        </button>

      {/* Tiêu đề trang */}
      <h1 className={styles.pageTitle}>Super Cars</h1>

      {/* Hiển thị thông báo thêm vào giỏ hàng */}
      {cartMessage && <div className={styles.cartMessage}>{cartMessage}</div>}

      {/* Hàng ảnh */}
      <div className={styles.supercarImagesContainer}>
        {supercarCars.map((supercar, index) => (
          <div key={index} className={styles.supercarCard}>
            <img src={supercar.src} alt={supercar.name} className={styles.supercarImage} />
            <h2 className={styles.supercarName}>{supercar.name}</h2>
            <p className={styles.supercarPrice}>{supercar.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(supercar.name)}
            >
              Add to Cart
            </button>
            <p className={styles.supercarDescription}>{supercar.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuperPage;
