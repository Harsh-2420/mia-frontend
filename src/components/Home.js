import React from "react"

import { Row, Col, Card, Carousel } from "react-bootstrap"
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
import { DownloadEventsManifest, BUCKET_URL } from "../common/EventUtils"

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
    const [events, setEvents] = React.useState([])

    React.useEffect(() => {
        async function FetchEvents() {
            let downloadedEvents = []
            const manifest = await DownloadEventsManifest()
            if ("events" in manifest) {
                downloadedEvents = manifest["events"]
            }

            setEvents(downloadedEvents)
        }

        FetchEvents()
    }, [])
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
            <Row>
                <Col md={3} xs={12} className="text-center mb-4">
                    <h2 className="mia-cursive" style={{ color: "white" }}>
                        check out our
                    </h2>
                    <h1 className="mia-rock-salt">EVENTS</h1>
                </Col>
                <Col md={9} xs={12} className="mt-4">
                    <Row xs={1} md={3}>
                        {events.map((event) => (
                            <Col key={event.id} mb={4}>
                                <Card
                                    className="event-card"
                                    style={{ margin: "5%", height: "90%" }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={`${BUCKET_URL}/${event.image}`}
                                        style={{ height: "40%" }}
                                    />
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
                                        <Card.Text>{event.desc}</Card.Text>
                                        <Card.Text>
                                            Date: {event.time}
                                        </Card.Text>
                                        <Card.Text>Cost: $50</Card.Text>
                                        <div
                                            className="hero-page-button-container"
                                            style={{ marginLeft: "15px" }}
                                        >
                                            <button
                                                className="hero-page-button"
                                                style={{ fontSize: "14px" }}
                                            >
                                                Buy Tickets
                                            </button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </section>
    )
}
function Hero() {
    return (
        <section id="events" className="section events">
            <div className="mia-logo-overlay"></div>{" "}
            <div className="welcome">
                <div className="page-title mia-cursive">
                    welcome to
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
        <section className="carousel-section">
            <div className="carousel-overlay"></div>
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
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel}
                                alt="First slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel2}
                                alt="Second slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel3}
                                alt="Third slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel4}
                                alt="Fourth slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row">
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel5}
                                alt="First slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel6}
                                alt="Second slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel7}
                                alt="Third slide"
                            />
                        </div>
                        <div className="col-3">
                            <img
                                className="d-block w-100 custom-carousel-item"
                                src={miaCarousel8}
                                alt="Fourth slide"
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home
