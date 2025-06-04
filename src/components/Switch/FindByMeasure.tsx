import React, { useState } from 'react'
import tireMeasures from '../../../data/tireMeasures.json'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import useIsMobile from '@/hooks/useIsMobile';

type ParamType = 'width' | 'height' | 'rim';

const widths = tireMeasures?.widths;
const rims = tireMeasures?.rims;
const heights = tireMeasures?.heights;

function FindByMeasure() {
  const [measures, setMeasures] = useState<{ width: string; height: string; rim: string }>({
    width: '',
    height: '',
    rim: ''
  });
  const router = useRouter();
  const isMobile = useIsMobile();

  const handleChange = (value: string, param: ParamType) => {
    setMeasures(prevState => ({
      ...prevState,
      [param]: value
    }))

  };

  const styleSelect = "bg-white border border-gray-5 text-gray-7 text-md rounded-lg focus:ring-gray-5 focus:border-gray-5 block w-30 p-2.5 dark:bg-gray-5 dark:border-gray-5 dark:placeholder-gray-4 dark:text-white dark:focus:ring-gray-5 dark:focus:border-gray-5"

  const handleSearch = () => {
    if (!measures.width && !measures.height && !measures.rim) return;
    const measure = `${measures?.width}/${measures?.height} R ${measures?.rim}`;
    router.push(`/pneus?measure=${encodeURIComponent(measure)}`);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-1 mb-1 md:flex-row">
      <div className="flex w-full items-center justify-between">
        <h3 className="text-gray-7 text-base md:text-xl md:font-medium">
          Busque pela medida
        </h3>
        <Image
          alt="Encontrar pneu pela medida"
          width={isMobile ? 200 : 250}
          height={5}
          src="/images/find-tire.png"
        />
      </div>

      <form className="flex flex-col sm:flex-row flex-wrap gap-2 w-full justify-between md:justify-end">
        {/* Grupo 1: Width e Height */}
        <div className="flex flex-row gap-2 w-full sm:w-auto justify-center">
          <select
            id="widths"
            className={`${styleSelect} w-full sm:w-auto`}
            onChange={(e) => handleChange(e?.target?.value, 'width')}
          >
            <option value="">Largura</option>
            {widths?.map((width) => (
              <option key={width} value={width}>
                {width}
              </option>
            ))}
          </select>

          <select
            id="heights"
            className={`${styleSelect} w-full sm:w-auto`}
            onChange={(e) => handleChange(e?.target?.value, 'height')}
          >
            <option value="">Altura</option>
            {heights?.map((height) => (
              <option key={height} value={height}>
                {height}
              </option>
            ))}
          </select>
        </div>

        {/* Grupo 2: Rim e Botão */}
        <div className="flex flex-row gap-2 w-full sm:w-auto justify-center">
          <select
            id="rims"
            className={`${styleSelect} w-full sm:w-auto`}
            onChange={(e) => handleChange(e?.target?.value, 'rim')}
          >
            <option value="">Aro</option>
            {rims?.map((rim) => (
              <option key={rim} value={rim}>
                {rim}
              </option>
            ))}
          </select>

          <button
            id="searchButton"
            className="w-full sm:w-auto font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-gray-7 text-white hover:border hover:border-gray-5 hover:text-gray-5 hover:bg-white transition"
            type="button"
            onClick={handleSearch}
          >
            Buscar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FindByMeasure