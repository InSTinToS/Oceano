import { useProduct } from './logic'

import { createMockRouter } from '../../../tests/jest/mocks/createMockRouter'
import GlobalProvider from '../../wrappers/GlobalProvider'
import Product from '../Product'

import '@testing-library/jest-dom'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import React from 'react'

describe('Product', () => {
  it('should be able to render product based on url', async () => {
    const searchedId = 1

    render(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: searchedId.toString() } })}
      >
        <GlobalProvider>
          <Product />
        </GlobalProvider>
      </RouterContext.Provider>
    )

    await waitFor(async () => {
      expect(await screen.findByRole('heading')).toHaveTextContent('iPhone')
    })
  })
})

describe('useProduct', () => {
  it('should be able to render product based on url', async () => {
    const searchedId = 1

    const { result } = renderHook(useProduct, {
      wrapper: ({ children }) => (
        <RouterContext.Provider
          value={createMockRouter({ query: { id: searchedId.toString() } })}
        >
          <GlobalProvider>{children}</GlobalProvider>
        </RouterContext.Provider>
      )
    })

    await waitFor(() => {
      expect(result.current.product.id).toBe(searchedId)
    })
  })
})

export {}
