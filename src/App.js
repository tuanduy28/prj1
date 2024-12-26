import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Import các component chính
import Header from "./components/Header";
import CTA from "./components/CTA";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

// Import Dashboard Layout
import DashboardLayout from "./componentDashboard/DashboardLayout";

// Import CarTypesBar và các trang chi tiết ô tô
import JDMPage from "./componentDashboard/JDMPage";

function App() {
  // Danh sách các xe JDM
  const [jdmCars, setJdmCars] = useState([
    {
      src: require("./images/skyline.webp"),
      name: "1999 Nissan Skyline GT-R R34",
      price: "$50,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
    {
      src: require("./images/supra.jpg"),
      name: "1994 Toyota Supra MK IV",
      price: "$60,000",
      description:
        "Chiếc Toyota Supra của Brian O'Conner xuất hiện lần đầu trong Fast and Furious (2001), là thứ thể hiện cho tình anh em giữa Brian và Dominic Torretto.",
    },
    {
      src: require("./images/mitsu.jpg"),
      name: "Mitsubishi Eclipse 1995 F Model",
      price: "$45,000",
      description:
        "Chiếc xe do Brian tự chế để tham dự vào cuộc đua đường phố đầu tiên với hi vọng giành được sự tôn trọng từ các tay đua.",
    },
    {
      src: require("./images/r35.png"),
      name: "2009 Nissan GT-R R35",
      price: "$65,000",
      description:
        "Chiếc Nissan GT-R R35 xuất hiện trong Fast Five và Fast & Furious 7, đại diện cho tốc độ và công nghệ đỉnh cao Nhật Bản.",
    },
  ]);

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
          element={<DashboardLayout jdmCars={jdmCars} />}
        />

        {/* Các loại ô tô */}
        <Route
          path="/cars/jdm"
          element={<JDMPage jdmCars={jdmCars} setJdmCars={setJdmCars} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
