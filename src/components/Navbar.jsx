import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { HomePage } from "./HomePage";
import { Link } from "react-router-dom";
import styles from "../App.module.css";
import { Form } from "./Form";
const Navbar = () => {
  return (
    <div>
      <div className={styles.sign_up}>
        <div className={styles.nav_wrapper}>
          <div className={styles.nav}>
            <div className={styles.user}>
              <h1 className={styles.user_name}>User</h1>
            </div>
            <div className={styles.user}>
              <Link to='../homepage' className={styles.back_button}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <h1 className={styles.back}>Back</h1>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className={styles.header_wrapper}>
          <div className={styles.sign_up_header}>
            <div className={styles.header}>Sign In</div>
            <p className={styles.message}>
              Hello there! Sign in to access <br />
              your account
            </p>
          </div>
        </div>

        <div className={styles.form_wrapper}>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
