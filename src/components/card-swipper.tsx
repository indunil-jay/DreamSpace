"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { skillsCards } from "@/constants";
import { cn } from "@/lib/utils";

export const CardSwipper = () => {
  return (
    <div className="h-[360px] min-h-[360px] max-w-[260px] w-full">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {skillsCards.map((card) => (
          <SwiperSlide key={card.id}>
            {" "}
            <Card
              className={cn("w-full h-full text-white ", card && card.style)}
            >
              <CardHeader>
                <CardTitle>{card.titel}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[12px] lowercase font-normal">{card.text}</p>
                <span className="text-[4rem]">#0{card.id}</span>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
