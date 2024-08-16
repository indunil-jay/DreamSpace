"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Image from "next/image";

interface ISwipper {
  slides: any[];
  pagination?: boolean;
  navigation?: boolean;
  direction?: "horizontal" | "vertical"; // Add the direction prop
  reverse?: boolean; // Add the reverse prop
}

export const Swipper = ({
  slides,
  navigation = true,
  pagination = true,
  direction = "horizontal", // Default to horizontal
  reverse = false, // Default to no reverse
}: ISwipper) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        pagination={{
          clickable: pagination,
          enabled: pagination,
        }}
        navigation={navigation}
        direction={direction} // Set the direction
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reverse
          ? slides
              .slice()
              .reverse()
              .map((img, index) => (
                <SwiperSlide key={index} className="w-full h-full relative">
                  <Image
                    src={img}
                    fill
                    alt={`slide-image-${index}`}
                    quality={90}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))
          : slides.map((img, index) => (
              <SwiperSlide key={index} className="w-full h-full relative">
                <Image
                  src={img}
                  fill
                  alt={`slide-image-${index}`}
                  quality={90}
                  className="w-full h-full object-cover"
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
};
