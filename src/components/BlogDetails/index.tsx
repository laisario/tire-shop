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
              src="/images/blog/blog-details-01.jpg"
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
              A AM Pneus tem mais de 30 anos de tradição em serviços e produtos automotivos na região sul fluminense e no município de Pouso Alto/MG. Trabalhamos com pneus Continental e Bridgestone, oferecendo atendimento especializado com profissionais treinados para te auxiliar na escolha dos melhores pneus novos e recapados, além da realização de serviços automotivos essenciais.
            </p>

            <div className="my-7.5">
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
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
