import React, { Component } from "react";
import axios from "axios";

//Local Imports
import Product from "../Product/Product";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currDeleteID: 0
    };

    this.deleteP = this.deleteP.bind(this);
    this.listProducts = this.listProducts.bind(this);
  }

  listProducts(products) {
    if (products) {
      return products.map((product, index) => {
        console.log(product.name);
        return Product(product);
      });
    } else {
      alert("no get info");
    }
  }

  deleteP() {
    console.log("TEST: " + this.state.currDeleteID);
    let ID = this.state.currDeleteID;
    console.log(ID);
    // catSetter([]);
    axios.delete(`/api/products/${this.state.currDeleteID}`);
    // .then(response => {
    // catSetter(response.data);
    // console.log("DELETE: " + this.state.cats);
    // console.log("state: " + this.state.cats[catLocalID].url);
    this.props.getALL();
  }

  // edit(){
  //   axios.put(`/api/products/${this.state.currDeleteID}?`)
  // }

  render() {
    return (
      <div>
        Dashboard
        {this.listProducts(this.props.products)}
        <form>
          Delete which id??
          <input
            name="id"
            type="text"
            onChange={e => this.setState({ currDeleteID: e.target.value })}
          />
          <button onClick={this.edit}>Edit</button>
          <button onClick={this.deleteP}>Delete</button>
        </form>
      </div>
    );
  }
}
