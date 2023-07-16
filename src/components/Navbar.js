import React from "react";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../index.css";
import logo from "../assets/imgs/logo-transparent.png";
import {
    FaHouseChimney,
    FaCircleQuestion,
    FaRegNewspaper,
    FaEnvelope,
    FaEarthEurope,
} from "react-icons/fa6";

const PageNav = () => {
    return (
        <Navbar expand="lg" id="nav-styling">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src={logo} id="nav-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="basic-navbar-nav"
                    id="navbar-toggler"
                />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/"
                            className="hvr-underline-from-center">
                            <span className="purple pe-2">
                                <FaHouseChimney />
                            </span>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/about"
                            className="hvr-underline-from-center">
                            <span className="purple pe-2">
                                <FaCircleQuestion />
                            </span>
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/blog"
                            className="hvr-underline-from-center">
                            <span className="purple pe-2">
                                <FaRegNewspaper />
                            </span>
                            Blog
                        </Nav.Link>
                        <NavDropdown
                            title={
                                <span>
                                    <span className="purple pe-2">
                                        <FaEarthEurope />
                                    </span>
                                    Countries
                                </span>
                            }
                            id="basic-nav-dropdown">
                            <NavDropdown.Item
                                as={Link}
                                to="/england"
                                className="hvr-underline-from-center">
                                England
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/scotland"
                                className="hvr-underline-from-center">
                                Scotland
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/ireland"
                                className="hvr-underline-from-center">
                                Ireland
                            </NavDropdown.Item>
                            <NavDropdown.Item
                                as={Link}
                                to="/wales"
                                className="hvr-underline-from-center">
                                Wales
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link
                            as={Link}
                            to="/contact"
                            className="hvr-underline-from-center .nav-link-styling">
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
