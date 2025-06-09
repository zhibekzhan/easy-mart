import React from "react";

import styles from "./BannerCarousel.module.css"; // твой CSS-модуль

const photos = [
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  'https://osh.kzmc.kg/media/uploads/images/load/kran_sharovoi_1.jpg',
  'https://go.trader.ca/wp-content/uploads/2022/02/250X250.png',
  "https://cdn.pixabay.com/photo/2015/07/30/17/57/photographer-868106_1280.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://images.pexels.com/photos/2893685/pexels-photo-2893685.jpeg?cs=srgb&dl=pexels-ozgomz-2893685.jpg&fm=jpg",
  "https://thumbs.dreamstime.com/b/%D0%BA%D1%83%D1%87%D0%B0-%D1%80%D0%B0%D0%B7%D0%BB%D0%B8%D1%87%D0%BD%D1%8B%D1%85-%D1%86%D0%B2%D0%B5%D1%82%D0%BD%D1%8B%D1%85-%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82%D0%BE%D0%B2-%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85-%D1%86%D0%B2%D0%B5%D1%82%D0%BE%D0%B2-ai-361719185.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
  "https://www.skyweaver.net/images/media/wallpapers/wallpaper1.jpg",
];

const BannerCarousel = () => {
const half = Math.ceil(photos.length / 2);
const firstHalfCarousel = photos.slice(0, half);
const secondHalfCarousel = photos.slice(half);
  return (
    // <div className={styles.bannerContainer}>
    //   <div className={styles.bannerCarousel}>
    //     <Swiper
    //       spaceBetween={0.15}
    //       // slidesPerView={2}
    //       grid={{ rows: 2 }}
    //       modules={[Grid]}>
    //       {photos.map((url, i) => (
    //         <SwiperSlide key={i}>
    //           <div className={styles.card}>
    //             <img src={url} alt={`Slide ${i}`} />
    //           </div>
    //         </SwiperSlide>
    //       ))}
    //     </Swiper>
    //   </div>
    // </div>
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        {firstHalfCarousel.map((url, i) => (
          <div className={styles.carouselItem} key={i}>
            <img src={url} alt={`photo-${i}`} />
          </div>
        ))}
      </div>
      <div className={styles.carousel}>
        {secondHalfCarousel && secondHalfCarousel.map((url, i) => (
          <div className={styles.carouselItem} key={i}>
            <img src={url} alt={`photo-${i}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;
