import { useMotionValue, useTransform } from 'framer-motion'
import { useEffect } from 'react'

const useNavbar = () => {
  const y = useMotionValue(0)
  const opacity = useTransform(y, [0, 100], [0, 0.98])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      y.set(window.scrollY)
    })
  }, [y])

  const onLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { opacity, onLogoClick }
}

export { useNavbar }
