// import React from "react";
import PropTypes from "prop-types";

const Product = ({ title, price, image }) => {
  return (
    <div className="border p-4 rounded-md shadow-md hover:shadow-lg flex flex-col items-center w-full sm:w-60 md:w-56 lg:w-80 xl:w-80 ">
      <img
        src={image}
        alt={title}
        className="w-32 h-32 object-contain mb-4"
      />
      <h3 className="text-sm font-bold text-center mb-2">{title}</h3>
      <h3 className="text-gray-700">£{price}</h3>
    </div>
  );

};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};


export default Product;
