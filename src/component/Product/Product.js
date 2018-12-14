import React from "react";

export default function Product(props) {
  // deleteProd(){
  //   deleteP(props.id);
  // }

  return (
    <div className="Product">
      Name: {props.name}
      <br />
      <img src={props.img} />
      <br />
      Price: {props.price}
      <br />
      ID: {props.id}
      <br />
      {/* <button onClick={deleteP(props.id)}>Delete</button> */}
    </div>
  );
}
