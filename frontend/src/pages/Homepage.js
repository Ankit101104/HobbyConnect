import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Homepage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const backgroundImageUrl =
    "https://images.hdqwalls.com/download/planet-dark-black-moon-4k-fj-1920x1080.jpg";

  const pageStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "'Arial', sans-serif",
    position: "relative",
  };

  const buttonStyle = {
    position: "absolute",
    top: "20px",
    left: "20px",
    padding: "10px 20px",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "bold",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease",
  };

  return (
    <div style={pageStyle}>
      <button
        style={buttonStyle}
        onClick={() => navigate(-1)} // Navigate back to the previous page
      >
        Back
      </button>
      <h1>Welcome to HobbyConnect!</h1>
      <h3>
        <p>A social platform for skill exchange and collaboration.</p>
      </h3>
    </div>
  );
};

export default Homepage;
