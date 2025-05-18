import { useEffect, useState } from "react";
import { images } from "../../assets";
import CreateOder from "./CreateOder";
import OrderDetails from "./OrderDetails";

const defaultOrders = [
  {
    id: crypto.randomUUID(),
    customerName: "Risan",
    items: [
      {
        id: crypto.randomUUID(),
        name: "Submarine Sandwich",
        price: 400,
        imageUrl: images.submarine,
        isAdded: false,
      },
      {
        id: crypto.randomUUID(),
        name: "Chicken Nuggets",
        price: 300,
        imageUrl: images.chicken,
      },
    ],
    itemsCount: function () {
      return this.items.length;
    },
    TotalPrice: function () {
      return this.items.reduce((total, item) => {
        return total + item.price;
      }, 0);
    },
    isDelivered: true,
  },
];

const OrderDashboard = () => {
  const [orders, setOrders] = useState(defaultOrders);
  const [orderSummary, setOrderSummary] = useState({
    totalOrder: orders.length,
    pendingOrder: orders.filter((order) => order.isDelivered === false).length,
    deliveredOrder: orders.filter((order) => order.isDelivered === true).length,
  });

  const handleCreateOrder = (order) => {
    console.log("order: ", order);
    setOrders([...orders, order]);
    // setOrderSummary({
    //   totalOrder: orders.length,
    //   pendingOrder: orders.filter((order) => order.isDelivered === false)
    //     .length,
    //   deliveredOrder: orders.filter((order) => order.isDelivered === true)
    //     .length,
    // });
    console.log("orders: ", orders);
  };

  const handleDeliveredClick = (order) => {
    console.log("order:", order);
    setOrders(
      orders.map((aOrder) => {
        if (aOrder.id === order.id) aOrder.isDelivered = true;
        return aOrder;
      })
    );
    // setOrderSummary({
    //   totalOrder: orders.length,
    //   pendingOrder: orders.filter((order) => order.isDelivered === false)
    //     .length,
    //   deliveredOrder: orders.filter((order) => order.isDelivered === true)
    //     .length,
    // });
  };

  // const handleOrderStatus = (value) => {
  //   switch (value) {
  //     case "pending":
  //       setOrders(orders.filter((order) => order.isDelivered === false));
  //       break;
  //     case "delivered":
  //       setOrders(orders.filter((order) => order.isDelivered === true));
  //       break;
  //     default:
  //       setOrders([...orders]);
  //   }
  // };

  useEffect(() => {
    setOrderSummary({
      totalOrder: orders.length,
      pendingOrder: orders.filter((order) => order.isDelivered === false)
        .length,
      deliveredOrder: orders.filter((order) => order.isDelivered === true)
        .length,
    });
  }, [orders]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <CreateOder onAddOrder={handleCreateOrder} />
      <OrderDetails
        orders={orders}
        orderSummary={orderSummary}
        onDeliveredClicked={handleDeliveredClick}
      />
    </div>
  );
};

export default OrderDashboard;
