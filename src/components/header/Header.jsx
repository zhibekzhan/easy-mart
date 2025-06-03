import React from "react";
import style from "./Header.module.css"; // Assuming you have a CSS file for styling
import { icon } from "../../assets/icon";
const Header = () => {
  var productsOnBasket = 0;
  return (
    <div className={style.header}>
      <img src={icon.logo} alt="Logo" className={style.logo} />
      <div className="location_address">
        <img src={icon.header.location} alt="" />
        <span>10115 New York</span>
      </div>
      <div className={style.search}>
        <img src={icon.header.search} alt="" />
        <input type="text" placeholder="Search by" />
      </div>
      <div className={style.basket_login}>
        <div className={style.basket}>
          <img src={icon.header.basket} alt="" />
          <span>{productsOnBasket}</span>
          <span>Cart</span>
        </div>
        <div className={style.login}>
          <img src={icon.header.people} alt="" />
          <span>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
