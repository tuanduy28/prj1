import React from "react";
import styles from "./Header.module.css"; // Import CSS module

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Logo */}
        <img
          src="images\640px-Fast-furious-logo-fast-furious.png" // Đường dẫn ảnh logo
          alt="Logo FnF"
          className={styles.logoImage}
        />
       
      </div>

      {/* Phần tiêu đề chính ở giữa */}
      <div className={styles.titleContainer}>
        <h1 className={styles.mainTitle}>Ready. Set. Go</h1>
      </div>
    </header>
  );
};

export default Header;
