import type { TOnSearchChange } from './types'

import fakeProducts from 'tests/jest/mocks/products'

import { IProduct } from 'typescript/api/products'

import filter from 'utils/filter'

import { useRef, useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>()
  const lastQuery = useRef<IProduct[]>()

  const onSearchClick = async () => {
    // const response: AxiosResponse<IProductsResponse> = await api.get(
    //   '/products'
    // )

    // const data = response.data.products

    // setProducts(data)
    // lastQuery.current = data

    //? Fake below

    setTimeout(() => {
      setProducts(fakeProducts.products)
    }, 500)

    lastQuery.current = fakeProducts.products
  }

  const onSearchChange: TOnSearchChange = ({ target: { value } }) => {
    setProducts(prev =>
      value
        ? filter({ array: prev, filter: 'title', value })
        : lastQuery.current
    )
  }

  return { onSearchClick, products, onSearchChange }
}

export { useProducts }
