import React from "react";

import styles from "./BannerCarousel.module.css";

import banner1 from "../../assets/header/banners/banner1.png";
import banner2 from "../../assets/header/banners/banner2.png";
import banner3 from "../../assets/header/banners/banner3.png";
import banner4 from "../../assets/header/banners/banner4.png";

const photos = [
  banner1,
  banner2,
  banner4,
  banner3,
  banner2,
  banner4,
  banner2,
  banner1,
  banner3,
  banner1,
  banner4,
];

const BannerCarousel = () => {
  const half = Math.ceil(photos.length / 2);
  const firstHalfCarousel = photos.slice(0, half);
  const secondHalfCarousel = photos.slice(half);
  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {firstHalfCarousel.map((url, i) => (
          <div className={styles.carouselItem} key={i}>
            <img src={url} alt={`photo-${i}`} />
          </div>
        ))}
      </div>
      <div className={styles.carousel}>
        {secondHalfCarousel &&
          secondHalfCarousel.map((url, i) => (
            <div className={styles.carouselItem} key={i}>
              <img src={url} alt={`photo-${i}`} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
