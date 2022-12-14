import { useProducts } from './logic'

import GlobalProvider from '../../wrappers/GlobalProvider'
import Products from '../Products'

import '@testing-library/jest-dom'
import {
  act,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

describe('Products', () => {
  it('should be able to show products on start', async () => {
    render(
      <GlobalProvider>
        <Products />
      </GlobalProvider>
    )

    expect(await screen.findByRole('list')).toBeInTheDocument()
  })

  it('should be able to filter using input', async () => {
    const differWord = 'iPhone 9'
    const wordSearched = 'Samsung Universe 9'

    render(
      <GlobalProvider>
        <Products />
      </GlobalProvider>
    )

    expect(
      await screen.findByRole('list', { name: 'Produtos' })
    ).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Pesquisar' })

    await userEvent.type(input, wordSearched)

    expect(input).toHaveValue(wordSearched)

    expect(
      await screen.findByRole('list', { name: 'Produtos' })
    ).toHaveTextContent(wordSearched)

    await waitFor(async () =>
      expect(
        await screen.findByRole('list', { name: 'Produtos' })
      ).not.toHaveTextContent(differWord)
    )
  })
})

describe('useProducts', () => {
  it('should be able to search all products', async () => {
    const { result } = renderHook(useProducts, { wrapper: GlobalProvider })

    await act(async () => {
      await result.current.onSearchSubmit()
    })

    await waitFor(() => expect(result.current.products).toBeTruthy())
  })

  it('should be able to filter using input', async () => {
    const differWord = 'iPhone 9'
    const wordSearched = 'MacBook Pro'

    const { result } = renderHook(useProducts, { wrapper: GlobalProvider })

    await act(async () => await result.current.onSearchSubmit())

    await waitFor(() => {
      expect(result.current.products).toBeTruthy()
    })

    act(() =>
      result.current.onSearchChange({
        target: { value: wordSearched }
      } as React.ChangeEvent<HTMLInputElement>)
    )

    await waitFor(() => {
      expect(
        result.current.products?.find(({ title }) => title === differWord)
      ).toBeFalsy()

      expect(
        result.current.products?.find(({ title }) => title === wordSearched)
      ).toBeTruthy()
    })
  })
})
export {}
