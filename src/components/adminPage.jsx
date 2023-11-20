import React from "react";
import { Products } from "./Products";
import styles from "../App.module.css";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import "./adminPage.css";
import Axios from "axios";
import { ItemCard } from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
export default function AdminPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return Axios.get("https://dummyjson.com/products")
        .then((res) => res.data.products)
        .catch((error) => console.error("Error fetching products:", error));
    },
  });

  if (isLoading) {
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.loading_spinner}></div>
      </div>
    );
  }
  return (
    <div>
      <Navigation name={"Ecommerce"} />
      <div className="input">
        <h1 className="addHead">Add Product</h1>
        <div className="name">
          <input
            type="text"
            placeholder="Name/Title of product"
            className="productName"
          />
        </div>
        <div className="price">
          <input
            type="number"
            placeholder="Price of product"
            className="productPrice"
          />
        </div>
        <p className="prompt">
          Click choose file button to select product picture
        </p>
        <input type="file" name="picture" className="file" />
        <div className="sub">
          <button className="submit">Add</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.item_wrapper}>
          <div className={styles.header}>
            <h1 className={styles.title}>Products</h1>
          </div>
          {/* display items */}

          <div className={styles.item_product_wrapper}>
            <ul className={styles.items}>
              {/* map through products and create a list of item cards*/}
              {data.map((prod, key) => (
                <li key={key}>
                  <ItemCard
                    image={prod?.images[0]}
                    title={prod?.title}
                    price={prod?.price}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Item /> */}
    </div>
  );
}
