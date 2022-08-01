import type { LinkProps as NextLinkProps } from 'next/link'
import type { ReactNode } from 'react'

interface ILinkProps extends NextLinkProps {
  children?: ReactNode
}

export type { ILinkProps }
