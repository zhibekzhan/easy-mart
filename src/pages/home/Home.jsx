import React from "react";
import Header from "../../components/header/Header";
import style from "./Home.module.css";
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import ProductList from "../../components/productList/ProductList";
import BestSeller from "../../components/bestSeller/BestSeller";
import TrendingStoreFavs from "../../components/trendinStoreFavs/TrendingStoreFavs";
import Footer from "../../components/footer/Footer";
import OrderNow from "../../components/orderNow/OrderNow";

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <BannerCarousel />
      <FilterPanel />
      <BestSeller />
      <TrendingStoreFavs />
      <OrderNow />
      <Footer/>
    </div>
  );
};

export default Home;
