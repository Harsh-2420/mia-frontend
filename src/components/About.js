import React, { useState } from "react"
import { Row, Col, Collapse } from "react-bootstrap"
import {
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Contact.css" // Import the updated CSS file

function About() {
    const [openLocation, setOpenLocation] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return (
        <div className="events-page">
            <h1 className="page-title">ABOUT US</h1>
            <Row>
                <Col></Col>
                <Col md={6} className="contact-box">
                    <h5>Connect with Us</h5>
                    <br />
                    <div className="icons-container">
                        <a
                            href="mailto:info@nightclub.com"
                            className="icon-link"
                        >
                            <FaEnvelope />
                        </a>
                        <a
                            href="https://www.instagram.com/nightclub"
                            className="icon-link"
                        >
                            <FaInstagram />
                        </a>
                        <a href="tel:+1234567890" className="icon-link">
                            <FaPhone />
                        </a>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col md={6} className="contact-box">
                    <Row>
                        <Col>
                            <div
                                className="collapsible-section"
                                onClick={() => setOpenContact(!openContact)}
                            >
                                <span>Contact Number</span>
                                {openContact ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </div>
                            <Collapse in={openContact}>
                                <div id="contact-collapse">
                                    <p>+123 456 7890</p>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div
                                className="collapsible-section"
                                onClick={() => setOpenLocation(!openLocation)}
                            >
                                <span>Location</span>
                                {openLocation ? (
                                    <FaChevronUp />
                                ) : (
                                    <FaChevronDown />
                                )}
                            </div>
                            <Collapse in={openLocation}>
                                <div id="location-collapse">
                                    <p>123 Nightclub Avenue, Party City</p>
                                </div>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default About
