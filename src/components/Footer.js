import { NavLink } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/imgs/logo-transparent.png";
import {
    FaSquareFacebook,
    FaSquareInstagram,
    FaSquareTwitter,
    FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="fixed-bottom">
            <Row>
                <Col xs={4} className="text-center pt-2">
                    <ul className="row list-unstyled">
                        <li className="col-6 social-icon">
                            <a href="https://www.facebook.com" target="_blank">
                                <span>
                                    <FaSquareFacebook />
                                </span>
                            </a>
                        </li>
                        <li className="col-6 social-icon">
                            <a href="https://www.instagram.com" target="_blank">
                                <span>
                                    <FaSquareInstagram />
                                </span>
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} className="text-center">
                    <ul className="list-unstyled">
                        <li>
                            <a href="#">
                                <img
                                    id="footer-logo"
                                    src={logo}
                                    alt="Aqua La Vista Logo"
                                />
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col xs={4} className="text-center pt-2">
                    <ul className="row list-unstyled">
                        <li className="col-6 social-icon">
                            <a href="https://www.twitter.com" target="_blank">
                                <span>
                                    <FaSquareTwitter />
                                </span>
                            </a>
                        </li>
                        <li className="col-6 social-icon">
                            <a href="https://www.linkedin.com" target="_blank">
                                <span>
                                    <FaLinkedin />
                                </span>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col className="text-center">
                    <p id="disclaimer">
                        This website is for educational purposes only and does
                        not represent a real company or organisation. It was
                        created for the sole purpose of participation in
                        the&nbsp;
                        <a
                            href="https://hackathon.codeinstitute.net/"
                            className="d-inline-block hover-up"
                            target="_blank">
                            Code Institute Hackathon
                        </a>
                        &nbsp;July 2023. ©The Wet & the Restless. All Rights Reserved.
                    </p>
                </Col>
            </Row>
        </footer>
    );
};

export default Footer;
