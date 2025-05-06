import React, { useState } from 'react'
import FindByCar from './FindByCar';
import FindByMeasure from './FindByMeasure';

function SwitchMobile() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col gap-2 w-full  justify-start" >
      <div className="flex flex-row  justify-between items-center gap-2 py-2">
        <span className="text-gray-7 font-medium text-base">Busque por</span>
        <div className="relative flex items-center w-50 bg-gray-2 rounded-lg p-2">
          <div
            className={`absolute ${!selectedOption?.length && 'invisible'} top-0 left-0 w-1/2 h-full bg-gray-5 rounded-lg transition-transform duration-300 ease-in-out ${selectedOption === "carro" ? "translate-x-full" : "translate-x-0"}`}
          ></div>
          <button
            className={`relative flex items-center justify-center gap-1 w-1/2 text-center text-sm font-small transition-all ${selectedOption === "medida" ? "text-white" : "text-gray-7"}`}
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
          <span className="w-px h-7.5 bg-gray-4"></span>
          <button
            className={`relative flex items-center justify-center gap-1 w-1/2 text-center py-1 text-sm font-medium transition-all ${selectedOption === "carro" ? "text-white" : "text-gray-7"}`}
            onMouseDown={(e) => {
              e.preventDefault();
              setSelectedOption("carro");
            }}
            >
            <svg
              width="24"
              height="24"
              viewBox="0 0 64 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <rect x="8" y="12" width="48" height="10" rx="2" stroke={selectedOption === 'carro' ? 'white' : "black"}  strokeWidth="2" fill={selectedOption === 'carro' ? 'white' : "black"}  />
              <circle cx="18" cy="26" r="3" stroke={selectedOption === 'carro' ? 'white' : "black"} strokeWidth="2" fill={selectedOption === 'carro' ? 'white' : "black"} />
              <circle cx="46" cy="26" r="3" stroke={selectedOption === 'carro' ? 'white' : "black"} strokeWidth="2" fill={selectedOption === 'carro' ? 'white' : "black"} />
              <polygon points="20,12 28,4 44,4 52,12" stroke={selectedOption === 'carro' ? 'white' : "black"} strokeWidth="2" fill="none" />
            </svg>
            carro
          </button>
        </div>
        {!!selectedOption?.length && <button onClick={() => setSelectedOption(null)}>
          <svg 
            width="35px" 
            height="35px" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9393 12L6.9696 15.9697L8.03026 17.0304L12 13.0607L15.9697 17.0304L17.0304 15.9697L13.0607 12L17.0303 8.03039L15.9696 6.96973L12 10.9393L8.03038 6.96973L6.96972 8.03039L10.9393 12Z" fill="#000000"></path> 
            </g>
          </svg>
        </button>}
      </div>

      {selectedOption === 'medida' && <FindByMeasure  />}
      {selectedOption === 'carro' && <FindByCar />}
    </div>
  )
}

export default SwitchMobile