import React from "react";
import ProductCard from "../productCard/ProductCard.jsx";
import { useGetProductsQuery } from "../../features/products/productSlice.js";
import style from "./ProductList.module.css"; 

const ProductList = () => {
  const { data: products = [], isLoading } = useGetProductsQuery();
  console.log(products);

  return (
    <div className={style.productList}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
