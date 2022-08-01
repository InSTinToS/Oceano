import { IProduct, IProductsStore } from '../types'

import { TReducer } from 'typescript/redux.types'

const updateSingle: TReducer<IProductsStore, IProduct> = (
  state,
  { payload }
) => {
  const prev = state.products

  if (prev) prev[prev.findIndex(item => item.id === payload.id)] = payload

  state.products = prev
}

export { updateSingle }
