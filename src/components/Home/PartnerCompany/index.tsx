import Image from 'next/image';
import React from 'react'

const partnerLogos = [
  { name: 'Bandag', logo: '/images/logo/bandag-logo.png', style: "object-contain bg-[#113864] p-2 rounded" },
  { name: 'Continental', logo: '/images/logo/logo.svg', style: "object-contain" },
  { name: 'Bridgestone', logo: '/images/logo/Bridgestone.svg', style: "object-contain" },
];

function PartnerCompany() {
  return (
    <section className="overflow-hidden pt-17.5  bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5 text-sm md:text-base max-w-fit">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512"
              className="w-4 h-4 md:w-5 md:h-5"
            >
              <path 
                fill="#000000" 
                d="M64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l80 0 0-64c0-26.5 21.5-48 48-48s48 21.5 48 48l0 64 80 0c8.8 0 16-7.2 16-16l0-384c0-8.8-7.2-16-16-16L64 48zM0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm88 40c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zM232 88l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16zM88 232c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48zm144-16l48 0c8.8 0 16 7.2 16 16l0 48c0 8.8-7.2 16-16 16l-48 0c-8.8 0-16-7.2-16-16l0-48c0-8.8 7.2-16 16-16z"
              />
            </svg>
              Empresas parceiras
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">Nossos parceiros</h2>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-around gap-8">
          {partnerLogos.map((partner) => (
            <div key={partner.name} className="w-[140px] md:w-[180px] transition-transform duration-300 hover:scale-105">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={90}
                className={partner.style}
              />
              <p className="mt-2 text-center text-sm font-medium text-dark">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCompany