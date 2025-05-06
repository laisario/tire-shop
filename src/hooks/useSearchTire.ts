import { Measures } from '@/types/measures'
import dadosPneus from '../../data/dadosPneus.json'
import React from 'react'

function useSearchTire() {
  const getTireByMeasure = (measures: Measures) => {
    const measure = `${measures?.width}/${measures?.height}R${measures?.rim}`;
    const matchingVersions = [];

   
  }

  const getTireById = (id: number) => {
    return dadosPneus?.find((pneu) => pneu?.id === id)
  }

  return {
    getTireByMeasure,
    getTireById
  }
}

export default useSearchTire