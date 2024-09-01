import React, { useState } from "react"
import { Form, Button, Row, Col, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Bottleservice.css"
import miaAboutImg from "../assets/Mia 8.JPG"

function BottleserviceForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        date: "",
        contact: "",
        comments: "",
        email: "",
        maleAttendees: "",
        femaleAttendees: "",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }
    return (
        <>
            <Form onSubmit={handleSubmit} className="form-container">
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formName"
                        >
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formPeople"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formMaleAttendees"
                        >
                            <Form.Control
                                type="number"
                                placeholder="Male Attendees"
                                name="maleAttendees"
                                value={formData.maleAttendees}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formFemaleAttendees"
                        >
                            <Form.Control
                                type="number"
                                placeholder="Female Attendees"
                                name="femaleAttendees"
                                value={formData.femaleAttendees}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formDate"
                        >
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formContact"
                        >
                            <Form.Control
                                type="tel" // Use type="tel" for phone number
                                placeholder="Phone Number"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={12}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formEmail"
                        >
                            <Form.Control
                                style={{
                                    height: "38px",
                                }}
                                type="email"
                                placeholder="Enter Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="guestlist-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={12}>
                        <Form.Group
                            className="bottlservice-form-group"
                            controlId="formComments"
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Additional comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="bottleservice-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button className="w-100 mt-3 bottleservice-form-submit">
                    SUBMIT
                </Button>
            </Form>
        </>
    )
}

function Bottleservice() {
    return (
        <div class="bottleservice-page-container">
            <Row style={{ color: "white" }}>
                <div style={{ textAlign: "center" }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5%",
                            borderRadius: "10px",
                        }}
                    >
                        <div style={{ width: "80%", maxWidth: "800px" }}>
                            <h2
                                className="mia-cursive mia-accent"
                                style={{ textAlign: "center" }}
                            >
                                Secure a{" "}
                                <span className="mia-rock-salt">Booth</span>
                            </h2>
                            <p
                                style={{
                                    color: "white",
                                    textAlign: "center",
                                    margin: "20px 0",
                                }}
                            >
                                Looking to enjoy the night in style, a booth at
                                Mia, ensures you have a front-row seat to all
                                the action. Our booths offer the perfect blend
                                of comfort, privacy, and exclusivity, making
                                them the ideal choice for those who want to
                                experience the best of Toronto nightlife.
                                <br></br>
                                <br></br>
                                To reserve your booth please fill out this form
                                and one of the team members will reach out to
                                you.
                            </p>
                        </div>
                    </div>
                </div>
            </Row>
            <Row style={{ padding: "5%" }}>
                <Col
                    md={4}
                    // className="bottlservice-box-image"
                >
                    <Image
                        src={miaAboutImg}
                        alt="Club Mia Image"
                        style={{
                            maxWidth: "300px",
                            border: "1px solid white",
                            borderRadius: "15px",
                            margin: "3%",
                        }}
                    />
                    <Image
                        src={miaAboutImg}
                        alt="Club Mia Image"
                        style={{
                            maxWidth: "300px",
                            border: "1px solid white",
                            borderRadius: "15px",
                            margin: "3%",
                        }}
                    />
                </Col>
                <Col md={1}></Col>
                <Col
                    md={7}
                    // className="bottleservice-box"
                >
                    <Row className="text-center py-5">
                        <Col>
                            <BottleserviceForm />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Bottleservice
