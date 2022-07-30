import { useProducts } from './logic'

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
  it('should be able to search all products', async () => {
    render(<Products />)

    const search = screen.getByRole('button', { name: 'Pesquisar' })

    expect(screen.queryByRole('list')).not.toBeInTheDocument()

    await userEvent.click(search)

    expect(await screen.findByRole('list')).toBeInTheDocument()
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
})

export {}
