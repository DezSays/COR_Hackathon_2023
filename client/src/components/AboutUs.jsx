import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/AboutUs.css"; 

const AboutUs = () => {
  return (
    <Container>
      <h1>Light. Hope. Transformation.</h1>
      <h5 id="mission-statement">
      City of Refuge is a faith-based environment that helps individuals and
families transition out of crisis.
      </h5>
      <Row>
        <Col sm={6} md={4} className="text-center">
          <Image
            src="/Jeannie_Ross.jpg"
            roundedCircle
            width={150}
            height={150}
            alt="Jeannie Ross"
          />
          <p className="staff-name">Jeannie Ross</p>
          <p className="staff-title">Director of Job Training and Employment Services</p>
        </Col>
        <Col sm={6} md={4} className="text-center">
          <Image
            src="/Ron_Cofield.jpg"
            roundedCircle
            width={150}
            height={150}
            alt="Ron Cofield"
          />
          <p className="staff-name">Ron Cofield</p>
          <p className="staff-title">Academy Employment Specialist</p>
        </Col>
        <Col sm={6} md={4} className="text-center">
          <Image
            src="/Martha_Blaides.jpg"
            roundedCircle
            width={150}
            height={150}
            alt="Martha Blaides"
          />
          <p className="staff-name">Martha Blaides</p>
          <p className="staff-title">Case Manager</p>
        </Col>
        <Col sm={6} md={4} className="text-center">
          <Image
            src="/John_McQueen.jpg"
            roundedCircle
            width={150}
            height={150}
            alt="John McQueen"
          />
          <p className="staff-name">John McQueen</p>
          <p className="staff-title">Recruitment Leader</p>
        </Col>
        <Col sm={6} md={4} className="text-center">
          <Image
            src="https://via.placeholder.com/150"
            roundedCircle
            alt="Angie Pope"
          />
          <p className="staff-name">Angie Pope</p>
          <p className="staff-title">Case Manager</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
