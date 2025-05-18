import { FiFilter } from "react-icons/fi";
const OrderSearch = ({ onStatusChange }) => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <FiFilter className="size-6" />
          <select
            onChange={(e) => onStatusChange(e.target.value)}
            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm w-24 px-2 py-1"
          >
            <option value="all">All</option>
            <option value="pending">Pending</option>
            <option value="delivered">Delivered</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default OrderSearch;
