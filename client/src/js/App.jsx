import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./components/ProductList.jsx"

class App extends React.Component {
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
      <div className="wdio_other_drops RelatedProducts__container__1WHDJ">
        <div className="Text__text__PazWx Text__type--title-0__2XDay ">Related Products</div>
        <div className="Spacer__s4_vsize--50__2vxJO Spacer__s3_vsize--50__1Xocn Spacer__s2_vsize--50__3mh44 Spacer__s1_vsize--30__2pfE0 Spacer__s0_vsize--30__3Fy97"></div>
        <div className="Grid__s4_pc--4__3FEWf Grid__s3_pc--4__1g56X Grid__s2_pc--3__3c8pA Grid__s1_pc--2__1eSzn Grid__s0_pc--2__2Oxwd Grid___itemSpacing--normal__2mE2K  Flex__flexContainer__3Xtgv  Flex__flexItem__7-27F">
          <ProductList relatedProducts={this.state.relatedProducts}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

