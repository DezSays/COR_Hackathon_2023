import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../App.css';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    console.log('Login data:', formData);
  };

  
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h1>Login</h1>
      </div>
      <div className="login-page">
        <Form className="formLogin" onSubmit={handleSubmit}>
          <Form.Group className="login-space" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              maxLength={25} // Set max length to 25 characters
            />
          </Form.Group>

          <Form.Group className="login-space" controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <p>Don't have an account? <a href="/register">Register</a></p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default LoginPage;
