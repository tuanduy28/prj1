import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./JDMPage.module.css";

// Sử dụng ảnh từ thư mục cục bộ
import skyline from "./images/skyline.webp";
import supra from "./images/supra.jpg";
import mitsu from "./images/mitsu.jpg";
import r35 from "./images/skyline.webp";

const JDMPage = () => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const jdmCars = [
    {
      src: skyline,
      name: "1999 Nissan Skyline GT-R R34",
      price: "$50,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
    {
      src: supra,
      name: "1994 Toyota Supra MK IV",
      price: "$60,000",
      description:
        "Chiếc Toyota Supra của Brian O'Conner xuất hiện lần đầu trong Fast and Furious (2001), là thứ thế hiện cho tình anh em giữa Brian và Dominic Torretto.",
    },
    {
      src: mitsu,
      name: "Mitsubishi Eclipse 1995 F Model",
      price: "$45,000",
      description:
        "Chiếc xe do Brian tự chế để tham dự vào cuộc đua đường phố đầu tiên với hi vọng giành được sự tôn trọng từ các tay đua.",
    },
    {
      src: r35,
      name: "1999 Nissan Skyline GT-R R34",
      price: "$50,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
  ];

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
