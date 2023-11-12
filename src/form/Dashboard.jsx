import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({ username: '', email: '' });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/getUserInfo/2');

        if (response.ok) {
          const data = await response.json();
          setUserInfo(data);
        } else {
          alert("There was an issue with the registration.");
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>Username: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
      <button>Update Info</button> 
      <button>Logout</button>
    </div>
  );
};

export default Dashboard;
