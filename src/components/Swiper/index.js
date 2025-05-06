"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';


function SwiperCarrossel() {
  return (
    <Swiper>
      <SwiperSlide>
        <div className="flex justify-center items-center">
          <Image
            src={"/images/products/product-2-bg-1.png"}
            alt={"product image"}
            width={450}
            height={450}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

export default SwiperCarrossel