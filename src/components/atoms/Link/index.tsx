import { ILinkProps } from './types'

import NextLink from 'next/link'

//? <a/> inside is needed when use Image as children

const Link = ({ children, ...props }: ILinkProps) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
)

export default Link
