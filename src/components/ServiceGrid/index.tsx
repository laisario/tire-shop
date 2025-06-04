"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { popularService, serviceData, } from "./serviceData";
import ServiceItem from "../Services/ServiceItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';


const CarrosselService = ({services}) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="my-8 custom-swiper"
        >
        {services.map((service, key) => (
          <SwiperSlide key={key}>
            <ServiceItem service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx global>
        {`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color:#ffffff; /* gray-700 */
        }
          `}
      </style>
    </>
  )
}





const ServiceGrid = () => {
  return (
    <>
      <Breadcrumb title={"Serviços"} pages={["serviços"]} />{" "}
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex mb-20 flex-col md:flex-row items-center gap-6">
            <div className="flex flex-col gap-3 w-full md:w-1/2">
              <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
                Como saber se o pneu precisa de alinhamento?
              </h2>
              <p>
                O tremor é um indicativo claro de que o carro precisa desse tipo de manutenção. A
                dificuldade de controle da direção também é um sinal, principalmente em situações em que
                ele realiza movimentos imprevistos, como se estivesse “puxando para o lado”.
              </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center">
              <div className="rounded-[10px] overflow-hidden w-full max-w-sm">
                <video
                  className="w-full h-auto object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                >
                  <source src="videos/video-2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
            Serviços mais populares
          </h2>
          <CarrosselService services={popularService} />

          <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
            Outros serviços
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7.5">
            {/* <!-- blog item --> */}
            {serviceData.map((service, key) => (
              <ServiceItem service={service} key={key} />
            ))}
          </div>
        </div>
      </section> 
    </>
  );
};

export default ServiceGrid;
