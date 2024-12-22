import React, { useState } from "react";

function Setgoal() {
  const [formData, setFormData] = useState({
    goalName: "",
    amount: "",
    duration: "",
    currentSavings: "",
    annualRate: "",
  });

  const [goals, setGoals] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const calculateMonthlyInvestment = (goalAmount, duration, annualRate, currentSavings) => {
    const monthlyRate = annualRate / 12 / 100; // Convert annual rate to monthly
    const months = duration * 12; // Total months
    const amountNeeded = goalAmount - currentSavings;

    if (amountNeeded <= 0) return 0; // If savings cover the goal, no investment needed

    // Calculate monthly investment using Future Value of Annuity formula
    const investment =
      (amountNeeded * monthlyRate) / (Math.pow(1 + monthlyRate, months) - 1);

    return investment.toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const goalAmount = parseFloat(formData.amount || 0);
    const duration = parseFloat(formData.duration || 0);
    const currentSavings = parseFloat(formData.currentSavings || 0);
    const annualRate = parseFloat(formData.annualRate || 0);

    if (!goalAmount || !duration || annualRate <= 0) {
      alert("Please fill in all required fields with valid values.");
      return;
    }

    const monthlyInvestment = calculateMonthlyInvestment(
      goalAmount,
      duration,
      annualRate,
      currentSavings
    );

    setGoals([
      ...goals,
      {
        ...formData,
        monthlyInvestment,
        investmentAdvice:
          annualRate > 8 && annualRate <= 100 ? "Invest in Equity markets" : "Invest in FD",
      },
    ]);

    setFormData({
      goalName: "",
      amount: "",
      duration: "",
      currentSavings: "",
      annualRate: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 justify-items-center p-5">
      <div className="w-3/4 bg-white shadow-md h-full justify-center justify-items-center mx-auto rounded-lg p-8">
        <h2 className="text-center text-2xl font-bold">Goal Information Form</h2>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Goal Name
              <input
                type="text"
                name="goalName"
                value={formData.goalName}
                onChange={handleChange}
                className="block w-full border rounded px-4 py-2 mt-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Goal Amount
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="block w-full border rounded px-4 py-2 mt-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Duration (in years)
              <input
                type="number"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="block w-full border rounded px-4 py-2 mt-2"
              />
            </label>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-medium mb-2">
              Current Savings
              <input
                type="number"
                name="currentSavings"
                value={formData.currentSavings}
                onChange={handleChange}
                className="block w-full border rounded px-4 py-2 mt-2"
              />
            </label>
            <label className="block text-lg font-medium mb-2">
              Rate (In percentage)
              <input
                type="number"
                name="annualRate"
                value={formData.annualRate}
                onChange={handleChange}
                className="block w-full border rounded px-4 py-2 mt-2"
              />
            </label>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded w-full py-2"
          >
            Add Goal
          </button>
        </form>

        <h1 className="text-center text-2xl font-bold pt-8">Added Goals:</h1>
        {goals.length > 0 && (
          <div className="p-6 flex flex-wrap gap-4">
            {goals.map((goal, index) => (
              <div
                key={index}
                className="mt-4 p-4 w-full border rounded bg-gray-50 shadow-sm"
              >
                <p className="text-lg">
                  <strong>Goal Name:</strong> {goal.goalName || "N/A"}
                </p>
                <p className="text-lg">
                  <strong>Goal Amount:</strong> ₹{goal.amount || "N/A"}
                </p>
                <p className="text-lg">
                  <strong>Duration:</strong> {goal.duration || "N/A"} years
                </p>
                <p className="text-lg">
                  <strong>Current Savings:</strong> ₹{goal.currentSavings || "N/A"}
                </p>
                <p className="text-lg text-green-600 font-semibold">
                  <strong>Monthly Investment:</strong> ₹
                  {goal.monthlyInvestment || "N/A"}
                </p>
                <p className="text-lg text-red-600 font-semibold">
                  <strong>Annual Rate:</strong> 
                  {goal.annualRate || "N/A"}%
                </p>
                <p className="text-lg text-blue-600 font-semibold">
                  <strong>Investment Advice:</strong> {goal.investmentAdvice}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Setgoal;