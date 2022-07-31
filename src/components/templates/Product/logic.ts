import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { readThunk as readProducts } from 'store/products/extraReducers/read'
import { IProduct } from 'store/products/types'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useProduct = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState<IProduct>()
  const id = router.query?.id ? Number(router.query?.id[0]) : undefined
  const productsStore = useAppSelector(({ productsStore }) => productsStore)

  useEffect(() => {
    const controller = new AbortController()
    const productFound = productsStore.products?.find(
      product => product.id === id
    )

    setProduct(productFound)

    if (!productFound && id)
      dispatch(readProducts({ signal: controller.signal, params: { id } }))

    return () => {
      controller.abort()
    }
  }, [dispatch, id, productsStore.products])

  return { product }
}

export { useProduct }
