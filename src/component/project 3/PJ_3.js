import React, { useState, useEffect } from "react";
import "./PJ_3.css";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductAll from "./ProductAll";
import Login from "./Login";
import ProductDetail from "./ProductDetail";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const PJ_3 = () => {
  const authenticate = (state) => state.auth.authenticate;
  const PrivateRoute = () => {
    return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
  };

  useEffect(() => {
    console.log("aaa", authenticate);
  }, [authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<PrivateRoute />}></Route>
      </Routes>
    </div>
  );
};

export default PJ_3;
