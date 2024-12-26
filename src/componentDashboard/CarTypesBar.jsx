import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CarTypesBar.module.css";

const CarTypesBar = () => {
  const navigate = useNavigate();

  const carTypes = [
    { label: "JDM", path: "/cars/jdm" },
    { label: "Muscle", path: "/cars/muscle" },
    { label: "Hypercar", path: "/cars/hypercar" },
    { label: "Supercar", path: "/cars/supercar" },
    { label: "Others", path: "/cars/others" },
  ];

  return (
    <div className={styles.carTypesBarContainer}>
      <div className={styles.carTypesBar}>
        {carTypes.map((type) => (
          <div
            key={type.label}
            className={styles.carType}
            onClick={() => navigate(type.path)}
          >
            {type.label}
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default CarTypesBar;
