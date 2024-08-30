import React from "react"
import { Carousel } from "react-bootstrap"
import { Row, Col, Card, Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import miaVid from "../assets/Mia 2.mp4"
import miaCarousel from "../assets/Mia 7.JPG"
import miaCarousel2 from "../assets/Mia 8.JPG"
import miaCarousel3 from "../assets/Mia 9.JPG"
import miaCarousel4 from "../assets/Mia 10.JPG"
import miaCarousel5 from "../assets/Mia 11.JPG"
import miaCarousel6 from "../assets/Mia 12.JPG"
import miaCarousel7 from "../assets/Mia 13.JPG"
import miaCarousel8 from "../assets/Mia 14.JPG"
import "../css/Carousel.css"
import "../css/Nav.css"
import "../css/Home.css"
import logo from "../assets/mia-logo-rec.png"

const events = [
    {
        id: 1,
        image: miaCarousel, // Replace with actual image paths
        title: "Event 1",
        description: "This is a brief description of Event 1.",
        date: "2024-09-01",
        cost: "$50",
    },
    {
        id: 2,
        image: miaCarousel3, // Replace with actual image paths
        title: "Event 2",
        description: "This is a brief description of Event 2.",
        date: "2024-10-15",
        cost: "$75",
    },
    {
        id: 3,
        image: miaCarousel2, // Replace with actual image paths
        title: "Event 3",
        description: "This is a brief description of Event 3.",
        date: "2024-11-20",
        cost: "$100",
    },
]
function Home() {
    return (
        <div>
            <Hero />
            <Events />
            <MiaCarousel />
        </div>
    )
}
function Events() {
    return (
        <section
            className="banner-card-section"
            style={{
                backgroundColor: "#1c1c1c",
                display: "flex",
                alignItems: "center",
                paddingBottom: "3%",
            }}
        >
            <Col md={3} className="text-center mb-4">
                <h2 className="mia-cursive" style={{ color: "white" }}>
                    check out our
                </h2>
                <h1 className="mia-rock-salt">EVENTS</h1>
            </Col>
            <Col md={9} className="mt-4">
                <Row xs={1} md={3}>
                    {events.map((event) => (
                        <Col key={event.id} mb={4}>
                            <Card
                                className="event-card"
                                style={{ width: "250px", margin: "15px" }}
                            >
                                <Card.Img variant="top" src={event.image} />
                                <Card.Body>
                                    <Card.Title>{event.title}</Card.Title>
                                    <Card.Text>{event.description}</Card.Text>
                                    <Card.Text>Date:  {event.date}</Card.Text>
                                    <Card.Text>Cost: {event.cost}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Col>
        </section>
    )
}

function Hero() {
    return (
        <section id="events" className="section events">
            <div className="mia-logo-overlay"></div>{" "}
            <div className="welcome">
                <div className="page-title mia-cursive">
                    Welcome To
                    <img
                        src={logo}
                        alt="Club Logo"
                        style={{ marginLeft: "2%" }}
                    />
                </div>
                <div className="video-container">
                    <video
                        autoPlay
                        playsInline
                        muted
                        loop
                        className="responsive-video"
                        style={{
                            border: "5px solid black", // Adjust the border width and color as needed
                            borderRadius: "15px", // Adjust the radius as needed
                        }}
                    >
                        <source src={miaVid} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="hero-page-button-container">
                    <button className="hero-page-button">Events</button>
                    <button className="hero-page-button">Booths</button>
                </div>
            </div>
        </section>
    )
}

function MiaCarousel() {
    return (
        <section className="section carousel-section">
            <Carousel
                indicators={false}
                controls={true}
                interval={null} // Disable automatic scrolling
                slide={true}
                items={8} // Set the total number of items (images)
                slidesPerView={1} // Display 1 image at a time
            >
                <Carousel.Item>
                    <div className="row">
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel}
                                alt="First slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel2}
                                alt="Second slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel3}
                                alt="Third slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel4}
                                alt="Fourth slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel5}
                                alt="First slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel6}
                                alt="Second slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel7}
                                alt="Third slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel8}
                                alt="Fourth slide"
                                style={{
                                    border: "5px solid black",
                                    borderRadius: "15px",
                                }}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home
