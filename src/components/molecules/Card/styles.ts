import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

const Title = tw.span`
  text-xl
`

const Price = tw.span`
  text-xl
  ml-auto
  text-green-500
  font-extrabold
`

const Description = tw.span`
  mt-2
  text-sm
  col-span-2
  overflow-hidden
`

const Header = styled.header`
  ${tw`h-96 w-full col-span-2 row-span-4`}

  img {
    ${tw`h-full w-full object-cover select-none`}
  }
`

const Footer = styled.footer`
  ${tw`
    grid 
    py-4 
    px-4
    h-1/3
    w-full 
    absolute
    bottom-0
    grid-cols-2
    bg-primary-800.8 

    sm:hidden
  `}
`

const CardStyle = styled(motion.article)`
  ${tw`w-full rounded-xl overflow-hidden bg-primary-800 justify-self-center 
  relative`}

  &:hover {
    ${tw`drop-shadow-2xl`}
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      ${Footer} {
        ${tw`grid`}
      }
    }
  }
`

export { CardStyle, Title, Price, Description, Header, Footer }
