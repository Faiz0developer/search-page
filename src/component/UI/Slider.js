import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Card from "../Card";
import styles from "../../styles/Slider.module.css";

const Slider = () => {
  const categoriesData = [
    "Mobikwik Recharge",
    "Health & Beauty",
    "Services",
    "Fashion & Apparels",
    "Travel",
    "Flowers & Gifts",
    "Electronics",
    "Food & Grocery",
    "Baby Care and Toys",
    "Domain & Hosting",
    "Laptop and PC Accessories",
    "Home & Kitchen",
    "Entertainment",
    "Gaming",
    "Jewellery",
  ];
  return (
    <section className={styles.section}>
      <div className={styles.sliderContainer}>
        <h4>TOP CATEGORIES</h4>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              loopFillGroupWithBlank:true
            },
            450: {
              slidesPerView: 2,
              spaceBetween: 20,
              slidesPerGroup: 2,
              loopFillGroupWithBlank:true
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
              slidesPerGroup: 3,
              loopFillGroupWithBlank:true
            },
            850: {
              slidesPerView: 4,
              spaceBetween: 50,
              slidesPerGroup: 4,
              loopFillGroupWithBlank:true
            },
            1100: {
              slidesPerView: 5,
              spaceBetween: 50,
              slidesPerGroup: 5,
              loopFillGroupWithBlank:true
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 50,
              slidesPerGroup: 6,
              loopFillGroupWithBlank:true
            },
          }}
          className={styles.sliderCard}
        >
          {categoriesData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Card item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
