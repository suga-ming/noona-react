import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id } = useParams();
  console.log(id);
  return <div>ProductDetailPage {id}</div>;
};

export default ProductDetailPage;
