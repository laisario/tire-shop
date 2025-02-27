import React, { useState } from 'react'

type ParamType = 'width' | 'height' | 'rim';

const widths = ["Largura", "10cm", "20cm", "30cm"];
const rims = ["Aro", "10cm", "20cm", "30cm"];
const heights = ["Altura","10cm", "20cm", "30cm"];

function FindByMeasure({isMobile}) {
  const [measures, setMeasures] = useState<{ width: string; height: string; rim: string }>({
    width: '',
    height: '',
    rim: ''
  });

  const handleChange = (value: string, param: ParamType) => {
    setMeasures(prevState => ({
      ...prevState,
      [param]: value
    }))

  };


  const styleSelect = "bg-white border border-yellow text-gray-7 text-md rounded-lg focus:ring-yellow focus:border-yellow block w-30 p-2.5 dark:bg-yellow dark:border-yellow dark:placeholder-gray-4 dark:text-white dark:focus:ring-yellow dark:focus:border-yellow"

  return (
      <div className='w-auto flex w- items-center justify-start lg:gap-2 gap-1'>
        <form className="flex flex-row lg:gap-2 gap-1">
          <select 
            id="widths" 
            className={styleSelect}
            onChange={(e) => {
              handleChange(e?.target?.value, 'width');
            }}
          >
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
            className='font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-[#FC9900] text-white hover:border hover:border-[#FC9900] hover:text-[#FC9900] hover:bg-white  focus:outline-none  transition'
            type='button'
          >
            Buscar
          </button>
        </form>
      </div>
  )
}

export default FindByMeasure