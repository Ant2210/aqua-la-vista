import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../index.css';
import logo from '../assets/imgs/logo-transparent.png';
import { FaHouseChimney, FaCircleQuestion, FaRegNewspaper, FaEnvelope } from 'react-icons/fa6';

const PageNav = () => {
  return (
    <Navbar expand="md" id="nav-styling">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} id="nav-logo" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" id="navbar-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="hvr-underline-from-center">
              <span className="purple pe-2">
                <FaHouseChimney />
              </span>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="hvr-underline-from-center">
              <span className="purple pe-2">
                <FaCircleQuestion />
              </span>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="hvr-underline-from-center">
              <span className="purple pe-2">
                <FaRegNewspaper />
              </span>
              Benefits
            </Nav.Link>
            <Nav.Link as={Link} to="/research" className="hvr-underline-from-center">
              <span className="purple pe-2">
                <FaRegNewspaper />
              </span>
              Research
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="hvr-underline-from-center .nav-link-styling">
              <span className="purple pe-2">
                <FaEnvelope />
              </span>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PageNav;