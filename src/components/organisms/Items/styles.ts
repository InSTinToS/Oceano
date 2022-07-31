import { motion } from 'framer-motion'
import tw from 'twin.macro'

const ItemsGrid = tw(motion.ul)`
  grid 
  px-4 
  gap-4 
  w-full 
  gap-y-4 
  overflow-x-hidden
  
  grid-cols-1 
  md:grid-cols-2
  lg:grid-cols-3
  2xl:grid-cols-4
  3xl:grid-cols-5
`

export { ItemsGrid }
