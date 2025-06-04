import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        {/* Promo banner */}
        <div className="flex flex-col-reverse lg:flex-row items-center overflow-hidden rounded-lg bg-yellow-light-4 py-12.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5 relative">
          <div className="w-full lg:w-1/2 z-10">
            <span className="block font-semibold text-lg text-dark mb-2 uppercase tracking-wide">
              Nossos serviços
            </span>

            <h2 className="font-bold text-2xl lg:text-4xl text-dark leading-tight mb-4">
              Pneus novos, Recapagem, Alinhamento e Troca de óleo
            </h2>

            <p className="text-base font-medium text-dark/80 mb-6">
              Serviços essenciais para manter seu veículo em dia com segurança e qualidade.
            </p>

            <a
              href="/servicos"
              className="inline-block font-medium text-white bg-yellow py-3 px-6 rounded-md transition duration-200 hover:bg-yellow-dark"
            >
              Saiba mais
            </a>
          </div>
          <div className="w-full lg:w-1/2 mb-8 lg:mt-0 flex justify-center">
            <Image
              src="/images/promo/promo-01.jpg"
              alt="promo img"
              className="rounded-md w-full h-auto object-cover max-h-[400px]"
              width={500}
              height={400}
            />
          </div>
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          {/* <!-- promo banner small --> */}
          <div className="flex flex-row items-center rounded-lg bg-gray-4 py-10 px-4 sm:px-7.5 xl:px-10">
            <div className="w-full lg:w-1/2 mt-6 lg:mb-0 flex justify-center">
              <Image
                src="/images/promo/promo-02.webp"
                alt="promo img"
                className="rounded-md w-full h-auto object-contain max-h-[240px]"
                width={240}
                height={240}
              />
            </div>

            <div className="w-full lg:w-1/2 z-10 text-right">
              <div className="flex flex-col justify-between items-end gap-4">
                <h2 className="font-bold text-2xl text-dark leading-snug flex-[0.7]">
                  Borracharia,<br />
                  Manga de eixo<br />
                  & Posto de molas
                </h2>
                <a
                  href="/servicos"
                  className="flex-[0.3] text-center font-medium text-white bg-gray-7 py-2.5 px-6 rounded-md transition duration-200 hover:bg-gray-5"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>

          {/* <!-- promo banner small --> */}
          <div className="flex flex-row items-center rounded-lg bg-blue-light-5 py-10 px-4 sm:px-7.5 xl:px-10 gap-2">
            <div className="flex flex-col justify-between items-start gap-4">
              <h2 className="font-bold text-2xl text-dark leading-snug flex-[0.7]">
                Atendimento a Frotas,<br />
                Troca de buchas,<br />
                & muito mais
              </h2>
              <a
                href="/servicos"
                className="flex-[0.3] text-center font-medium text-white bg-blue py-2.5 px-6 rounded-md transition duration-200 hover:bg-blue-dark"
              >
                Saiba mais
              </a>
            </div>

            <div className="w-full lg:w-1/2 mb-6 lg:mb-0 flex justify-center">
              <Image
                src="/images/promo/promo-03.jpeg"
                alt="promo img"
                className="rounded-md w-full h-auto object-contain max-h-[240px]"
                width={240}
                height={240}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
