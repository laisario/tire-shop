import React from 'react'
import ServiceGrid from "@/components/ServiceGrid";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Página de serviços",
  description: "Página contém serviços ofertados pela AM Pneus",
  // other metadata
};

function ServicosPage() {
  return (
    <main>
      <ServiceGrid />
    </main>
  )
}

export default ServicosPage