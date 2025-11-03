import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </ BrowserRouter>
  )
}

export default App
