import React from "react";
import FloorPlan from "../assets/floorplan.jpg";
import MiaMenu from "../assets/bottle_service.png";
import "../css/Packages.css"; // Ensure this path is correct
import { useNavigate } from "react-router-dom"; // Updated import

const Packages = () => {
  const navigate = useNavigate(); // Updated hook

  const handleClick = (path) => () => {
    navigate(path); // Use navigate with the provided path
  };

  return (
    <div
      style={{
        backgroundColor: "#1c1c1c",
        padding: "5% 2%",
        paddingTop: "10%", // Extra padding at the top
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Floor Plan Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack items vertically
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "2rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
          className="packages-page"
        >
          <h2 className="mia-cursive">Check out our</h2>
          <h1 className="mia-rock-salt">Floor Plan</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <img
            src={FloorPlan}
            alt="Floor Plan"
            className="floor-plan-img" // Add class here
          />
        </div>
      </div>

      {/* Menu Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column", // Stack items vertically
          alignItems: "center",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "2rem",
          padding: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          <h2 className="mia-cursive">Check out our</h2>
          <h1 className="mia-rock-salt">Menu</h1>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <img
            src={MiaMenu}
            alt="Menu"
            style={{
              width: "100%",
              maxWidth: "300px",
              height: "auto",
            }}
          />
        </div>
      </div>

      {/* Email Button Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: "1rem",
        }}
      >
        <button className="packages-button" onClick={handleClick("/contact")}>
          Email Us
        </button>
      </div>
    </div>
  );
};

export default Packages;
