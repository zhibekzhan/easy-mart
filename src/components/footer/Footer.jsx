import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={style.footerContainer}>
      <img src="" alt="logo" />
      <div className={style.footerMenuContainer}>
        <div className={style.footerMenu}>
          <h4 className={style.footerMenuText}>About</h4>
          <ul>
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Our Branches</a>
            </li>
            <li>
              <a href="">Changelog</a>
            </li>
          </ul>
        </div>
        <div className={style.footerMenu}>
          <h4 className={style.footerMenuText}>Quick Links</h4>
          <ul>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className={style.footerMenu}>
          <h4 className={style.footerMenuText}>Help & Support</h4>
          <ul>
            <li>
              <a href="#">Terms of Privacy</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Security</a>
            </li>
          </ul>
        </div>
        <div className={style.footerMenu}>
          <h4 className={style.footerMenuText}>Company</h4>
          <ul>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className={style.footerMenu}>
          <h4 className={style.footerMenuText}>Social</h4>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
          </ul>
        </div>
      </div>
      <div class={style.footerCopyRight}>
        <p>All rights reserved. © 2024 EmaStudio</p>
      </div>
    </div>
  );
};

export default Footer;
