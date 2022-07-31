import { ItemsGrid } from './styles'
import { IListProps } from './types'

import Card from 'components/molecules/Card'

const Items = ({ items, ariaLabel }: IListProps) => (
  <section>
    {items && (
      <ItemsGrid data-cy='items' aria-label={ariaLabel}>
        {items.map(item => (
          <li key={item.id}>
            <Card item={item} />
          </li>
        ))}
      </ItemsGrid>
    )}
  </section>
)

export default Items
