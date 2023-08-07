import React from "react";
import "../style/Cart.css";

function Cart({ cartItems }) {
  const totalPrice = cartItems.reduce(
    (accumulator, item) => accumulator + item.product_price,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Cart items</h2>
      {cartItems.length === 0 ? (
        <p className="cart-message">No items in the cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-grid">
              <div className="cart-name">
                Product Name: {item.product_name}
                <button className="dec-btn">-</button>{" "}
                <button className="inc-btn">+</button>
              </div>
              <div className="cart-brand">
                Product Brand: {item.product_brand}
              </div>
              <div className="cart-price">{item.product_price}$</div>
            </div>
          ))}
          <p className="cart-total-price">Total Price: {totalPrice} $</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
