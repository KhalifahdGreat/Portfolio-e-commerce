import React from "react";
import styles from "../App.module.css";
import { useContext } from "react";
import { AppContext } from "../App";

export const Description = () => {
  const { clickedItem } = useContext(AppContext);

  return (
    <div className={styles.product_description}>
      <div className={styles.product_description_wrapper} key={clickedItem.id}>
        <div className={styles.product_description_img_holder}>
          <img
            className={styles.product_description_img}
            src={clickedItem.images[0]}
            alt='item'
          />
        </div>
        <div className={styles.product_description_details}>
          <h2 className={styles.product_description_name}>
            {clickedItem.title}
          </h2>
          <p className={styles.product_description_text}>
            {clickedItem.description}
          </p>
        </div>
      </div>
    </div>
  );
};
