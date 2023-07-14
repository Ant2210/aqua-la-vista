import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";
import logo from "../logo.svg";
import {FaHouseChimney} from "react-icons/fa6";
import {FaCircleQuestion} from "react-icons/fa6";
import {FaRegNewspaper} from "react-icons/fa6";
import {FaEnvelope} from "react-icons/fa6";

const PageNav = () => {
    return (
        <Navbar expand="md" id="nav-styling">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} className="App-logo" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            href="#home"
                            className="hvr-underline-from-center .nav-link-styling">
                            <span className="pe-2">
                                <FaHouseChimney />
                            </span>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#link"
                            className="hvr-underline-from-center .nav-link-styling">
                            <span className="pe-2">
                                <FaCircleQuestion />
                            </span>
                            About
                        </Nav.Link>
                        <Nav.Link
                            href="#link"
                            className="hvr-underline-from-center .nav-link-styling">
                            <span className="pe-2">
                                <FaRegNewspaper />
                            </span>
                            News
                        </Nav.Link>
                        <Nav.Link
                            href="#link"
                            className="hvr-underline-from-center .nav-link-styling">
                            <span className="pe-2">
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
