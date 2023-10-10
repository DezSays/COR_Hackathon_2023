import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-4.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-5.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="cor-class-6.jpg"
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>

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
