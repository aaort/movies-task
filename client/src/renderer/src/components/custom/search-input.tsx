import { Input } from '@renderer/components/ui/input'
import { movieStore } from '@renderer/lib/movie-store'
import { ChangeEventHandler, ReactNode, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = (): ReactNode => {
  const [searchText, setSearchText] = useState<string>('')

  const debounced = useDebouncedCallback(() => {
    if (searchText.length === 0) {
      movieStore.setRandomMovies()
    }

    if (searchText.length < 3) return

    movieStore.setMoviesByKeyword(searchText)
  }, 300)

  useEffect(() => {
    debounced()
  }, [searchText])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    setSearchText(event.target.value)
  }

  return (
    <Input
      id="search-input"
      value={searchText}
      onChange={onChange}
      placeholder='Search by keyword, press "s"'
    />
  )
}

export default SearchInput
