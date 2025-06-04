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

const images = [
  { path: "/images/recapagem/b269.png", title: "b269" },
  { path: "/images/recapagem/b440-02-a.png", title: "b440-02-a" },
  { path: "/images/recapagem/brr13.png", title: "brr13" },
  { path: "/images/recapagem/btl-sa2.png", title: "btl-sa2" }
];

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
            <SwiperCarrossel content={images}/>
          </div>

          <div>
            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              Recapagem Bandag: desempenho renovado com economia e segurança 
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              A recapagem Bandag é um processo de renovação de pneus que utiliza tecnologia de ponta para aplicar uma nova banda de rodagem em carcaças previamente inspecionadas e aprovadas. Com rigorosos padrões de qualidade, o processo envolve: 
            </p>

            <ul className="list-disc list-inside text-md xl:text-lg text-dark font-medium space-y-2 mb-6">
              <li>Inspeção detalhada da carcaça</li>
              <li>Raspagem precisa da borracha antiga</li>
              <li>Aplicação da nova banda com compostos exclusivos Bandag</li>
              <li>Cura controlada em câmara especializada</li>
              <li>Inspeções finais de segurança</li>
            </ul>

            <p className="mb-6 font-medium text-md xl:text-lg">
              Esse método garante até 60% de economia em relação à compra de pneus novos, mantendo alto desempenho, segurança e menor impacto ambiental. É a escolha ideal para frotas que buscam custo-benefício, durabilidade e sustentabilidade. 
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RecapagemPage
