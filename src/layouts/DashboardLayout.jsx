import React from "react";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CarTypesBar from "../componentDashboard/CarTypesBar";
import SearchBar from "../componentDashboard/SearchBar";
import ActionButtons from "../componentDashboard/ActionButtons";
import GridContent from "../componentDashboard/GridContent";
import ExitButton from "../componentDashboard/ExitButton"; 
import "./DashboardLayout.css"; // Import file CSS

const DashboardLayout = ({ boxes, onAddBox, onRemoveBox, onUpdateBoxName }) => {
  const navigate = useNavigate(); // Hook để điều hướng


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

        {/* Actions và Grid Content */}
        <div className="dashboard-actions">
          {/* Action Buttons */}
          <ActionButtons onAdd={onAddBox} onRemove={onRemoveBox} />

          {/* Grid Content */}
          <GridContent
            boxes={boxes}
            onUpdateBoxName={onUpdateBoxName} // Truyền hàm cập nhật tên box
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
