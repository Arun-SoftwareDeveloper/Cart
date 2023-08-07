import React, { useState } from "react";
import Row from "../component/Row";
import Container from "../component/Container";
import { Link } from "react-router-dom";

const Header = () => {
  const [count, setCount] = useState(0);

  const handleAddToCart = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div
        className="header"
        style={{
          position: "fixed",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          width: "100%",
        }}
      >
        <span>
          <i className="fa-solid fa-house"></i>Home
        </span>
        <span>
          <i className="fa-solid fa-address-card"></i>About Us
        </span>
        <span>
          <i className="fa-solid fa-tags"></i>
          Shop
          <select name="Shop">
            <option value="Jeans">Jeans</option>
            <option value="Shirts">Shirts</option>
            <option value="Shoes">Shoes</option>
            <option value="T-Shirts">T-Shirts</option>
          </select>
        </span>
        <div
          className="cart"
          style={{
            position: "fixed",
            right: "220px",
          }}
        >
          <span className="cart-icon" style={{ color: "black" }}>
            <Link to="/cart">
              <i
                className="fa-solid fa-cart-shopping"
                style={{ color: "black" }}
              >
                {" "}
              </i>
              Cart {count}
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
