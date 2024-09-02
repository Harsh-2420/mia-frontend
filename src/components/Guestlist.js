import React, { useState } from "react"
import { Form, Button, Row, Col, Image } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Guestlist.css"
import miaAboutImg from "../assets/Mia 8.JPG"

function GuestlistForm() {
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
            <Form onSubmit={handleSubmit} className="guestlist-form-container">
                <Row
                    style={{
                        paddingBottom: "3%",
                    }}
                >
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formName"
                        >
                            <Form.Control
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="guestlist-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formPeople"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                value={formData.lastName}
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
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formMaleAttendees"
                        >
                            <Form.Control
                                type="number"
                                placeholder="Male Attendees"
                                name="maleAttendees"
                                value={formData.maleAttendees}
                                onChange={handleChange}
                                className="guestlist-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formFemaleAttendees"
                        >
                            <Form.Control
                                type="number"
                                placeholder="Female Attendees"
                                name="femaleAttendees"
                                value={formData.femaleAttendees}
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
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formDate"
                        >
                            <Form.Control
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="guestlist-form-control"
                            />
                        </Form.Group>
                    </Col>
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formContact"
                        >
                            <Form.Control
                                type="tel" // Use type="tel" for phone number
                                placeholder="Phone Number"
                                name="contact"
                                value={formData.contact}
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
                            className="guestlist-form-group"
                            controlId="formComments"
                        >
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Additional comments"
                                name="comments"
                                value={formData.comments}
                                onChange={handleChange}
                                className="guestlist-form-control"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button className="w-100 mt-3 guestlist-form-submit">
                    SUBMIT
                </Button>
            </Form>
        </>
    )
}

function Guestlist() {
    return (
        <div class="guestlist-page-container">
            <div
                className="d-flex flex-wrap justify-content-center"
                style={{ paddingTop: "5%", width: "100%" }}
            >
                <h1 className="mia-cursive">Join Our </h1>
                <h1 className="mia-rock-salt " style={{ marginLeft: "10px" }}>
                    Guestlist
                </h1>
            </div>
            <Row style={{ padding: "5%", margin: "0" }}>
                <Col
                    md={4}
                    xs={12}
                    // className="guestlist-box-image"
                >
                    <Image
                        src={miaAboutImg}
                        alt="Club Mia Image"
                        style={{
                            width: "100%",
                            border: "1px solid white",
                            borderRadius: "15px",
                            margin: "3%",
                            alignItems: "center",
                        }}
                        className="guestlist-image"
                    />
                </Col>
                <Col md={1} xs={12}></Col>
                <Col
                    md={7}
                    xs={12}
                    // className="guestlist-box"
                >
                    <Row className="text-center py-5">
                        <Col>
                            <GuestlistForm />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Guestlist
