import React from "react";
import style from "./Header.module.css"; // Assuming you have a CSS file for styling
import { icon } from "../../assets/icon";

const Header = () => {
  var productsOnBasket = 14;

  return (
    <div className={style.header}>
      <div className={style.logo_location}>
        <img src={icon.logo4} alt="Logo" />
        <div className={style.location_address}>
          <img src={icon.header.location} alt="location" />
          <span>10115 New York</span>
        </div>
      </div>
      <div className={style.search}>
        <img src={icon.header.search} alt="" />
        <input type="text" placeholder="Search by" />
      </div>
      <div className={style.basket_login}>
        <div className={style.basket}>
          <div>
            <img src={icon.header.basket} alt="" />
            <span>{productsOnBasket}</span>
          </div>
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
