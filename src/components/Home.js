import React from "react"
import { Carousel } from "react-bootstrap"
import { FaInstagram, FaEnvelope } from "react-icons/fa"
import "bootstrap/dist/css/bootstrap.min.css"
import miaVid from "../assets/Mia 2.mp4"
import miaCarousel from "../assets/Mia 7.JPG"
import miaCarousel2 from "../assets/Mia 8.JPG"
import miaCarousel3 from "../assets/Mia 9.JPG"
import "../css/Home.css"
import "../css/Carousel.css"
import "../css/Nav.css"
import logo from "../assets/mia-logo.png"

function Home() {
    return (
        <div>
            <section id="events" className="section events">
                <div className="mia-logo-overlay"></div>{" "}
                <div className="video-container">
                    <img
                        src={logo}
                        alt="Club Logo"
                        // className="navbar-logo"
                        style={{ marginRight: "2%" }}
                    />
                </div>
            </section>
            <section id="events" className="section events">
                <div className="video-overlay"></div>{" "}
                {/* Add the overlay element */}
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
            </section>

            {/* Carousel Section */}
            <section className="section carousel-section">
                <div className="carousel-container">
                    <Carousel
                        indicators={false}
                        controls={true}
                        interval={2000}
                    >
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel}
                                alt="First slide"
                                style={{
                                    border: "5px solid black", // Adjust the border width and color as needed
                                    borderRadius: "15px", // Adjust the radius as needed
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel2}
                                alt="Second slide"
                                style={{
                                    border: "5px solid black", // Adjust the border width and color as needed
                                    borderRadius: "15px", // Adjust the radius as needed
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 custom-carousel-img"
                                src={miaCarousel3}
                                alt="Third slide"
                                style={{
                                    border: "5px solid black", // Adjust the border width and color as needed
                                    borderRadius: "15px", // Adjust the radius as needed
                                }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

            {/* Social Media Section */}
            <section id="contact" className="section contact"></section>
        </div>
    )
}

export default Home
