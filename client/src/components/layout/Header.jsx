import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../styles/Header.css';
import CORLOGO from '../../assets/Asset+1.png';

const Header = () => {
  return (
    <>
      <navbar className="Navbar">
        <Navbar className='nav-bg static-top' expand="lg"> {/* Change fixed-top to static-top */}
          <Container fluid>
            <Navbar.Brand style={{ color : 'rgba(0,0,0,1)'}} href="/"><img src={CORLOGO} id="Nav-Brand" alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Link className='nav-link-style' to='/'>Home</Link>
                <Link className='nav-link-style' to="/about-us">About Us</Link>
                <Link className='nav-link-style' to="/login">Login</Link>
                <Link className='nav-link-style' to="/mentee-registration">Mentee Registration</Link>
                <Link className='nav-link-style' to="/mentor-registration">Mentor Registration</Link>
                <Link className='nav-link-style' to="/registration">Registration</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </navbar>
    </>
  );
};

export default Header;
