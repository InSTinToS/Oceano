interface IItem {
  id: string
  price: number
  title: string
  image: string
  description: string
}

interface ICardProps {
  item: IItem
}

export type { ICardProps, IItem }
