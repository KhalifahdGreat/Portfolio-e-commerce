import React from "react";
import "./description.css";
import { Axios } from "axios";
import { useState } from "react";
import { useEffect } from "react";
import descriptionImage from "./51RFfemMaoL._AC_SY695_.jpg";

//console.log(axios.isCancel("something"));

export default function Description(props) {
  // const loadPage = async () => {
  //   // fetch("https://dummyjson.com/products")
  //   //   .then((response) => console.log(response.json().Object.products))
  //   //   .then((data) => console.log(data));

  //   Axios.get("https://dummyjson.com/products")
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  //     .finally(function () {
  //       console.log("finished");
  //     });
  // };

  return (
    <div className="overall">
      <p></p>
      <div className="container">
        <div className="column1">
          <img
            src={descriptionImage}
            className="image"
            width="300"
            height="300"
          />
        </div>
        <div className="column2">
          <h1 className="productName">Nike Shoes</h1>
          <p className="visit">visit our store</p>

          <h2 className="about">About this item</h2>
          <p className="price">Price: $100</p>
          <p className="itemDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            labore, possimus, architecto voluptatum voluptatem laboriosam sequi
            porro modi maxime sed error asperiores tempore eveniet dicta
            sapiente. Maxime laboriosam numquam deleniti in, voluptates iste
            sapiente eaque vitae. Nisi architecto atque voluptatibus autem
            suscipit odit cupiditate quod?
          </p>
        </div>
      </div>
    </div>
  );
}
