import { IItem } from 'components/molecules/List/ListItem/types'

import { IProduct } from 'api/products.types'
import { InputHTMLAttributes } from 'react'

type TProductsToItems = (products: IProduct[]) => IItem[]

type TOnSearchChange = InputHTMLAttributes<HTMLInputElement>['onChange']

export type { TOnSearchChange, TProductsToItems }
