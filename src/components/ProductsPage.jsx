import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from './NavBar'

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  // ✅ ADD THIS FUNCTION TO UPDATE THE BASKET
  const handleBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    // ✅ Check if product already exists in basket
    const existingItem = basket.find((item) => item.id === product.id);

    let updatedBasket;

    if (existingItem) {
      // ✅ If product exists, update its quantity
      updatedBasket = basket.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      // ✅ If it doesn't exist, add as new item
      updatedBasket = [...basket, { id: product.id, title: product.title, price: product.price, image: product.image, quantity }];
    }

    // ✅ Save updated basket in localStorage
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    alert("Item added to basket!");
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!product) return <p className="text-center text-lg">Product not found</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <div className="flex flex-col items-center py-10 justify-center text-center">
        <img src={product.image} alt={product.title} className="w-80 h-80 object-contain mb-4" />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <h2 className="text-xl text-gray-700 mb-4">£{product.price.toFixed(2)}</h2>

        {/* ✅ CALL handleBasket WHEN CLICKING THIS BUTTON */}
        <button
          onClick={handleBasket}
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
        >
          Add to Basket
        </button>

        <label className="mt-4 text-lg">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="border ml-2 px-2 py-1 w-16 text-center"
            min="1"
          />
        </label>
      </div>
    </div>
  );
};

export default ProductPage;
