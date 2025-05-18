import OrderLIstSection from "./OrderLIstSection";
import OrderSummary from "./OrderSummary";

const OrderDetails = ({ orders, orderSummary, onDeliveredClicked }) => {
  return (
    <>
      <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
        {/* <!-- Order Summary --> */}
        <OrderSummary orderSummary={orderSummary} />

        {/* <!-- Order Reports --> */}
        <OrderLIstSection
          orders={orders}
          onDeliveredClicked={onDeliveredClicked}
        />
      </div>
    </>
  );
};

export default OrderDetails;
