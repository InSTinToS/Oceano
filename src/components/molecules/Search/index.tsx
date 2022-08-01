/* eslint-disable @next/next/no-img-element */
import { Input, SearchStyle } from './styles'
import type { ISearchProps } from './types'

const Search = ({ onSearchChange, onSearchSubmit }: ISearchProps) => (
  <SearchStyle>
    <Input
      type='text'
      name='search'
      autoComplete='off'
      aria-label='Pesquisar'
      placeholder='Pesquisar'
      onChange={onSearchChange}
    />

    <button
      type='button'
      data-cy='search'
      aria-label='Pesquisar'
      onClick={onSearchSubmit}
    >
      <img src='/search.png' alt='Ícone de pesquisa' />
    </button>
  </SearchStyle>
)

export default Search
