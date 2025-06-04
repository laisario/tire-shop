import React, { useState } from 'react'
import FindByMeasure from './FindByMeasure';
import FindByCar from './FindByCar';


function Switch() {
  const [selectedOption, setSelectedOption] = useState("medida");

  return (
    <div className="flex flex-row items-center  justify-between" >
      <div className="flex flex-row  justify-end items-center gap-2 sm:py-2 xs:py-2">
        <span className="text-gray-7 font-medium text-base">Busque por</span>
        <div className="relative flex items-center w-50 bg-gray-2 rounded-lg p-2">
          <div
            className={`absolute top-0 left-0 w-1/2 h-full bg-gray-7 rounded-lg transition-transform duration-300 ease-in-out ${selectedOption === "carro" ? "translate-x-full" : "translate-x-0"}`}
          ></div>
          <button
            className={`relative flex items-center justify-center gap-1 w-1/2 text-center text-sm font-small transition-all ${selectedOption === "medida" ? "text-white" : "text-gray-5"}`}
            onMouseDown={(e) => {
              e.preventDefault();
              setSelectedOption("medida");
            }}
          >
            <svg width="24" height="24" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none">
              <circle cx="32" cy="32" r="28" stroke={selectedOption === 'medida' ? 'white' : "black"}  fill="none"/>
              <circle cx="32" cy="32" r="18" stroke={selectedOption === 'medida' ? 'white' : "black"}  fill="none"/>
              <circle cx="32" cy="32" r="4" fill={selectedOption === 'medida' ? 'white' : "black"} />
              <g stroke={selectedOption === 'medida' ? 'white' : "black"} strokeWidth="2">
                <line x1="32" y1="8" x2="32" y2="56"/>
                <line x1="8" y1="32" x2="56" y2="32"/>
                <line x1="16" y1="16" x2="48" y2="48"/>
                <line x1="16" y1="48" x2="48" y2="16"/>
              </g>
            </svg>
            <span>medida</span>
          </button>

        </div>
      </div>
      

      <div>
        {selectedOption === 'medida' && <FindByMeasure />}
      </div>

      
    </div>
  )
}

export default Switch