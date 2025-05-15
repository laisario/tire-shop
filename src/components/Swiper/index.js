"use client";
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';

const images = [
  { path: "/images/recapagem/b269.png", title: "b269" },
  { path: "/images/recapagem/b440-02-a.png", title: "b440-02-a" },
  { path: "/images/recapagem/brr13.png", title: "brr13" },
  { path: "/images/recapagem/btl-sa2.png", title: "btl-sa2" }
];


function SwiperCarrossel() {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
        {images.map((image) => (
          <SwiperSlide key={image}>
            <div className="flex flex-col justify-around items-center">
              <Image
                src={image.path}
                alt={"product image"}
                width={350}
                height={350}
                />
              <p className="text-2xl font-bold text-gray-800">{image.title.toUpperCase()}</p>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default SwiperCarrossel