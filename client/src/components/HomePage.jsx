import React from 'react';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/HomePage.css'

const HomePage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-1(1).jpg"
            alt="First slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-2(1).jpg"
            alt="Second slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-3(1).jpg"
            alt="Third slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-4(1).jpg"
            alt="Fourth slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-5(1).jpg"
            alt="Fifth slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block mx-auto"
            src="cor-class-6(1).jpg"
            alt="Sixth slide"
            style={{ maxHeight: '700px', maxWidth: '1150px', width: 'auto', height: 'auto', objectFit: 'cover' }}
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
