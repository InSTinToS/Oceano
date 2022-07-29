import { IUserStore } from './types'

import { registerExtraReducers } from './extraReducers/register'
import { update } from './reducers/update'

import type { TExtraReducers } from 'typescript/redux.types'

import { createSlice } from '@reduxjs/toolkit'

const initialState: IUserStore = { loading: undefined, user: undefined }

const extraReducers: TExtraReducers<IUserStore> = builder => {
  registerExtraReducers(builder)
}

const userStore = createSlice({
  initialState,
  extraReducers,
  name: 'userStore',
  reducers: { update }
})

export { userStore }
