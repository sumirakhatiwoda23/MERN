import React from 'react'
import { useGetProductsQuery } from './productApi'

export default function ProductList() {
    const{data, isLoading, isError}=useGetProductsQuery()
    console.log(data)

  return (
    <div>

ProductList





    </div>
  )
}
