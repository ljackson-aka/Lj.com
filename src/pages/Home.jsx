import React from "react";
import ApplicationTracker from "../components/ApplicationTracker";

const Home = () => {
  return (
    <div className="home-container">
      <ApplicationTracker />  {/* Tracker stays in the top-right */}
      <div className="home-content">
        <h1>Landrick Jackson | Full-Stack AWS Developer</h1>
        <p>Welcome to Lj.com</p>
      </div>
    </div>
  );
};

export default Home;
