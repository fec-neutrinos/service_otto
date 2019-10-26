import React from "react";
import ReactDOM from "react-dom";
import Product from "./Product.jsx";
import styled, { css } from "styled-components";

export const ItemContainer = styled.div`
  display: grid
  grid-template-columns: repeat(4, 330px);
  grid-template-rows: repeat(2, 570.2px);
  // grid-gap: 10px;
  grid-auto-flow: row;
  align-items: start;
  justify-content: start;
  align-content: start;
  margin: -10px;
`;

export const GridItem = styled.div`
  // width: 25%;
  align-self: stretch;
  justify-self: stretch;
  display: grid;
`;

export default function ProductList(props) {
  return(
    <ItemContainer>
      {props.relatedProducts.map((product) => {
        return (
            <GridItem key={product._id}>
              <Product product={product} />
            </GridItem>
        )
      })}
    </ItemContainer>
  )
};

