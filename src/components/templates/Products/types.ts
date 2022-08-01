import type { IItem } from 'components/molecules/Card/types'

import type { IProduct } from 'store/products/types'

import type { InputHTMLAttributes } from 'react'

type TProductsToItems = (products: IProduct[]) => IItem[]

type TOnSearchChange = InputHTMLAttributes<HTMLInputElement>['onChange']

export type { TOnSearchChange, TProductsToItems }
