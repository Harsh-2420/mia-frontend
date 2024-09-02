import React, { useState, useEffect } from "react"
import { Row, Col, Container, Carousel } from "react-bootstrap"
import {
    FaInstagram,
    FaEnvelope,
    FaPhone,
    FaChevronDown,
    FaChevronUp,
} from "react-icons/fa"
import { useNavigate } from "react-router-dom" // Updated import

import miaAboutImg from "../assets/Mia 8.JPG"
import miaCarousel from "../assets/Mia 7.JPG"
import miaCarousel2 from "../assets/Mia 8.JPG"
import miaCarousel3 from "../assets/Mia 9.JPG"
import miaCarousel4 from "../assets/Mia 10.JPG"
import miaCarousel5 from "../assets/Mia 11.JPG"
import miaCarousel6 from "../assets/Mia 12.JPG"
import miaCarousel7 from "../assets/Mia 13.JPG"
import miaCarousel8 from "../assets/Mia 14.JPG"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/About.css"

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

function About() {
    const [openLocation, setOpenLocation] = useState(false)
    const [openContact, setOpenContact] = useState(false)
    const isMobile = useIsMobile() // use the hook to check if it's mobile

    const navigate = useNavigate() // Updated hook

    const handleClick = (path) => () => {
        navigate(path) // Use navigate with the provided path
    }

    return (
        <div class="about-page-container">
            <Container>
                <Row className="py-3">
                    <Col className="about-contact-box">
                        <Row className="text-center py-5">
                            <Col>
                                <h3 className="mb-4 mia-cursive">
                                    Ultimate{" "}
                                    <span className="mia-rock-salt">
                                        Nightlife Destination
                                    </span>
                                </h3>
                                <p
                                    className="lead mb-4"
                                    style={{ color: "white" }}
                                >
                                    Located in the heart of downtown Toronto,
                                    Club Mia is where elegance meets excitement.
                                    Our venue is designed to cater to those who
                                    seek a premium atmosphere with high-energy,
                                    where every night is a celebration and every
                                    guest is treated like a VIP.
                                </p>
                                <p className="mb-4" style={{ color: "white" }}>
                                    Step inside and discover why we are the talk
                                    of Toronto’s nightlife scene. With
                                    custom-designed lights and the highest
                                    quality music systems, every detail at Club
                                    Mia is crafted to offer an unforgettable
                                    experience.
                                </p>
                                <span
                                    className="d-block mb-4"
                                    style={{ color: "white" }}
                                >
                                    Come be a part of Club Mia
                                </span>

                                <div className="packages-button-container">
                                    <button
                                        className="packages-button"
                                        onClick={handleClick("/contact")}
                                    >
                                        Connect with Us
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            {isMobile ? <MiaCarouselPhone /> : <MiaCarousel />}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

function MiaCarousel() {
    return (
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
    )
}
function MiaCarouselPhone() {
    return (
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
                    className=" custom-carousel-phone-item"
                    src={miaCarousel}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className=" custom-carousel-phone-item"
                    src={miaCarousel5}
                    alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    )
}

export default About
