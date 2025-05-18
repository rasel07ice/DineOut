import "./App.css";
import Header from "./components/Header";
import OrderDashboard from "./components/order/OrderDashboard";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Header />
        <OrderDashboard />
      </div>
    </>
  );
}

export default App;
