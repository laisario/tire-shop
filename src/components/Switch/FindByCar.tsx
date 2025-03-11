import React, { useMemo, useState } from 'react'
import brands from '../../../data/brands.json';
import { getModels, getVersions, getYears } from '@/hooks/useData';
import { MeasureCar } from '@/types/measures';

type ParamType = 'brand' | 'model' | 'year' | 'version';

const styleSelect = "bg-white border border-yellow text-gray-7 text-sm rounded-lg focus:ring-yellow focus:border-yellow block w-30 p-2.5 dark:bg-yellow dark:border-yellow dark:placeholder-gray-4 dark:text-white dark:focus:ring-yellow dark:focus:border-yellow"

function FindByCar() {
  const [measures, setMeasures] = useState<MeasureCar>({
    brand: '',
    model: '',
    year: '',
    version: ''
  });
  
  const models = useMemo(() => measures?.brand && Object.keys(getModels(measures?.brand)), [measures?.brand]);
  const years = useMemo(() => measures?.model && Object.keys(getYears(measures)), [measures?.model]);
  const versions = useMemo(() => measures?.model && Object.keys(getVersions(measures)), [measures?.year]);
  
  const handleChange = (value: string, param: ParamType) => {
    setMeasures(prevState => ({
      ...prevState,
      [param]: value
    }))

  };

  return (
      <div className='flex sm:flex lg:flex items-center justify-start lg:gap-2 mb-1 gap-1'>
        <form className="flex flex-row flex-wrap gap-2">
          <select 
            id="brands" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'brand');
            }}
          >
            <option value=''>MARCA</option>
            {brands?.map(({brand}) => 
              <option
                key={brand}
                value={brand}
              >
                {brand}
              </option>
            )}
          </select>
          <select 
            id="models" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'model');
            }}
          >
            <option value=''>MODELO</option>
            {measures?.brand && models?.map((model) => 
              <option
                key={model}
                value={model}
              >
                {model}
              </option>
            )}
          </select>
          <select 
            id="years" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'year');
            }}
          >
            <option value=''>ANO</option>
            {measures?.model && years?.map((year) => 
              <option
                key={year}
                value={year}
              >
                {year}
              </option>
            )}
          </select>
          <select 
            id="versions" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'version');
            }}
          >
            <option value=''>VERSÃO</option>
            {measures?.year && versions?.map((version) => 
              <option
                key={version}
                value={version}
              >
                {version}
              </option>
            )}
          </select>
          <button
            id='searchButton'
            className='font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[#FC9900] text-white hover:border hover:border-[#FC9900] hover:text-[#FC9900] hover:bg-white  focus:outline-none  transition'
            type='button'
          >
            Buscar
          </button>
        </form>
      </div>
  )
}

export default FindByCar