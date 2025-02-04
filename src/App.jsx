import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage';
import ShoppingPage from "./components/ShoppingPage";
import ProductsPage from "./components/ProductsPage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ShoppingPage />} />
        <Route path="/product/:id" element={<ProductsPage />} />
      </Routes>
    </Router>
  )
}

export default App


