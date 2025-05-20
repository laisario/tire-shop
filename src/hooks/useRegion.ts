import React, { useContext } from "react";
import { RegionContext, RegionContextType } from "@/app/context/RegionContext";

export const useRegion = (): RegionContextType => {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return context;
};
