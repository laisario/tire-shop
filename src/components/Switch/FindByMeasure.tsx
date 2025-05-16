import React, { useState } from 'react'
import tireMeasures from '../../../data/tireMeasures.json'
import { useRouter } from 'next/navigation';

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
      <div className='sm:flex lg:flex items-center justify-start lg:gap-2 mb-1 gap-1'>
        <form className="flex flex-row lg:gap-2 gap-1">
          <select 
            id="widths" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'width');
            }}
          >
            <option value=''>Largura</option>
            {widths?.map((width) => 
              <option
                key={width}
                value={width}
              >
                {width}
              </option>
            )}
          </select>
          <select 
            id="heights" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'height');
            }}
          >
            <option value=''>Altura</option>
            {heights?.map((height) => 
              <option
                key={height}
                value={height}
              >
                {height}
              </option>
            )}
          </select>
          <select 
            id="rims" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'rim');
            }}
          >
            <option value=''>Aro</option>
            {rims?.map((rim) => 
              <option
                key={rim}
                value={rim}
              >
                {rim}
              </option>
            )}
          </select>
          <button
            id='searchButton'
            className='font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-gray-7 text-white hover:border hover:border-gray-5 hover:text-gray-5 hover:bg-white  focus:outline-none  transition'
            type='button'
            onClick={handleSearch}
          >
            Buscar
          </button>
        </form>
      </div>
  )
}

export default FindByMeasure