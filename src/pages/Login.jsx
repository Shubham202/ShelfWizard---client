import { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; // Import the CSS file for styling

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Validation for email and password
        if (!email || !password) {
            setError("Email and password are required.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/login",
                {
                    email: email,
                    password: password,
                }
            );

            // Check if the login was successful
            if (response.status === 200) {
                console.log(response.data.message);
                // Redirect or perform other actions upon successful login
            } else {
                console.log("Unexpected response:", response);
                setError("Login failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during login:", error.message);
            setError("Login failed. Please try again.");
        }
    };

    return (
        <div className="login-page bg-gray-100 min-h-screen flex flex-col justify-between">
            <header className="header">
                <div className="navbar-background bg-gray-800 text-white py-4">
                    <nav className="nav flex justify-center">
                        <a href="/" className="logo hover:text-yellow-400">
                            ShelfWizard
                        </a>
                    </nav>
                </div>
                <div className="hero-content flex flex-col items-center justify-center flex-grow">
                    <h1 className="hero-text font-bold text-4xl text-center mb-4">Login for ShelfWizard</h1>
                    {error && <p className="error-message">{error}</p>}
                    <form className="login-form" onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className="login-button bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
                            Login
                        </button>
                    </form>
                </div>
            </header>
            <footer className="footer bg-gray-800 text-white p-4 text-center">
                <div className="footer-logo">2024 @ ShelfWizard.com</div>
            </footer>
        </div>
    );
};

export default LoginPage;
