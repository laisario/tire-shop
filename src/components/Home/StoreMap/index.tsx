import React from 'react'
import { LocationCardProps, stores } from './data';


function LocationCard({ name, lat, lng }: LocationCardProps) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
  const embedUrl = `https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`;
  return (
    <div className="bg-white rounded-xl shadow p-4  mx-auto">
      <div className="w-full h-64 mb-4">
        <iframe
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <h3 className="text-md font-semibold text-gray-800 mb-4">Horário de Funcionamento</h3>
      
      <div className="text-sm text-gray-7 space-y-1 mb-6">
        <p><strong>Segunda à Sexta:</strong> 08:00 às 18:00</p>
        <p><strong>Sábado:</strong> 08:00 às 12:00</p>
      </div>

      <div className='flex justify-center align-center gap-4'>
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue text-white hover:brightness-110 transition-all"
          >
          <svg 
            className="w-5 h-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 576 512" 
            fill="currentColor"
            >
            <path 
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            />
          </svg>
        </a>

        <a 
          href={`https://waze.com/ul?ll=${lat},${lng}&navigate=yes`} 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#33CCFF] text-white hover:brightness-110 transition-all"
          >
          <svg 
            className="w-5 h-5" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 576 512" 
            fill="currentColor"
            >
            <path 
              d="M502.2 201.7C516.7 287.5 471.2 369.6 389 409.8c13 34.1-12.4 70.2-48.3 70.2a51.7 51.7 0 0 1 -51.6-49c-6.4 .2-64.2 0-76.3-.6A51.7 51.7 0 0 1 159 479.9c-33.9-1.4-58-34.8-47-67.9-37.2-13.1-72.5-34.9-99.6-70.8-13-17.3-.5-41.8 20.8-41.8 46.3 0 32.2-54.2 43.2-110.3C94.8 95.2 193.1 32 288.1 32c102.5 0 197.2 70.7 214.1 169.7zM373.5 388.3c42-19.2 81.3-56.7 96.3-102.1 40.5-123.1-64.2-228-181.7-228-83.5 0-170.3 55.4-186.1 136-9.5 48.9 5 131.4-68.8 131.4C58.2 358.6 91.6 378.1 127 389.5c24.7-21.8 63.9-15.5 79.8 14.3 14.2 1 79.2 1.2 87.9 .8a51.7 51.7 0 0 1 78.8-16.4zM205.1 187.1c0-34.7 50.8-34.8 50.8 0s-50.8 34.7-50.8 0zm116.6 0c0-34.7 50.9-34.8 50.9 0s-50.9 34.8-50.9 0zm-122.6 70.7c-3.4-16.9 22.2-22.2 25.6-5.2l.1 .3c4.1 21.4 29.9 44 64.1 43.1 35.7-.9 59.3-22.2 64.1-42.8 4.5-16.1 28.6-10.4 25.5 6-5.2 22.2-31.2 62-91.5 62.9-42.6 0-80.9-27.8-87.9-64.3z"
              />
          </svg>
        </a>
      </div>
    </div>
  );
}


export default function index() {
  return (
    <section className="overflow-hidden pt-17.5 bg-[#E5EAF4]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 ">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5 text-sm md:text-base max-w-fit">
              <svg 
                className="w-4 h-4 md:w-5 md:h-5"
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path 
                  d="M565.6 36.2C572.1 40.7 576 48.1 576 56l0 336c0 10-6.2 18.9-15.5 22.4l-168 64c-5.2 2-10.9 2.1-16.1 .3L192.5 417.5l-160 61c-7.4 2.8-15.7 1.8-22.2-2.7S0 463.9 0 456L0 120c0-10 6.1-18.9 15.5-22.4l168-64c5.2-2 10.9-2.1 16.1-.3L383.5 94.5l160-61c7.4-2.8 15.7-1.8 22.2 2.7zM48 136.5l0 284.6 120-45.7 0-284.6L48 136.5zM360 422.7l0-285.4-144-48 0 285.4 144 48zm48-1.5l120-45.7 0-284.6L408 136.5l0 284.6z"
                />
              </svg>
              Localização
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">Nossas Lojas</h2>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          {stores.map((store) => <LocationCard name={store.name} lat={store.lat} lng={store.lng} /> )}
        </div>
      </div>
    </section>
  )
}

