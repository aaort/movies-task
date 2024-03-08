import { Input } from '@renderer/components/ui/input'
import { ChangeEventHandler, ReactNode, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = (): ReactNode => {
  const [searchParams, setSearchParams] = useSearchParams()

  const searchText = searchParams.get('s') || ''

  const [value, setValue] = useState<string>(searchText)

  const debounced = useDebouncedCallback(() => {
    setSearchParams({ s: value })
  }, 300)

  useEffect(() => {
    debounced()
  }, [value])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setValue(event.target.value)
  }

  return <Input value={value} onChange={onChange} />
}

export default SearchInput
