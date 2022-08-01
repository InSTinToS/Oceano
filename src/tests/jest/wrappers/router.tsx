import { createMockRouter } from '../mocks/createMockRouter'

import { RouterContext } from 'next/dist/shared/lib/router-context'
import { NextRouter } from 'next/router'
import { ReactNode } from 'react'

interface IRouterProviderProps {
  children: ReactNode
  props?: Partial<NextRouter>
}

const RouterProvider = ({ children, props = {} }: IRouterProviderProps) => (
  <RouterContext.Provider value={createMockRouter(props)}>
    {children}
  </RouterContext.Provider>
)

export default RouterProvider
