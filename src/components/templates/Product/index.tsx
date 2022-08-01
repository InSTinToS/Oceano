/* eslint-disable @next/next/no-img-element */
import { useProduct } from './logic'
import { ProductStyle } from './styles'

import Button from 'components/atoms/Button'
import MoneyText from 'components/atoms/MoneyText'

import type { TNextPageWithLayout } from 'typescript/next.types'

const Product: TNextPageWithLayout = () => {
  const {
    product,
    register,
    shownInputs,
    toggleInputs,
    handleSubmit,
    onUpdateSubmit,
    resetShownInputs
  } = useProduct()

  return product ? (
    <ProductStyle>
      <aside>
        <img src={product.images[0]} alt='' />
      </aside>

      <form onSubmit={handleSubmit(onUpdateSubmit)}>
        <article>
          <header>
            {shownInputs.title ? (
              <input {...register('title')} placeholder='Título' />
            ) : (
              <button onClick={() => toggleInputs('title')}>
                <h1>{product.title}</h1>
              </button>
            )}

            {shownInputs.price ? (
              <input {...register('price')} placeholder='Preço' />
            ) : (
              <button onClick={() => toggleInputs('price')}>
                <MoneyText value={product.price} prefix />
              </button>
            )}

            {shownInputs.discountPercentage ? (
              <input
                {...register('discountPercentage')}
                placeholder='Porcentagem de desconto'
              />
            ) : (
              <button onClick={() => toggleInputs('discountPercentage')}>
                <MoneyText
                  negative
                  percentage
                  value={product.discountPercentage}
                />
              </button>
            )}

            {shownInputs.description ? (
              <textarea {...register('description')} placeholder='Descrição' />
            ) : (
              <button onClick={() => toggleInputs('description')}>
                <p>{product.description}</p>
              </button>
            )}
          </header>

          <footer>
            <Button type='submit' onClick={resetShownInputs}>
              Alterar
            </Button>
          </footer>
        </article>
      </form>
    </ProductStyle>
  ) : (
    <></>
  )
}

export default Product
