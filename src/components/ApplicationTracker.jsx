import React, { useState } from "react";

const ApplicationTracker = () => {
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
  });

  return (
    <div className="tracker-container">
      <h2>Job Tracker</h2>
      <div className="stats-grid">
        <div className="stat-box">
          <p>Applications</p>
          <span>{stats.applications}</span>
        </div>
        <div className="stat-box">
          <p>Interviews</p>
          <span>{stats.interviews}</span>
        </div>
        <div className="stat-box">
          <p>Offers</p>
          <span>{stats.offers}</span>
        </div>
      </div>
    </div>
  );
};

export default ApplicationTracker;
