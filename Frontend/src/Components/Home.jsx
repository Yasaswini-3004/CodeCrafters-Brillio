import React, { useState, useEffect,useRef } from 'react';
import Responsivecards from "./Cards/Cards_a.js";
import Search from "./Search_bar/Search.js";
import Calendar1 from "./Calendar/Calender.js";
import Dashboard from './Cards/Dashboard.jsx';
import './Home.css';
import emailjs from '@emailjs/browser';
import jsonData from '../resume_data.json';
import PropTypes from 'prop-types';
import HighMatchCandidates from './Cards/HighMatchCandidates.js';

const Home = () => {
  const [highMatchCandidatesHeight, setHighMatchCandidatesHeight] = useState(0);
  const [marginTop, setMarginTop] = useState(20); // Initial margin-top value

  useEffect(() => {
    const highMatchCandidatesElement = document.querySelector('.candidates-high-match');
    if (highMatchCandidatesElement) {
      const height = highMatchCandidatesElement.getBoundingClientRect().height;
      setHighMatchCandidatesHeight(height);
    }
  }, []);

  

  return (
    <div className="home-container">
      <div className="home-content">
        <Responsivecards />
      </div>
      <div className="home-content calendar-container" style={{ height: `${highMatchCandidatesHeight}px` }}>
      <div className="calendar-dashboard-wrapper" >
        <Calendar1 />
        <Dashboard />
      </div>
    </div>
    </div>
  );
};

export default Home;

