import { useEffect, useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionList from "./TransactionList";

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter((tx) => tx.id !== id));
  };

  const balance = transactions.reduce((acc, tx) => acc + tx.amount, 0);
  const income = transactions
    .filter((tx) => tx.amount > 0)
    .reduce((acc, tx) => acc + tx.amount, 0);
  const expense = transactions
    .filter((tx) => tx.amount < 0)
    .reduce((acc, tx) => acc + tx.amount, 0);
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Expense Tracker
        </h2>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-medium text-gray-700">
            Balance: ₹{balance}
          </h3>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-green-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-green-600">
              Income: ₹{income}
            </p>
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow-md">
            <p className="text-lg font-semibold text-red-600">
              Expense: ₹{Math.abs(expense)}
            </p>
          </div>
        </div>
        <TransactionForm onAdd={addTransaction} />
        <TransactionList
          transactions={transactions}
          onDelete={deleteTransaction}
        />
      </div>
    </div>
  );
};

export default ExpenseTracker;
