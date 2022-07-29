import { AnimatePresenceProps } from 'framer-motion'
import { ReactNode } from 'react'

interface IPresenceProps extends AnimatePresenceProps {
  condition: boolean
  children: ReactNode
}

export type { IPresenceProps }
