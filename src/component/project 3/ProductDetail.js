import React, { useEffect, useState } from "react";
import "./productDetail.css";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productDetailAction } from "./redux/actions/productDetailAction";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const getProductDetail = async () => {
    dispatch(productDetailAction.getProductDetail(id));
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div className="detail-area">
      <div className="detail-img">
        <img src={product?.img} width="350px" height="500px"></img>
      </div>
      <div>
        <div className="detail-title">{product?.title}</div>
        <div className="detail-price">₩{product?.price}</div>
        <div className="detail-choice">
          {product?.choice == true ? "Studio Collection" : ""}
        </div>
        <Form.Select
          className="detail-option"
          aria-label="Default select example"
        >
          <option>사이즈 선택</option>
          {product?.size.map((size) => (
            <option value={size}>{size}</option>
          ))}
        </Form.Select>
        <button className="detail-button" type="submit">
          추가
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
