import { TRead } from './types'

import { IProduct, IProductsResponse, IProductsStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api'
import { AxiosResponse } from 'axios'

const read: TRead = async ({ signal, params }, { getState }) => {
  let products = getState().productsStore.products

  if (!params?.id) {
    const response: AxiosResponse<IProductsResponse> = await api.get(
      `/products`,
      { params: { limit: 10 } }
    )

    products = response.data.products
  } else {
    const response: AxiosResponse<IProduct> = await api.get(
      `/products/${params.id}`,
      { signal }
    )

    if (products) products.push(response.data)
    else products = [response.data]
  }

  return { loading: false, products }
}

const readThunk = createAsyncThunk('products-store/read', read)

const readExtraReducers: TExtraReducers<IProductsStore> = ({ addCase }) => {
  addCase(readThunk.pending, state => ({ ...state, loading: true }))

  addCase(readThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(readThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { readExtraReducers, readThunk }
