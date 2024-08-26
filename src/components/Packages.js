import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaEnvelope } from "react-icons/fa"
import "../css/Packages.css" // Ensure this path is correct

const Packages = () => {
    return (
        <Container fluid>
            <Row className="packages_section floorplan">
                <Col>
                    <div className="packages_section-content">
                        <img
                            src="path-to-your-floorplan-image.jpg"
                            alt="Floor Plan"
                            className="img-fluid"
                        />
                    </div>
                </Col>
            </Row>

            <Row className="packages_section menu">
                <Col>
                    <div className="packages_section-content">
                        <h2>Menu</h2>
                        <Row>
                            <Col sm={4}>
                                <strong>Item</strong>
                            </Col>
                            <Col sm={4}>
                                <strong>Price</strong>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={4}>Item 1</Col>
                            <Col sm={4}>$10</Col>
                        </Row>
                        <Row>
                            <Col sm={4}>Item 2</Col>
                            <Col sm={4}>$15</Col>
                        </Row>
                    </div>
                </Col>
            </Row>

            <Row className="packages_section email">
                <Col className="text-center">
                    <div className="packages_section-content">
                        <Button
                            variant="primary"
                            href="mailto:your-email@example.com"
                        >
                            <FaEnvelope /> Email Us
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Packages
