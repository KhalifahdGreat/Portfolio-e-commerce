import styles from "../App.module.css";
import Axios from "axios";
import { ItemCard } from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AppContext } from "../App";
const Item = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return Axios.get("https://dummyjson.com/products")
        .then((res) => res.data.products)
        .catch((error) => console.error("Error fetching products:", error));
    },
  });

  const { setSelectedItems } = useContext(AppContext);

  if (isLoading) {
    return (
      <div className={styles.loading_wrapper}>
        <div className={styles.loading_spinner}></div>
      </div>
    );
  }

  const cartItemAddHandler = (item) => {
    setSelectedItems((prevItems) => {
      const updatedItems = [...prevItems, item];
      console.log(updatedItems);
      return updatedItems;
    });
  };

  return (
    <div className={styles.item}>
      <div className={styles.item_wrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Shop Products</h1>
        </div>
        {/* display items */}
        <div className={styles.item_product_wrapper}>
          <ul className={styles.items}>
            {/* map through products and create a list of item cards*/}
            {data.map((prod, key) => (
              <li key={key}>
                <ItemCard
                  image={prod?.images[0]}
                  title={prod?.title}
                  price={prod?.price}
                  cartItem={() => cartItemAddHandler(prod)}
                  id={prod.id}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
