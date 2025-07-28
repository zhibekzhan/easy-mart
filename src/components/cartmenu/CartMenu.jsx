import React from 'react';
import styles from './Cartmenu.module.scss';

const CartModal = () => {
  // const userData = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={styles.cartModal}>
      <h2>My Cart</h2>
      <hr className={styles.divider} />
      <div className={styles.cartIcon}>
        <span>14</span>
      </div>
      <h3>Your cart is hungry</h3>
      <p>Fill Your Cart with Delicious Food. Let’s Shop!</p>
    </div>
  );
};

export default CartModal;
