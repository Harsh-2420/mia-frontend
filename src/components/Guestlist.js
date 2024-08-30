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
                <Row>
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
                                style={{
                                    marginBottom: "10%",
                                }}
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
                <Row>
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formMaleAttendees"
                        >
                            <Form.Control
                                style={{
                                    marginBottom: "10%",
                                }}
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
                                style={{
                                    marginBottom: "10%",
                                }}
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
                <Row>
                    <Col xs={6}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formDate"
                        >
                            <Form.Control
                                style={{
                                    marginBottom: "10%",
                                }}
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
                                style={{
                                    marginBottom: "10%",
                                }}
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
                <Row>
                    <Col xs={12}>
                        <Form.Group
                            className="guestlist-form-group"
                            controlId="formComments"
                        >
                            <Form.Control
                                style={{
                                    marginBottom: "10%",
                                }}
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
            <Row style={{ marginTop: "3%", paddingTop: "5%" }}>
                <h1>Join Our Guestlist</h1>
            </Row>
            <Row style={{ padding: "5%" }}>
                <Col
                    md={4}
                    // className="guestlist-box-image"
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
