import React from "react";
import "./PJ_3.css";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./ProductAll";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";

const PJ_3 = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
};

export default PJ_3;
