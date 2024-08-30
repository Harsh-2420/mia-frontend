import React from "react"
import { Row, Col, Card, Button } from "react-bootstrap"
import eventImg from "../assets/Mia 7.JPG"
import eventImg2 from "../assets/Mia 8.JPG"
import eventImg3 from "../assets/Mia 9.JPG"
import eventImg4 from "../assets/Mia 10.JPG"
import eventImg5 from "../assets/Mia 11.JPG"
import eventImg6 from "../assets/Mia 12.JPG"
import eventImg7 from "../assets/Mia 13.JPG"
import eventImg8 from "../assets/Mia 14.JPG"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Events.css" // Ensure you have this CSS file

const events = [
    {
        id: 1,
        image: eventImg, // Replace with actual image paths
        title: "Event 1",
        description: "This is a brief description of Event 1.",
        date: "2024-09-01",
        cost: "$50",
    },
    {
        id: 2,
        image: eventImg2, // Replace with actual image paths
        title: "Event 2",
        description: "This is a brief description of Event 2.",
        date: "2024-10-15",
        cost: "$75",
    },
    {
        id: 3,
        image: eventImg3, // Replace with actual image paths
        title: "Event 3",
        description: "This is a brief description of Event 3.",
        date: "2024-11-20",
        cost: "$100",
    },
    {
        id: 4,
        image: eventImg4, // Replace with actual image paths
        title: "Event 4",
        description: "This is a brief description of Event 4.",
        date: "2024-12-05",
        cost: "$60",
    },
    {
        id: 5,
        image: eventImg5, // Replace with actual image paths
        title: "Event 5",
        description: "This is a brief description of Event 5.",
        date: "2025-01-10",
        cost: "$90",
    },
    {
        id: 6,
        image: eventImg6, // Replace with actual image paths
        title: "Event 6",
        description: "This is a brief description of Event 6.",
        date: "2025-02-14",
        cost: "$70",
    },
    {
        id: 7,
        image: eventImg7, // Replace with actual image paths
        title: "Event 7",
        description: "This is a brief description of Event 7.",
        date: "2025-03-20",
        cost: "$85",
    },
]
function Events() {
    return (
        <div className="events-page">
            <Row
                xs={1}
                sm={2}
                md={3}
                lg={3}
                className="g-4"
                style={{ margin: "5%" }}
            >
                {events.map((event) => (
                    <Col key={event.id}>
                        <Card
                            className="event-card"
                            style={{ margin: "5%", height: "100%" }}
                        >
                            <Card.Img variant="top" src={event.image} />
                            <Card.Body
                                style={{
                                    backgroundColor: "black",
                                    color: "white",
                                }}
                            >
                                <Card.Title
                                    className="mia-rock-salt"
                                    style={{
                                        margin: "5%",
                                        color: " rgb(183, 169, 90)",
                                    }}
                                >
                                    {event.title}
                                </Card.Title>
                                <Card.Text>{event.description}</Card.Text>
                                <Card.Text>Date: {event.date}</Card.Text>
                                <Card.Text>Cost: {event.cost}</Card.Text>

                                <div className="event-card-button">
                                    Learn More
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}
export default Events
