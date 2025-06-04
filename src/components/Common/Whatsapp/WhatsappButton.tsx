import React from 'react'
import Image from "next/image";
import whatsAppSvg from '../../../../public/whatsapp.svg';
import {site} from './data';

const gerarMensagemWhatsapp = (produtos: any[]) => {
  if (!Array.isArray(produtos)) {
    produtos = [produtos]; // garante que seja um array
  }
  const mensagemSemProduto = `Olá! Estava navegando no site ${site} e gostaria de saber mais sobre...`;

  if (!produtos.length) return mensagemSemProduto;

  const mensagensProdutos = produtos.map((pneu, index) => {
    const { titulo, marca, medida, descricao, id } = pneu;

    const modelo =
      descricao?.dadosTecnicos?.find((d) => d.caracteristica === "Modelo")?.valor || "";
    const tipoUnidade =
      descricao?.dadosTecnicos?.find((d) => d.caracteristica === "Tipo de unidade")?.valor || "Unidade";

    const linkProduto = `https://${site}/pneus/${id}`; // ajuste o domínio

    return `Produto ${index + 1}:
    - Título: ${titulo}
    - Medida: ${medida}
    - Marca: ${marca}
    - Modelo: ${modelo}
    - Unidade: ${tipoUnidade}
    - Link: ${linkProduto}`;
  });

  return `Olá, estou interessado nos seguintes produtos:\n\n${mensagensProdutos.join(
    "\n\n"
  )}\n\nPoderia me fornecer mais informações sobre?`;
};

function WhatsappButton({produtos, titulo = 'Compre agora ou saiba mais!', color = "green"}) {
  const handleClick = () => {
    const mensagem = gerarMensagemWhatsapp(produtos);
    const region = window.localStorage.getItem('region')
    const numeroWhatsapp = region === 'rio' ? "5524974012747" : "5524993234053"
    const link = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagem)}`;
    window.open(link, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex w-full gap-4 font-medium text-white bg-${color} py-3 px-7 rounded-md ease-out duration-200 hover:bg-${color}-dark`}
    >
      {titulo}
      <Image width={20} height={20} src={whatsAppSvg} alt="Icon WhatsApp" />
    </button>
  );
}

export default WhatsappButton