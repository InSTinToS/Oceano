import fakeProducts from 'tests/jest/mocks/products'

import { IProduct } from 'typescript/api/products'

import { useState } from 'react'

const useProducts = () => {
  const [products, setProducts] = useState<IProduct[]>()

  const onSearchClick = async () => {
    // const response: AxiosResponse<IProductsResponse> = await api.get(
    //   '/products'
    // )

    // setProducts(response.data.products)

    setTimeout(() => {
      setProducts(fakeProducts.products)
    }, 500)
  }

  return { onSearchClick, products }
}

export { useProducts }
