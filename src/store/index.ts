import { productsStore } from './products'

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: { productsStore: productsStore.reducer } })

export { store }
