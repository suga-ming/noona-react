import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group
          className="mb-3"
          controlId="formName"
          onChange={(e) => setName(e.target.value)}
        >
          <Form.Label>Name</Form.Label>
          <br />
          <Form.Control type="text" placeholder="Enter name" value={name} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formcontact"
          onChange={(e) => setPhoneNumber(e.target.value)}
        >
          <Form.Label>Phone Number</Form.Label>
          <br />
          <Form.Control
            type="number"
            placeholder="Phone Number"
            value={phoneNumber}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Create
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
