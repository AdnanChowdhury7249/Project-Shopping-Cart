import { useEffect, useState } from "react";
import Product from "./Product"

const FetchShoppingData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const json = await res.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" p-6 flex justify-center pt-20">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">

          {(data.slice(0, 9)).map((product) => (
            <Product
              key={product.id}
              title={product.title}
              image={product.image}
              price={product.price}

            />
          ))}

        </div>
      )}
    </div>
  );
};

export default FetchShoppingData;
