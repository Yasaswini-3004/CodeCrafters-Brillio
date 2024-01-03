import React, { useState } from 'react';
import MyProfile from './MyProfile.jsx';
import { useNavigate } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; 
import './LoginStyles.css';

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState('');
  console.log('Login component rendered');

  const onSubmit = () => {
    // Call handleLogin function with username and password
    handleLogin(username, password);
  };

  const buttonstyle = {
    padding: '10px 20px',
    marginTop: '20px',

  }

  // const handleLogin = async () => {
  //   try {
  //     if (!username && !password) { 
  //       setLoginError('Enter username and password');
  //       setLoginSuccess('');
  //       return;
  //     }

  //     if (!username) {
  //       setLoginError('Enter username');
  //       setLoginSuccess('');  
  //       return;
  //     }

  //     if (!password) {
  //       setLoginError('Enter password');
  //       setLoginSuccess('');
  //       return;
  //     }

  //     const response = await fetch('http://localhost/login/login.php', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ username, password }),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Login failed');
  //     }

  //     const data = await response.json();
  //     console.log(data); // Log the response from the server

  //     if (data.status === 'success') {
  //       // Both username and password are correct, login successful
  //       setLoginSuccess('Login successful!');
        
  //     } else if (data.status === 'failure') {
  //       // Login failed due to incorrect username or password
  //       setLoginError('Invalid username or password');
  //       setLoginSuccess('');
  //     } else {
  //       // Handle other cases if necessary
  //       setLoginError('Invalid username or password');
  //       setLoginSuccess('');
  //     }
  //   } catch (error) {
  //     setLoginError(error.message || 'An error occurred during login');
  //     setLoginSuccess('');
  //   }
  // };

  return (
    <div>
      <h2 className='htag'>Login</h2>
      <label htmlFor="username"></label>
      <input
         className='textboxes'
        type="text"
        placeholder='Enter Username'
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />

      <label htmlFor="password"></label>
      <input
        className='textboxes'
        type="password"
        placeholder='Enter Password'
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button onClick={onSubmit} style={buttonstyle}>Login</button>
      {loginError && <p style={{ color: 'red',fontSize: '14px',marginTop: '10px'}}>{loginError}</p>}
      {loginSuccess && <p style={{ color: 'green',fontSize: '14px',marginTop: '10px' }}>{loginSuccess}</p>}
    </div>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired, // Define handleLogin as a required function prop
  onSubmit: PropTypes.func.isRequired, // Define onLogin as a required function prop
};
export default Login;
