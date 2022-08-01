import { IProductsStore } from './types'

import { readExtraReducers } from './extraReducers/read'
import { update } from './reducers/update'
import { updateSingle } from './reducers/updateSingle'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IProductsStore = { loading: undefined, products: undefined }

const extraReducers: TExtraReducers<IProductsStore> = builder => {
  readExtraReducers(builder)
}

const productsStore = createSlice({
  initialState,
  extraReducers,
  name: 'products-store',
  reducers: { update, updateSingle: updateSingle }
})

const productsActions = productsStore.actions

export { productsStore, productsActions }
