interface IProduct {
  id: number
  stock: number
  price: number
  title: string
  brand: string
  rating: number
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

export type { IProduct, IProductsResponse }
