import React, { useState, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthContext.jsx'; // Adjust the import based on your context path

export default function Login() {
    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // State for loading

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            await login(inputs);
            navigate("/Landing");
        } catch (err) {
            const errorMessage = err.response?.data || 'An error occurred';
            setError(errorMessage);

            // Clear the error after 5 seconds
            setTimeout(() => {
                setError(null);
            }, 5000);
        } finally {
            setLoading(false); // Stop loading
        }
    };

    return (
        <>
            {error && (
                <div className="sideAlert error">
                    <span className="closebtn" onClick={() => setError(null)}>&times;</span>
                    <p>{error}</p>
                </div>
            )}
            <div className="topCover"></div>
            <div className="loginDiv">
                <div className='signUp'>
                    <h1 className="logo-badge text-whitesmoke"></h1>
                    <h3 className="text-whitesmoke">Log in</h3>
                </div>
                <div className="container-content">
                    <form className="margin-t" onSubmit={handleLogin}>
                        <div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Username"
                                    name="username"
                                    value={inputs.username}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                    name="password"
                                    value={inputs.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="form-button button-l margin-b"
                                disabled={loading} // Disable button when loading
                            >
                                {loading ? "Logging in..." : "Log In"} {/* Show loading text */}
                            </button>
                        </div>
                        <p className="text-whitesmoke text-center">
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </form>
                    <p className="margin-t text-whitesmoke">HomiWise &copy; 2024</p>
                </div>
            </div>
            <div className="bottomCover"></div>
        </>
    );
}
