import { useNavbar } from './logic'
import { NavbarStyle } from './styles'

import Image from 'components/atoms/Image'
import Link from 'components/atoms/Link'

import { motion } from 'framer-motion'
import { ReactElement } from 'react'

const Navbar = () => {
  const { opacity, onLogoClick } = useNavbar()

  return (
    <NavbarStyle>
      <motion.div id='bg' style={{ opacity }} />

      <ul>
        <li>
          <button onClick={onLogoClick}>
            <Image alt='Logo' src='/logo.png' className='logo' />
          </button>
        </li>

        <li>
          <Link href='/products'>Produtos</Link>
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
