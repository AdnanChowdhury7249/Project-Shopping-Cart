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
  const handleBasket = () => {
    const basket = JSON.parse(localStorage.getItem("basket")) || [];

    const existingItem = basket.find((item) => item.id === product.id);

    let updatedBasket;

    if (existingItem) {
      updatedBasket = basket.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
    } else {
      updatedBasket = [...basket, { id: product.id, title: product.title, price: product.price, image: product.image, quantity }];
    }

    localStorage.setItem("basket", JSON.stringify(updatedBasket));
    alert("Item added to basket!");
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!product) return <p className="text-center text-lg">Product not found</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <div className="flex flex-row items-center justify-center py-10 gap-10">

        <div>
          <img
            src={product.image}
            alt={product.title}
            className="w-80 h-80 object-contain"
          />
        </div>


        <div className="flex flex-col items-start text-left">
          <h1 className="text-2xl mb-4">{product.title}</h1>
          <h2 className="text-2xl  text-gray-700 mb-3">Price: £{product.price.toFixed(2)}</h2>

          <label className="mt-4 text-lg">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="border ml-2 px-2 py-1 w-16 text-center mb-5"
              min="1"
            />
          </label>

          <button
            onClick={handleBasket}
            className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Add to Basket
          </button>


        </div>
      </div>
    </div>

  );
};

export default ProductPage;
