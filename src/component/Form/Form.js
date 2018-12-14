import React, { Component } from "react";
import noURL from "../../images/nourl.png";
import axios from "axios";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      url: "",
      price: 0
    };

    this.imageHandler = this.imageHandler.bind(this);
    this.cancelInput = this.cancelInput.bind(this);
    this.addToDB = this.addToDB.bind(this);
  }

  //POST
  addToDB(name, url, price) {
    let product = {
      name: this.state.name,
      img: this.state.url,
      price: this.state.price
    };

    axios.post(`/api/products`, product);
    // .then(response => {
    // console.log(typeof response.data);
    // catSetter(response.data);
    // console.log("componentDidMount() GET: " + response.data[0]);
    this.props.getALL();
  }

  imageHandler() {
    console.log("yoyoyoyoyoy");
    if (!this.state.url) {
      console.log("no img url");
      return <img src={noURL} />;
    } else {
      console.log(this.state.url);
      return <img src={this.state.url} />;
    }
    return { noURL };
  }

  cancelInput() {
    this.setState({
      url: "",
      name: "",
      price: 0
    });
  }

  render() {
    return (
      <form className="Form">
        {this.imageHandler(this.state.url)}
        Image URL: {this.state.url}
        <input
          type="text"
          name="img"
          placeholder={this.state.url}
          onChange={e => {
            this.setState({ url: e.target.value });
          }}
        />
        <br />
        Product Name: {this.state.name}
        <input
          type="text"
          name="name"
          placeholder={this.state.name}
          onChange={e => {
            this.setState({ name: e.target.value });
          }}
        />
        <br />
        Price: ${this.state.price}
        <input
          type="text"
          name="price"
          placeholder={this.state.price}
          onChange={e => {
            this.setState({ price: e.target.value });
          }}
        />
        <br />
        <div className="button-area">
          <button
            type="reset"
            className="btn-cancel"
            onClick={this.cancelInput}
          >
            Cancel
          </button>
          <button type="reset" onClick={this.addToDB} className="btn-add">
            Add to Inventory
          </button>
        </div>
      </form>
    );
  }
}
