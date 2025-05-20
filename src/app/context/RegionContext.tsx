"use client";
import React, { createContext, ReactNode, useEffect, useState } from "react";

export type RegionType = 'minas' | 'rio' | null;

export interface RegionContextType {
  region: RegionType;
  setRegion: (region: RegionType) => void;
}

export const RegionContext = createContext<RegionContextType | undefined>(undefined);

interface RegionProviderProps {
  children: ReactNode;
}


export const RegionProvider: React.FC<RegionProviderProps> = ({ children }) => {
  const [region, setRegionState] = useState<RegionType>(null);

  useEffect(() => {
    const saved = localStorage.getItem('region') as RegionType;
    if (saved) setRegionState(saved);
  }, []);

  const setRegion = (region: RegionType) => {
    setRegionState(region);
    if (region) localStorage.setItem('region', region);
  };

  return (
    <RegionContext.Provider value={{ region, setRegion }}>
      {children}
    </RegionContext.Provider>
  );
};
