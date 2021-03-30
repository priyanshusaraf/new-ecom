import React from "react";
import { BASE_URL } from "./axios.js";
import "./Product.css";

function Product({ image, title, description, id, price }) {
  return (
    <div className="product">
      <img
        src={`${BASE_URL}/static/${image}`}
        alt=""
        className="product__image"
      />
      <div className="product__container">
        <h4 className="product__title">{title}</h4>
        <p>{description}</p>
        <p className="product__price">{price}</p>
        <button className="product__button">Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
