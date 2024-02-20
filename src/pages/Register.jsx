import React from 'react';
import './RegisterPage.css'; // Import the CSS file for styling

const RegisterPage = () => {
  return (
    <div className="register-page">
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
            Register for ShelfWizard
          </h1>
          <form className="register-form">
            <input type="email" placeholder="Email" className="register-input" />
            <input type="password" placeholder="Password" className="register-input" />
            <input type="password" placeholder="Confirm Password" className="register-input" />
            <button type="submit" className="register-button">Register</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default RegisterPage;
