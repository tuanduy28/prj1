import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HyperPage.module.css";

const HyperPage = ({ hyperCars }) => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (hyperName) => {
    setCartMessage(`${hyperName} đã được thêm vào giỏ hàng`);
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
      <h1 className={styles.pageTitle}>Hyper Cars</h1>

      {/* Hiển thị thông báo thêm vào giỏ hàng */}
      {cartMessage && <div className={styles.cartMessage}>{cartMessage}</div>}

      {/* Hàng ảnh */}
      <div className={styles.hyperImagesContainer}>
        {hyperCars.map((hyper, index) => (
          <div key={index} className={styles.hyperCard}>
            <img src={hyper.src} alt={hyper.name} className={styles.hyperImage} />
            <h2 className={styles.hyperName}>{hyper.name}</h2>
            <p className={styles.hyperPrice}>{hyper.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(hyper.name)}
            >
              Add to Cart
            </button>
            <p className={styles.hyperDescription}>{hyper.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HyperPage;
