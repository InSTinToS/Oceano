interface IProduct {
  id: number
  stock: number
  price: number
  title: string
  brand: string
  rating: number
  images: string[]
  category: string
  thumbnail: string
  description: string
  discountPercentage: number
}

interface IProductsResponse {
  skip: number
  limit: number
  total: number
  products: IProduct[]
}

interface IProductsStore {
  loading?: boolean
  products?: IProduct[]
}

export type { IProductsStore, IProduct, IProductsResponse }
