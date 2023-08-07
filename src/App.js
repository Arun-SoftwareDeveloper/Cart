import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Row from "./component/Row";
import Cart from "./component/Cart";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Container from "./component/Container";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Row handleAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
