"use client"
import BlogDetails from "@/components/BlogDetails";
import Breadcrumb from "@/components/Common/Breadcrumb";
import useSearchService from "@/hooks/useSearchService";
import { ServiceItemT } from "@/types/serviceItem";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";


const ServiceDetailsPage = () => {
  const [service, setService] = useState<ServiceItemT>({
    id: '',
    title: '',
    img: '',
    description: '',
  });
  const { id } = useParams();
  const { getServiceById } = useSearchService();
  
  useEffect(() => {
    const response = getServiceById(String(id))
    console.log(response)
    setService(response)
  }, [])

  return (
    <main>
      <Breadcrumb title={service?.title} pages={["servicos /", service?.title]} />
      <section className="overflow-hidden pt-5 lg:pt-10 xl:pt-14 bg-gray-2">
        <div className="max-w-[750px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="rounded-[10px] overflow-hidden mb-7.5">
            <Image
              className="rounded-[10px]"
              src={service?.img}
              alt="details"
              width={750}
              height={477}
            />
          </div>

          <div>
            <h2 className="font-medium text-dark text-xl lg:text-2xl xl:text-custom-4xl mb-4">
              {service?.title}
            </h2>

            <p className="mb-6 font-medium text-md xl:text-lg">
              {service?.description}
            </p>

          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetailsPage;