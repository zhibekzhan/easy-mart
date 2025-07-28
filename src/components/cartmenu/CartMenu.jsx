import React from 'react';
import style from './Cartmenu.module.css'

const CartModal = () => {
    // const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={style.cartModal}>
        <h2>My Cart</h2>
        <div className={style.cartIcon}>
          <span>14</span>
        </div>
        <p>Your cart is hungry</p>
        <p>Fill Your Cart with Delicious Food. Let's Shop!</p>
      </div>
  );
};

export default CartModal;