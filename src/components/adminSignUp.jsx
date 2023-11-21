import "./adminSignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";

export default function AdminSignUp() {
  const validationSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
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
    <div className="overall">
      <div className="container">
        <div className="back">
          <span>Admin</span>
          <span>
            <Link className="backLink" to={"../product"}>
              <FontAwesomeIcon className="back_btn" icon={faArrowLeft} /> Back
            </Link>
          </span>
        </div>
        <h1 className="signHeader">Admin SignUp</h1>
        <p className="greeting">Hello, sign in to the admin account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="">
          <div className="email">
            {isValid}
            <input
              placeholder={errors.email ? errors.email.message : "Enter Email"}
              {...register("email")}
              className="email_input"
              type="text"
            />
          </div>
          <div className="password">
            <input
              placeholder={
                errors.password ? errors.password.message : "Enter Password"
              }
              {...register("password")}
              className="password_input"
              type="password"
            />
          </div>
          <div className="button">
            <input type="submit" className="signIn" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
