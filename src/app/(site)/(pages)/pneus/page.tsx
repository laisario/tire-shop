import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pneus",
  description: "Catálogo de pneus que vendemos",
};

const PneusPage = () => {
  return (
    <main>
      <ShopWithSidebar />
    </main>
  );
};

export default PneusPage;
