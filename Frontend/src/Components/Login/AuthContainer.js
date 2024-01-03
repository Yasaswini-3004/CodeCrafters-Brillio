// AuthContainer.jsx
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';
import Jobdetails from '../ViewJobs/Jobdetails';
import JobDesc from '../ViewJobs/JobDesc';
import Form from '../JobUpload/Form';
import UploadFiles from '../ResumeUpload/UploadFiles';
import './LoginStyles.css';


const AuthContainer = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  
  // const handleLogin = async (username, password) => {
  //   try {
  //     // Your login logic here using fetch or any method
  //     // Simulating successful login for example purposes
  //     setIsLoggedIn(true);
  //   } catch (error) {
  //     console.error(error);
  //     // Handle login failure here
  //   }
  // };

  const handleLogin = async (username, password) => {
    try {
      if (!username && !password) {
        setLoginError('Enter username and password');
        setLoginSuccess('');
        setIsLoggedIn(true);
        return;
      }

      if (!username) {
        setLoginError('Enter username');
        setLoginSuccess('');
        return;
      }

      if (!password) {
        setLoginError('Enter password');
        setLoginSuccess('');
        return;
      }

      const response = await fetch('http://localhost/CodeCrafters/login/login.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log(data); // Log the response from the server

      if (data.status === 'success') {
        // Both username and password are correct, login successful
        setLoginSuccess('Login successful!');
        setIsLoggedIn(true); // Set the login state to true upon successful login
      } else if (data.status === 'failure') {
        // Login failed due to incorrect username or password
        setLoginError('Invalid username or password');
        setLoginSuccess('');
      } else {
        // Handle other cases if necessary
        setLoginError('Invalid username or password');
        setLoginSuccess('');
      }
    } catch (error) {
      setLoginError(error.message || 'An error occurred during login');
      setLoginSuccess('');
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <div className="tab">
          
          <button
            className={`tab-button ${activeTab === 'login' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>

          <button
            className={`tab-button ${activeTab === 'signup' ? 'active-tab' : ''}`}
            onClick={() => setActiveTab('signup')}
          >
            Signup
          </button>
        </div>
        <div className="container">
          {activeTab === 'login' ? <Login handleLogin={handleLogin} /> : <Signup />}
        </div>
        {loginError && <p style={{ color: 'red',fontSize: '14px',marginTop: '10px' }}>{loginError}</p>}
        {loginSuccess && <p style={{ color: 'green',fontSize: '14px',marginTop: '10px' }}>{loginSuccess}</p>}
      </div>
    );
  }

return (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Jobdetails" element={<Jobdetails />} />
      <Route path="/ViewJobs/JobDesc/:jobTitle" element={<JobDesc />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/UploadFiles" element={<UploadFiles />} />
    </Routes>
  </>
);
}
AuthContainer.propTypes = {
  onLogin: PropTypes.func.isRequired, // Define onLogin as a required function prop
};
export default AuthContainer;
