import type { IImageProps } from './types'

import NextImage from 'next/image'

const Image = ({ className, ...props }: IImageProps) => (
  <div className={className} style={{ position: 'relative' }}>
    <NextImage layout='fill' objectFit='contain' {...props} />
  </div>
)

export default Image
