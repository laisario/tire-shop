import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ServiceItemT } from "@/types/serviceItem";

const ServiceItem = ({ service }: { service: ServiceItemT }) => {
  return (
    <div className="group relative rounded-xl overflow-hidden shadow-1 w-full h-60">
      <Link href={`/servicos/${service?.id}`}>
        {/* Imagem de fundo */}
        <Image
          src={service.img}
          alt="service"
          className="w-full h-full object-cover transition duration-300 group-hover:brightness-75"
          fill
        />
    
        {/* Título animado */}
        <div className="absolute inset-0 flex items-end group-hover:items-center justify-start px-6 pb-4 transition-all duration-300">
          <h2 className="text-white text-xl sm:text-2xl font-semibold text-left group-hover:text-center transition-all duration-300">
            {service?.title}
          </h2>
        </div>
      </Link>
    </div>
  );
};

export default ServiceItem;
