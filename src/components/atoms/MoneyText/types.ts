interface IMoneyStyleProps {
  negative: boolean
}

interface IMoneyTextProps {
  value: number
  prefix?: boolean
  negative?: boolean
  percentage?: boolean
}

export type { IMoneyTextProps, IMoneyStyleProps }
