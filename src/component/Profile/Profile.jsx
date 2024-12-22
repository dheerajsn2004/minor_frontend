import React, { useState } from "react";

function Profile() {
  // State to hold form input values
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    currentSalary: "",
    salaryIncrement: "",
    savings: "",
  });

  // State to manage form submission
  const [submitted, setSubmitted] = useState(false);

  // Handler to update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmitted(true); // Mark form as submitted
  };

  // Handler to go back to edit mode
  const handleEdit = () => {
    setSubmitted(false); // Switch back to form view
  };

  return (
    <div className="h-full bg-gray-100 p-5">
      <div className="w-3/4 bg-white shadow-md h-full mx-auto rounded-lg">
        <h2 className="text-center text-2xl mt-8 font-bold">
          {submitted ? "User Details" : "User Information Form"}
        </h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Age:
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Gender:
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Occupation:
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Current Salary:
                <input
                  type="number"
                  name="currentSalary"
                  value={formData.currentSalary}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Salary Increment (%):
                <input
                  type="number"
                  name="salaryIncrement"
                  value={formData.salaryIncrement}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Savings:
                <input
                  type="number"
                  name="savings"
                  value={formData.savings}
                  onChange={handleChange}
                  className="block w-full border rounded px-4 py-2 mt-2"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded w-full py-2"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="p-6">
            <h3 className="text-center text-2xl font-bold">Entered Details:</h3>
            <p className="text-lg mt-4">
              <strong>Name:</strong> {formData.name || "N/A"}
            </p>
            <p className="text-lg mt-2">
              <strong>Age:</strong> {formData.age || "N/A"}
            </p>
            <p className="text-lg mt-2">
              <strong>Gender:</strong> {formData.gender || "N/A"}
            </p>
            <p className="text-lg mt-2">
              <strong>Occupation:</strong> {formData.occupation || "N/A"}
            </p>
            <p className="text-lg mt-2">
              <strong>Current Salary:</strong> {formData.currentSalary || "N/A"}
            </p>
            <p className="text-lg mt-2">
              <strong>Salary Increment:</strong> {formData.salaryIncrement || "N/A"}%
            </p>
            <p className="text-lg mt-2">
              <strong>Savings:</strong> {formData.savings || "N/A"}
            </p>
            <button
              onClick={handleEdit}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded w-full py-2"
            >
              Edit Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Profile;