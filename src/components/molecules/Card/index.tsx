/* eslint-disable @next/next/no-img-element */
import { CardStyle, Description, Footer, Header, Price, Title } from './styles'
import { ICardProps } from './types'

const Card = ({ item: { description, title, image, price } }: ICardProps) => (
  <CardStyle
    initial={{ opacity: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    whileInView={{ x: 0, rotate: 0, opacity: 1 }}
  >
    <Header>
      <img draggable={false} src={image} alt={title} />
    </Header>

    <Footer>
      <Title>{title}</Title>

      <Price>$ {price}</Price>

      <Description>{description}</Description>
    </Footer>
  </CardStyle>
)

export default Card
