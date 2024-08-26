import React from "react"
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

function App() {
    return (
        <Router>
            <div className="App">
                {/* Navbar */}
                <nav className="navbar">
                    <div className="navbar-content">
                        <ul className="nav-links" style={{ marginLeft: "5%" }}>
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
                                <NavLink
                                    to="/bottleservice"
                                    className="nav-link"
                                >
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
                    <Route path="/guestlist" element={<Guestlist />} />
                    <Route path="/bottleservice" element={<Bottleservice />} />
                    <Route path="/packages" element={<Packages />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
