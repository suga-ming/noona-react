import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Form className="searchBox" onSubmit={searchByName}>
      <Row>
        <Col lg={6}>
          <Form.Control
            className="searchBox-input"
            type="text"
            placeholder="Enter name"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
        </Col>
        <Col lg={6}>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
