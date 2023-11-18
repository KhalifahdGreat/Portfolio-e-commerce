import styles from "../App.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useToggle } from "../useToggle";
import * as yup from "yup";

export const Form = () => {
  const [state, toggle] = useToggle();
  const [state2, toggle2] = useToggle();

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .required("Username is required and must contain six characters")
      .min(6),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{6,}$/,
        "Password must have at least one uppercase, one special character, one digit, and be at least six characters long."
      )
      .min(6)
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password doesn't match")
      .required("Confirm Password is required"),
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
        <input
          type='text'
          placeholder={errors.email ? errors.email.message : "Enter Email"}
          {...register("email")}
          className={errors.email && styles.error}
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

        <div className={styles.password_container}>
          <input
            type={state2 ? "text" : "password"}
            placeholder={
              errors.confirmPassword
                ? errors.confirmPassword.message
                : "Confirm Password"
            }
            {...register("confirmPassword")}
            className={errors.confirmPassword && styles.error}
          />
          <div className={styles.eye_icon} onClick={toggle2}>
            {state2 ? (
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
          className={isValid ? styles.submit_btn : styles.inactive}
          type='submit'
          value='submit'
        />
      </form>
    </div>
  );
};
