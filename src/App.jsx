import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import ShoppingPage from "./components/ShoppingPage";
import ProductsPage from "./components/ProductsPage";
import Checkout from "./components/CheckoutPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ShoppingPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductsPage />} />
      </Routes>
    </Router>
  )
}

export default App


