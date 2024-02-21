import React, { useState } from 'react';
import axios from "axios";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // Validation for email, password, and confirmPassword
        if (!email || !password || !confirmPassword) {
            setError("Email, password, and confirm password are required.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8080/api/auth/register",
                {
                    email: email,
                    password: password,
                }
            );

            // Check if the registration was successful
            if (response.status === 201) {
                console.log(response.data.message);
                // Redirect or perform other actions upon successful registration
            } else {
                console.log("Unexpected response:", response);
                setError("Registration failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during registration:", error.message);
            setError("Registration failed. Please try again.");
        }
    };

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
                    {error && <p className="error-message">{error}</p>}
                    <form className="register-form flex flex-col items-center" onSubmit={handleFormSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="register-input font-cambria bg-white border border-gray-300 rounded-lg px-4 py-2 mb-4"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="register-button bg-yellow-400 text-white py-2 px-6 rounded-lg hover:bg-yellow-500 transition duration-300"
                        >
                            Register
                        </button>
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
