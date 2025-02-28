import React from "react";
import ApplicationTracker from "../components/ApplicationTracker";

const Home = () => {
  return (
    <div className="home-container">
      <ApplicationTracker /> {/* Stays in the top-right */}
      
      <div className="header">
        <h1>Landrick Jackson | Full-Stack AWS Developer</h1>
      </div>

      <div className="home-content">
        <p>Welcome to Lj.com</p>
      </div>
    </div>
  );
};

export default Home;
