import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";
import SwiperCarrossel from "../Swiper";

const videos = [
  { path: "/videos/video-1.mp4", title: "Conheça nosso diferencial de recapagem Bandag", description: 'Maximize o rendimento dos seus pneus e reduza os custos totais renovando-os com bandas de rodagem Bandag com um diferencial de rápida entrega, nós da Am Pneus atendemos toda região Sul Fluminense e também no município de Pouso Alto - Mg', image: '/images/logo/bandag-logo.png', styleImg: 'bg-[#113864] p-2 rounded-md' },
  { path: "/videos/video-1.mp4", title: "Conheça nosso diferencial de recapagem Bandag", description: 'Maximize o rendimento dos seus pneus e reduza os custos totais renovando-os com bandas de rodagem Bandag com um diferencial de rápida entrega, nós da Am Pneus atendemos toda região Sul Fluminense e também no município de Pouso Alto - Mg', image: '/images/logo/bandag-logo.png', styleImg: 'bg-[#113864] p-2 rounded-md' },
];


const BlogDetails = ({title}) => {
  return (
    <>
      <Breadcrumb title={title} pages={[title]} />
      <section className="overflow-hidden py-20 lg:pt-10 xl:pt-14 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] overflow-hidden mb-7.5">
            <Image
              className="rounded-[10px]"
              src="/images/empresa/empresa-minas.jpg"
              alt="details"
              width={750}
              height={477}
            />
          </div>
          <div>
            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              Nossa história
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              Com mais de 30 anos de atuação, a <strong>AM Pneus</strong> é uma empresa consolidada no mercado, reconhecida pela excelência no atendimento e por seu compromisso com a qualidade. Referência em <strong>recapagem de pneus</strong> no Sul-Fluminense, também atua na <strong>venda de pneus novos</strong>, representando marcas renomadas como <strong>Bridgestone</strong> e <strong>Continental</strong>.
              Conta com um dos <strong>maiores Truck Centers da região</strong>, localizado em <strong>Barra Mansa (RJ)</strong>, onde também está sua unidade de recapagem. Expandindo sua presença, inaugurou recentemente um moderno <strong>Truck e Auto Center</strong> em <strong>Santana do Capivari (Pouso Alto/MG)</strong>, pronto para atender autônomos e grandes frotas.
              A AM Pneus segue firme em seu compromisso com a <strong>inovação, confiança e excelência no setor de transporte.</strong>
            </p>

            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              Vida Nova para Seus Pneus
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              A <strong>AM Pneus</strong> é referência no ramo de <strong>recapagem de pneus</strong>, atuando com excelência e agilidade no atendimento a <strong>grandes frotas</strong>. Somos parceiros da <strong>Bandag</strong>, marca reconhecida mundialmente pela <strong>tecnologia de ponta e durabilidade superior em borrachas de recapagem</strong>.
              Contamos com <strong>recapadora própria</strong>, o que nos permite total controle de qualidade e <strong>agilidade nos prazos de entrega</strong>, chegando a realizar serviços <strong>em até 24 horas</strong>, dependendo da localidade. Além disso, oferecemos o serviço de <strong>coleta dos pneus diretamente na sua empresa</strong>, garantindo ainda mais comodidade e eficiência.
            </p>
            <div className="p-4">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex flex-col gap-3 w-full md:w-1/2">
                  <Image
                    src={videos[0].image}
                    className='bg-[#113864] p-2 rounded-md'
                    alt={videos[0].styleImg}
                    width={120}
                    height={60}
                  />
                  <p className="font-medium text-dark text-lg text-center md:text-left">
                    {videos[0].title}
                  </p>
                  <p>{videos[0].description}</p>
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
                    <source src={videos[0].path} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
