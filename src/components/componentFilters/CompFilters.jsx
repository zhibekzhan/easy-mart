import React from "react";
import style from "./CompFilters.module.css";

const CompFilters = ({ data }) => {
  console.log("inside the compFilter ", data);
  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const handleClick = (id) => {
    setSelectedFilters((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((item) => item !== id)
        : [...prevSelected, id]
    );
  };
  return (
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
  );
};

export default CompFilters;
