import styled, { css } from 'styled-components'
import tw from 'twin.macro'

const NavbarContent = css`
  ${tw`pt-26 w-full min-w-80 bg-gradient-to-b from-primary to-blue-400 
    min-h-screen`}
`

const NavbarStyle = styled.nav`
  ${tw`fixed z-10 min-w-80 w-full h-26 px-8 bg-transparent`}

  &, ul {
    ${tw`flex flex-row items-center`}
  }

  ul {
    ${tw`space-x-8 max-w-screen-3xl mx-auto w-full`}

    li {
      a {
        ${tw`text-xl mb-4`}

        img {
          ${tw`relative h-6`}
        }
      }
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
