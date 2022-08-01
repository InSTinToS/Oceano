import { IUpdateValues } from './types'

import useAppDispatch from 'hooks/useAppDispatch'
import useAppSelector from 'hooks/useAppSelector'

import { productsActions } from 'store/products'
import { readThunk as readProducts } from 'store/products/extraReducers/read'
import { IProduct } from 'store/products/types'

import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const removeFalsy = (object: Record<any, any>) =>
  Object.keys(object).forEach(key => {
    !object[key] && delete object[key]
  })

const useProduct = () => {
  const initialShownInputs = {
    title: false,
    price: false,
    description: false,
    discountPercentage: false
  }

  const router = useRouter()
  const dispatch = useAppDispatch()
  const [product, setProduct] = useState<IProduct>()
  const { register, handleSubmit } = useForm<IUpdateValues>()
  const [shownInputs, setShownInputs] = useState(initialShownInputs)
  const id = router.query?.id ? Number(router.query?.id[0]) : undefined
  const productsStore = useAppSelector(({ productsStore }) => productsStore)

  const onUpdateSubmit = (values: IUpdateValues) => {
    if (product) {
      removeFalsy(values)

      const newProduct = { ...product, ...values }

      dispatch(productsActions.updateSingle(newProduct))
    }
  }

  const resetShownInputs = () => {
    setShownInputs(initialShownInputs)
  }

  const toggleInputs = (field: keyof IUpdateValues) => {
    setShownInputs(prev => {
      const newState = prev
      newState[field] = !prev[field]
      return newState
    })
  }

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

  useEffect(() => {
    resetShownInputs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    product,
    register,
    shownInputs,
    toggleInputs,
    handleSubmit,
    onUpdateSubmit,
    resetShownInputs
  }
}

export { useProduct }
