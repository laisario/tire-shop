"use client"
import React, { useEffect, useState } from "react";
import ShopDetails from "@/components/ShopDetails";
import useSearchTire from "@/hooks/useSearchTire";
import { useParams } from "next/navigation";


const PneuDetailsPage = () => {
  const [tire, setTire] = useState({});
  const { id } = useParams();
  const { getTireById } = useSearchTire();

  useEffect(() => {
    const response = getTireById(+id)
    setTire(response)
  }, [])

  return (
    <main>
      <ShopDetails product={tire} />
    </main>
  );
};

export default PneuDetailsPage;
