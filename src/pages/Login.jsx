import { useState } from "react";
import axios from "axios";
import "./LoginPage.css"; // Import the CSS file for styling

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleFormSubmit = async event => {
		event.preventDefault();

		try {
			const response = await axios.post(
				"http://localhost:8080/api/auth/login",
				{
					email: email,
					password: password
				}
			);

			// Check if the registration was successful
			if (response.status === 200) {
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
					<h1 className="hero-text">Login for ShelfWizard</h1>
					{error && <p className="error-message">{error}</p>}
					<form className="login-form" onSubmit={handleFormSubmit}>
						<input
							type="text"
							placeholder="Email"
							className="login-input"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
						<input
							type="password"
							placeholder="Password"
							className="login-input"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
						<button type="submit" className="login-button">
							Register
						</button>
					</form>
				</div>
			</header>
		</div>
	);
};

export default LoginPage;
