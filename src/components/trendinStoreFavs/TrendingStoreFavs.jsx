import React from "react";
import style from "./TrendingStoreFavs.module.css";
import { useGetTrendingFavsFilterQuery } from "../../features/products/productSlice";
import ProductList from "../productList/ProductList";

export const TrendingStoreFavs = () => {
  const { data, isLoading, error } = useGetTrendingFavsFilterQuery();

  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const handleClick = (id) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <div className={style.trendingStoreFavsContainer}>
      <div className={style.trendingStoreFavsHeader}>
        <h3>Trending Store Favorites</h3>
        <div className={style.viewAllButton}>
          <button>View All &rarr;</button>
        </div>
      </div>

      <div className={style.trendingFavsFilter}>
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
      </div>
      <div className={style.trendingFavsProducts}>
        <ProductList />
      </div>
    </div>
  );
};

export default TrendingStoreFavs;
