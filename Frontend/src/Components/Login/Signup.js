import React, { useState } from 'react';
import './LoginStyles.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState('');

  const buttonstyle = {
    padding: '10px 20px',
    marginTop: '20px',

  }

  const handleSignup = async () => {
    try {
      // Check for empty fields
      if (!username) {
        setSignupError('Please enter a username');
        return;
      }

      if (!password) {
        setSignupError('Please enter a password');
        return;
      }

      if (!email) {
        setSignupError('Please enter an email');
        return;
      }

      const response = await fetch('http://localhost/CodeCrafters/login/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }

      const data = await response.json();
      console.log(data); // Log the response from the server
      setSignupSuccess('Signup successful!');
      setSignupError('');
    } catch (error) {
      setSignupError(error.message || 'An error occurred during signup');
      setSignupSuccess('');
    }
  };

  return (
    <div>
      <h2 className='htag'>Signup</h2>
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
      <label htmlFor="email"></label>
      <input
        className='textboxes'
        type="email"
        id="email"
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button onClick={handleSignup} style={buttonstyle}>Signup</button>
      {signupError && <p style={{ color: 'red',fontSize: '14px',marginTop: '10px' }}>{signupError}</p>}
      {signupSuccess && <p style={{ color: 'green',fontSize: '14px',marginTop: '10px' }}>{signupSuccess}</p>}
    </div>
  );
};

export default Signup;
