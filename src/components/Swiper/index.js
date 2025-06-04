"use client";
import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay } from 'swiper/modules';


function SwiperCarrossel({content}) {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
        {content.map((item, index) => {
          const isVideo = item?.path?.startsWith("/videos/");
          return (
            <SwiperSlide key={index}>
              <div className="flex relative w-full">
                {isVideo ? (
                  <div className="flex flex-col md:flex-row items-center gap-6">
                    <div className="flex flex-col gap-3 w-full md:w-1/2">
                      <Image
                        src={item.image}
                        className='bg-[#113864] p-2 rounded-md'
                        alt={item.styleImg}
                        width={120}
                        height={60}
                      />
                      <p className="font-medium text-dark text-lg text-center md:text-left">
                        {item.title}
                      </p>
                      <p>{item.description}</p>
                    </div>
               
                    <div className="rounded-[10px] overflow-hidden w-full md:w-1/2">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        controls
                      >
                        <source src={item.path} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                ) : (
                  <div className='flex flex-col justify-center items-center'>
                    <Image
                      src={item.path}
                      alt="product image"
                      width={350}
                      height={350}
                      className="rounded-[10px]"
                    />
                    <p className="text-2xl font-bold text-gray-800">
                      {item.title.toUpperCase()}
                    </p>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  )
}

export default SwiperCarrossel