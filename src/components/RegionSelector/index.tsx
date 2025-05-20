import React from 'react';
import { RegionType } from '../../app/context/RegionContext';
import { useRegion } from '@/hooks/useRegion';

const RegionSelector: React.FC = () => {
  const { setRegion } = useRegion();

  const handleSelect = (region: RegionType) => {
    setRegion(region);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
     <div className="bg-white rounded-xl shadow-lg p-8 w-80 text-center">
    <h2 className="text-xl font-semibold mb-6">Escolha sua região</h2>
    <div className="flex flex-col gap-4">
      <button
        className="bg-gray-5 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => handleSelect('rio')}
      >
        Rio
      </button>
      <button
        className="bg-gray-5 text-white py-2 px-4 rounded hover:bg-blue-700"
        onClick={() => handleSelect('minas')}
      >
        Minas
      </button>
    </div>
  </div>
    </div>
  );
};

export default RegionSelector;
