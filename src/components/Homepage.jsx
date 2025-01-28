import FetchShoppingData from './FetchShoppingData';
import NavBar from './NavBar'
import boutiqueImage from "../assets/boutique.jpg";


function Homepage() {

  return (

    <div >
      <NavBar />
      <img src={boutiqueImage} className="w-full h-screen object-cover" alt="background-image" />
      <h1 className="flex justify-center text-3xl font-sans font-semibold py-10 ">Featured items</h1>
      <FetchShoppingData />
    </div >

  );
}
export default Homepage;
