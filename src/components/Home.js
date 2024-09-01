import React, { useState, useEffect } from "react"
import { Row, Col, Card, Carousel, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom" // If you are using react-router for routing

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

function useIsMobile() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return isMobile
}

function Home() {
    const isMobile = useIsMobile() // use the hook to check if it's mobile

    return (
        <div>
            <Hero />
            <Events />
            {isMobile ? <MiaCarouselPhone /> : <MiaCarousel />}
        </div>
    )
}

function Events() {
    const [events, setEvents] = React.useState([])
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "..."
        }
        return text
    }

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
            <Container>
                <div className="d-flex flex-column">
                    <div className="text-center my-4 w-100">
                        <h2 className="mia-cursive" style={{ color: "white" }}>
                            check out our
                        </h2>
                        <h1 className="mia-rock-salt">EVENTS</h1>
                    </div>
                    <div className="d-flex gap-4 align-content-stretch flex-wrap justify-content-center">
                        {events.map((event) => (
                            <div key={event.id} mb={4}>
                                <Card
                                    className="event-card"
                                    style={{ height: "100%", width: "400px" }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={`${BUCKET_URL}/${event.image}`}
                                        style={{ height: "50%" }}
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
                                                color: "rgb(183, 169, 90)",
                                            }}
                                        >
                                            {event.title}
                                        </Card.Title>
                                        <Card.Text>
                                            {truncateText(event.desc)}
                                        </Card.Text>
                                        <Card.Text>
                                            Date: {event.time}
                                        </Card.Text>
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
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
function Hero() {
    const navigate = useNavigate() // Updated hook

    const handleClick = (path) => () => {
        navigate(path) // Use navigate with the provided path
    }
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
                    <button
                        className="hero-page-button"
                        onClick={handleClick("/events")}
                    >
                        Events
                    </button>
                    <button
                        className="hero-page-button"
                        onClick={handleClick("/bottleservice")}
                    >
                        Booths
                    </button>
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
function MiaCarouselPhone() {
    return (
        <section className="carousel-phone-section">
            <div className="carousel-phone-overlay"></div>
            <Carousel
                indicators={false}
                controls={true}
                interval={null}
                slide={true}
                items={8}
                slidesPerView={1}
            >
                <Carousel.Item>
                    <img
                        className="d-block custom-carousel-phone-item"
                        src={miaCarousel}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block custom-carousel-phone-item"
                        src={miaCarousel5}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default Home
