import React from "react";
// import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import ProductList from "./ProductList.jsx"

export const RelatedProductsContainer = styled.div`
  background-color: #fff;
  border-top: 1px solid #d8d5d2;
  padding: 80px 70px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 50px auto;
`;

export const Title = styled.div`
  color: #222;
  font-family: stratos,Helvetica,Arial,Verdana,sans-serif;
  -webkit-font-smoothing: subpixel-antialiased;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 36px;
  line-height: 41px;
`;


export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedProducts: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3010/category/knives')
      .then((result) => {
        return result.json();
      })
      .then((products) => {
        this.setState(
          {relatedProducts: products}
        )
      })
  }

  render() {
    return (
      <RelatedProductsContainer>
        <Title className="related-products-text">Related Products</Title>
        <div className="spacer-for-main-container"></div>
        <ProductList relatedProducts={this.state.relatedProducts}/>
      </RelatedProductsContainer>
    )
  }
}



