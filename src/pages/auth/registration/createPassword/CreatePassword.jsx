import style from "./CreatePassword.module.css";
import { useState } from "react";
import "react-phone-number-input/style.css";
import { icon } from "../../../../assets/icon";

const CreatePassword = () => {
  // const [activeTab, setActiveTab] = useState("email");
  const [emailValue, setEmailValue] = useState("");
  // const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className={style.loginContainer}>
      <div className={style.loginHeader}>
        <img src={icon.logo} alt="logo" />
      </div>

      <div className={style.loginBody}>
        <span className={style.backButton}>&larr;</span>
        <h1>Create a password</h1>
        <form>
          <div className={style.formGroup}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <button type="submit" className={style.continueButton}>
            Continue <span>&rarr;</span>
          </button>
        </form>
        <ul className={style.passwordRequirements}>
          <li>
            <span>&#10003;</span> Must be at least 8 characters long
          </li>
          <li>
            <span>&#10003;</span> Include at least one uppercase letter (A-Z)
          </li>
          <li>
            <span>&#10003;</span> No spaces allowed
          </li>
          <li>
            <span>&#10003;</span> Include at least one number (0-9)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CreatePassword;
