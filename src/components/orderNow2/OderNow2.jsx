import React from "react";
import style from "./OderNow2.module.css";
import {
  useGetCartProductsQuery,
  useGetProductsQuery,
  useGetTrendingFavsFilterQuery,
} from "../../features/products/productSlice";
import ProductCard from "../productCard/ProductCard";

const OrderNow2 = () => {
  const { data, isLoading, error } = useGetCartProductsQuery();
  const { data: productsData } = useGetProductsQuery();
  const { data: trendingData } = useGetTrendingFavsFilterQuery();
  return (
    <div className={style.orderNowContainer}>
      <div className={style.orderNowContent}>
        <div className={style.productsFromCartContainer}>
          {Array.isArray(data) && data.length > 0 ? (
            data
              .slice(0, 3)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  style={style}
                  className={style.productCard}
                />
              ))
          ) : productsData && productsData.length > 0 ? (
            productsData
              .slice(0, 3)
              .map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  style={style}
                  className={style.productCard}
                />
              ))
          ) : (
            <div className={style.noProducts}>No products in cart</div>
          )}
        </div>
        <div className={style.orderNowTitleContainer}>
          <p>Get 10% OFF On Your First Order</p>
          <h3 className={style.orderNowTitle}>Order Now Your Grocery!</h3>

          <div className={style.orderNowButtonsContainer}>
            <div className={style.orderCountsContainer}>
              <div className={style.orderCountsContent}>
                <h4 className={style.orderCounts}>1k+</h4>
                <p className={style.orderCountsPer}>Items</p>
              </div>
              <div className={style.orderCountsContent}>
                <h4 className={style.orderCounts}>20</h4>
                <p className={style.orderCountsPer}>Minutes</p>
              </div>
              <div className={style.orderCountsContent}>
                <h4 className={style.orderCounts}>30%</h4>
                <p className={style.orderCountsPer}>Up to offers</p>
              </div>
            </div>
            <button className={style.orderNowButton}>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNow2;
