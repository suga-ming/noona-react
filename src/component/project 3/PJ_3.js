import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductAll from "./ProductAll";
import Login from "./Login";
import ProductDetail from "./ProductDetail";

const PJ_3 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
      </Routes>
      <h1>하잉</h1>
    </div>
  );
};

export default PJ_3;
