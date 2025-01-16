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

const awsUrl = 'https://rozcotvbucket.s3.us-east-2.amazonaws.com/'

const CarouselComponent: React.FC<Props> = ({ heading, description, images }) => {

  return (
   <div className=' py-[2%]'>
    <div className=" mb-5">
      <h1 className='text-3xl text-red-800 font-bold text-center'>{heading}</h1>
      <p className='text-center text-lg text-white'>{description}</p>
    </div>
    <Swiper
        className= 'mySwiper w-[80%] h-[500px] mx-auto'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
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
      <SwiperSlide className=" bg-center bg-cover !w-auto " key={index}>
          {isMedia(item.image) && (
              <img
                src={awsUrl + item.image.filename}
                alt={item.image.alt ?? `Slide ${index + 1}`}
                className="object-cover border-4 border-red-900 w-[300px] block"
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