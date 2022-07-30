import type { ImageProps as NextImageProps } from 'next/image'

interface IImageProps extends NextImageProps {
  className?: string
}

export type { IImageProps }
