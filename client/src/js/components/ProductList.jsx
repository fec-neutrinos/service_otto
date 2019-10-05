import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product.jsx";

export default function ProductList(props) {
  return(
    <div>
      {props.relatedProducts.map((product) => {
        return (
          <div key={product._id}>
            <Product product={product} />
          </div>
        )
      })}
    </div>
  )
};

