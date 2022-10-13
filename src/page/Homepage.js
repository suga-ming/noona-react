import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("./about");
  };

  const goProductPage = () => {
    navigate("/products?q=skirt");
  };

  return (
    <div>
      Homepage
      <button onClick={goToHome}>AboutPage</button>
      <button onClick={goProductPage}>go to product</button>
    </div>
  );
};

export default Homepage;
