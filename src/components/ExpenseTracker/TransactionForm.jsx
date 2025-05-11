import { useState } from "react";

const TransactionForm = ({ onAdd }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!desc || !amount) return;

    onAdd({
      id: Date.now(),
      desc,
      amount: parseFloat(amount),
    });

    setDesc("");
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4">
      <h3 className="text-xl font-semibold">Add New Transaction</h3>
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <input
          type="number"
          placeholder="Amount (use - for expense)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-32 p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
