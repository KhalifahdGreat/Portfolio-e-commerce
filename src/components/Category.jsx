import React, { useContext } from "react";
import styles from "../App.module.css";
import { AppContext } from "../App";

export const Category = () => {
  const { products, selectedCategory, setSelectedCategory } =
    useContext(AppContext);

  // Create a Set to store unique categories
  const uniqueCategories = new Set(products.map((prod) => prod.category));

  const categoryListHandler = (category) => {
    // Filter products based on the selected category
    const filteredProducts = products.filter((prod) => {
      return category === "" || prod.category === category;
    });

    // Set the filtered products to the category list in the context
    setSelectedCategory(filteredProducts);

    // Log the filtered products to the console
    console.log(filteredProducts);
  };

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    categoryListHandler(selectedValue);
  };

  return (
    <div className={styles.category_wrapper}>
      <select
        className={styles.category_options}
        name='category'
        id='category'
        value={selectedCategory.length > 0 ? selectedCategory[0].category : ""}
        onChange={handleCategoryChange}>
        <option value=''>All</option>
        {/* Map over unique categories and render options */}
        {[...uniqueCategories].map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
