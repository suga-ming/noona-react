import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log("query", query.get("q"));
  return <div>ProductPage</div>;
};

export default ProductPage;
