"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Glider from "react-glider";
import "glider-js/glider.min.css";
import "swiper/css";
import Image from "next/image";
import Image1 from "../../../public/Images/Image1.webp";
import Image2 from "../../../public/Images/Image2.webp";
import Image3 from "../../../public/Images/Image3.webp";
import Image4 from "../../../public/Images/Image4.webp";
import Image5 from "../../../public/Images/Image5.webp";
import { Box } from "@mui/material";

export default () => {
  const images = [Image1, Image2, Image3, Image4, Image5];

  return (
    // <Box sx={{ width: "100%" }}>
    //   <Swiper
    //     breakpoints={{
    //       500: {
    //         slidesPerView: 2,
    //       },
    //       800: {
    //         slidesPerView: 3,
    //       },
    //       1200: {
    //         slidesPerView: 4,
    //       },
    //     }}
    //     autoplay={{
    //       delay: 2000,
    //       disableOnInteraction: false,
    //     }}
    //     loop={true}
    //     spaceBetween={10}
    //     modules={[Autoplay]}
    //   >
    //     {images.map((image, index) => (
    //       <SwiperSlide key={index}>
    //         <Image src={image} height={600} width={450} />
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </Box>
    <Glider
      draggable
      slidesToShow={1}
      slidesToScroll={1}
      responsive={[
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
      ]}
      Autoplay={true}
      duration={1}
      style={{ height: "600px"}}
    >
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          height={600}
          width={450}
          style={{ marginRight: "10px", height: "600px" }}
        />
      ))}
    </Glider>
  );
};
