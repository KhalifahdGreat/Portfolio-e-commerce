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

      <Item />
      {state && <ShoppingCart />}
    </div>
  );
};
