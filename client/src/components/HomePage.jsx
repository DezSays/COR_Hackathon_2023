import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>

      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"  // Replace with your image source
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image2.jpg"  // Replace with your image source
            alt="Second slide"
          />
        </Carousel.Item>
        {/* Add more Carousel.Items with different images as needed */}
      </Carousel>

      {/* Introductory Text */}
      <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
        <Row>
          <Col className="text-center">
            <h2 style={{ color: '#333' }}>Welcome to Our Website!</h2>
            <p style={{ fontSize: '1.2em', color: '#666' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id dolor id nibh ultricies vehicula ut id elit.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Call-to-Action Button */}
      <Container>
        <Row className="justify-content-center">
          <Col xs="auto">
            <Button variant="primary">Get Started</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
