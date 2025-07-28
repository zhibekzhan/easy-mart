// import React, { useEffect, useRef, useState } from "react";
// import style from "./ProfileMenu.module.scss";
// import { useNavigate } from "react-router-dom";

// const ProfileModal = () => {
//   const [open, setOpen] = useState(false);
//   const buttonRef = useRef(null);
//   const menuRef = useRef(null);

//   const navigate = useNavigate;
//   const userData = JSON.parse(localStorage.getItem("user"));
//   const handleClick = () => {

//   };
//   return (
//     <div className={style.dropdownMenu} ref={menuRef}>
//       <div className={style.profileHeader}>
//         <img src="/avatar.jpg" alt="User" className="avatar" />
//         <div>
//           <div className={style.username}>Alicii Virgo</div>
//           <div className={style.badge}>🥈 Silver</div>
//         </div>
//         <div className={style.points}>🎁 2324 Points</div>
//       </div>

//       <ul className={style.menuItems}>
//         <li>📦 My Orders</li>
//         <li>
//           🎁 Refer Friends,{" "}
//           <span className={style.highlight}>Get free delivery</span>
//         </li>
//         <li>🎫 Coupons</li>
//         <li>📒 My Recipes</li>
//         <li>⚙️ Account Settings</li>
//         <li>❓ Help Center</li>
//       </ul>
//     </div>
//   );
// };

// export default ProfileModal;

import React from "react";
import styles from "./ProfileMenu.module.scss";
import { useNavigate } from "react-router-dom";

import {
  MdOutlineInventory2,
  MdCardGiftcard,
  MdSettings,
} from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";
import user_avatat from "./../../assets/profile/profilePhoto.png";

const ProfileModal = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.dropdownMenu}>
      <div className={styles.profileHeader}>
        <img src={user_avatat} alt="User" className={styles.avatar} />
        <div>
          <div className={styles.username}>Alicii Virgo</div>
          <div className={styles.badge}>🥈 Silver</div>
        </div>
        <div className={styles.points}>
          <MdCardGiftcard /> 2324 Points
        </div>
      </div>

      <ul className={styles.menuItems}>
        <li>
          <MdOutlineInventory2 />
          <span>My Orders</span>
        </li>
        <li>
          <MdCardGiftcard />
          <span>
            Refer Friends,{" "}
            <span className={styles.highlight}>Get free delivery</span>
          </span>
        </li>
        <li>
          <FaTicketAlt />
          <span>Coupons</span>
        </li>
        <li>
          <IoBookOutline />
          <span>My Recipes</span>
        </li>
        <li>
          <MdSettings />
          <span>Account Settings</span>
        </li>
        <li>
          <FiHelpCircle />
          <span>Help Center</span>
        </li>
      </ul>
    </div>
  );
};

export default ProfileModal;
