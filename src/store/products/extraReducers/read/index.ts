import { IProductsResponse, IProductsStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'
import api from 'api'
import { AxiosResponse } from 'axios'

const read = async ({ signal }: { signal?: AbortSignal }) => {
  const response: AxiosResponse<IProductsResponse> = await api.get(
    '/products',
    {
      signal,
      params: { limit: 10 }
    }
  )

  return { loading: false, products: response.data.products }
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
