import { NavbarPadding } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const ProductStyle = styled.div`
  ${NavbarPadding}
  ${tw`flex flex-col space-y-4 h-screen max-w-screen-3xl mx-auto pb-4 px-4`}

  aside {
    ${tw`flex-1 border shadow-2xl overflow-hidden rounded-xl`}

    img {
      ${tw`h-full w-full object-cover select-none`}
    }
  }

  article {
    header {
      ${tw`flex flex-col space-y-4`}

      input,
      textarea {
        ${tw`text-secondary bg-transparent border border-secondary
         w-full p-2`}

        &::placeholder {
          ${tw`text-secondary`}
        }
      }

      button {
        ${tw`flex w-full justify-center`}

        h1 {
          ${tw`text-2xl`}
        }

        p {
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    ${tw`flex-row items-stretch space-x-8 space-y-0`}

    aside {
      ${tw`flex-grow[2]`}
    }

    form {
      &,
      article {
        ${tw`flex flex-col h-full w-full flex-1 justify-between `}
      }
    }
  }
`

export { ProductStyle }
