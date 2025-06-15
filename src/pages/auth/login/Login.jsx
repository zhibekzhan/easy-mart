import React, { useEffect, useState } from "react";
import style from "./Login.module.css";
import { icon } from "../../../assets/icon";
import "react-phone-number-input/style.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, user, token } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("email");
  const [form, setForm] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  useEffect(() => {
    if (user && token) {
      navigate("/home");
    }
  }, [user, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(form))
      .unwrap()
      .then(() => {
        navigate("/home");
      })
      .catch((err) => console.log("Ошибка:", err));
  };
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
          <form action="submit" onSubmit={handleSubmit}>
            {activeTab === "email" ? (
              <>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </>
            ) : (
              <>
                {" "}
                <label>Phone Number</label>
                <div className={style.phoneInput}>
                  <PhoneInput
                    international
                    defaultCountry="KG"
                    value={form.phoneNumber}
                    placeholder="Enter phone number"
                    onChange={(value) =>
                      setForm({ ...form, phoneNumber: value })
                    }
                  />
                </div>
              </>
            )}
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button type="submit" className={style.continueBtn}>
              {loading ? "Logging in..." : "Continue"}
            </button>
            {error && (
              <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
            )}
          </form>
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
          <a href="/registration">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
