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
      <div>
        <h1>Related Products Section</h1>
        <ProductList relatedProducts={this.state.relatedProducts}/>
      </div>

    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
