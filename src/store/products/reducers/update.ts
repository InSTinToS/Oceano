import { IProductsStore } from '../types'

import { TReducer } from 'typescript/redux.types'

const update: TReducer<IProductsStore, IProductsStore['products']> = (
  state,
  { payload }
) => {
  const prev = state.products

  if (prev && payload) state.products = [...prev, ...payload]
}

export { update }
