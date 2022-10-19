import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PJ_4.css";

const PJ_4 = () => {
  return (
    <div>
      <div className="title">Phone Book</div>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PJ_4;
