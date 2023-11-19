import styles from "../App.module.css";
import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

import Item from "./Item";
import { Link } from "react-router-dom";
export const Products = () => {
  return (
    <div className={styles.shop_wrapper}>
      <Navigation
        name={"Ecommerce"}
        icon={
          <FontAwesomeIcon icon={faBagShopping} className={styles.shop_bag} />
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
    </div>
  );
};
