import React from "react";
import Header from "../../components/header/Header";
import style from "./Home.module.css"; 
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import FilterPanel from "../../components/filterPanel/FilterPanel";

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
      <BannerCarousel/>
      <FilterPanel />
      
    </div>
  );
};

export default Home;
