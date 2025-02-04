// import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ id, title, price, image, showBasketButton, quantity }) => {
  return (
    <div className="relative group border  p-4 rounded-md shadow-md hover:shadow-lg flex flex-col items-center w-full sm:w-60 md:w-56 lg:w-80 xl:w-80 ">
      <img src={image} alt={title} className="w-60 h-60 object-contain mb-4" />
      <h3 className="text-sm font-bold text-center mb-2">{title}</h3>
      <h3 className="text-gray-700">£{price.toFixed(2)}</h3>

      {showBasketButton && (
        <Link to={`/product/${id}`} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        bg-blue-500 text-white px-4 py-2 rounded opacity-0 group-hover:opacity-100 transition cursor-pointer">
            Add to Basket
          </button>
        </Link>
      )
      }
      {quantity !== undefined && (
        <input type="number"></input>
      )

      }
    </div >
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  showBasketButton: PropTypes.bool,
  quantity: PropTypes.number,
};


export default Product;


<input type="number" id="tentacles" name="tentacles" min="10" max="100" />
