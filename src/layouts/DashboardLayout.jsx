import React from "react";
import { Typography } from "@mui/material";
import CarTypesBar from "../componentDashboard/CarTypesBar";
import SearchBar from "../componentDashboard/SearchBar";
import ExitButton from "../componentDashboard/ExitButton"; 
import "./DashboardLayout.css"; // Import file CSS

const DashboardLayout = ({ boxes, onAddBox, onRemoveBox, onUpdateBoxName }) => {
  


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


      </div>
    </div>
  );
};

export default DashboardLayout;
