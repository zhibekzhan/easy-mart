import React from "react";
import style from "./BestSeller.module.css";
import ProductList from "../productList/ProductList";

const BestSeller = () => {
  const countBestSellers = 40;

  return (
    <div className={style.bestSellerContainer}>
      <div className={style.bestSellerHeader}>
        <h5 className={style.bestSellerTitle}>Best Seller</h5>

        <div className={style.bestSellerButtonContainer}>
          <button>View All (+ {countBestSellers})   &rarr;</button>

          <div className={style.directionIconsContainer}>
            <span className={style.directionIcons}>&lt;</span>
            <span className={style.directionIcons}>&gt;</span>
          </div>
        </div>
      </div>

      <div className="ProductList">
        <ProductList />
      </div>
    </div>
  );
};

export default BestSeller;
