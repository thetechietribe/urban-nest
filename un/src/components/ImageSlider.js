"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Image1 from "../../public/Images/Image1.webp";
import Image2 from "../../public/Images/Image2.webp";
import Image3 from "../../public/Images/Image3.webp";
import Image4 from "../../public/Images/Image4.webp";
import Image5 from "../../public/Images/Image5.webp";

export default () => {
  return (
    <Swiper
      slidesPerView={5}
      breakpoints={{
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={1000}
      loop={true}
      spaceBetween={10}
      modules={[Autoplay]}
    >
      <SwiperSlide>
        <Image src={Image1} height={600} width={450} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image2} height={600} width={450} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image3} height={600} width={450} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image4} height={600} width={450} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image1} height={600} width={450} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image5} height={600} width={450} />
      </SwiperSlide>
    </Swiper>
  );
};
