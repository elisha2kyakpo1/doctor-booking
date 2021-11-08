import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { addDoctor } from '../api/LoginSignUp';
import './DoctorRegistration.css';

const DoctorRegisteration = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    addDoctor(formData)
      .then((data) => (data.json))
      .catch((error) => error);
  };

  return (
    <section className="signup">
      <div className="inner-signup">
        <div className="container">
          <div className="inner">
            <h1>Add a doctor</h1>
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Name of Doctor</Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Email address</Form.Label>
              <Form.Control
                className="input"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="name">Specialization</Form.Label>
              <Form.Control
                className="input"
                type="text"
                placeholder="Enter Specialization"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="name"> Upload image</Form.Label>
              <Form.Control
                className="input"
                type="file"
                placeholder=""
                name="image"
                accept="image/*"
              />
            </Form.Group>

            <Button className="submit" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default DoctorRegisteration;
