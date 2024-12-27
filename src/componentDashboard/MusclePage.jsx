import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MusclePage.module.css";

const MusclePage = ({ muscleCars }) => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (muscleName) => {
    setCartMessage(`${muscleName} đã được thêm vào giỏ hàng`);
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
      <h1 className={styles.pageTitle}>Muscle Cars</h1>

      {/* Hiển thị thông báo thêm vào giỏ hàng */}
      {cartMessage && <div className={styles.cartMessage}>{cartMessage}</div>}

      {/* Hàng ảnh */}
      <div className={styles.muscleImagesContainer}>
        {muscleCars.map((muscle, index) => (
          <div key={index} className={styles.muscleCard}>
            <img src={muscle.src} alt={muscle.name} className={styles.muscleImage} />
            <h2 className={styles.muscleName}>{muscle.name}</h2>
            <p className={styles.musclePrice}>{muscle.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(muscle.name)}
            >
              Add to Cart
            </button>
            <p className={styles.muscleDescription}>{muscle.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MusclePage;
