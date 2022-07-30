import { useProducts } from './logic'

import Products from '../Products'

import '@testing-library/jest-dom'
import {
  act,
  fireEvent,
  logRoles,
  render,
  renderHook,
  screen,
  waitFor
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

describe('Products', () => {
  it('should be able to search all products', async () => {
    render(<Products />)

    const search = screen.getByRole('button', { name: 'Pesquisar' })

    expect(screen.queryByRole('list')).not.toBeInTheDocument()

    await userEvent.click(search)

    expect(await screen.findByRole('list')).toBeInTheDocument()
  })

  it('should be able to filter using input', async () => {
    const differWord = 'iPhone 9'
    const wordSearched = 'Samsung Universe 9'

    render(<Products />)

    const submit = screen.getByRole('button', { name: 'Pesquisar' })
    await userEvent.click(submit)
    let list = await screen.findByRole('list')

    expect(list).toBeInTheDocument()

    const input = screen.getByRole('textbox', { name: 'Pesquisar' })

    await act(async () => await userEvent.type(input, wordSearched))

    expect(input).toHaveValue(wordSearched)
    list = await screen.findByRole('list')

    expect(list).toHaveTextContent(wordSearched)

    await waitFor(async () => expect(list).not.toHaveTextContent(differWord))
  })
})

describe('useProducts', () => {
  it('should be able to search all products', async () => {
    const { result } = renderHook(useProducts)

    await act(async () => {
      await result.current.onSearchClick()
    })

    await waitFor(() => expect(result.current.products).toBeTruthy())
  })
  it('should be able to filter using input', async () => {
    const differWord = 'iPhone 9'
    const wordSearched = 'MacBook Pro'

    const { result } = renderHook(useProducts)

    await act(async () => await result.current.onSearchClick())

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