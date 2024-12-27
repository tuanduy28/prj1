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
import MusclePage from "./componentDashboard/MusclePage";
import HyperPage from "./componentDashboard/HyperPage";
import SupercarPage from "./componentDashboard/SupercarPage";
import FastPage from "./componentDashboard/FastPage";
function App() {
  // Danh sách các xe JDM
  const [jdmCars, setJdmCars] = useState([

    {
      src: require("./images/supra.jpg"),
      name: "1994 Toyota Supra MK IV",
      price: "$150,000",
      description:
        "Chiếc Toyota Supra của Brian O'Conner xuất hiện lần đầu trong Fast and Furious (2001), là thứ thể hiện cho tình anh em giữa Brian và Dominic Torretto.",
    },

    {
      src: require("./images/r35.png"),
      name: "2009 Nissan GT-R R35",
      price: "$125,000",
      description:
        "Chiếc Nissan GT-R R35 xuất hiện trong Fast Five và Fast & Furious 7, đại diện cho tốc độ và công nghệ đỉnh cao Nhật Bản.",
    },
    {
      src: require("./images/rx7.jpg"),
      name: "1997 Mazda RX-7",
      price: "$85,000",
      description:
        "Đây là chiếc xe thể hiện kỹ năng drift điêu luyện của Han, đặc biệt trong các cảnh đua đường phố ở Tokyo, góp phần khắc sâu dấu ấn của nhân vật trong loạt phim.",
    },
    {
      src: require("./images/honda.jpg"),
      name: "2000 Honda S2000",
      price: "$70,000",
      description:
        "Trong lần đầu xuất hiện ở 2 Fast 2 Furious, chiếc xe đã gây ấn tượng với họa tiết hoa anh đào và màu sắc độc đáo, thể hiện phong cách và cá tính của nhân vật Suki",
    },
    {
      src: require("./images/mitsu.jpg"),
      name: "Mitsubishi Eclipse 1995 F Model",
      price: "$75,000",
      description:
        "Chiếc xe do Brian tự chế để tham dự vào cuộc đua đường phố đầu tiên với hi vọng giành được sự tôn trọng từ các tay đua.",
    },
    {
      src: require("./images/skyline.webp"),
      name: "1999 Nissan Skyline GT-R R34",
      price: "$150,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
  ]);

  // Danh sách các xe Muscle
  const [muscleCars, setMuscleCars] = useState([
    {
      src: require("./images/dodge.avif"),
      name: "1970 Dodge Charger R/T",
      price: "$120,000",
      description:
        "Là biểu tượng của bộ phim, xuất hiện qua hầu hết các phần phim. Mạnh mẽ, độc đáo, chiếc xe mang theo nhiều câu chuyện và gắn liền với sự phát triển của nhân vật Dom",
    },
    {
      src: require("./images/69.jpeg"),
      name: "1969 Dodge Charger Daytona",
      price: "$140,000",
      description:
        "Được Tej mua trong buổi đấu giá ở London, Dom đã sử dụng chiếc xe này để đua với Letty. Dù chỉ xuất hiện trong duy nhất phần 6, chiếc xe vẫn để lại ấn tượng mạnh với người xem.",
    },
    {
      src: require("./images/chevy.jpg"),
      name: "1969 Yenko Camaro SYC",
      price: "$135,000",
      description:
        "Được Brian giành được sau một cuộc cá cược; với động cơ V8 mạnh mẽ, hiệu suất vượt trội, chiếc xe đã trở thành một biểu tượng cơ bắp của xe Mỹ.",
    },
    {
      src: require("./images/68.png"),
      name: "1968 Dodge Charger",
      price: "$35,000",
      description:
        "Xe được tùy chỉnh với động cơ HEMI mạnh mẽ và thiết kế đậm chất hoài cổ, mang lại cảm giác hầm hố, đầy quyền lực. Đây là một trong những mẫu xe gắn bó với hình tượng nhân vật của Dom xuyên suốt loạt phim.",
    },
  ]);
  const [hyperCars, setHyperCars] = useState([
    {
      src: require("./images/68.png"),
      name: "1968 Dodge Charger",
      price: "$35,000",
      description:
        "Xe được tùy chỉnh với động cơ HEMI mạnh mẽ và thiết kế đậm chất hoài cổ, mang lại cảm giác hầm hố, đầy quyền lực. Đây là một trong những mẫu xe gắn bó với hình tượng nhân vật của Dom xuyên suốt loạt phim.",
    },
    {
      src: require("./images/68.png"),
      name: "1968 Dodge Charger",
      price: "$35,000",
      description:
        "Xe được tùy chỉnh với động cơ HEMI mạnh mẽ và thiết kế đậm chất hoài cổ, mang lại cảm giác hầm hố, đầy quyền lực. Đây là một trong những mẫu xe gắn bó với hình tượng nhân vật của Dom xuyên suốt loạt phim.",
    },
    {
      src: require("./images/68.png"),
      name: "1968 Dodge Charger",
      price: "$35,000",
      description:
        "Xe được tùy chỉnh với động cơ HEMI mạnh mẽ và thiết kế đậm chất hoài cổ, mang lại cảm giác hầm hố, đầy quyền lực. Đây là một trong những mẫu xe gắn bó với hình tượng nhân vật của Dom xuyên suốt loạt phim.",
    },
  
  ]);
  const [supercarCars, setSupercarCars] = useState([
    {
      src: require("./images/honda.jpg"),
      name: "2000 Honda S2000                                     ",
      price: "$70,000",
      description:
        "Trong lần đầu xuất hiện ở 2 Fast 2 Furious, chiếc xe đã gây ấn tượng với họa tiết hoa anh đào và màu sắc độc đáo, thể hiện phong cách và cá tính của nhân vật Suki",
    },
    {
      src: require("./images/mitsu.jpg"),
      name: "Mitsubishi Eclipse 1995 F Model",
      price: "$75,000",
      description:
        "Chiếc xe do Brian tự chế để tham dự vào cuộc đua đường phố đầu tiên với hi vọng giành được sự tôn trọng từ các tay đua.",
    },
    {
      src: require("./images/skyline.webp"),
      name: "1999 Nissan Skyline GT-R R34",
      price: "$150,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
  ]);
  // Danh sách các xe Muscle
  const [fastCars, setFastCars] = useState([
    {
      src: require("./images/dodge.avif"),
      name: "1970 Dodge Charger R/T",
      price: "$120,000",
      description:
        "Là biểu tượng của bộ phim, xuất hiện qua hầu hết các phần phim. Mạnh mẽ, độc đáo, chiếc xe mang theo nhiều câu chuyện và gắn liền với sự phát triển của nhân vật Dom",
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
          element={<DashboardLayout jdmCars={jdmCars} muscleCars={muscleCars} hyperCars={hyperCars} supercarCars={supercarCars} fastCars={fastCars}  />}
        />

        {/* Các loại ô tô */}
        <Route
          path="/cars/jdm"
          element={<JDMPage jdmCars={jdmCars} setJdmCars={setJdmCars} />}
        />
        <Route
          path="/cars/muscle"
          element={<MusclePage muscleCars={muscleCars} setMuscleCars={setMuscleCars} />}
        />
        <Route
          path="/cars/hypercar"
          element={<HyperPage hyperCars={hyperCars} setHyperCars={setHyperCars} />}
        />
        <Route
          path="/cars/supercar"
          element={<SupercarPage supercarCars={supercarCars} setSupercarCars={setSupercarCars} />}
        />
       <Route
          path="/cars/fast"
          element={<FastPage fastCars={fastCars} setFastCars={setFastCars} />}
        /> 
       
      </Routes>
    </Router>
  );
}

export default App;
