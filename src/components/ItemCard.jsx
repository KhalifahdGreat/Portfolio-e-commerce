import styles from "../App.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { AppContext } from "../App";

export const ItemCard = ({ image, title, price, cartItem, id }) => {
  const [itemNumber, setItemNumber] = useState(0);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const { setAmount, setSelectedItems } = useContext(AppContext);

  const addHandler = () => {
    if (!hasBeenClicked) {
      setItemNumber((prev) => prev + 1);
      setAmount((prev) => prev + 1);
      setHasBeenClicked(true);
      cartItem();
      setSelectedItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id ? { ...item, Units: 1 } : item
        );
        console.log(updatedItems);
        return updatedItems;
      });
    } else {
      setItemNumber((prev) => prev + 1);
      setSelectedItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id ? { ...item, Units: itemNumber + 1 } : item
        );
        console.log(updatedItems);
        return updatedItems;
      });
    }

    // Add to cart
  };

  const deductHandler = () => {
    if (itemNumber > 0) {
      setItemNumber(itemNumber - 1);

      setSelectedItems((prevItems) => {
        const updatedItems = prevItems.map((item) =>
          item.id === id
            ? { ...item, Units: Math.max(item.Units - 1, 0) }
            : item
        );
        console.log(updatedItems);
        return updatedItems.filter((item) => item.Units > 0); // Remove items with 0 Units
      });

      if (itemNumber === 1) {
        // Decrease amount when itemNumber reaches zero
        setAmount((prev) => Math.max(prev - 1, 0));
      }
    }

    // If itemNumber becomes zero, increase amount on the next addHandler
    if (itemNumber - 1 === 0) {
      setHasBeenClicked(false);
    }
  };

  return (
    // <link to={`./${id}`}>
    <div className={styles.card_wrapper}>
      <div className={styles.card}>
        <div className={styles.img_holder}>
          <img className={styles.card_img} src={`${image}`} alt="item" />
        </div>
        <div className={styles.details_wrapper}>
          <div className={styles.title_wrapper}>
            <h2 className={styles.item_name}>{title}</h2>
          </div>
          <div className={styles.details_text}>
            <div className={styles.price_wrapper}>
              <h2 className={styles.item_price}>${price}</h2>
            </div>
            <div
              className={
                itemNumber === 0
                  ? styles.quantity_holder_115px
                  : styles.quantity_holder
              }
            >
              <div className={styles.quantity_wrapper}>
                <h1 className={styles.quantity}>{itemNumber}</h1>
              </div>

              {itemNumber > 0 && (
                <button onClick={deductHandler} className={styles.item_shop}>
                  <FontAwesomeIcon
                    icon={faMinus}
                    className={styles.item_add_shop}
                  />
                </button>
              )}
              {
                <button onClick={addHandler} className={styles.item_shop}>
                  <FontAwesomeIcon
                    className={styles.item_add_shop}
                    icon={faBagShopping}
                  />
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    // </link>
  );
};
