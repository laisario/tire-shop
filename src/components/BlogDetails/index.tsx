import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Image from "next/image";

const BlogDetails = ({title}) => {
  return (
    <>
      <Breadcrumb title={title} pages={[title]} />
      <section className="overflow-hidden pt-5 lg:pt-10 xl:pt-14 bg-gray-2">
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
              {title}
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              Com mais de 30 anos de atuação, a <strong>AM Pneus</strong> é uma empresa consolidada no mercado, reconhecida pela excelência no atendimento e por seu compromisso com a qualidade. Referência em <strong>recapagem de pneus</strong> no Sul-Fluminense, também atua na <strong>venda de pneus novos</strong>, representando marcas renomadas como <strong>Bridgestone</strong> e <strong>Continental</strong>.
              Conta com um dos <strong>maiores Truck Centers da região</strong>, localizado em <strong>Barra Mansa (RJ)</strong>, onde também está sua unidade de recapagem. Expandindo sua presença, inaugurou recentemente um moderno <strong>Truck e Auto Center</strong> em <strong>Santana do Capivari (Pouso Alto/MG)</strong>, pronto para atender autônomos e grandes frotas.
              A AM Pneus segue firme em seu compromisso com a <strong>inovação, confiança e excelência no setor de transporte.</strong>
            </p>

            {/* <div className="my-7.5">
              <h6 className="font-medium text-dark text-lg xl:text-[26px] xl:leading-[34px] mb-6">
              Atendemos veículos de passeio, caminhonetes, caminhões, ônibus e vans, oferecendo serviços como:
              </h6>

              <ul className="list-disc pl-6">
                <li>Borracharia em geral.</li>
                <li>Alinhamento e balanceamento</li>
                <li>Reparo de manga de eixo</li>
                <li>Posto de molas</li>
                <li>Troca de pivô</li>
                <li>Lona de freios</li>
                <li>Lubrificação e troca de óleo</li>
                <li>Suspensão</li>

              </ul>
            </div>

            <p className="mb-6 font-medium text-md xl:text-lg">
            Além disso, oferecemos atendimento especializado para frotas, garantindo as melhores soluções em pneus Continental e Bridgestone para reduzir o desgaste irregular e proporcionar mais economia e segurança para você!
            </p> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
