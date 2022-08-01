import tw from 'twin.macro'

const Input = tw.input`
  flex-1 
  outline-none 
  bg-transparent 
  
  placeholder:text-secondary
`

const SearchStyle = tw.form`
  flex 
  px-4
  py-2
  space-x-4
  rounded-xl
  shadow-2xl
  bg-primary-800
`

export { SearchStyle, Input }
