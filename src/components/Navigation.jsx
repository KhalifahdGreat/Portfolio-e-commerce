import styles from "../App.module.css";

import { Link } from "react-router-dom";

export const Navigation = (props) => {
  return (
    <div className={styles.nav_wrapper}>
      <div className={styles.nav}>
        <div className={styles.user}>
          <h1 className={styles.user_name}>{props.name}</h1>
        </div>
        <div
          className={
            props.name === "Ecommerce"
              ? `${styles.user}`
              : `${styles.backWrapper}`
          }
        >
          {/* <label
            style={{
              fontSize: "10px",
              width: "100px",
            }}
            for="cars"
          >
            select category:
          </label>

          <select
            style={{
              marginRight: "20px",
            }}
            name="cars"
            id="cars"
          >
            <option defaultChecked value="all">
              All
            </option>
            <option value="phones">Phones</option>
            <option value="laptops">Laptops</option>
            <option value="fragrance">Fragrance</option>
            <option value="skincare">Skincare</option>
            <option value="groceries">Groceries</option>
            <option value="homeDecoration">Home Decoration</option>
          </select> */}
          <Link to="../login" className={styles.back_button}>
            {props.buttonTwo}
          </Link>
          <Link to="../product" className={styles.back_button}>
            {props.button}
          </Link>
          <h1 className={styles.back}>{props.icon}</h1>
        </div>
      </div>
    </div>
  );
};
