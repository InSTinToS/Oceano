import { useProduct } from './logic'

import { createMockRouter } from '../../../tests/jest/mocks/createMockRouter'
import GlobalProvider from '../../wrappers/GlobalProvider'
import Product from '../Product'

import '@testing-library/jest-dom'
import { render, renderHook, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import React from 'react'
import { act } from 'react-dom/test-utils'

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

  it('should be able to update product', async () => {
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
      expect(await screen.findByRole('heading')).toHaveTextContent('iPhone 9')
    })

    await userEvent.click(screen.getByRole('button', { name: 'iPhone 9' }))
    await userEvent.type(screen.getByPlaceholderText('Título'), 'TEST')
    await userEvent.click(screen.getByRole('button', { name: 'Alterar' }))

    await waitFor(async () => {
      expect(
        await screen.findByRole('button', { name: 'TEST' })
      ).toBeInTheDocument()
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

  it('should be able to update product', async () => {
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

    act(() => {
      result.current.onUpdateSubmit({
        price: '',
        title: 'TEST',
        description: '',
        discountPercentage: ''
      })
    })

    await waitFor(() => {
      expect(result.current.product.title).toBe('TEST')
    })
  })
})

export {}
