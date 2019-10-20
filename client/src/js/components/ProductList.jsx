import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product.jsx";
import styled, { css } from "styled-components";

export const ItemContainer = styled.div`
  display: grid
  grid-template-columns: 200px repeat(auto-fill, 200px);
  grid-template-rows: 1fr;
  grid-gap: 10px 10px;
  grid-auto-flow: row;
  border: 100px;
  // .item {
  //   grid-area: item;
  // }
  grid-tempate-areas:
    "item item item item"
    "item item item item"
`;

export default function ProductList(props) {
  return(
    <ItemContainer>
      {props.relatedProducts.map((product) => {
        return (
            <div className="item" key={product._id}>
              <Product product={product} />
            </div>
        )
      })}
    </ItemContainer>
  )
};

