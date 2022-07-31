import type { TOnSearchChange, TProductsToItems } from './types'

import { IItem } from 'components/molecules/Card/types'

import fakeProducts from 'tests/jest/mocks/products'

import filter from 'utils/filter'

import { useEffect, useRef, useState } from 'react'

const productsToItems: TProductsToItems = products =>
  products.map(({ description, id, title, price, thumbnail }) => ({
    title,
    price,
    description,
    id: String(id),
    image: thumbnail
  }))

const useProducts = () => {
  const lastQuery = useRef<IItem[]>()
  const [products, setProducts] = useState<IItem[]>()

  const getAllProducts = async () => {
    // const response: AxiosResponse<IProductsResponse> = await api.get(
    //   '/products'
    // )

    // const items = productsToItems(response.data.products)
    // setProducts(items)
    // lastQuery.current = items

    //? Fake below

    const items = productsToItems(fakeProducts.products)

    setTimeout(() => {
      setProducts(items)
    }, 500)

    lastQuery.current = items
  }

  const onSearchSubmit = async () => {
    await getAllProducts()
  }

  const onSearchChange: TOnSearchChange = ({ target: { value } }) => {
    setProducts(prev =>
      value
        ? filter({ array: prev, filter: 'title', value })
        : lastQuery.current
    )
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return { onSearchSubmit, products, onSearchChange }
}

export { useProducts }
