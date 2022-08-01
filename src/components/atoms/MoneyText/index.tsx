import { MoneyTextStyle } from './styles'
import { IMoneyTextProps } from './types'

const MoneyText = ({
  value,
  prefix = false,
  negative = false,
  percentage = false
}: IMoneyTextProps) => {
  const localPrefix = '$'

  return (
    <MoneyTextStyle negative={negative}>
      {negative ? '-' : ''}
      {prefix ? localPrefix : ''}
      {value}
      {percentage ? '%' : ''}
    </MoneyTextStyle>
  )
}

export default MoneyText
