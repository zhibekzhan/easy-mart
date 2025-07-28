import React, { useEffect, useRef, useState } from "react";
import style from "./ProfileMenu.module.css";
import { useNavigate } from "react-router-dom";

const ProfileModal = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const navigate = useNavigate;
  const userData = JSON.parse(localStorage.getItem("user"));
  const handleClick = () => {

  };
  return (
    <div className={style.dropdownMenu} ref={menuRef}>
      <div className={style.profileHeader}>
        <img src="/avatar.jpg" alt="User" className="avatar" />
        <div>
          <div className={style.username}>Alicii Virgo</div>
          <div className={style.badge}>🥈 Silver</div>
        </div>
        <div className={style.points}>🎁 2324 Points</div>
      </div>

      <ul className={style.menuItems}>
        <li>📦 My Orders</li>
        <li>
          🎁 Refer Friends,{" "}
          <span className={style.highlight}>Get free delivery</span>
        </li>
        <li>🎫 Coupons</li>
        <li>📒 My Recipes</li>
        <li>⚙️ Account Settings</li>
        <li>❓ Help Center</li>
      </ul>
    </div>
  );
};

export default ProfileModal;
