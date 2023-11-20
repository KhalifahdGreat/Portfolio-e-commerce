import { Link, useLocation } from "react-router-dom";
import { Form } from "./Form";
import { Login } from "./Login";
import { Navigation } from "./Navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../App.module.css";

const Navbar = () => {
  const location = useLocation();
  const isSignUpPage = location.pathname === "/signup";
  const isLoginPage = location.pathname === "/login";

  return (
    <div>
      <div className={styles.sign_up}>
        <Navigation
          name={"User"}
          icon={"back"}
          button={
            <Link to={isLoginPage ? "../product" : "../login"}>
              <FontAwesomeIcon
                icon={faArrowLeft}
                className={styles.back_button}
              />
            </Link>
          }
        />
        {/* Header */}
        <div className={styles.header_wrapper}>
          <div className={styles.sign_up_header}>
            <div className={styles.header}>
              {isSignUpPage ? "Sign Up" : "Log In"}
            </div>
            <p className={styles.message}>
              Hello there! {isSignUpPage ? "Sign up" : "Log in"} to access{" "}
              <br />
              your account
            </p>
          </div>
        </div>

        <div className={styles.form_wrapper}>
          {isSignUpPage && <Form />}
          {isLoginPage && <Login />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
