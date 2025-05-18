const OrderList = ({ orders, onDeliveredClicked, selectedStatus }) => {
  const ordersList =
    selectedStatus === "all"
      ? orders
      : selectedStatus === "pending"
      ? orders.filter((order) => order.isDelivered === false)
      : orders.filter((order) => order.isDelivered === true);
  return (
    <>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          <table className="min-w-full">
            <thead>
              <tr className="text-left text-sm">
                <th className="pb-3 font-medium">ID</th>
                <th className="pb-3 font-medium">Customer Name</th>
                <th className="pb-3 font-medium">Items</th>
                <th className="pb-3 font-medium">Amount</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {ordersList.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-700 text-left"
                >
                  <td className="py-3">21</td>
                  <td className="py-3">{order.customerName}</td>
                  <td className="py-3">{order.itemsCount()}</td>
                  <td className="py-3">{order.TotalPrice()}</td>
                  <td className="py-3">
                    {order.isDelivered ? (
                      <span className="text-green-500">DELIVERED</span>
                    ) : (
                      <span className="text-red-500">PENDING</span>
                    )}
                  </td>
                  <td className="py-3">
                    <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    {!order.isDelivered && (
                      <button
                        className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                        onClick={() => onDeliveredClicked(order)}
                      >
                        DELIVER
                      </button>
                    )}
                  </td>
                </tr>
              ))}

              {/* <tr className="border-t border-gray-700">
                <td className="py-3">21</td>
                <td className="py-3">Akash Ahmed</td>
                <td className="py-3">5</td>
                <td className="py-3">123123</td>
                <td className="py-3">
                  <span className="text-green-500">DELIVERED</span>
                </td>
                <td className="py-3">
                  <button className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                    Delete
                  </button>
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default OrderList;
