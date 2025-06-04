import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";
import dados from "../../../../data_adm/vitrineHomepage.json"

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-5.5 sm:pt-45 lg:pt-20 xl:pt-20.5 bg-[#E5EAF4]">
    <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap gap-4">
        <div className="xl:max-w-[757px] w-full">
          <div className="relative z-1 rounded-[10px] bg-white overflow-hidden">
            {/* <!-- bg shapes --> */}
            <Image
              src="/images/hero/hero-bg.png"
              alt="hero bg shapes"
              className="absolute right-0 bottom-0 -z-1"
              width={534}
              height={520}
            />

            <HeroCarousel dados={dados[0].carrossel}/>
          </div>
        </div>

        <div className="xl:max-w-[393px] w-full">
          <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
            <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
              <div className="flex items-center gap-14">
                <h2 className="font-semibold text-dark text-xl">
                  <a href="#">{dados[1].titulo}</a>
                </h2>
              
                <Image
                  src={dados[1].imagem}
                  alt="mobile image"
                  width={123}
                  height={161}
                />
            </div>
            </div>
            <div className="w-full relative rounded-[10px] bg-white p-4 sm:p-7.5">
              <div className="flex items-center gap-14">
                  <h2 className="max-w-[153px] font-semibold text-dark text-xl">
                    <a href="#">{dados[2].titulo}</a>
                  </h2>

                  <Image
                    src={dados[2].imagem}
                    alt="mobile image"
                    width={123}
                    height={161}
                  />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    {/* <!-- Hero features --> */}
    <HeroFeature />
  </section>
  );
};

export default Hero;
