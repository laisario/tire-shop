import ShopWithSidebar from '@/components/ShopWithSidebar'
import React from 'react'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peças",
  description: "Catálogo de peças que vendemos",
};

function PecasPage() {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  )
}

export default PecasPage