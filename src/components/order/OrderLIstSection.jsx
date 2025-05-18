import { useState } from "react";
import OrderList from "./OrderList";
import OrderSearch from "./OrderSearch";

const OrderLIstSection = ({ orders, onDeliveredClicked }) => {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const handleOrderStatus = (value) => {
    setSelectedStatus(value);
  };
  return (
    <>
      <div>
        <OrderSearch onStatusChange={handleOrderStatus} />
        <OrderList
          orders={orders}
          onDeliveredClicked={onDeliveredClicked}
          selectedStatus={selectedStatus}
        />
      </div>
    </>
  );
};

export default OrderLIstSection;
