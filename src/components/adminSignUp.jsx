import "./adminSignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function AdminSignUp() {
  return (
    <div className="overall">
      <div className="container">
        <div className="back">
          <span>Admin</span>
          <span>
            <FontAwesomeIcon className="back_btn" icon={faArrowLeft} /> Back
          </span>
        </div>
        <h1 className="signHeader">Admin SignUp</h1>
        <p className="greeting">Hello, sign in to the admin account</p>
        <div className="email">
          <input
            placeholder="Email"
            className="email_input"
            name="email"
            type="text"
          />
        </div>
        <div className="password">
          <input
            placeholder="Password"
            className="password_input"
            name="email"
            type="password"
          />
          <div className="button">
            <button className="signIn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}
