import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import { icon } from "../../assets/icon";
import { useSelector } from "react-redux";
import CartModal from "../cartmenu/CartMenu";
import ProfileModal from "../profileMenu/ProfileMenu";

const Header = () => {
  const [count, setCount] = useState(14);
  const [openProfile, setOpenProfile] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const cartRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (openCart && cartRef.current && !cartRef.current.contains(e.target)) {
        setOpenCart(false);
      }

      if (
        openProfile &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setOpenProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openCart, openProfile]);

  const handleClickCart = () => {
    setOpenCart((prev) => !prev);
    // setOpenProfile(false);
  };

  const handleClickProfile = () => {
    setOpenProfile((prev) => !prev);
    // setOpenCart(false);
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo_location}>
        <img src={icon.logo4} alt="Logo" />
        <div className={styles.location_address}>
          <img src={icon.header.location} alt="location" />
          <span>10115 New York</span>
        </div>
      </div>

      <div className={styles.search}>
        <img
          src={icon.header.search}
          alt="search"
          className={styles.searchIcon}
        />
        <input type="text" placeholder="Search By" />
      </div>

      <div className={styles.basket_login}>
        <div className={styles.basket} onClick={handleClickCart}>
          <div>
            <img src={icon.header.basket} alt="Cart" />
            {count > 0 && <span>{count}</span>}
          </div>
          <span>Cart</span>
        </div>
        {openCart && (
          <div ref={cartRef}>
            <CartModal />
          </div>
        )}

        {token ? (
          <>
            <div className={styles.login} onClick={handleClickProfile}>
              <img src={icon.header.people} alt="Profile" />
            </div>
            {openProfile && (
              <div ref={profileRef}>
                <ProfileModal />
              </div>
            )}
          </>
        ) : (
          <a href="/login" className={styles.login}>
            <img src={icon.header.people} alt="Login" />
            <span>Login</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
