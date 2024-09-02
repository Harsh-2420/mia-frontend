import React, { useState } from "react";
import { Row, Col, Collapse, Button, Container } from "react-bootstrap";
import {
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Contact.css"; // Import the updated CSS file

function Contact() {
  const [openLocation, setOpenLocation] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);

  return (
    <div className="contact-page">
      <h1 className="page-title">Contact Information</h1>
      <Row>
        <Col></Col>
        <Col md={6} className="contact-box">
          <h5>Connect with Us</h5>
          <br />
          <div className="icons-container">
            <a href="mailto:info.mia@gmsms.com" className="icon-link">
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/miatoronto_/"
              className="icon-link"
            >
              <FaInstagram />
            </a>
            <a href="tel:+14163459095" className="icon-link">
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
              <div className="contact-section">
                <span className="contact-info-header">Contact Number</span>
                <p className="contact-info-desc">+1 (416)-345-9095</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="contact-section">
                <span className="contact-info-header">Location</span>
                <p className="contact-info-desc">244 Adelaide St W, Toronto</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="contact-section">
                <span className="contact-info-header">
                  Book a Private Event with Us
                </span>
                <p className="contact-info-desc">
                  Looking for the perfect venue to host an unforgettable private
                  event? Club Mia, Toronto’s premier nightlife destination!
                  Whether you’re planning a birthday celebration, corporate
                  event, bachelor or bachelorette party, or any special
                  occasion, Club Mia offers an unparalleled setting that will
                  make your event truly memorable.
                </p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col></Col>
      </Row>

      <Row className="mt-4">
        <Col></Col>
        <Col md={8}>
          <Container fluid className="event-features-container">
            <Row>
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Bottle Service</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Top-notch Sound System</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Luxurious Booths</p>
                </div>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Stunning Decor</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Premium Drinks</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="event-feature-box">
                  <p>Elevate your Gathering</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col></Col>
      </Row>
      <Row className="mt-5">
        <Col></Col>
        <Col md={6} className="contact-box">
          <p>Email us at: info@nightclub.com</p>
        </Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Contact;
