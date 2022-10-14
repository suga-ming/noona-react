import React from "react";
import "./productDetail.css";
import Form from "react-bootstrap/Form";

const ProductDetail = () => {
  return (
    <div className="detail-area">
      <div className="detail-img">
        <img src="https://lp2.hm.com/hmgoepprod?set=source[/fa/54/fa547c437bf08076aa46dd66f1a2e6a2cf4a4e3e.jpg],origin[dam],category[],type[LOOKBOOK],res[z],hmver[1]&call=url[file:/product/main]"></img>
      </div>
      <div>
        <div className="detail-title">슬림핏</div>
        <div className="detail-price">₩29000</div>
        <div className="detail-choice">choice</div>
        <Form.Select
          className="detail-option"
          aria-label="Default select example"
        >
          <option>사이즈 선택</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
        <button className="detail-button" type="submit">
          추가
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
