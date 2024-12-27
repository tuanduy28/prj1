import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FastPage.module.css";

const FastPage = ({ fastCars }) => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (fastName) => {
    setCartMessage(`${fastName} đã được thêm vào giỏ hàng`);
    setTimeout(() => setCartMessage(""), 3000); // Thông báo sẽ biến mất sau 3 giây
  };

  return (
    <div className={styles.pageContainer}>
      {/* Nút thoát */}
      <button
        className={styles.exitButton}
        onClick={() => navigate("/dashboard")}
      >
        Thoát
      </button>

      {/* Tiêu đề trang */}
      <h1 className={styles.pageTitle}>Others Cars</h1>

      {/* Hiển thị thông báo thêm vào giỏ hàng */}
      {cartMessage && <div className={styles.cartMessage}>{cartMessage}</div>}

      {/* Hàng ảnh */}
      <div className={styles.fastImagesContainer}>
        {fastCars.map((fast, index) => (
          <div key={index} className={styles.fastCard}>
            <img src={fast.src} alt={fast.name} className={styles.fastImage} />
            <h2 className={styles.fastName}>{fast.name}</h2>
            <p className={styles.fastPrice}>{fast.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(fast.name)}
            >
              Add to Cart
            </button>
            <p className={styles.fastDescription}>{fast.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FastPage;
