import React from "react";
import ApplicationTracker from "../components/ApplicationTracker";

const Home = () => {
  return (
    <div className="home-container">
      <ApplicationTracker />  {/* Tracker stays in the top-right */}
      <div className="home-content">
        <h1>Welcome to My Job Search Tracker</h1>
        <p>Track your job applications, interviews, and offers in one place.</p>
      </div>
    </div>
  );
};

export default Home;
