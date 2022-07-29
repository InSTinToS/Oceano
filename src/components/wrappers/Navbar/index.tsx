import { NavbarStyle } from './styles'

import { ReactElement } from 'react'

const Navbar = () => (
  <NavbarStyle>
    <ul>
      <li>
        <a>
          <img src='/logo.png' alt='Logo' />
        </a>
      </li>
    </ul>
  </NavbarStyle>
)

const getNavbarLayout = (page: ReactElement) => (
  <>
    <Navbar />

    {page}
  </>
)

export { getNavbarLayout }

export default Navbar
