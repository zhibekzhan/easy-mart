import React from "react";
import Header from "../../components/header/Header";
import style from "./Home.module.css"; 

const Home = () => {
  return (
    <div className={style.container}>
      <Header />
    </div>
  );
};

export default Home;
