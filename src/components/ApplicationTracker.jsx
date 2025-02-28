import React, { useState, useEffect } from "react";

const API_URL = "https://0z8q7p5spb.execute-api.us-east-2.amazonaws.com/dev/tracker"; // Your API URL

const ApplicationTracker = () => {
  const [stats, setStats] = useState({
    applications: 0,
    interviews: 0,
    offers: 0,
  });
  const [editMode, setEditMode] = useState(false);
  const [inputStats, setInputStats] = useState(stats);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setStats(data);
        setInputStats(data);
      })
      .catch((error) => console.error("Error fetching tracker data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputStats({ ...inputStats, [name]: Number(value) });
  };

  const handleUpdate = () => {
    console.log("Updating tracker with:", inputStats);
    fetch(API_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "Lennox" // Must match the key in your Lambda function
      },
      body: JSON.stringify(inputStats),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Update successful:", data);
        // Refetch updated data:
        fetch(API_URL)
          .then((res) => res.json())
          .then((freshData) => {
            setStats(freshData);
          });
        setEditMode(false);
      })
      .catch((error) => console.error("Error updating tracker data:", error));
  };

  // This function prompts for a password before enabling edit mode.
  const handleEditClick = () => {
    if (editMode) {
      // If already in edit mode, simply turn it off.
      setEditMode(false);
    } else {
      // Prompt for a password.
      const password = prompt("Enter password to enable editing:");
      if (password === "Lennox23") { // Replace with your secure password.
        setEditMode(true);
      } else {
        alert("Incorrect password!");
      }
    }
  };

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
      <button onClick={handleEditClick}>
        {editMode ? "Cancel" : "Edit Stats"}
      </button>
      {editMode && (
        <div>
          <input
            type="number"
            name="applications"
            value={inputStats.applications}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="interviews"
            value={inputStats.interviews}
            onChange={handleInputChange}
          />
          <input
            type="number"
            name="offers"
            value={inputStats.offers}
            onChange={handleInputChange}
          />
          <button onClick={handleUpdate}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ApplicationTracker;
