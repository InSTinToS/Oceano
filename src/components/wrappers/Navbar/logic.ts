import { useMotionValue, useTransform } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const useNavbar = () => {
  const router = useRouter()
  const y = useMotionValue(0)
  const opacity = useTransform(y, [0, 100], [0, 0.98])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      y.set(window.scrollY)
    })
  }, [y])

  const onLogoClick = () => {
    router.pathname === '/' || router.pathname === '/products'
      ? window.scrollTo({ top: 0, behavior: 'smooth' })
      : router.push('/')
  }

  return { opacity, onLogoClick }
}

export { useNavbar }
