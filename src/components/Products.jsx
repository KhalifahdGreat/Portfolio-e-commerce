import styles from "../App.module.css";

import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../App";
import Item from "./Item";
import { Link } from "react-router-dom";
import { ShoppingCart } from "./ShopCart";

export const Products = () => {
  const { state, toggle, selectedItems } = useContext(AppContext);

  const cartOpenHandler = () => {
    toggle();
  };
  console.log(selectedItems);
  return (
    <div className={styles.shop_wrapper}>
      <Navigation
        name={"Ecommerce"}
        icon={
          <button onClick={cartOpenHandler} className={styles.shopping_cart}>
            {selectedItems.length > 0 && (
              <div className={styles.shopping_cart_notification}>
                <span className={styles.shopping_cart_message}>
                  {selectedItems.length}
                </span>
              </div>
            )}
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
      <div
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      >
        <label
          style={{
            fontSize: "16px",
            width: "100px",
          }}
          for="cars"
        >
          select category:
        </label>

        <select style={{}} name="cars" id="cars">
          <option defaultChecked value="all">
            All
          </option>
          <option value="phones">Phones</option>
          <option value="laptops">Laptops</option>
          <option value="fragrance">Fragrance</option>
          <option value="skincare">Skincare</option>
          <option value="groceries">Groceries</option>
          <option value="homeDecoration">Home Decoration</option>
        </select>
      </div>
      <Item />
      {state && <ShoppingCart />}
    </div>
  );
};
