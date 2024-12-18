"use client"
import React from "react";
import { Media, CarouselBlock } from "@/payload-types";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';

type Props = {
  classname?: string;
} & CarouselBlock;

const isMedia = (media: any): media is Media => {
  return media && typeof media !== "number" && "url" in media;
};

const CarouselComponent: React.FC<Props> = ({ images }) => {

  return (
   <div className=' '>
    <Swiper
        className= 'w-4/5 m-auto'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        modules={[ Autoplay, EffectCoverflow, Navigation]}

      >{images.map((item, index) => (
        <SwiperSlide className="w-1/5 h-[300px]" key={index}>
          {isMedia(item.image) && (
              <img
                src={item.image.url ?? ''}
                alt={item.image.alt ?? `Slide ${index + 1}`}
                className="object-cover"
              />
            )}
        </SwiperSlide>
      ))
      }      
      </Swiper>
    </div>
  );
};

export default CarouselComponent;