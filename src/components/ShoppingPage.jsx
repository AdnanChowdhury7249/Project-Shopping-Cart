import FetchShoppingData from "./FetchShoppingData";
import NavBar from "./NavBar"


const ShoppingPage = () => {

  return (
    <div >
      <NavBar />

      <div className="container mx-auto py-10">
        <FetchShoppingData showAll={true} showBasketButton={true} />
      </div>
    </div>
  )
}

export default ShoppingPage;
