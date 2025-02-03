import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* <!-- promo banner big --> */}
        <div className="flex items-center relative z-1 overflow-hidden rounded-lg bg-yellow-light-4 py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5">
          <div className="max-w-[550px] w-full">
            <span className="block font-medium text-xl text-dark mb-3">
              Nossos servicos
            </span>

            <h2 className="font-bold text-xl lg:text-heading-4 xl:text-heading-3 text-dark mb-5">
              Alinhamento, Balanceamento, Troca de oleo e Troca de lona
            </h2>

            <a
              href="#"
              className="inline-flex font-medium text-custom-sm text-white bg-yellow py-[11px] px-9.5 rounded-md ease-out duration-200 hover:bg-yellow-dark mt-7.5"
            >
              Saiba mais
            </a>
          </div>

          <Image
            src="/images/promo/promo-01.jpg"
            alt="promo img"
            // className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={500}
            height={800}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-gray-4 py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
              <Image
                src="/images/promo/promo-02.webp"
                alt="promo img"
                className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1"
                width={241}
                height={241}
              />

            <div className="text-right">
              <h2 className="font-bold text-md lg:text-heading-4 text-dark mb-2.5">
                Borracharia,
                <br />
                 Manga de eixo
                 <br />
                  & Posto de molas
              </h2>
              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-gray-5 py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-gray-7 mt-9"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="relative z-1 overflow-hidden rounded-lg bg-blue-light-5 py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10">
            <Image
              src="/images/promo/promo-03.jpeg"
              alt="promo img"
              className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1"
              width={240}
              height={240}
            />

            <div>
              <h2 className="font-bold text-md lg:text-heading-4 text-dark mb-2.5">
                Troca de balanca,
                <br />
                buchas carreta, 
                <br />
                veiculos trucado
                <br />
                & tocos
              </h2>
              <a
                href="#"
                className="inline-flex font-medium text-custom-sm text-white bg-blue py-2.5 px-8.5 rounded-md ease-out duration-200 hover:bg-blue-dark mt-7.5"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
