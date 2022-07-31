import type { TOnSearchChange, TProductsToItems } from './types'

import { IItem } from 'components/molecules/Card/types'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { readThunk as readProducts } from 'store/products/extraReducers/read'

import filter from 'utils/filter'

import { useCallback, useEffect, useRef, useState } from 'react'

const productsToItems: TProductsToItems = products =>
  products.map(({ description, id, title, price, thumbnail }) => ({
    title,
    price,
    description,
    id: String(id),
    image: thumbnail
  }))

const useProducts = () => {
  const dispatch = useAppDispatch()
  const lastQuery = useRef<IItem[]>()
  const [products, setProducts] = useState<IItem[]>()

  const productsStore = useAppSelector(({ productsStore }) => productsStore)

  const onSearchChange: TOnSearchChange = ({ target: { value } }) => {
    setProducts(prev =>
      value
        ? filter({ array: prev, filter: 'title', value })
        : lastQuery.current
    )
  }

  const onSearchSubmit = useCallback(async () => {
    await dispatch(readProducts({}))
  }, [dispatch])

  useEffect(() => {
    const controller = new AbortController()

    dispatch(readProducts({ signal: controller.signal }))

    return () => {
      controller.abort()
    }
  }, [dispatch])

  useEffect(() => {
    if (productsStore.products) {
      const items = productsToItems(productsStore.products)

      setProducts(items)
      lastQuery.current = items
    }
  }, [productsStore.products])

  return { onSearchSubmit, products, onSearchChange }
}

export { useProducts }
