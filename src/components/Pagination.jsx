import { Link } from "react-router-dom";
import styles from "../App.module.css";
export const Pagination = ({ currentPage, SetCurrentPage, numbers, npage }) => {
  const prevPage = () => {
    if (currentPage !== 1) {
      SetCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    SetCurrentPage(id);
  };
  const nextPage = () => {
    if (currentPage < npage) {
      SetCurrentPage(currentPage + 1);
    }
  };
  return (
    <ul className={styles.pagination}>
      <div className={styles.link_container}>
        <li className={styles.page_item}>
          <Link className={styles.page_link} onClick={prevPage} to='#'>
            Prev
          </Link>
        </li>
      </div>
      <div className={styles.link_container_list}>
        {numbers.map((n, i) => (
          <li
            className={`page-item ${currentPage === n ? `active` : ""}`}
            key={i}>
            <Link
              to='#'
              className={styles.page_item_link}
              onClick={() => changePage(n)}>
              {n}
            </Link>
          </li>
        ))}
      </div>
      <div className={styles.link_container}>
        <li className={styles.page_item}>
          <Link onClick={nextPage} className={styles.page_link} to='#'>
            Next
          </Link>
        </li>
      </div>
    </ul>
  );
};
