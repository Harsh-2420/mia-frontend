import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaEnvelope } from "react-icons/fa"
import FloorPlan from "../assets/floorplan.jpg"
import MiaMenu from "../assets/mia-menu.pdf"
import "../css/Packages.css" // Ensure this path is correct
import { Document, Page } from "react-pdf"
import { MdFileDownload, MdEmail } from "react-icons/md"

const Packages = () => {
    return (
        <div
            style={{
                backgroundColor: "#1c1c1c",
                paddingTop: "5%",
                paddingBottom: "5%"
            }}
        >
            <Row className="banner align-items-center" style={{ padding: "2%" }}>
                <Col md={6} className="text-center mb-4">
                    <h2 className="mia-cursive" style={{ color: "white" }}>
                        check out our
                    </h2>
                    <h1 className="mia-rock-salt">Floor Plan</h1>
                </Col>
                <Col md={6} className="d-flex align-items-center">
                    <img
                        src={FloorPlan}
                        alt="Floor Plan"
                        className="img-fluid img-thumbnail floorplan-img"
                        style={{
                            transform: "rotate(90deg)",
                            width: "40%",
                            height: "auto",
                        }}
                    />
                </Col>
            </Row>
            <Row className="banner align-items-center" style={{ padding: "2%" }}>
                <Col xs={6} className="text-center mb-4">
                    <div className="">
                        <Document>{/* Insert Mia Menu PDF */}</Document>
                    </div>
                </Col>
                <Col md={6} className="text-center mb-4">
                    <h2 className="mia-cursive" style={{ color: "white" }}>
                        check out our
                    </h2>
                    <h1 className="mia-rock-salt">Menu</h1>
                </Col>
            </Row>
            <Row style={{ padding: "2%" }}>
                <Col xs={12} className="text-center">
                    <a
                        href="mailto:your-email@example.com"
                        className="btn btn-primary"
                    >
                        <MdEmail size={24} /> Email Us
                    </a>
                </Col>
            </Row>
        </div>
    )
}

export default Packages
