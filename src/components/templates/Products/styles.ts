import { NavbarContent } from 'components/wrappers/Navbar/styles'

import styled from 'styled-components'
import tw from 'twin.macro'

const ProductsStyle = styled.main`
  ${NavbarContent}

  form input {
    ${tw`text-primary`}
  }
`

export { ProductsStyle }
