import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate} from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: '',
    termsAccepted: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.termsAccepted) {
      alert('You must accept the terms and conditions');
      return;
    }

    // Send the form data to the backend (update this part with the correct API call)
    try {
      const response = await fetch('https://minor-backend-5vl9.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Sign up successful!');
        navigate("/home");
      } else {
        alert(data.message);
        navigate("/Home");
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('An error occurred while signing up');
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
        <h2 className="text-2xl font-bold text-blue-950 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="email"
              id="email"
              name="email"
              placeholder="Example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-blue-950 mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="w-full p-2 border border-gray-300 rounded"
              type="tel"
              id="phone"
              name="phone"
              placeholder="9876542310"
              value={formData.phone}
              onChange={handleChange}
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
              name="password"
              placeholder="Min 8 character include special character"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              className="mr-2"
              checked={formData.termsAccepted}
              onChange={handleCheckboxChange}
              required
            />
            <label className="text-blue-950" htmlFor="terms">
              I accept T&C
            </label>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-950 hover:bg-blue-800 border-blue-950 text-white font-semibold px-6 py-2 rounded-3xl"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-blue-950 text-center mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
