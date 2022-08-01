import type { HTMLAttributes } from 'react'

interface ISearchProps {
  onSearchChange: HTMLAttributes<HTMLInputElement>['onChange']
  onSearchSubmit: HTMLAttributes<HTMLButtonElement>['onClick']
}

export type { ISearchProps }
