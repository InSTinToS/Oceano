import { NavbarPadding } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const ProductStyle = styled.div`
  ${NavbarPadding}
  ${tw`flex flex-col space-y-4 h-screen max-w-screen-3xl mx-auto`}

  aside {
    ${tw`mx-4 flex-1 border shadow-2xl overflow-hidden rounded-xl`}

    img {
      ${tw`h-full w-full object-cover select-none`}
    }
  }

  article {
    ${tw`p-4`}

    h1 {
      ${tw`text-2xl`}
    }

    p {
      ${tw`py-2`}
    }

    span + span {
      ${tw`ml-2`}
    }

    button {
      ${tw`shadow-2xl py-2 text-xl rounded-xl w-full bg-secondary 
        text-primary-200 mt-4`}
    }
  }

  @media screen and (min-width: 1024px) {
    ${tw`flex-row justify-evenly pb-8 space-y-0 `}

    aside {
      flex-grow: 2;
      ${tw`h-full`};
    }

    article {
      ${tw`h-full flex flex-col justify-between flex-1`}

      button {
        ${tw`m-0`}
      }
    }
  }

  @media screen and (min-width: 1440px) {
    article {
    }
  }
`

export { ProductStyle }
