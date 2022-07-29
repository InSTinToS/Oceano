import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarContent = css`
  ${tw`pt-26 w-full min-w-80 font-family['Plus Jakarta Sans']`}
`

const NavbarStyle = styled.nav`
  ${tw`fixed z-10 min-w-80 w-full h-26 px-8 bg-secondary shadow-2xl`}

  &, ul {
    ${tw`flex flex-row items-center`}
  }

  ul {
    ${tw`justify-between max-w-screen-3xl mx-auto w-full`}

    li a img {
      ${tw`relative h-6`}
    }
  }

  @media screen and (min-width: 425px) {
    ul li a img {
      ${tw`relative h-7`}
    }
  }

  @media screen and (min-width: 768px) {
    ul li a img {
      ${tw`relative h-8`}
    }
  }
`

export { NavbarStyle, NavbarContent }
