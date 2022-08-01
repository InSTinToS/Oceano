import { ButtonStyle } from './styles'

import type { ButtonHTMLAttributes } from 'react'

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <ButtonStyle {...props}>{children}</ButtonStyle>
)

export default Button
