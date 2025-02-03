import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams(); // ✅ Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (!product) return <p className="text-center text-lg">Product not found</p>;

  return (
    <div className="flex flex-col items-center py-10">
      <img src={product.image} alt={product.title} className="w-80 h-80 object-contain mb-4" />
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <h2 className="text-xl text-gray-700 mb-4">£{product.price.toFixed(2)}</h2>
      <button className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-700 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductPage;
