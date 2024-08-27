import React, { useState } from "react"
import { Row, Col, Collapse, Button } from "react-bootstrap"
import {
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/About.css"

function About() {
    const [openLocation, setOpenLocation] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return (
        <div className="events-page">
            <h1 className="page-title">Welcome to Club Mia</h1>
            <Row>
                <Col></Col>
                <Col md={6} className="about-contact-box">
                    <Row className="text-center py-5">
                        <Col>
                            <h3 className="mb-4">
                                Toronto's Ultimate Nightlife Destination
                            </h3>
                            <p className="lead mb-4">
                                Located in the heart of downtown Toronto, Club
                                Mia is where elegance meets excitement. Our
                                venue is designed to cater to those who seek a
                                premium atmosphere with high-energy, where every
                                night is a celebration and every guest is
                                treated like a VIP.
                            </p>
                            <p className="mb-4">
                                Step inside and discover why we are the talk of
                                Toronto’s nightlife scene. With custom-designed
                                lights and the highest quality music systems,
                                every detail at Club Mia is crafted to offer an
                                unforgettable experience.
                            </p>
                            <span className="d-block mb-4">
                                Come be a part of Club Mia
                            </span>
                            <Button variant="primary" href="/contact">
                                Connect with Us
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default About
