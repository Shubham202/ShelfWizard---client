import React from 'react';

const LandingPage = () => {
  const style = {
    fontFamily: 'Cambria, sans-serif' // Set Cambria as the font-family
  };

  return (
    <div className="landing-page bg-gray-100 min-h-screen flex flex-col justify-between" style={style}>
      <nav className="bg-gray-800 text-white py-4">
        <ul className="flex justify-center">
          <li className="mx-4"><a href="#" className="hover:text-yellow-400">Home</a></li>
          <li className="mx-4"><a href="#" className="hover:text-yellow-400">Features</a></li>
          <li className="mx-4"><a href="#" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>
      <header className="header flex flex-col items-center justify-center flex-grow">
        <h1 className="title font-bold text-4xl text-center mb-4">Shelf Wizard</h1>
        <p className="subtitle text-lg text-center mb-8">“Revolutionizing Retail Shelf Space Optimization”</p>
        <button className="btn-get-started bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">Get Started</button>
      </header>
      <footer className="footer bg-gray-800 text-white p-4 text-center">
        <div className="footer-logo">2024 @ ShelfWizard.com</div>
      </footer>
    </div>
  );
}

export default LandingPage;
