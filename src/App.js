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
import Cart from "./componentDashboard/Cart";
import SearchBar from "./componentDashboard/SearchBar"; // Đường dẫn phải đúng với vị trí file SearchBar


// Import CarTypesBar và các trang chi tiết ô tô
import JDMPage from "./componentDashboard/JDMPage";
import MusclePage from "./componentDashboard/MusclePage";
import HyperPage from "./componentDashboard/HyperPage";
import SupercarPage from "./componentDashboard/SupercarPage";
import FastPage from "./componentDashboard/FastPage";

// Import SchedulePage
import SchedulePage from "./componentDashboard/Schedule";
function App() {
  // Danh sách các xe JDM
  const [jdmCars, setJdmCars] = useState([

    {
      src: require("./images/supra.jpg"),
      name: "1994 Toyota Supra MK IV",
      price: "$550,000",
      description:
        "Chiếc Toyota Supra của Brian O'Conner xuất hiện lần đầu trong Fast and Furious (2001), là thứ thể hiện cho tình anh em giữa Brian và Dominic Torretto.",
    },

    {
      src: require("./images/r35.png"),
      name: "2009 Nissan GT-R R35",
      price: "$525,000",
      description:
        "Chiếc Nissan GT-R R35 xuất hiện trong Fast Five và Fast & Furious 7, đại diện cho tốc độ và công nghệ đỉnh cao Nhật Bản.",
    },
    {
      src: require("./images/rx7.jpg"),
      name: "1997 Mazda RX-7",
      price: "$485,000",
      description:
        "Đây là chiếc xe thể hiện kỹ năng drift điêu luyện của Han, đặc biệt trong các cảnh đua đường phố ở Tokyo, góp phần khắc sâu dấu ấn của nhân vật trong loạt phim.",
    },
    {
      src: require("./images/honda.jpg"),
      name: "2000 Honda S2000",
      price: "$470,000",
      description:
        "Trong lần đầu xuất hiện ở 2 Fast 2 Furious, chiếc xe đã gây ấn tượng với họa tiết hoa anh đào và màu sắc độc đáo, thể hiện phong cách và cá tính của nhân vật Suki",
    },
    {
      src: require("./images/mitsu.jpg"),
      name: "Mitsubishi Eclipse 1995 F Model",
      price: "$375,000",
      description:
        "Chiếc xe do Brian tự chế để tham dự vào cuộc đua đường phố đầu tiên với hi vọng giành được sự tôn trọng từ các tay đua.",
    },
    {
      src: require("./images/skyline.webp"),
      name: "1999 Nissan Skyline GT-R R34",
      price: "$750,000",
      description:
        "Xuất hiện lần trong phần thứ 2 và quay lại trong phần thứ 4, nhắc tới nhân vật Brian thì phải nhắc tới chiếc xe này, Nissan R34 hay 'Godzilla' đã trở thành một biểu tượng đối với người yêu xe.",
    },
  ]);

  // Danh sách các xe Muscle
  const [muscleCars, setMuscleCars] = useState([
    {
      src: require("./images/dodge.avif"),
      name: "1970 Dodge Charger R/T",
      price: "$520,000",
      description:
        "Là biểu tượng của bộ phim, xuất hiện qua hầu hết các phần phim. Mạnh mẽ, độc đáo, chiếc xe mang theo nhiều câu chuyện và gắn liền với sự phát triển của nhân vật Dom.",
    },

    {
      src: require("./images/chevy.jpg"),
      name: "1969 Yenko Camaro SYC",
      price: "$635,000",
      description:
        "Được Brian giành được sau một cuộc cá cược; với động cơ V8 mạnh mẽ, hiệu suất vượt trội, chiếc xe đã trở thành một biểu tượng cơ bắp của xe Mỹ.",
    },

    {
      src: require("./images/68.png"),
      name: "1968 Dodge Charger",
      price: "$750,000",
      description:
        "Xe được trang bị động cơ mạnh mẽ và thiết kế đậm chất hoài cổ, mang lại cảm giác hầm hố, đầy quyền lực. Đây là một trong những mẫu xe gắn liền với hình tượng nhân vật Dom.",
    },

    {
      src: require("./images/impala.webp"),
      name: "1966 Chevrolet Impala",
      price: "$740,000",
      description:
        "Xuất hiện trong phần phim mới nhất và được cầm lái bởi phản diện mới Dante, chiếc xe mang một vẻ đẹp cổ điển, ngay lập tức chiếm được tình cảm của những người yêu thích phong cách classic.",
    },

    {
      src: require("./images/69.jpeg"),
      name: "1969 Dodge Charger Daytona",
      price: "$940,000",
      description:
        "Được Tej mua trong buổi đấu giá ở London, Dom đã sử dụng chiếc xe này để đua với Letty. Dù chỉ xuất hiện trong duy nhất phần 6, chiếc xe vẫn để lại ấn tượng mạnh với người xem với thiết kế độc đáo và màu sơn bắt mắt.",
    },

    {
      src: require("./images/srt.avif"),
      name: "2011 Dodge Challenger SRT-8",
      price: "$640,000",
      description:
        "Một trong những chiếc xe cơ bắp đời cao nhất được Dom cầm lái, xuất hiện ở cuối phần 5 và đầu phần 6 trong cuộc đua với Brian, SRT-8 mang một vẻ đẹp tinh tế nhưng không kém phần mạnh mẽ.",
    },
  ]);

  const [hyperCars, setHyperCars] = useState([
    {
      src: require("./images/hykan.png"),
      name: "Lykan HyperSport",
      price: "$3,000,000",
      description:
        "Dù chỉ xuất hiện một chút trong phần 7, chiếc xe đã tạo nên một trong những khoảnh khoắc mang tính biểu tượng nhất của bộ phim, khi được Dom dùng để lao qua 3 tòa nhà.",
    },
    {
      src: require("./images/ccxr.png"),
      name: " 2007 Koenigsegg CCX R",
      price: "$3,500,000",
      description:
        "Một trong những chiếc xe đắt nhất trong toàn bộ chuỗi phim, khi chỉ có 4 chiếc trên toàn cầu. Xuất hiện ở cuối phần 5, sau khi phi vụ ở Rio hoàn thành.",
    },
    {
      src: require("./images/mclaren.png"),
      name: "2019 McLaren Senna",
      price: "$1,350,000",
      description:
        "Chiếc xe nằm trong garage của Deckard Shaw, một tín đồ của McLaren, người nổi tiếng với phong cách lịch lãm nhưng không kém phần mạnh mẽ.",
    },
  
  ]);

  const [supercarCars, setSupercarCars] = useState([
    {
      src: require("./images/lambo.png"),
      name: "Lamborghini Gallardo LP560-4",
      price: "$570,000",
      description:
        "Mang một vẻ ngoài đầy sự quý tộc khi được mạ vàng toàn bộ, chiếc siêu xe được cầm lái bởi Roman Pearce trong phần phim mới nhất khi thực hiện phi vụ ở Ý.",
    },
    {
      src: require("./images/lfa.png"),
      name: "2011 Lexus LFA",
      price: "$375,000",
      description:
        "Được Han mua sau khi hoàn thành phi vụ ở Rio, dù chỉ xuất hiện trong một phân đoạn nhỏ khi anh đang đi cùng với người yêu Giselle, chiếc xe vẫn khiến nhiều người yêu thích.",
    },
    {
      src: require("./images/ford.png"),
      name: "1965 Ford GT40",
      price: "$7,000,000",
      description:
        "Được nhóm của Dom lấy được sau phi vụ cướp tàu hỏa, chiếc xe chứa manh mối dẫn tới kho chứa tiền khổng lồ của ông trùm Reyes, mở đầu cho sự kiện trong phần 5 ",
    },
  ]);
  // Danh sách các xe khác
  const [fastCars, setFastCars] = useState([
    {
      src: require("./images/hobb.png"),
      name: "Gurkha LAPV",
      price: "$520,000",
      description:
        "Pháo đài thép của đội đặc nhiệm Hobbs có khả năng chống đạn và chống tên lửa, được vận chuyển trực tiếp từ Mỹ sang Brazil. Chiếc xe này đã mở đường cho nhóm Dom đột nhập vào trụ sở cảnh sát mà không hề hấn gì.",
    },
    {
      src: require("./images/flip.png"),
      name: "The Flip Car",
      price: "$750,000",
      description:
        "Chiếc xe do nhóm của Owen Shaw tự chế, có khả năng húc tung và làm lật các xe khác. Trong cuộc truy đuổi trên đường phố London, chiếc xe này đã gây ra trở ngại lớn cho nhóm Dom.",
    },
]);
const [cartItems, setCartItems] = useState([
  {
    name: "The Flip Car",
    price: "$750,000",
    image: require ("./images/flip.png"),
  },
  {
    name: "Lykan HyperSport",
    price: "$3,000,000",
    image: require ("./images/hykan.png"),
  },
  {
    name: "1966 Chevrolet Impala",
    price: "$740,000",
    image: require ("./images/impala.webp"),
  },
  {
    name: "1994 Toyota Supra MK IV",
    price: "$550,000",
    image: require ("./images/supra.jpg"),
  },
]);

const handleRemoveItem = (index) => {
  const updatedCart = cartItems.filter((_, i) => i !== index);
  setCartItems(updatedCart);
};



const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  const filterCars = (cars) => {
    return cars.filter((car) => car.name.toLowerCase().includes(searchQuery));
  };


  return (
    <Router>
      <div>
        {/* Thêm thanh tìm kiếm vào phần đầu */}
        <Header />
     
      </div>
      <Routes>
        {/* Trang Chính */}
        <Route
          path="/"
          element={
            <div className="App">
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
    <div>
    <SearchBar
          onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
        />

      {/* DashboardLayout với danh sách xe đã được lọc */}
      <DashboardLayout
        jdmCars={filterCars(jdmCars)} // Lọc danh sách xe JDM
        muscleCars={filterCars(muscleCars)} // Lọc danh sách xe Muscle
        hyperCars={filterCars(hyperCars)} // Lọc danh sách xe Hypercar
        supercarCars={filterCars(supercarCars)} // Lọc danh sách xe Supercar
        fastCars={filterCars(fastCars)} // Lọc danh sách xe khác
      />
    </div>
  }
/>

  
        {/* Các loại ô tô */}
        <Route
          path="/cars/jdm"
          element={
            <div>
              <SearchBar
          onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
        />
              <JDMPage jdmCars={filterCars(jdmCars)} setJdmCars={setJdmCars} />
              </div>
              }
        />
        <Route
          path="/cars/muscle"
          element={
              <div>
                <SearchBar
            onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
          />
            <MusclePage muscleCars={filterCars(muscleCars)} setMuscleCars={setMuscleCars} />
            </div>
          }
        />
        <Route
          path="/cars/hypercar"
          element={
            <div>
                <SearchBar
            onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
          />
            <HyperPage hyperCars={filterCars(hyperCars)} setHyperCars={setHyperCars} />
            </div>
          }
        />
        <Route
          path="/cars/supercar"
          element={
            <div>
                <SearchBar
            onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
          />
            <SupercarPage
              supercarCars={filterCars(supercarCars)}
              setSupercarCars={setSupercarCars}
            />
            </div>
          }
        />
        <Route
        
          path="/cars/fast"
          element={
            <div>
            <SearchBar
        onSearch={(query) => setSearchQuery(query.toLowerCase())} // Nhận từ khóa tìm kiếm
      />
      <FastPage fastCars={filterCars(fastCars)} setFastCars={setFastCars} />
          </div>
        }
        />
  
        {/* Trang Cart */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems} // Truyền danh sách giỏ hàng
              onRemove={handleRemoveItem}
            />
          }
        />
  
        {/* Trang đặt lịch hẹn */}
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </Router>
  );
}  

export default App;