import React, { useContext, useState, useEffect } from "react";
import styles from "../App.module.css";
import Axios from "axios";
import { ItemCard } from "./ItemCard";
import { useQuery } from "@tanstack/react-query";
import { AppContext } from "../App";
import { Pagination } from "./Pagination";

const Item = () => {
  const { data: productsData, isLoading } = useQuery({
    queryKey: ["product"],
    queryFn: async () => {
      return Axios.get("https://dummyjson.com/products")
        .then((res) => res.data.products)
        .catch((error) => console.error("Error fetching products:", error));
    },
  });

  const {
    setSelectedItems,
    products,
    setProducts,
    clickedItem,
    selectedCategory,
    setClickedItem,
  } = useContext(AppContext);

  const [currentPage, SetCurrentPage] = useState(1);

  const recordsPerPage = 9;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = products.slice(firstIndex, lastIndex);

  const npage = Math.ceil(products.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  useEffect(() => {
    if (productsData && productsData.length > 0) {
      setProducts(productsData);
    }
  }, [productsData, setProducts]);

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

  const handleItemClick = (item) => {
    setClickedItem(item);
    console.log(clickedItem);
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
            {(selectedCategory ? selectedCategory : records).map(
              (prod, key) => (
                <li onClick={() => handleItemClick(prod)} key={key}>
                  <ItemCard
                    image={prod?.images[0]}
                    title={prod?.title}
                    price={prod?.price}
                    cartItem={() => cartItemAddHandler(prod)}
                    description={prod.description}
                    id={prod.id}
                    prod={prod}
                  />
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles.pagination_wrapper}>
          <Pagination
            currentPage={currentPage}
            SetCurrentPage={SetCurrentPage}
            numbers={numbers}
            npage={npage}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
