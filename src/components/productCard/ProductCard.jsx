import React from "react";
import style from "./ProductCard.module.css";

const ProductCard = (product) => {
  const pricePerPound = "$2.71/lb";
  product = product.product || product;

  return (
    <div className={style.productCard}>
      <div className={style.imageContainer}>
        {/* <img src={product.image} alt={product.name} /> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Face-smile.png"
          alt={product.name}
        />
      </div>

      <p className={style.productName}>{product.name}</p>
      <p className={style.pricePerPound}>{pricePerPound}</p>
      <div className={style.priceContainer}>
        <p className={style.priceBold}>${product.price}</p>
        <p className={style.priceGray}>${product.price}</p>
      </div>
      <div className={style.leftContainer}>
        <span className={style.firstLeft}>{product.left}   Left</span>
        <span className={style.line}></span>
        <span className={style.secondLeft}>{product.left}   Left</span>
      </div>
    </div>
  );
};

export default ProductCard;
