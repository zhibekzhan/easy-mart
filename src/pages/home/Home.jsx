import React from "react";
import Header from "../../components/header/Header";
import style from "./Home.module.css";
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import FilterPanel from "../../components/filterPanel/FilterPanel";
import BestSeller from "../../components/bestSeller/BestSeller";
import TrendingStoreFavs from "../../components/trendinStoreFavs/TrendingStoreFavs";
import Footer from "../../components/footer/Footer";
import OrderNow from "../../components/orderNow/OrderNow";
import WeeklySoldOut from "../../components/weeklySoldOut/WeeklySoldOut";
import OderNow2 from "../../components/orderNow2/OderNow2";

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <BannerCarousel />
      <FilterPanel />
      <BestSeller />
      <TrendingStoreFavs />
      <OrderNow />
      <WeeklySoldOut />
      <OderNow2 />
      <Footer/>
    </div>
  );
};

export default Home;
