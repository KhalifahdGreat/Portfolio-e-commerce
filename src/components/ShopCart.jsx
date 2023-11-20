import styles from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { AppContext } from "../App";

export const ShoppingCart = () => {
  const { state, toggle, selectedItems, setSelectedItems } =
    useContext(AppContext);

  const removeHandler = (index) => {
    // Create a new array without the item at the specified index
    const updatedItems = [
      ...selectedItems.slice(0, index),
      ...selectedItems.slice(index + 1),
    ];

    // Update the selectedItems state with the new array
    setSelectedItems(updatedItems);
  };

  return (
    <div className={`${styles.shop_cart_module} ${state ? styles.open : ""}`}>
      <div className={styles.shop_cart_wrapper}>
        <div className={styles.shop_cart_icon_wrapper}>
          <button onClick={toggle} className={styles.shop_cart_icon_btn}>
            <FontAwesomeIcon className={styles.shop_cart_icon} icon={faXmark} />
          </button>
        </div>
        <div className={styles.shop_cart_title}>Your Cart</div>
        <div className={styles.display_cart_items}>
          {/* Map through selectedItems and render a list */}
          <ul className={styles.cart_items_list}>
            {selectedItems.map((item, index) => (
              <li key={index} className={styles.cart_item}>
                <div className={styles.cart_item_info}>
                  <h3 className={styles.cart_item_title}>{item.title}</h3>
                  <p className={styles.cart_item_price}>${item.price}</p>
                  <h3 className={styles.cart_item_units}>{item.Units} units</h3>
                  <button
                    onClick={() => removeHandler(index)}
                    className={styles.cart_item_remove}>
                    Remove
                  </button>
                </div>

                <img
                  src={item.images[2]}
                  alt={`Item ${index + 1}`}
                  className={styles.cart_item_image}
                />

                {/* buttons */}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.shop_cart_end} />
        <div className={styles.shop_cart_icon_wrapper}>
          {selectedItems.length > 0 && (
            <h1 className={styles.shop_cart_total_message}>
              Total ${" "}
              <span className={styles.shop_cart_price}>
                {selectedItems
                  .reduce((total, item) => total + item.price * item.Units, 0)
                  .toFixed(2)}
              </span>
            </h1>
          )}
        </div>

        <div className={styles.buy_btn_wrapper}>
          {selectedItems.length > 0 && (
            <button className={styles.buy_btn}>Buy now</button>
          )}
        </div>
      </div>
    </div>
  );
};
