import React from "react";
import style from "./Registration.module.css";
import { icon } from "../../../assets/icon";
import { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Registration = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [emailValue, setEmailValue] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className={style.loginContainer}>
      <div className={style.loginHeader}>
        <img src={icon.logo} alt="logo" />
      </div>

      <div className={style.loginBody}>
        <h4>Sign Up</h4>

        <div className={style.card}>
          <div className={style.tabs}>
            <button
              className={activeTab === "email" ? style.activeTab : ""}
              onClick={() => setActiveTab("email")}>
              📧 Email
            </button>
            <button
              className={activeTab === "phone" ? style.activeTab : ""}
              onClick={() => setActiveTab("phone")}>
              📞 Phone
            </button>
          </div>
          {activeTab === "email" ? (
            <>
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                onChange={setEmailValue}
              />
            </>
          ) : (
            <>
              <label>Phone Number</label>
              {/* <input type="number" placeholder="Enter your phone number" /> */}
              <PhoneInput
                international
                defaultCountry="KG"
                value={phoneNumber}
                onChange={setPhoneNumber}
                placeholder="Enter phone number"
              />
            </>
          )}

          <button className={style.continueBtn}>
            Continue <span>→</span>
          </button>
        </div>

        <div className={style.orDivider}>
          <hr /> <span>Or</span> <hr />
        </div>

        <div className={style.socialButtons}>
          <button className={style.metaBtn}> Sign in with Meta</button>
          <button className={style.googleBtn}> Sign in with Google</button>
        </div>
        <div className={style.registerBtn}>
          <span>Don’t have an account?</span>
          <a href="/signup">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
