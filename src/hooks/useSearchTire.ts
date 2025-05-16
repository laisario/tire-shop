import { Measures } from '@/types/measures'
import dadosPneus from '../../data/dadosPneus.json'
import React from 'react'

function useSearchTire() {
  const getTireById = (id: number) => {
    return dadosPneus?.find((pneu) => pneu?.id === id)
  }

  return {
    getTireById
  }
}

export default useSearchTire