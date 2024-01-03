import React, { useState, useEffect } from 'react';
import "./Dashboard.css"; // Import the CSS file
import PropTypes from "prop-types";
import jsonData from '../../resume_data.json';

const Dashboard = () => {
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [totalJobTitles, setTotalJobTitles] = useState(0);
  const [totalLocations, setTotalLocations] = useState(0);

  const totalapplicants = jsonData.length;

  useEffect(() => {
    // Fetch total job titles
    fetch('http://localhost/CodeCrafters/fetchJobTitles.php') // Replace with the correct URL
      .then(response => response.json())
      .then(data => {
        setTotalJobTitles(data.totalJobTitles || 0);
      })
      .catch(error => {
        console.error('Error fetching total job titles:', error);
      });

      fetch('http://localhost/CodeCrafters/fetchDistinctLocations.php') // Replace with the correct URL
      .then(response => response.json())
      .then(data => {
        setTotalLocations(data.totalLocations || 0);
      })
      .catch(error => {
        console.error('Error fetching total locations:', error);
      });
  }, []);

  return (
    <div className="dashboard-container" >
      <div className="dashboard-border">
        <div className="row">
          <div className="dashboard-card">
            <h5>
              <i className="fa fa-users" aria-hidden="true"></i >Total Applicants
            </h5>
            <p>{totalapplicants}</p>
          </div>
          <div className="dashboard-card">
            <h5>Total job Postings</h5>
            <p>{totalJobTitles}</p>
          </div>
        </div>
        <div className="row">
          <div className="dashboard-card">
            <h5><i className="fa fa-map-marker" aria-hidden="true"></i> Total locations</h5>
            <p>{totalLocations}</p>
          </div>
          <div className="dashboard-card">
            <h5>Services Offered</h5>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  resultsBoxHeight: PropTypes.func.isRequired,
};
export default Dashboard;
