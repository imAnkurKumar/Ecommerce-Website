import { useState } from "react";
import Header from "./components/Header";
import Store from "./pages/Store";
import Cart from "./components/Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true);
  };

  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <>
      <Header handleShowCart={handleShowCart} />

      <Store />

      <Cart
        show={showCart}
        handleClose={handleCloseCart}
      />
    </>
  );
}

export default App;