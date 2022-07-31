import { IProduct } from '../types'

import { TReducer } from 'typescript/redux.types'

const update: TReducer<IProduct, IProduct> = (state, { payload }) => {
  state = { ...state, ...payload }
}

export { update }
