import { IProductsStore } from './types'

import { registerExtraReducers } from './extraReducers/register'
import { update } from './reducers/update'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IProductsStore = { loading: undefined, products: undefined }

const extraReducers: TExtraReducers<IProductsStore> = builder => {
  registerExtraReducers(builder)
}

const productsStore = createSlice({
  initialState,
  extraReducers,
  reducers: { update },
  name: 'products-store'
})

export { productsStore }
