import serviceData from '@/components/ServiceGrid/serviceData'
import React from 'react'

function useSearchService() {
  const getServiceById = (id: string) => {
    return serviceData?.find(service => service?.id === id)
  }
  return {
    getServiceById
  }
}

export default useSearchService