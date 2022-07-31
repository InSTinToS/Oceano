import { IMoneyStyleProps } from './types'

import styled from 'styled-components'
import tw from 'twin.macro'

const MoneyTextStyle = styled.span<IMoneyStyleProps>`
  ${tw`text-xl ml-auto font-extrabold`}

  ${({ negative }) => (negative ? tw`text-red-500` : tw`text-green-500`)};
`

export { MoneyTextStyle }
