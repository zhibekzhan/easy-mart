import React from "react";
import style from "./TrendingStoreFavs.module.css";
import { useGetTrendingFavsFilterQuery } from "../../features/products/productSlice";
import ProductList from "../productList/ProductList";
import CompFilters from "../componentFilters/CompFilters";

export const TrendingStoreFavs = () => {
  const { data, isLoading, error } = useGetTrendingFavsFilterQuery();

  return (
    <div className={style.trendingStoreFavsContainer}>
      <div className={style.trendingStoreFavsContent}>
        <div className={style.trendingStoreFavsHeader}>
          <h3>Trending Store Favorites</h3>
          <div className={style.viewAllButton}>
            <button>View All &rarr;</button>
          </div>
        </div>
        <div className={style.trendingFavsFilter}>
          <CompFilters data={data} />{" "}
        </div>
        <div className={style.trendingFavsProducts}>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default TrendingStoreFavs;

{
  /* <div className={style.trendingFavsFilter}>
        {Array.isArray(data) && data.length > 0
          ? data.map((filter) => {
              return (
                <button
                  key={filter.id}
                  className={
                    selectedFilters.length > 0
                      ? style.selectedTrendingFavsFilterItemText
                      : style.trendingFavsFilterItemText
                  }
                  onClick={handleClick}>
                  {filter.name}
                </button>
              );
            })
          : null}
      </div> */
}
