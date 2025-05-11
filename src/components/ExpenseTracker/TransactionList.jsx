import { FaTrash } from "react-icons/fa";

const TransactionList = ({ transactions, onDelete }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Transaction History</h3>
      <ul className="space-y-4">
        {transactions.map((tx) => (
          <li
            key={tx.id}
            className={`flex justify-between items-center p-4 rounded-lg ${
              tx.amount < 0
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            } shadow-lg`}
          >
            <div className="flex items-center space-x-4">
              <span className="text-lg font-medium">{tx.desc}</span>
            </div>
            <span className="text-lg font-semibold">
              {tx.amount > 0 ? `+₹${tx.amount}` : `-₹${Math.abs(tx.amount)}`}
            </span>
            <button
              onClick={() => onDelete(tx.id)}
              className="text-gray-600 hover:text-red-600 transition duration-200"
            >
              <FaTrash size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
