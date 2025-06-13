import React, { useState } from "react";
import style from "./Login.module.css";
import { icon } from "../../../assets/icon";

const Login = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className={style.loginContainer}>
      <div className={style.loginHeader}>
        <img src={icon.logo} alt="logo" />
      </div>

      <div className={style.loginBody}>
        <h4>Login</h4>

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
              <input type="email" placeholder="Enter your email" />
            </>
          ) : (
            <>
              <label>Phone Number</label>
              <input type="number" placeholder="Enter your phone number" />
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

export default Login;
