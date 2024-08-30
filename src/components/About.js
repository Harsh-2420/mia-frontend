import React, { useState } from "react"
import { Row, Col, Collapse, Button, Image } from "react-bootstrap"
import {
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa"
import miaAboutImg from "../assets/Mia 8.JPG"

import "bootstrap/dist/css/bootstrap.min.css"
import "../css/About.css"

function About() {
    const [openLocation, setOpenLocation] = useState(false)
    const [openContact, setOpenContact] = useState(false)

    return (
        <div class="about-page-container">
            <h1 className="page-title">Welcome to Club Mia</h1>
            <Row style={{ margin: "5%" }}>
                <Col md={4} className="about-contact-box-image">
                    <Image
                        src={miaAboutImg}
                        alt="Club Mia Image"
                        style={{
                            maxWidth: "300px",
                            border: "5px solid black",
                            borderRadius: "15px",
                        }}
                    />
                </Col>
                <Col md={1}></Col>
                <Col md={7} className="about-contact-box">
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
            </Row>
        </div>
    )
}

export default About
