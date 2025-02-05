import { useEffect, useState } from "react";
import NavBar from "./NavBar";

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
    setbasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const calculateTotalPrice = () => {
    return basket.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  return (

    <div className="p-6 flex justify-center items-center h-screen">

      <NavBar />

      {basket.length === 0 ? (
        <p className="mt-20">Your basket is empty</p>
      ) : (
        basket.map((item) => (
          <div key={item.id} className="p-4 rounded-md mb-4 max-w-150 mt-20 flex items-center gap-6">
            <img className="w-100 h-100 object-contain" src={item.image} alt={item.title} />

            <div className="flex flex-col px-15">
              <h2 className="text-lg font">{item.title}</h2>

              <div className="flex items-center gap-2 mt-2">
                <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => updateQuantity(item.id, item.quantity - 1)}> - </button>
                <input type="number" value={item.quantity} onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)} className="w-16 text-center border" min="1" />
                <button className="bg-gray-300 px-2 py-1 rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)}> + </button>
                <button onClick={() => handleRemoveItem(item.id)} className="bg-red-500 text-white px-4 py-2 rounded-md"> Remove </button>
              </div>

              <h2 className="text-xl  mt-4">Total Price: £{calculateTotalPrice().toFixed(2)}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CheckoutPage







