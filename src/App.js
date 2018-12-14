import React, { Component } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

//Local Imports
import Dashboard from "./component/Dashboard/Dashboard";
import Form from "./component/Form/Form";
import Header from "./component/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };

    // this.getA = this.getA.bind(this);
    this.getALL = this.getALL.bind(this);
  }

  // componentWillUpdate() {
  //   this.getA();
  // }

  //GET
  getALL() {
    axios.get(`/api/products`).then(response => {
      // console.log(typeof response.data);
      this.setState({ products: response.data });
      console.log("componentDidMount() GET: " + response.data[0]);
    });
  }

  componentWillMount() {
    this.getALL();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state != prevState) {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <Header />
        <Dashboard
          products={this.state.products}
          className="Dashboard"
          getALL={this.getALL}
        />
        {/* <Form url={this.state.url} className="Form" getALL={this.getALL} /> */}
      </div>
    );
  }
}

export default App;
