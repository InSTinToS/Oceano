import type { IProduct } from 'store/products/types'

interface IUpdateValues {
  title: IProduct['title']
  price: IProduct['price']
  description: IProduct['description']
  discountPercentage: IProduct['discountPercentage']
}

export type { IUpdateValues }
