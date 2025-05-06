import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import serviceData from "./serviceData";
import ServiceItem from "../Services/ServiceItem";

const ServiceGrid = () => {
  return (
    <>
      <Breadcrumb title={"Serviços"} pages={["serviços"]} />{" "}
      <section className="overflow-hidden py-20 bg-gray-2">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-7.5">
            {/* <!-- blog item --> */}
            {serviceData.map((service, key) => (
              <ServiceItem service={service} key={key} />
            ))}
          </div>
        </div>
      </section> 
    </>
  );
};

export default ServiceGrid;
