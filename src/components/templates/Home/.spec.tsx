import Home from '../Home'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'

describe('Home', () => {
  it('should be able to render Hello', () => {
    render(<Home />)

    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})

export {}
