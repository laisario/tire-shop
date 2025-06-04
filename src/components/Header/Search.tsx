import React, { useState } from 'react'
import CustomSelect from './CustomSelect'


function Search(props) {
  const {
    searchQuery,
    setSearchQuery,
    handleSearch,
    selectedOption, 
    setSelectedOption,
    options,
  } = props;

  return (
    <div className="max-w-[475px] w-full">
      <form>
        <div className="flex items-center">
          <CustomSelect options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />

          <div className="relative max-w-[333px] sm:min-w-[333px] w-full">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 inline-block w-px h-5.5 bg-gray-4"></span>
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              type="search"
              name="search"
              id="search"
              placeholder="Ex: 185/65R15"
              autoComplete="off"
              className="custom-search w-full rounded-r-[5px] bg-gray-1 !border-l-0 border border-gray-3 py-2.5 pl-4 pr-10 outline-none ease-in duration-200"
            />

            <button
              id="search-btn"
              aria-label="Search"
              className="flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 ease-in duration-200 hover:text-gray-4"
              onClick={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch()
                }
              }}
              type='button'
            >
              Buscar
            </button>
          </div> 
        </div>
      </form>
    </div>
  )
}

export default Search