import { IProduct } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'

const register = async (data: any) => {
  const products = data

  return { loading: false, products }
}

const registerThunk = createAsyncThunk('products-store/register', register)

const registerExtraReducers: TExtraReducers<IProduct> = ({ addCase }) => {
  addCase(registerThunk.pending, state => ({ ...state, loading: true }))

  addCase(registerThunk.fulfilled, (state, { payload }) => ({
    ...state,
    ...payload,
    loading: false
  }))

  addCase(registerThunk.rejected, state => ({
    ...state,
    loading: false
  }))
}

export { registerExtraReducers, registerThunk }
