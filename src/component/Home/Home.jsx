import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="w-3/4 mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Welcome to FinFlow
        </h1>
        <p className="text-lg text-gray-700 text-center mb-8">
          Your personal finance management companion. Take charge of your
          finances, track your spending, set meaningful goals, and stick to your
          budget—all in one place.
        </p>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex-1 p-4 bg-blue-50 text-center rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-blue-700 mb-4">Set Financial Goals</h2>
            <p className="text-gray-600 mb-4">
              Set clear, achievable financial goals to stay on track and work
              towards your dreams. Whether you’re saving for a vacation, a new
              gadget, or retirement, FinFlow helps you break down big objectives
              into manageable steps.
            </p>
            <Link
              to="/setgoal"
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              Start Setting Goals
            </Link>
          </div>

          <div className="flex-1 p-4 bg-green-50 text-center rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Track Your Transactions</h2>
            <p className="text-gray-600 mb-10">
              Stay on top of your finances by easily tracking your income and
              expenses. Monitor where your money goes, identify areas where you
              can save, and make smarter financial decisions.
            </p>
            <Link
              to="/transaction"
              className="px-6 py-2 w-full bg-green-600 text-white rounded-full hover:bg-green-700 transition duration-300"
            >
              Start Tracking
            </Link>
          </div>

          <div className="flex-1 p-4 bg-yellow-50 text-center rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-yellow-700 mb-4">Create & Manage Budgets</h2>
            <p className="text-gray-600 mb-28">
              Set up monthly or yearly budgets and stick to them with ease. 
              
            </p>
            <Link
              to="/budget"
              className="px-6 py-2 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition duration-300"
            >
              Manage Your Budget
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">
            How FinFlow Helps You Achieve Financial Freedom
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            FinFlow is designed to simplify your financial life. Whether you’re
            a seasoned investor or just starting your financial journey, our
            intuitive features and tools empower you to take control of your
            finances, track progress, and make better decisions along the way.
          </p>

          <div className="flex flex-col gap-4 md:flex-row justify-center">
            <div className="flex-1 p-4 bg-white text-center rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">Track Spending</h3>
              <p className="text-gray-600 mb-4">
                With easy-to-use features, you can categorize your expenses, view
                detailed reports, and gain valuable insights into where your money
                is going. This helps you cut unnecessary costs and save more.
              </p>
            </div>

            <div className="flex-1 p-4 bg-white text-center rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold text-green-700 mb-2">Set Achievable Goals</h3>
              <p className="text-gray-600 mb-4">
                Define your short-term and long-term financial goals, set deadlines,
                and monitor your progress.
              </p>
            </div>

            <div className="flex-1 p-4 bg-white text-center rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold text-yellow-700 mb-2">Stay Within Budget</h3>
              <p className="text-gray-600 mb-4">
                FinFlow helps you have track of fixed expenses and remaining salary so you can spend sensibly
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Start using FinFlow today and take the first step toward financial
            security and freedom. Track your spending, save for your dreams, and
            make smarter financial decisions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
