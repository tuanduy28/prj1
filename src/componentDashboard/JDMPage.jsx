import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JDMPage.module.css";

const JDMPage = ({ jdmCars }) => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (carName) => {
    setCartMessage(`${carName} đã được thêm vào giỏ hàng`);
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
      <h1 className={styles.pageTitle}>JDM Cars</h1>

      {/* Hiển thị thông báo thêm vào giỏ hàng */}
      {cartMessage && <div className={styles.cartMessage}>{cartMessage}</div>}

      {/* Hàng ảnh */}
      <div className={styles.carImagesContainer}>
        {jdmCars.map((car, index) => (
          <div key={index} className={styles.carCard}>
            <img src={car.src} alt={car.name} className={styles.carImage} />
            <h2 className={styles.carName}>{car.name}</h2>
            <p className={styles.carPrice}>{car.price}</p>
            <button
              className={styles.addToCartButton}
              onClick={() => addToCart(car.name)}
            >
              Add to Cart
            </button>
            <p className={styles.carDescription}>{car.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JDMPage;
