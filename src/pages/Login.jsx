import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; // Import the CSS file for styling

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log(username, password);

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        username,
        password
      });

      console.log(response); // Handle the response as needed
    } catch (error) {
      setError(error); // Set error message if login fails
    }
  };

  return (
    <div className="login-page">
      <header className="header">
        <div className="navbar-background">
          <nav className="nav">
            <a href="/" className="logo">
              ShelfWizard
            </a>
          </nav>
        </div>
        <div className="hero-content">
          <h1 className="hero-text">
            Login to ShelfWizard
          </h1>
          {error && <p className="error-message">{error}</p>}
          <form className="login-form" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="login-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login-button">Login</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default LoginPage;
