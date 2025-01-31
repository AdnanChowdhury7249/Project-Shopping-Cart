import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import ShoppingPage from "./components/ShoppingPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ShoppingPage />} />
      </Routes>
    </Router>
  )
}

export default App


// create atleast 2 pages, homepage and shop page which includes shopping cart. 
// create a navbar component so the user can switch between pages.
// navbar should also show the shopping cart and how many items in the cart

// Homepage - include some images a description about the website. 
// Shopping cart page - should include the same navbar with the number of items in the shopping 
// cart as well as checkout to pay button however i wont be implementing it for this project 

// add card component for each product on the website with input field. user can manually type in 
// and have a increment and decrement button.
// fetch shop items from fakestore


// my plan
//**** Completed 
// 1) connet to the fakestore api and create a product component to display the items.
// 2) create the navbar component
// 3)finish the homepage, make it so only 9 items are showing in the homepage with a explore button below.
// 4)Start the product page to show all the products, Add a add to basket button and a input amount for the number of items.  

//**** TODO


