import React from 'react'
import { Metadata } from "next";
import Breadcrumb from '@/components/Common/Breadcrumb';
import Image from 'next/image';
import SwiperCarrossel from '../../../../components/Swiper/index';

export const metadata: Metadata = {
  title: "Página de recapagem",
  description: "Página contém informações sobre serviço de recapagem",
  // other metadata
};

function RecapagemPage() {
  return (
    <main>
      <Breadcrumb title={"Recapagem"} pages={["recapagem"]} />{" "}
      <section className="overflow-hidden pt-5 lg:pt-10 xl:pt-14 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] overflow-hidden mb-7.5">
            {/* <Image
              className="rounded-[10px]"
              src="/images/recapagem/b269.png"
              alt="details"
              width={750}
              height={477}
            /> */}
            <SwiperCarrossel />
          </div>

          <div>
            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              Vida Nova para Seus Pneus
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              A <strong>AM Pneus</strong> é referência no ramo de <strong>recapagem de pneus</strong>, atuando com excelência e agilidade no atendimento a <strong>grandes frotas</strong>. Somos parceiros da <strong>Bandag</strong>, marca reconhecida mundialmente pela <strong>tecnologia de ponta e durabilidade superior em borrachas de recapagem</strong>.
              Contamos com <strong>recapadora própria</strong>, o que nos permite total controle de qualidade e <strong>agilidade nos prazos de entrega</strong>, chegando a realizar serviços <strong>em até 24 horas</strong>, dependendo da localidade. Além disso, oferecemos o serviço de <strong>coleta dos pneus diretamente na sua empresa</strong>, garantindo ainda mais comodidade e eficiência.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RecapagemPage
