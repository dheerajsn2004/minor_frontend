import React, { useState } from 'react';
import './Login-ph.css';
import { Link, useNavigate } from 'react-router-dom';

function LoginPh() {
  const [phone, setPhone] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");  // To store error messages
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending POST request to login endpoint
      const response = await fetch('https://minor-backend-5vl9.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phone, password: pass }), // Send phone and password in the body
      });

      const data = await response.json();

      if (response.status === 200) {
        // If login is successful, redirect to home
        alert('Login successful');
        navigate("/home");
      } else {
        // If login fails, show the error message
        setError(data.message || 'Invalid credentials. Please try again.');
      }
    } catch (err) {
      console.error('Error during login:', err);
      setError('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-end p-14 min-h-screen bg-cover bg-center bg-no-repeat">
      <div className="relative right-32">
        <div className="text-center">
          <div className="typing-effect text-blue-950 font-bold">
            FinFlow
          </div><br />
          <p className="typing-effect1 text-blue-950 text-lg">
            Help you manage your Finance
          </p>
        </div>
      </div>
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Log In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876542310"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="password"
              id="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Min 8 character include special character"
              required
            />
          </div>
          {error && <div className="text-red-500 text-center mb-4">{error}</div>} {/* Display error message */}
          <div className="flex items-center mb-4">
            <label className="text-blue-950" htmlFor="terms">
              Log In using Email{" "}
              <Link to="/" className="text-blue-500 hover:underline">click here</Link>
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-950 hover:bg-blue-900 border-blue-950 text-white font-semibold px-6 py-2 rounded-3xl"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
        <p className="text-blue-950 text-center mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPh;
