import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import các component chính
import Header from "./components/Header";
import CTA from "./components/CTA";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

// Import Dashboard Layout
import DashboardLayout from "./layouts/DashboardLayout";



// Import CarTypesBar và các trang chi tiết ô tô
import CarTypesBar from "./componentDashboard/CarTypesBar"; // Đã sửa đổi thành thanh kiểu ô tô
import JDMPage from "./componentDashboard/JDMPage";
import MusclePage from "./componentDashboard/MusclePage";
import HypercarPage from "./componentDashboard/HypercarPage";
import SupercarPage from "./componentDashboard/SupercarPage";
import OthersPage from "./componentDashboard/OthersPage";

function App() {
  // State quản lý danh sách các ô
  const [boxes, setBoxes] = useState([
    { id: 1, name: "Ô 1" },
    { id: 2, name: "Ô 2" },
  ]);

  // Thêm ô mới
  const addBox = () => {
    const newBox = { id: boxes.length + 1, name: `Ô ${boxes.length + 1}` };
    setBoxes((prev) => [...prev, newBox]);
  };

  // Xóa ô cuối cùng (không cho nhỏ hơn 1 ô)
  const removeBox = () => {
    if (boxes.length > 1) {
      setBoxes((prev) => prev.slice(0, -1));
    }
  };

  // Cập nhật tên ô
  const updateBoxName = (id, newName) => {
    setBoxes((prev) =>
      prev.map((box) => (box.id === id ? { ...box, name: newName } : box))
    );
  };

  // Điều hướng giữa các trang
  return (
    <Router>
      <Routes>
        {/* Trang Chính */}
        <Route
          path="/"
          element={
            <div className="App">
              <Header />
              <CTA />
              <AboutUs />
              <Contact />
            </div>
          }
        />

        {/* Trang Dashboard */}
        <Route
          path="/dashboard"
          element={
            <DashboardLayout
              boxes={boxes}
              onAddBox={addBox}
              onRemoveBox={removeBox}
              onUpdateBoxName={updateBoxName}
            />
          }
        />

 

        {/* Thanh kiểu ô tô */}
        <Route path="/car-types" element={<CarTypesBar />} />

        {/* Các loại ô tô */}
        <Route path="/cars/jdm" element={<JDMPage />} />
        <Route path="/cars/muscle" element={<MusclePage />} />
        <Route path="/cars/hypercar" element={<HypercarPage />} />
        <Route path="/cars/supercar" element={<SupercarPage />} />
        <Route path="/cars/others" element={<OthersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
