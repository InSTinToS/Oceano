import type { IGlobalProviderProps } from './types'

import { store } from 'store'

import { Provider as ReduxProvider } from 'react-redux'

const GlobalProvider = ({ children }: IGlobalProviderProps) => (
  <ReduxProvider store={store}>
    <>{children}</>
  </ReduxProvider>
)

export default GlobalProvider
