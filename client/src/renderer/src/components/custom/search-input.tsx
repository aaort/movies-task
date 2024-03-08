import { Input } from '@renderer/components/ui/input'
import { movieStore } from '@renderer/lib/movie-store'
import { ChangeEventHandler, ReactNode, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = (): ReactNode => {
  const [searchText, setSearchText] = useState<string>('')

  const debounced = useDebouncedCallback(() => {
    if (searchText.length < 3) return
    movieStore.setMoviesByKeyword(searchText)
  }, 300)

  useEffect(() => {
    debounced()
  }, [searchText])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setSearchText(event.target.value)
  }

  return <Input value={searchText} onChange={onChange} />
}

export default SearchInput