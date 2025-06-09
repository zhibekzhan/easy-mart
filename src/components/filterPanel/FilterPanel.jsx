import React, { useState } from "react";
import style from "./FilterPanel.module.css";
import { useGetFiltersQuery } from "../../features/products/productSlice";

const FilterPanel = () => {
  const { data, isLoading, error } = useGetFiltersQuery();
  const [selectedId, setSelectedId] = useState([]);
  const handleClick = (id) => {
    // setSelectedId((prevSelected) => {
    //   if (prevSelected.includes(id)) {
    //     return prevSelected.filter((item) => item !== id);
    //   } else {
    //     return [...prevSelected, id];
    //   }
    // });
    setSelectedId(
      (prevSelected) =>
        prevSelected.includes(id)
          ? prevSelected.filter((item) => item !== id) // убрать
          : [...prevSelected, id] // добавить
    );
    // setSelectedId(id === selectedId ? null : id);
  };
  return (
    <div className={style.filterPanelContainer}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((category) => (
          <div
            key={category.id}
            className={`${style.filterItem} ${
              selectedId.includes(category.id) ? style.filterItemSelected : ""
            }`}
            onClick={() => handleClick(category.id)}>
            <img
              src={category.icon_url}
              alt={category.name}
              className={style.filterImage}
            />
            <h3 className={style.filterTitle}>{category.name}</h3>
          </div>
        ))
      ) : (
        <div className={style.loading}>
          {isLoading
            ? "Загрузка фильтров..."
            : error
            ? "Ошибка при загрузке фильтров"
            : "Нет доступных фильтров"}
        </div>
      )}
    </div>
  );
};

export default FilterPanel;
