import "../src/App.css";
// import PJ1 from "./component/project 1/PJ_1";
// import PJ2 from "./component/project 2/PJ_2";
import Homepage from "./page/Homepage";
import AboutPage from "./page/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == false ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <>
      {/* <PJ1 /> */}
      {/* <PJ2 /> */}
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/products/:id" element={<ProductDetailPage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/user" element={<PrivateRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
