import { NavbarStyle } from './styles'

import Image from 'components/atoms/Image'
import Link from 'components/atoms/Link'

import { ReactElement } from 'react'

const Navbar = () => (
  <NavbarStyle>
    <ul>
      <li>
        <Link href='/'>
          <Image alt='Logo' src='/logo.png' className='logo' />
        </Link>
      </li>

      <li>
        <Link href='/products'>Produtos</Link>
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
