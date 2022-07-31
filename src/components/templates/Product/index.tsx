/* eslint-disable @next/next/no-img-element */
import { useProduct } from './logic'
import { ProductStyle } from './styles'

import MoneyText from 'components/atoms/MoneyText'

import type { TNextPageWithLayout } from 'typescript/next.types'

const Product: TNextPageWithLayout = () => {
  const { product } = useProduct()

  return product ? (
    <ProductStyle>
      <aside>
        <img src={product.images[0]} alt='' />
      </aside>

      <article>
        <header>
          <h1>
            {product.title} - {product.brand}
          </h1>
          <MoneyText value={product.price} prefix />
          <MoneyText value={product.discountPercentage} percentage negative />
          <p>{product.description}</p>
        </header>

        <footer>
          <button>Alterar</button>
        </footer>
      </article>
    </ProductStyle>
  ) : (
    <></>
  )
}

export default Product
