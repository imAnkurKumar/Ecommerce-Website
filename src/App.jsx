import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Store from "./pages/Store";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Contact from "./pages/Contact";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <BrowserRouter>
      <Header handleShowCart={handleShowCart} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Cart
        show={showCart}
        handleClose={handleCloseCart}
      />
    </BrowserRouter>
  );
}

export default App;