import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { HomePage } from "./HomePage";
import { Link } from "react-router-dom";
import styles from "../App.module.css";

export const UserSignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sign_up}>
        <div className={styles.nav}>
          <div className={styles.user}>
            <h1 className>User</h1>
          </div>
        </div>
        <div className={styles.user}>
          <Link to='../homepage' className={styles.back_button}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </Link>
          <h1>Back</h1>
        </div>
      </div>
    </div>
  );
};
