import styles from "../App.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../useToggle";
import * as yup from "yup";

export const Login = () => {
  const [state, toggle] = useToggle();

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .required("Username is required and must contain six characters")
      .min(6),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/,
        "Password must have at least one uppercase, one special character, one digit, and be at least six characters long."
      )
      .min(6)
      .required("Password is required"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.form_holder}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input
          type='text'
          placeholder={
            errors.userName ? errors.userName.message : "Enter Username"
          }
          {...register("userName")}
          className={errors.userName && styles.error}
        />

        <div className={styles.password_container}>
          <input
            type={state ? "text" : "password"}
            placeholder={
              errors.password ? errors.password.message : "Enter Password"
            }
            {...register("password")}
            className={errors.password && styles.error}
          />
          <div className={styles.eye_icon} onClick={toggle}>
            {state ? (
              <FontAwesomeIcon icon={faEye} className={styles.eye_icon_see} />
            ) : (
              <FontAwesomeIcon
                icon={faEyeSlash}
                className={styles.eye_icon_unsee}
              />
            )}
          </div>
        </div>

        <input
          className={isValid ? styles.login_btn : styles.inactive}
          type='submit'
          value='Login'
        />

        <div className={styles.sign_up_wrapper}>
          <h1 className={styles.sign_up_message}>
            If you don't have an account
          </h1>
          <Link to='../signup' className={styles.sign_up_link}>
            {" "}
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
};
