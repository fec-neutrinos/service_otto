import React from "react";
import ReactDOM from "react-dom";

export default function Product(props) {
  return <div className="product">
    <p className="productname">{props.product.productname}</p>
    <p className="discounted">{props.product.discounted}</p>
    <p className="price">{props.product.price}</p>
    <p className="discountedprice">{props.product.discountprice}</p>
    <p className="comments">{props.product.comments}</p>
    <p className="shippingmethod">{props.product.shippingmethod}</p>
    <p className="imageurl">{props.product.imageurl}</p>
    <p className="newproduct">{props.product.newproduct}</p>
    <p className="discountdaysleft">{props.product.discountdaysleft}</p>
    <p className="isdropproduct">{props.product.isdropproduct}</p>
    <p className="producturl">{props.product.producturl}</p>
  </div>
};
