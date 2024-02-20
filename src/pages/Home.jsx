import React from 'react';
import './LandingPage.css'; // Import the CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1 className="title">Amazon Sentiment Analyzer & Topic Explorer</h1>
        <p className="subtitle">“Unlock Insights from Customer Feedback”</p>
        <button className="btn-get-started">Get Started →</button>
      </header>
      <div className="decorative-elements">
        <div className="circle"></div>
        <div className="diagonal-line"></div>
        <div className="diagonal-line"></div>
        <div className="diagonal-line"></div>
        <div className="circle"></div>
      </div>
      <footer className="footer">
        <div className="footer-links">About Us  .  Resources  .  Support</div>
        <div className="footer-links">Privacy Policy | FAQs</div>
        <div className="footer-logo">/ShelfWizard.com</div>
      </footer>
    </div>
  );
}

export default LandingPage;
