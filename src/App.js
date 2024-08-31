import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom"
import "./css/App.css"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Events from "./components/Events"
import About from "./components/About"
import Bottleservice from "./components/Bottleservice"
import Guestlist from "./components/Guestlist"
import Packages from "./components/Packages"
import logo from "./assets/mia-logo.png"
import { FaBars } from "react-icons/fa" // Import the icon library

import { Container, Row, Col } from "react-bootstrap"

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/guestlist" element={<Guestlist />} />
                    <Route path="/bottleservice" element={<Bottleservice />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    )
}

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4">
            <Container>
                <Row>
                    <Col md={4} className="text-center text-md-left">
                        <img
                            src={logo}
                            alt="Company Logo"
                            style={{ width: "150px" }}
                        />
                    </Col>
                    <Col md={4} className="text-center text-md-left">
                        <br></br>
                        <p>244 Adelaide St W, Toronto</p>
                    </Col>
                    <Col md={4} className="text-center text-md-left">
                        <br></br>
                        <a
                            href="https://www.google.com/maps/place/Club+Mia/@43.648357,-79.3889579,15z/data=!4m6!3m5!1s0x882b35784e767f29:0x4dfd9a75ec72064d!8m2!3d43.648357!4d-79.3889579!16s%2Fg%2F11y4_rfxvl?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white"
                        >
                            Google Maps
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="navbar">
            <div className="navbar-content">
                {/* Hamburger Menu for Mobile */}

                <div
                    className="hamburger"
                    onClick={toggleMenu}
                    style={{ color: "white", cursor: "pointer" }}
                >
                    <FaBars size={18} />
                </div>

                {/* Navigation Links */}
                <ul
                    className={`nav-links ${isMenuOpen ? "active" : ""}`}
                    style={{ marginLeft: "5%" }}
                >
                    <li>
                        <NavLink to="/" end className="nav-link">
                            HOME
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="nav-link">
                            ABOUT
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/guestlist" className="nav-link">
                            GUEST LIST
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bottleservice" className="nav-link">
                            BOTTLE SERVICE
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/packages" className="nav-link">
                            PACKAGES
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className="nav-link">
                            EVENTS
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="nav-link">
                            CONTACT
                        </NavLink>
                    </li>
                </ul>
                {/* Logo */}
                <img
                    src={logo}
                    alt="Club Logo"
                    className="navbar-logo"
                    style={{ marginRight: "2%" }}
                />
            </div>
        </nav>
    )
}

export default App
