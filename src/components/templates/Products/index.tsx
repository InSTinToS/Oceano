/* eslint-disable @next/next/no-img-element */
import { useProducts } from './logic'
import { Footer, Header, Main } from './styles'

import Search from 'components/molecules/Search'

import Items from 'components/organisms/Items'

import type { TNextPageWithLayout } from 'typescript/next.types'

import Head from 'next/head'

const Products: TNextPageWithLayout = () => {
  const { onSearchSubmit, products, onSearchChange } = useProducts()

  return (
    <>
      <Head>
        <title>Products</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header>
        <Search
          onSearchChange={onSearchChange}
          onSearchSubmit={onSearchSubmit}
        />
      </Header>

      <Main>
        <Items items={products} ariaLabel='Produtos' />
      </Main>

      <Footer>
        <ul className=''>
          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://github.com/InSTinToS'
            >
              <img src='/github.png' alt='Github' />
            </a>
          </li>

          <li>
            <a
              target='_blank'
              rel='noreferrer'
              href='https://www.linkedin.com/in/miguel-andrade-barreto-b0b410191/'
            >
              <img src='/linkedin.svg' alt='Linkedin' />
            </a>
          </li>
        </ul>
      </Footer>
    </>
  )
}

export default Products
