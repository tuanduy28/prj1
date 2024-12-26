import React, { useState } from "react";
import { Typography } from "@mui/material";
import CarTypesBar from "./CarTypesBar";
import SearchBar from "./SearchBar";
import ExitButton from "./ExitButton";
import "./DashboardLayout.css"; // Import file CSS

const DashboardLayout = ({ jdmCars }) => {
  const [cartMessage, setCartMessage] = useState("");

  const addToCart = (carName) => {
    setCartMessage(`${carName} đã được thêm vào giỏ hàng`);
    setTimeout(() => setCartMessage(""), 3000); // Thông báo sẽ biến mất sau 3 giây
  };

  return (
    <div className="dashboard-layout">
      {/* Main Content */}
      <div className="dashboard-content">
        <div className="exit-button-container">
          <ExitButton />
        </div>

        {/* Header cho Dashboard */}
        <Typography variant="h4" className="dashboard-header">
        </Typography>

        <CarTypesBar />

        {/* Search Bar */}
        <SearchBar />

        {/* Hiển thị thông báo thêm vào giỏ hàng */}
        {cartMessage && <div className="cartMessage">{cartMessage}</div>}

        {/* Hiển thị danh sách xe JDM */}
        <div className="carImagesContainer">
          {jdmCars.map((car, index) => (
            <div key={index} className="carCard">
              <img src={car.src} alt={car.name} className="carImage" />
              <h2 className="carName">{car.name}</h2>
              <p className="carPrice">{car.price}</p>
              <button
                className="addToCartButton"
                onClick={() => addToCart(car.name)}
              >
                Add to Cart
              </button>
              <p className="carDescription">{car.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
