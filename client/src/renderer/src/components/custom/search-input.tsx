import { Cross2Icon } from '@radix-ui/react-icons'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { movieStore } from '@renderer/lib/movie-store'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')

  const clearSearchText = (): void => {
    setSearchText('')

    movieStore.resetSearchedMovies()
  }

  const debounced = useDebouncedCallback(() => {
    if (searchText.length < 3) return

    movieStore.setMoviesByKeyword(searchText)
  }, 300)

  useEffect(() => {
    debounced()
  }, [searchText])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    const value = event.target.value

    if (value.length === 0) {
      movieStore.resetSearchedMovies()
    }

    setSearchText(value)
  }

  return (
    <div className="flex gap-4 w-full">
      <Input
        id="search-input"
        value={searchText}
        onChange={onChange}
        placeholder='Search by keyword, press "s"'
      />

      <Button
        size="icon"
        variant="outline"
        onClick={clearSearchText}
        className={`transition-transform ${searchText.length > 0 ? 'scale-1' : 'scale-0'}`}
      >
        <Cross2Icon />
      </Button>
    </div>
  )
}

export default SearchInput
