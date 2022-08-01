import { NavbarPadding } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const Header = styled.header`
  ${NavbarPadding}
  ${tw`px-4 max-w-screen-3xl mx-auto`}
`

const Main = tw.main`
  pb-26
  mx-auto
  max-w-screen-3xl 
`

const Footer = styled.footer`
  ${tw`fixed bottom-0 right-0 p-8`}

  ul {
    ${tw`flex space-x-4 justify-end`}

    li a img {
      ${tw`h-10`}
    }
  }
`

export { Header, Footer, Main }
