import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const InvestmentDashboard = () => {
  const [formData, setFormData] = useState({
    duration: 5,
    currentSavings: '',
    monthlyInvestment: '',
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateReturns = (fdPercent, equityPercent) => {
    const { currentSavings, monthlyInvestment, duration } = formData;
    const principal = parseFloat(currentSavings) || 0;
    const monthly = parseFloat(monthlyInvestment) || 0;
    const years = parseFloat(duration);
    const months = years * 12;

    // FD calculation (7% return)
    const fdPrincipal = principal * (fdPercent / 100);
    const fdMonthly = monthly * (fdPercent / 100);
    const fdRate = 7 / 12 / 100;

    // Equity calculation (15% return)
    const equityPrincipal = principal * (equityPercent / 100);
    const equityMonthly = monthly * (equityPercent / 100);
    const equityRate = 15 / 12 / 100;

    // Calculate FD returns
    const fdFV =
      fdPrincipal * Math.pow(1 + fdRate, months) +
      fdMonthly * ((Math.pow(1 + fdRate, months) - 1) / fdRate);

    // Calculate Equity returns
    const equityFV =
      equityPrincipal * Math.pow(1 + equityRate, months) +
      equityMonthly * ((Math.pow(1 + equityRate, months) - 1) / equityRate);

    const totalInvested = principal + monthly * months;
    const totalReturns = fdFV + equityFV;

    return {
      totalInvested,
      totalReturns,
      returns: totalReturns - totalInvested,
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lowRisk = calculateReturns(70, 30);
    const mediumRisk = calculateReturns(50, 50);
    const highRisk = calculateReturns(30, 70);

    setResults({
      lowRisk,
      mediumRisk,
      highRisk,
    });
  };

  const RiskSection = ({ title, fdPercent, equityPercent, returnsData }) => {
    if (!returnsData) return null;

    const allocationOptions = {
      labels: ['Fixed Deposit (7%)', 'Equity (15%)'],
      colors: ['#0088FE', '#00C49F'],
      legend: {
        position: 'bottom',
      },
    };

    const allocationSeries = [fdPercent, equityPercent];

    const returnsOptions = {
      labels: ['Total Invested', 'Returns'],
      colors: ['#8884d8', '#82ca9d'],
      legend: {
        position: 'bottom',
      },
    };

    const returnsSeries = [
      returnsData.totalInvested,
      returnsData.returns,
    ];

    return (
      <div className="p-6 border rounded-lg bg-white shadow-sm">
        <h2 className="text-xl font-bold mb-4 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Investment Allocation Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Investment Allocation
            </h3>
            <Chart
              options={allocationOptions}
              series={allocationSeries}
              type="pie"
              width="100%"
            />
          </div>

          {/* Returns Chart */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              Investment vs Returns
            </h3>
            <Chart
              options={returnsOptions}
              series={returnsSeries}
              type="pie"
              width="100%"
            />
            <div className="mt-4 text-center">
              <p className="font-semibold">
                Total Value: ₹
                {Math.round(returnsData.totalReturns).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">
          Investment Strategy Dashboard
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-lg font-medium mb-2">
                Investment Duration: {formData.duration} years
                <input
                  type="range"
                  name="duration"
                  min="1"
                  max="10"
                  value={formData.duration}
                  onChange={handleChange}
                  className="block w-full mt-2"
                />
              </label>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Current Savings (₹)
                <input
                  type="number"
                  name="currentSavings"
                  value={formData.currentSavings}
                  onChange={handleChange}
                  className="block w-full mt-2 px-3 py-2 border rounded-md"
                  placeholder="Enter your current savings"
                  required
                />
              </label>
            </div>

            <div>
              <label className="block text-lg font-medium mb-2">
                Monthly Investment (₹)
                <input
                  type="number"
                  name="monthlyInvestment"
                  value={formData.monthlyInvestment}
                  onChange={handleChange}
                  className="block w-full mt-2 px-3 py-2 border rounded-md"
                  placeholder="Enter monthly investment"
                  required
                />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calculate Returns
          </button>
        </form>

        <div className="space-y-6">
          <RiskSection
            title="Low Risk Strategy"
            fdPercent={70}
            equityPercent={30}
            returnsData={results?.lowRisk}
          />
          <RiskSection
            title="Medium Risk Strategy"
            fdPercent={50}
            equityPercent={50}
            returnsData={results?.mediumRisk}
          />
          <RiskSection
            title="High Risk Strategy"
            fdPercent={30}
            equityPercent={70}
            returnsData={results?.highRisk}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentDashboard;