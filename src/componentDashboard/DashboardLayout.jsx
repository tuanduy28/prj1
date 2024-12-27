import React, { useState } from "react";
import { Typography } from "@mui/material";
import CarTypesBar from "./CarTypesBar";
import SearchBar from "./SearchBar";
import ExitButton from "./ExitButton";
import "./DashboardLayout.css"; // Import file CSS

const DashboardLayout = ({ jdmCars, muscleCars, hyperCars, supercarCars, fastCars}) => {
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
          <Typography variant="h5"></Typography>
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

        {/* Hiển thị danh sách xe Muscle */}
        <div className="carImagesContainer">
          <Typography variant="h5"></Typography>
          {muscleCars.map((muscle, index) => (
            <div key={index} className="muscleCard">
              <img src={muscle.src} alt={muscle.name} className="muscleImage" />
              <h2 className="muscleName">{muscle.name}</h2>
              <p className="musclePrice">{muscle.price}</p>
              <button
                className="addToCartButton"
                onClick={() => addToCart(muscle.name)}
              >
                Add to Cart
              </button>
              <p className="muscleDescription">{muscle.description}</p>
            </div>
          ))}
        </div>
              {/* Hiển thị danh sách xe Hyper */}
              <div className="carImagesContainer">
          <Typography variant="h5"></Typography>
          {hyperCars.map((hyper, index) => (
            <div key={index} className="hyperCard">
              <img src={hyper.src} alt={hyper.name} className="hyperImage" />
              <h2 className="hyperName">{hyper.name}</h2>
              <p className="hyperPrice">{hyper.price}</p>
              <button
                className="addToCartButton"
                onClick={() => addToCart(hyper.name)}
              >
                Add to Cart
              </button>
              <p className="hyperDescription">{hyper.description}</p>
            </div>
          ))}
        </div>
        {/* Hiển thị danh sách xe Muscle */}
        <div className="carImagesContainer">
          <Typography variant="h5"></Typography>
          {supercarCars.map((supercar, index) => (
            <div key={index} className="supercarCard">
              <img src={supercar.src} alt={supercar.name} className="supercarImage" />
              <h2 className="supercarName">{supercar.name}</h2>
              <p className="supercarPrice">{supercar.price}</p>
              <button
                className="addToCartButton"
                onClick={() => addToCart(supercar.name)}
              >
                Add to Cart
              </button>
              <p className="supercarDescription">{supercar.description}</p>
            </div>
          ))}
        </div>
        {/* Hiển thị danh sách xe Muscle */}
        <div className="carImagesContainer">
          <Typography variant="h5"></Typography>
          {fastCars.map((fast, index) => (
            <div key={index} className="fastCard">
              <img src={fast.src} alt={fast.name} className="fastImage" />
              <h2 className="fastName">{fast.name}</h2>
              <p className="fastPrice">{fast.price}</p>
              <button
                className="addToCartButton"
                onClick={() => addToCart(fast.name)}
              >
                Add to Cart
              </button>
              <p className="fastDescription">{fast.description}</p>
            </div>
          ))}
        </div>
         
      </div>
    </div>
  );
};

export default DashboardLayout;
