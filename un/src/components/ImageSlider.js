"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <div className="slider-wraper">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          500:{
            slidesPerView:  2,
          },
          800:{
            slidesPerView: 3,
          },
          1200:{
            slidesPerView:5,
          },
        }}
        autoplay={{
          delay: 500,
        }}
        loop={true}
        centeredSlides={true}
      >
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_09e68948100640f78678b089f93a57df~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_09e68948100640f78678b089f93a57df~mv2.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_ce378970b8b043e4932f78d34438f9b4~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_ce378970b8b043e4932f78d34438f9b4~mv2.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_8b0e744016fd4b36acfac7d03e7a53c6~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_8b0e744016fd4b36acfac7d03e7a53c6~mv2.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_cc6acf17b64d46d89b6821405cd1db7a~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_cc6acf17b64d46d89b6821405cd1db7a~mv2.jpg"
          ></img>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="slide"
            src="https://static.wixstatic.com/media/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg/v1/fit/w_1500,h_771,q_90/a3a7c5_0b50834537ca4204a77fe68560b91e8e~mv2.jpg"
          ></img>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
