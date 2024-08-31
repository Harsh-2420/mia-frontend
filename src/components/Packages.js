import React from "react"
import { Row, Col } from "react-bootstrap"
import FloorPlan from "../assets/floorplan.jpg"
import MiaMenu from "../assets/bottle_service.png"
import "../css/Packages.css" // Ensure this path is correct
import { MdEmail } from "react-icons/md"

const Packages = () => {
    return (
        <div
            style={{
                backgroundColor: "#1c1c1c",
                paddingTop: "5%",
                paddingBottom: "5%",
            }}
        >
            <Row
                className="banner align-items-center"
                style={{ padding: "2%" }}
            >
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
            <Row
                className="banner align-items-center"
                style={{ padding: "2%" }}
            >
                <Col xs={6} className="text-center mb-4">
                    <img
                        src={MiaMenu}
                        alt="Menu"
                        className="img-fluid img-thumbnail floorplan-img"
                        style={{
                            width: "60%",
                            height: "auto",
                        }}
                    />
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
                    <div className="packages-button-container">
                        <button className="packages-button">Email Us</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Packages
