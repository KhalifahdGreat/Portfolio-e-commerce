import styles from "../App.module.css";
import { useState } from "react";
import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../App";
import Item from "./Item";
import { Link } from "react-router-dom";
import { Shopping_cart } from "./ShopCart";
export const Products = () => {
  const cartOpenHandler = () => {};
  const { amount } = useContext(AppContext);

  return (
    <div className={styles.shop_wrapper}>
      <Navigation
        name={"Ecommerce"}
        icon={
          <button onClick={cartOpenHandler} className={styles.shopping_cart}>
            <div className={styles.shopping_cart_notification}>
              <span className={styles.shopping_cart_message}>{amount}</span>
            </div>
            <FontAwesomeIcon icon={faBagShopping} className={styles.shop_bag} />
          </button>
        }
        button={
          <Link to={"../admin"}>
            <button className={styles.admin_login}>Admin Login</button>
          </Link>
        }
        buttonTwo={
          <Link to={"../login"}>
            <button className={styles.login_button}> Login</button>
          </Link>
        }
      />
      {/* Shopping items */}
      <Item />
      <div className={styles.shop_cart_module}>
        <Shopping_cart />
      </div>
    </div>
  );
};
