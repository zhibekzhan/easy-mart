import React from "react";
import style from "./WeeklySoldOut.module.css";
import CompFilters from "../componentFilters/CompFilters";
import { useGetTrendingFavsFilterQuery } from "../../features/products/productSlice";
import ProductList from "../productList/ProductList";

const WeeklySoldOut = () => {
  const { data, isLoading, error } = useGetTrendingFavsFilterQuery();

  return (
    <div className={style.weeklySoldOutContainer}>
      <div className={style.trendingStoreFavsContainer}>
        <div className={style.trendingStoreFavsHeader}>
          <div className={style.trendingStoreFavsHeaderContent}>
            <h3>Trending Store Favorites</h3>
            <div className={style.trendingFavsFilter}>
              <CompFilters data={data} />{" "}
            </div>
          </div>

          <div className={style.trendingFavsTextHeader}>
            <div className={style.viewAllButton2}>
              <div className={style.viewAllButton}>
                <p>Freshness Guarantee</p>
                <h3>Weekly sold 1k+</h3>
                <button>View More &rarr;</button>
              </div>
            </div>
          </div>

        </div>
        <div className={style.trendingFavsProducts}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default WeeklySoldOut;
