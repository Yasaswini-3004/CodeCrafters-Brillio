import './JobDesc.css';
import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function JobDesc() {
  const location = useLocation();
  const selectedJob = location.state.selectedJob;

  if (!selectedJob) {
    // Handle the case where selectedJob is not available
    return <div>Error: Job data not found</div>;
  }

  // Use the selectedJob data to populate the JobDesc component
  const { jobTitle, jobkey, location: jobLocation, jobSummary,responsibilities,requiredSkills,tags} = selectedJob;
  const [similarJobs, setSimilarJobs] = useState([]);

  useEffect(() => {
    // Fetch similar jobs from the server when the component mounts
    fetchSimilarJobs();
  }, []);

  const fetchSimilarJobs = async () => {
    try {
      const response = await fetch('http://localhost/setup.php'); // Update the URL as needed
      if (response.ok) {
        const data = await response.json();
        // Extract any three job listings from the data fetched
        const extractedJobs = data.slice(2, 7).map(job => ({
          jobTitle: job.jobTitle,
          jobId: job.jobkey,
          jobLocation: job.location
        }));
        setSimilarJobs(extractedJobs);
      } else {
        console.error('Failed to fetch similar jobs');
      }
    } catch (error) {
      console.error('Error fetching similar jobs:', error);
    }
  };

  return (
    <div className="jd_container">
      <div className="jd_top-section">
        <h1 className='jd_h1' style={{ fontFamily: 'Outfit'}}>{jobTitle}</h1>
        <p style={{ fontFamily: 'Outfit'}}>{jobLocation}</p>
        <p style={{ fontFamily: 'Outfit'}}>Job ID: {jobkey}</p>
        <div>
            <FontAwesomeIcon icon={faLinkedin} className='social-icons'/>
            <FontAwesomeIcon icon={faInstagram}  className='social-icons'/>
            <FontAwesomeIcon icon={faFacebook}  className='social-icons'/>
            <FontAwesomeIcon icon={faTwitter}  className='social-icons'/>
        </div>
      </div>
      <div className="jd_main-section">
        <div className="jd_left-column">
          <h1 style={{ fontFamily: 'Outfit'}}>{jobTitle}</h1>
          <h3 style={{ fontFamily: 'Outfit'}}>About Brillio</h3>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px',textAlign: 'justify',marginBottom: '25px'}}>Brillio is the partner of choice for many Fortune 1000 companies seeking to turn disruption into a competitive advantage through innovative digital adoption. Backed by Bain Capital, Brillio is one of the fastest growing digital technology service providers. We help clients harness the transformative potential of the four superpowers of technology - cloud computing, internet of things (IoT), artificial intelligence (AI), and mobility. Born digital in 2014, we apply Customer Experience Solutions, Data Analytics and AI, Digital Infrastructure and Security, and Platform and Product Engineering expertise to help clients quickly innovate for growth, create digital products, build service platforms, and drive smarter, data-driven performance. With delivery locations across United States, Romania, Canada, Mexico, and India, our growing global workforce of over 6,000 Brillians blends the latest technology and design thinking with digital fluency to solve complex business problems and drive competitive differentiation for our clients. Brillio was awarded ‘Great Place to Work’ in 2021 and 2022</p>
          <h3 style={{ fontFamily: 'Outfit'}}>Job Summary</h3>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px',textAlign: 'justify',marginBottom: '25px'}}>{jobSummary}</p>
          <h3 style={{ fontFamily: 'Outfit'}}>Job Responsibilities</h3>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px',textAlign: 'justify',marginBottom: '25px'}}>{responsibilities}</p>
          <h3 style={{ fontFamily: 'Outfit'}}>Required Skills</h3>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px',textAlign: 'justify',marginBottom: '25px'}}>{requiredSkills}</p>
          <h3 style={{ fontFamily: 'Outfit'}}>Tags</h3>
          <p style={{ fontFamily: 'Outfit', fontSize: '15px',textAlign: 'justify',marginBottom: '25px'}}>{tags}</p>
          <div className="tags">
            {/* Tags here */}
          </div>
        </div>
        <div className="jd_right-column">
          <div className="jd_similar-jobs">
          <h2 style={{ fontFamily: 'Outfit',color:'#5dd075'}}>Similar Jobs</h2>
          {similarJobs.map((job, index) => (
            <div key={index} className="jd_job-listing">
              <h4 style={{ fontFamily: 'Outfit'}}>{job.jobTitle} - {job.jobId}</h4>
              <p style={{ fontFamily: 'Outfit'}}>{job.jobLocation}</p>
              {index !== similarJobs.length - 1 && <hr />}
            </div>
          ))}
            
            {/* Three more job listings similarly */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDesc;
