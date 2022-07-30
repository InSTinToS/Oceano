import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarContent = css`
  ${tw`pt-26 w-full min-w-80 bg-gradient-to-b from-primary to-blue-400 
    min-h-screen`}
`

const NavbarStyle = styled.nav`
  ${tw`fixed z-10 min-w-80 w-full h-26 px-8 bg-transparent`}

  &,
  ul {
    ${tw`flex flex-row items-center`}
  }

  ul {
    ${tw`space-x-8 max-w-screen-3xl mx-auto w-full`}

    li a {
      ${tw`h-8 flex items-center text-xl`}

      .logo {
        ${tw`h-8 w-36`}
      }
    }
  }

  @media screen and (min-width: 768px) {
    ul li a {
      .logo {
        ${tw`h-10 w-40`}
      }
    }
  }
`

export { NavbarStyle, NavbarContent }
