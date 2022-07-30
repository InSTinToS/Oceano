interface IFilterParams<ArrayT> {
  value: string
  array?: ArrayT[]
  filter: keyof ArrayT
}

type TFilter = <ArrayT>(params: IFilterParams<ArrayT>) => ArrayT[] | undefined

const filter: TFilter = ({ array, filter, value }) =>
  array
    ? array?.filter(item => {
        const arrayItem = item[filter]

        switch (typeof arrayItem) {
          case 'number':
            return arrayItem
              .toString()
              .toLowerCase()
              .includes(value.toLowerCase())

          case 'string':
            return arrayItem.toLowerCase().includes(value.toLowerCase())

          default:
            return false
        }
      })
    : array

export default filter
