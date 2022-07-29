import GlobalProvider from 'components/wrappers/GlobalProvider'

import 'styles/tailwind.css'

import type { TAppPropsWithLayout } from 'typescript/next.types'

const MyApp = ({ Component, pageProps }: TAppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page)

  return getLayout(
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>
  )
}

export default MyApp
