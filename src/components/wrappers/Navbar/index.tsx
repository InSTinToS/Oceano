/* eslint-disable @next/next/no-html-link-for-pages */

/* eslint-disable @next/next/no-img-element */
import { NavbarStyle } from './styles'

import { ReactElement } from 'react'

const Navbar = () => {
  return (
    <NavbarStyle>
      <ul>
        <li>
          <a href='/'>
            <img src='/logo.png' alt='Logo' />
          </a>
        </li>

        <li>
          <a href='/products'>Produtos</a>
        </li>
      </ul>
    </NavbarStyle>
  )
}

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
