import React, { useState } from 'react'

type ParamType = 'brand' | 'model' | 'year' | 'version';

const brands = ["Michelin", "Pirelli", "Goodyear", "Bridgestone", "Continental"];
const models = ["Pilot Sport 4", "Scorpion Verde", "Eagle F1", "Turanza T005", "ContiSportContact 5"];
const years = [2020, 2021, 2022, 2023, 2024];
const versions = ["225/45 R17", "205/55 R16", "195/65 R15", "235/40 R18", "245/35 R19"];


function FindByCar() {
const [measures, setMeasures] = useState<{ brand: string; model: string; year: string, version: string }>({
    brand: '',
    model: '',
    year: '',
    version: ''
  });

  const handleChange = (value: string, param: ParamType) => {
    setMeasures(prevState => ({
      ...prevState,
      [param]: value
    }))

  };


  const styleSelect = "bg-white border border-yellow text-gray-7 text-md rounded-lg focus:ring-yellow focus:border-yellow block w-30 p-2.5 dark:bg-yellow dark:border-yellow dark:placeholder-gray-4 dark:text-white dark:focus:ring-yellow dark:focus:border-yellow"

  return (
      <div className='w-auto flex w-full items-center justify-center lg:gap-2 gap-1'>
        <form className="flex flex-row gap-2">
          <select 
            id="brands" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'brand');
            }}
          >
            {brands?.map((brand) => 
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
            {models?.map((model) => 
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
            {years?.map((year) => 
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
            {versions?.map((version) => 
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