import { IProductsStore } from 'store/products/types'

import { TPayloadCreator } from 'typescript/redux.types'

interface IReadParams {
  signal?: AbortSignal
  params: { id: number }
}

type TRead = TPayloadCreator<IProductsStore, Partial<IReadParams>>

export type { TRead }
