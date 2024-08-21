import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Events.css"

function Events() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
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

                <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formPhone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        type="tel"
                        placeholder="Enter your phone number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                    />
                </Form.Group>

                <Form.Group controlId="formGuests">
                    <Form.Label>Number of Guests</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Number of guests"
                        name="guests"
                        value={formData.guests}
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

export default Events
