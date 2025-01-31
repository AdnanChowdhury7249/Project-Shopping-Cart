// import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="w-full bg-gray-200 px-4 py-2 fixed top-0 h-20 left-0 flex justify-center gap-20 cursor-pointer">
      <Link to="/" className="px-4 py-2">Home</Link>
      <Link to="/products" className="px-4 py-2">Products</Link>
      <Link to="/checkout" className="px-4 py-2">Checkout</Link>
    </div>


  )

}

export default NavBar
