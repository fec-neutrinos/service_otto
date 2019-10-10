import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product.jsx";

export default function ProductList(props) {
  return(
    <div>
      {props.relatedProducts.map((product) => {
        return (
            <div key={product._id} className="Grid___c--1__2obI2 wdio_card wdio_drop_card wdio_drop_card--live Card__card__1RLRm Card__background--light-gray__F8hUw Grid__gridItem__2qOsq ">
              <Product product={product} />
            </div>
        )
      })}
    </div>
  )
};

