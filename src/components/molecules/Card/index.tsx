/* eslint-disable @next/next/no-img-element */
import { CardStyle, Description, Footer, Header, Title } from './styles'
import type { ICardProps } from './types'

import Link from 'components/atoms/Link'
import MoneyText from 'components/atoms/MoneyText'

const Card = ({
  item: { id, description, title, image, price }
}: ICardProps) => (
  <CardStyle
    initial={{ opacity: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  >
    <Header>
      <Link href={`/products/${id}`}>
        <img draggable={false} src={image} alt={title} />
      </Link>
    </Header>

    <Footer>
      <Title>{title}</Title>

      <MoneyText value={price} prefix />

      <Description>{description}</Description>
    </Footer>
  </CardStyle>
)

export default Card
