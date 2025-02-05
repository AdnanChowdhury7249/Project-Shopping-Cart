import FetchShoppingData from './FetchShoppingData';
import NavBar from './NavBar'
import boutiqueImage from "../assets/boutique.jpg";
import { Link } from "react-router-dom";



function Homepage() {

  return (

    <div >
      <NavBar />
      <img src={boutiqueImage} className="w-full h-screen object-cover object-top" alt="background-image" />

      <div className="absolute top-1/2 left-1/2 md:left-1/3 lg:left-1/4 
               transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2 
               flex flex-col items-center md:items-start gap-6 text-center md:text-left">

        <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-bold 
                 max-w-[90%] sm:max-w-[75%] md:max-w-[50%] leading-tight">
          Where Style Meets Elegance
        </h1>

        <Link to="/products" className="bg-white px-6 py-3 rounded-3xl text-2xl cursor-pointer  
                     hover:bg-black hover:text-white transition duration-300">Shop Now</Link>

      </div>


      <h1 className="flex justify-center text-3xl font-sans font-semibold py-10 ">Featured items</h1>


      <FetchShoppingData />
    </div >

  );
}
export default Homepage;
