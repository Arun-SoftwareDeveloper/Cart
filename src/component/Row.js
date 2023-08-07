import React from "react";
import { Link } from "react-router-dom";
import "../style/Row.css";
import Container from "./Container";

const Row = (props) => {
  const { handleAddToCart } = props;

  const products = [
    {
      id: 1,
      img: "./Images/levis jeans.jpg",
      product_brand: "Levi's",
      product_name: "Toned jeans",
      product_price: 30,
    },
    {
      id: 2,
      img: "./Images/basics shirt.webp",
      product_brand: "Basics",
      product_name: "Casual shirt",
      product_price: 32,
    },
    {
      id: 3,
      img: "./Images/h&m tshirt.jfif",
      product_brand: "H&M",
      product_name: "Over-sized t-shirt",
      product_price: 60,
    },
    {
      id: 4,
      img: "./Images/h&m shirt.jfif",
      product_brand: "H&M",
      product_name: "Over-sized Shirt",
      product_price: 40,
    },
    {
      id: 5,
      img: "./Images/zara partywear.jpg",
      product_brand: "Zara",
      product_name: "Partywear Shirt",
      product_price: 32,
    },
    {
      id: 6,
      img: "./Images/h&m hoodie1.jfif",
      product_brand: "H&M",
      product_name: "Oversized Hoodie",
      product_price: 60,
    },
  ];

  return (
    <>
      <Container />

      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.img} alt={product.product_name} />
            <p>{product.product_brand}</p>
            <p>{product.product_name}</p>
            <p>{product.product_price}$</p>
            <br />
            <span className="custom-btn add-to-cart">
              <Link to="/cart">
                <button
                  className="custom-btn add-to-cart-btn"
                  onClick={() => {
                    handleAddToCart(product);
                  }}
                >
                  Add to cart
                </button>
              </Link>
              <button className=" custom-btn remove-to-cart-btn">
                Remove from cart
              </button>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Row;
