import PropTypes from "prop-types";
import { useEffect, useState } from "react";


const CheckoutPage = () => {

  const [basket, setbasket] = useState([]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket")) || []
    setbasket(storedBasket)
  }, [])

  const updateQuantity = (id, newQuantity) => {
    const updatedBasket = basket.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    );
    setbasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket))
  }

  const handleRemoveItem = (id) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setbasket(updatedBasket); // ✅ Update state
    localStorage.setItem("basket", JSON.stringify(updatedBasket)); // ✅ Save new basket
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {basket.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        basket.map((item) => (
          <div key={item.id} className="border p-4 rounded-md mb-4">
            <h2 className="text-lg font-bold">{item.title}</h2>
            <p>Price: £{item.price.toFixed(2)}</p>
            <img src={item.image} />

            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 px-2 py-1 rounded"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>

              <input
                type="number"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                className="w-16 text-center border"
                min="1"
              />
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Remove
              </button>

              <button
                className="bg-gray-300 px-2 py-1 rounded"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckoutPage







