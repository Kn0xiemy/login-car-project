import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Registration = () => {
  const [userData, setUserData] = useState({ username: '', email: '', password: '' });

  const handleRegister = async () => {
    try {
      
      const response = await fetch('http://127.0.0.1:8000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        history.push('/Login');
      } else {
        alert("There was an issue with the registration.");
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUserData({ ...userData, password: e.target.value })}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Registration;
