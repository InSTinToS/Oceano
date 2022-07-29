import { IUserStore } from '../../types'

import { TExtraReducers } from 'typescript/redux.types'

import { createAsyncThunk } from '@reduxjs/toolkit'

const register = async (data: any) => {
  const user = data

  return { loading: false, user }
}

const registerThunk = createAsyncThunk('userStore/register', register)

const registerExtraReducers: TExtraReducers<IUserStore> = ({ addCase }) => {
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
