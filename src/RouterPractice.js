import AboutPage from "./page/AboutPage";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import UserPage from "./page/UserPage";
import Homepage from "./page/Homepage";

const RouterPractice = () => {
  const [authenticate, setAuthenticate] = useState(true);
  const PrivateRoute = () => {
    return authenticate == false ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <>
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
};

export default RouterPractice;
