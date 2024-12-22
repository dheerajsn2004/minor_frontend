import React, { useState } from "react";
import Chart from "react-apexcharts";

const Transaction = () => {
  // State for transactions
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState({ category: "", method: "" });
 
  const [form, setForm] = useState({ date: "", category: "", amount: "", method: "", notes: "" });


  const addTransaction = (e) => {
    e.preventDefault();
    if (!form.date || !form.amount || !form.category || !form.method) {
      return alert("Fill all fields");
    }
    setTransactions([...transactions, { ...form, id: Date.now() }]);
    setForm({ date: "", category: "", amount: "", method: "", notes: "" });
  };
 

  
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  
  const today = new Date();
  const filteredTransactions = transactions.filter((t) => {
    const matchesCategory = filter.category ? t.category === filter.category : true;
    const matchesMethod = filter.method ? t.method === filter.method : true;
    return matchesCategory && matchesMethod;
  });

  const futureTransactions = transactions.filter((t) => {
    const transactionDate = new Date(t.date);
    return transactionDate > today;
  });


  const calculateSummary = (transactionList) => {
    const income = transactionList
      .filter((t) => t.amount > 0)
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const expense = transactionList
      .filter((t) => t.amount < 0)
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
      var balance = income + expense ;
    return { income, expense , balance};
  };

  

  const currentSummary = calculateSummary(filteredTransactions);
  const futureSummary = calculateSummary(futureTransactions); 

 

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <div className="w-3/4 mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Transaction Page</h1>

        {/* Summary */}
        <div className="flex justify-between mb-4">
          <div className="p-4 bg-green-100 text-green-700 rounded">
            Income: ₹{currentSummary.income.toFixed(2)}
          </div>
          <div className="p-4 bg-red-100 text-red-700 rounded">
            Expense: ₹{Math.abs(currentSummary.expense).toFixed(2)}
          </div>
          <div className="p-4 bg-blue-100 text-blue-700 rounded">
            Balance: ₹{(currentSummary.balance).toFixed(2)}
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold">Filters</h2>
          <div className="flex gap-4 mt-2">
            <input
              type="text"
              placeholder="Category (e.g., Grocery, Food, etc.)"
              className="p-2 border rounded w-full"
              value={filter.category}
              onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            />
            <input
              type="text"
              placeholder="Method"
              className="p-2 border rounded w-full"
              value={filter.method}
              onChange={(e) => setFilter({ ...filter, method: e.target.value })}
            />
          </div>
        </div>

        <form onSubmit={addTransaction} className="mb-4">
          <h2 className="text-lg font-semibold">Add Transaction</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <input
              type="date"
              className="p-2 border rounded w-full"
              value={form.date}
              onChange={(e) => setForm({ ...form, date: e.target.value })}
            />
            <input
              type="text"
              placeholder="Category (e.g., Grocery, Food, etc.)"
              className="p-2 border rounded w-full"
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
            />
            <input
              type="number"
              placeholder="Amount (+ for income, - for expense)"
              className="p-2 border rounded w-full"
              value={form.amount}
              onChange={(e) => setForm({ ...form, amount: e.target.value })}
            />
            <input
              type="text"
              placeholder="Payment Method"
              className="p-2 border rounded w-full"
              value={form.method}
              onChange={(e) => setForm({ ...form, method: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Notes"
            className="p-2 border rounded w-full mt-2"
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
          ></textarea>
          <button
            type="submit"
            className="mt-3 p-2 bg-blue-600 text-white rounded w-full hover:bg-blue-700"
          >
            Add Transaction
          </button>
        </form>

        
        <h2 className="text-lg font-semibold mb-2">Transactions</h2>
        <TransactionTable transactions={filteredTransactions} deleteTransaction={deleteTransaction} />

        <h2 className="text-lg font-semibold mb-2">Future Transactions</h2>
        <TransactionTable transactions={futureTransactions} deleteTransaction={deleteTransaction} />
      </div>
    </div>
  );
};

const TransactionTable = ({ transactions, deleteTransaction }) => (
  <div className="overflow-auto max-h-64">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr>
          <th className="p-2 border">Date</th>
          <th className="p-2 border">Category</th>
          <th className="p-2 border">Amount</th>
          <th className="p-2 border">Method</th>
          <th className="p-2 border">Actions</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((t) => (
          <tr key={t.id}>
            <td className="p-2 border">{t.date}</td>
            <td className="p-2 border">{t.category}</td>
            <td className={`p-2 border ${t.amount < 0 ? "text-red-600" : "text-green-600"}`}>
              ₹{t.amount}
            </td>
            <td className="p-2 border">{t.method}</td>
            <td className="p-2 border">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => deleteTransaction(t.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    
  </div>
);

export default Transaction;
