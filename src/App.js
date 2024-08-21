import React, { useEffect } from "react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import "./css/App.css"
import Home from "./components/Home"
import Contact from "./components/Contact"
import Events from "./components/Events"
import About from "./components/About"
import logo from "./assets/mia-logo.png"

function App() {
    useEffect(() => {
        const handleScroll = () => {
            const logo = document.querySelector(".navbar-logo")
            if (window.scrollY > 50) {
                // Change 50 to the scroll position at which you want the logo to shrink
                logo.style.maxHeight = "50px"
            } else {
                logo.style.maxHeight = "120px" // Initial size of the logo
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <nav className="navbar">
                    <div className="navbar-content">
                        <ul className="nav-links" style={{ marginLeft: "5%" }}>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/events">EVENTS</Link>
                            </li>
                            <li>
                                <Link to="/contact">CONTACT</Link>
                            </li>
                        </ul>
                        <img
                            src={logo}
                            alt="Club Logo"
                            className="navbar-logo"
                            style={{ marginRight: "2%" }}
                        />
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
