// import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="w-full bg-gray-200 px-4 py-2 fixed top-0 left-0 h-20 flex justify-center gap-20 cursor-pointer shadow-md z-50">
      <Link to="/" className="relative px-4 py-2 h-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</Link>
      <Link to="/products" className="relative px-4 py-2 h-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Products</Link>
      <Link to="/checkout" className="relative px-4 py-2 h-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-gray-700 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Checkout</Link>
    </div>


  )

}

export default NavBar
