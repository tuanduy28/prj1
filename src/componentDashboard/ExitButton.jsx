import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ExitButton.module.css'; // Import file CSS module

const ExitButton = () => {
  const navigate = useNavigate(); // Dùng hook để chuyển hướng



  return (
<button
  className={styles.exitButton}
  onClick={() => navigate("/")} // Điều hướng đến trang chính của loại xe
>
</button>

  );
};

export default ExitButton;
