import React from 'react';

const RegisterPage = () => {
  return (
    <div className="register-page bg-gray-100 min-h-screen flex flex-col justify-between">
      <header className="header">
        <div className="navbar-background bg-gray-800 text-white py-4">
          <nav className="nav">
            <a href="/" className="logo hover:text-yellow-400">
              ShelfWizard
            </a>
          </nav>
        </div>
        <div className="hero-content flex flex-col items-center justify-center flex-grow">
          <h1 className="hero-text font-bold text-4xl text-center mb-4">Register for ShelfWizard</h1>
          <form className="register-form flex flex-col items-center">
            <input type="email" placeholder="Email" className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4" />
            <input type="password" placeholder="Password" className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4" />
            <input type="password" placeholder="Confirm Password" className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4" />
            <button type="submit" className="register-button bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">Register</button>
          </form>
        </div>
      </header>
      <footer className="footer bg-gray-800 text-white p-4 text-center">
        <div className="footer-logo">2024 @ ShelfWizard.com</div>
      </footer>
    </div>
  );
}

export default RegisterPage;
