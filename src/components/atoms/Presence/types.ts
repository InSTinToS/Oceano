import type { AnimatePresenceProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface IPresenceProps extends AnimatePresenceProps {
  condition: boolean
  children: ReactNode
}

export type { IPresenceProps }
