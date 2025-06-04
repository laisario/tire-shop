import Image from 'next/image';

const socialMedias = [
  { name: 'Facebook', icon: '/images/redes-sociais/facebook.png', url: 'https://www.facebook.com/ampneusbr/' },
  { name: 'Instagram', icon: '/images/redes-sociais/instagram.png', url: 'https://www.instagram.com/ampneus/' },
];

export default function SocialMediaList() {
  return (
    <section className="overflow-hidden pt-17.5">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 pb-15 ">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-dark mb-1.5 text-sm md:text-base max-w-fit">
            <svg
              className="w-4 h-4 md:w-5 md:h-5"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512"
            >
              <path 
                fill="#000000" 
                d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
              />
            </svg>
              Mantenha-se conectado
            </span>
            <h2 className="font-semibold text-xl xl:text-heading-5 text-dark">Nossas redes sociais</h2>
          </div>
        </div>
        <div className="flex gap-8 justify-around">
          {socialMedias.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group transition-all duration-300"
            >
              <div className="bg-gray-200 rounded-full p-4 transition-all duration-300 group-hover:bg-primary/80 group-hover:shadow-lg group-hover:scale-105">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={150}
                  height={64}
                />
              </div>
              <span className="mt-2 text-sm text-center text-dark font-medium transition-colors duration-300 group-hover:text-primary">
                {social.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
