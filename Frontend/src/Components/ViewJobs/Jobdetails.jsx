import React, { useState, useEffect } from 'react';
import './Jobdetails.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Jobdetails = () => {
  const [jobData, setJobData] = useState([]);
  const navigate = useNavigate();

  const handleButtonClick = (jobkey) => {
    const selectedJob = jobData.find(job => job.jobkey === jobkey);
    if (selectedJob) {
      navigate(`/ViewJobs/JobDesc/${jobkey}`, { state: { selectedJob } });
    }
  };
  

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch('http://localhost/CodeCrafters/setup.php');
        if (response.ok) {
          const data = await response.json();
          setJobData(data); // Set the fetched job data to state
        } else {
          throw new Error('Failed to fetch job details');
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        // Handle error if needed
      }
    };

    fetchJobDetails();
  }, []);

  return (
    <div className="career-cards">
      {jobData.map((job, index) => (
        <div key={index} className="job-card">
          <h2 style={{ fontFamily: 'Outfit',textAlign:'left'}}>{job.jobTitle}</h2>
          <h5 style={{ fontFamily: 'Outfit'}}>ID: {job.jobkey}</h5>
          <p style={{ fontFamily: 'Outfit'}}> Location: {job.location}</p>
          <button className="view-more-btn" onClick={() => handleButtonClick(job.jobkey)}>
            <img src="https://careers.brillio.com/wp-content/themes/brilliotheme/assets/right-arrow.png" alt="View More" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Jobdetails;
