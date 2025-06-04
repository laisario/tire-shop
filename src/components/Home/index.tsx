"use client";
import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import NewArrival from "./NewArrivals";
import PromoBanner from "./PromoBanner";
import BestSeller from "./BestSeller";
import StoreMap from "./StoreMap"
import CounDown from "./Countdown";
import Testimonials from "./Testimonials";
import Newsletter from "../Common/Newsletter";
import RegionSelector from "../RegionSelector";
import { useRegion } from "@/hooks/useRegion";
import SocialMediaList from "./SocialMediaList";
import PartnerCompany from "./PartnerCompany";

const Home = () => {
  const { region } = useRegion();

  return (
    <main>
      {!region && <RegionSelector />}

      <Hero />
      <Categories />
      <PromoBanner />
      <StoreMap />
      <SocialMediaList />
      <PartnerCompany />
    </main>
  );
};

export default Home;
