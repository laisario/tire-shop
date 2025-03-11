import { MeasureCar } from '@/types/measures'
import data from '../../data/data.json'

export const getModels = (brand: string) => {
 return data[brand]
}

export const getYears = (measures: MeasureCar) => {
  return getModels(measures?.brand)?.[measures?.model]
}

export const getVersions = (measures: MeasureCar) => {
  return getYears(measures)?.[measures?.year]
}