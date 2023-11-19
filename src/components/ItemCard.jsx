import styles from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

export const ItemCard = ({ image, title, price }) => {
  return (
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.img_holder}>
          <img className={styles.card_img} src={`${image}`} alt='item' />
        </div>
        <div className={styles.details_wrapper}>
          <div className={styles.title_wrapper}>
            <h2 className={styles.item_name}>{title}</h2>
          </div>
          <div className={styles.details_text}>
            <div className={styles.price_wrapper}>
              <h2 className={styles.item_price}>${price}</h2>
            </div>
            <button className={styles.item_shop}>
              <FontAwesomeIcon icon={faBagShopping} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
