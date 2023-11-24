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
          }>
          <div className={styles.category}>{props.category}</div>
          <Link to='../login' className={styles.back_button}>
            {props.buttonTwo}
          </Link>
          <Link to='../product' className={styles.back_button}>
            {props.button}
          </Link>
          <h1 className={styles.back}>{props.icon}</h1>
        </div>
      </div>
    </div>
  );
};
