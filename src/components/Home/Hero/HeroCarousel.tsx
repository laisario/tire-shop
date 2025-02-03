"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-yellow">
                Kit 4
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                pneus
                <br />
                Aro 15
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">15 185/65r15 88H PowerContact 2</a>
            </h1>

            <a
              href="/pneus"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-dark py-3 px-9 ease-out duration-200 hover:bg-yellow mt-10"
            >
              Comprar agora
            </a>
          </div>

          <div>
            <Image
              src="/images/hero/hero-03.webp"
              alt="pneu continetal propaganda"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
};

export default HeroCarousal;
