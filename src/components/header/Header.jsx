import React, { useEffect, useState, dropdownRef } from "react";
import style from "./Header.module.css";
import { icon } from "../../assets/icon";
import { useSelector } from "react-redux";
import CartModal from "../cartmenu/CartMenu";
import ProfileModal from "../profileMenu/ProfileMenu";

const Header = () => {
  const [count, setCount] = useState(0);
  const [islogged, setIslogged] = useState(false);
  const { token, loading } = useSelector((state) => state.auth);
  const [open, setOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const handleClickCart = () => {
    setOpenCart(!openCart);
  };
  const handleClickProfile = () => {
    setOpen(!open);
  };

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
      <div className={style.basket_login} onClick={handleClickCart}>
        <div className={style.basket} sx={{}}>
            <img src={icon.header.basket} alt="" />
            {count > 0 && <span>{count}</span>}
          <span>Cart</span>
        </div>
        {token ? (
          <a className={style.login} onClick={handleClickProfile}>
            <span>
              {" "}
              <img src={icon.header.people} alt="icon-people" />
            </span>
          </a>
        ) : (
          <div className={style.login}>
            <a href="/login">
              <img src={icon.header.people} alt="" />
            </a>
            <img src={icon.header.people} alt="" />
            <span>Login</span>
          </div>
        )}
      </div>
      {open && <ProfileModal />}
      {openCart && <CartModal />}
    </div>
  );
};

export default Header;
