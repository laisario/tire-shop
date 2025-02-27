import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "A.M. Pneus",
  description: "Site de vendas pneus continental",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
