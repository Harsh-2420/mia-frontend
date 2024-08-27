import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Guestlist.css"

function Bottleservice() {
    const [formData, setFormData] = useState({
        name: "",
        people: "",
        date: "",
        time: "",
        contact: "",
        comments: "",
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log("Form submitted:", formData)
    }

    return (
        <div className="events-page">
            <h3>Elevate Your Experience with a Booth</h3>
            <p style={{ margin: "5%" }}>
                Looking to enjoy the night in style, a booth at Mia, ensures you
                have a front-row seat to all the action. Our booths offer the
                perfect blend of comfort, privacy, and exclusivity, making them
                the ideal choice for those who want to experience the best of
                Toronto nightlife.
                <br></br>
                <br></br>
                To reserve your booth please fill out this form and one of the
                team members will reach out to you.
            </p>
            <Form onSubmit={handleSubmit} className="form-container">
                <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formPeople">
                    <Form.Label>Number of People</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter number of people"
                        name="people"
                        value={formData.people}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formDate">
                    <Form.Label>Event Date</Form.Label>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formTime">
                    <Form.Label>Event Time</Form.Label>
                    <Form.Control
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formContact">
                    <Form.Label>Contact Information</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your contact information"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formComments">
                    <Form.Label>Comments</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Additional comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mt-3">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Bottleservice
