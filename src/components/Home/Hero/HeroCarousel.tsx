"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";
import WhatsappButton from "@/components/Common/Whatsapp/WhatsappButton";

const HeroCarousal = ({dados}) => {
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
      {dados.map((produto) => {
        const isContinental = produto?.marca?.toLowerCase() === 'continental'
        return (
          <SwiperSlide key={produto?.id}>
            <div className="flex p-8 items-center justify-center flex-col-reverse sm:flex-row">
              <div className="w-full sm:w-1/2 flex flex-col justify-center gap-4 h-[358px] px-4 sm:px-7.5 lg:px-12.5">
                <Image
                  src={isContinental ? "/images/logo/logo.svg" : "/images/logo/Bridgestone.svg"} 
                  alt="Logo da marca"
                  width={150}
                  height={50}
                />

                <h1 className={`font-semibold text-dark text-xl sm:text-3xl mb-3 text-${isContinental ? 'yellow' : 'red'}`}>
                  <a href={`/pneus/${produto.id}`}>{produto.titulo}</a>
                </h1>

                <WhatsappButton produtos={produto} color={isContinental ? 'yellow' : 'red'} />
              </div>

              <div className="w-full sm:w-1/2 flex justify-center">
                <Image
                  src={produto?.imgs?.thumbnails[0]}
                  alt={produto.titulo}
                  width={351}
                  height={358}
                />
              </div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default HeroCarousal;
