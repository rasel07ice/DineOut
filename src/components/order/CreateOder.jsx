import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { LuMinus } from "react-icons/lu";
import { foodItems } from "../../assets/data";
const CreateOder = ({ onAddOrder }) => {
  const [customerName, setCustomerName] = useState("");
  const [items, setItems] = useState(foodItems);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddOrRemoveItemClick = (item) => {
    const tempItemps = items.map((aItem) => {
      if (aItem.id === item.id) aItem.isAdded = !aItem.isAdded;
      return aItem;
    });
    setItems(tempItemps);
    setTotalPrice(
      items.reduce((total, item) => {
        if (item.isAdded) {
          return total + item.price;
        } else {
          return total;
        }
      }, 0)
    );
  };

  const placeOrderClick = () => {
    onAddOrder({
      id: crypto.randomUUID(),
      customerName: customerName,
      items: items.filter((item) => item.isAdded === true),
      itemsCount: function () {
        return this.items.length;
      },
      TotalPrice: function () {
        return this.items.reduce((total, item) => {
          return total + item.price;
        }, 0);
      },
      isDelivered: false,
    });
    setCustomerName("");
    setItems(
      items.map((item) => {
        item.isAdded = false;
        return item;
      })
    );
    setTotalPrice(0);

    console.log("items:", items);
  };

  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)] text-left">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="">
            Customer Name
          </label>
          <input
            type="text"
            name="customerName"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <div className="items-container">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12   flex items-center justify-center mr-3">
                    <img
                      src={item.imageUrl}
                      alt="Hamburger"
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-xs text-gray-400">BDT {item.price}</p>
                  </div>
                </div>
                <button
                  className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
                  onClick={() => handleAddOrRemoveItemClick(item)}
                >
                  {item.isAdded ? (
                    <LuMinus className="h-5 w-5 text-red-500" />
                  ) : (
                    <FiPlus className="h-5 w-5 text-green-500" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <button
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          onClick={placeOrderClick}
        >
          Place Order (BDT {totalPrice})
        </button>
      </div>
    </>
  );
};

export default CreateOder;
