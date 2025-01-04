import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CTA.module.css"; // Import CSS module

const CTA = () => {
  const navigate = useNavigate(); // Hook điều hướng trang

  const handleClick = () => {
    navigate("/dashboard"); // Chuyển hướng đến trang chính
  };

  return (
    <section className={styles.ctaSection}>
      <h2 className={styles.ctaTitle}>Thỏa mãn niềm đam mê tốc độ</h2>
      <p className={styles.ctaText}>
        Sở hữu những huyền thoại trong giới ô tô ngay hôm nay!
      </p>
      <button
        className={styles.ctaButton}
        onClick={handleClick} // Gọi hàm chuyển hướng khi click
      >
        Bắt đầu
      </button>
    </section>
  );
};

export default CTA;
