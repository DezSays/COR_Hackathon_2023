import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Mentor',
    password1: '',
    password2: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <Container>
      <h3 className="mt-3">Register with us!</h3>
      <Form id="registerForm" onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Form.Group controlId="nameInputDiv">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="emailInputDiv">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="roleInputDiv">
          <Form.Label>Are you a mentor or a mentee?</Form.Label>
          <Form.Control
            as="select"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
          >
            <option value="Mentor">Mentor</option>
            <option value="Mentee">Mentee</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="passwordInputDiv">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password1"
            value={formData.password1}
            onChange={handleInputChange}
            required
          />
          <Form.Label>Re-enter Password</Form.Label>
          <Form.Control
            type="password"
            name="password2"
            value={formData.password2}
            onChange={handleInputChange}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
