import { Cross2Icon, InfoCircledIcon } from '@radix-ui/react-icons'
import { Tooltip } from '@radix-ui/react-tooltip'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { TooltipContent, TooltipTrigger } from '@renderer/components/ui/tooltip'
import { movieStore } from '@renderer/lib/movie-store'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const SearchInput = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('')

  const { error, loading, resetSearchedMovies, setMoviesByKeyword } = movieStore

  const clearSearchText = (): void => {
    setSearchText('')

    resetSearchedMovies()
  }

  const debounced = useDebouncedCallback(() => {
    if (searchText.length < 3) return

    setMoviesByKeyword(searchText)
  }, 300)

  useEffect(() => {
    debounced()
  }, [searchText])

  const onChange: ChangeEventHandler<HTMLInputElement> = (event): void => {
    const value = event.target.value

    if (value.length === 0) {
      resetSearchedMovies()
    }

    setSearchText(value)
  }

  const isSearchError = !loading && error && searchText.length >= 3

  return (
    <div className="flex gap-4 w-full items-center">
      <Input
        id="search-input"
        value={searchText}
        autoComplete="off"
        onChange={onChange}
        placeholder='Search by keyword, press "s"'
      />

      <Tooltip>
        <TooltipTrigger asChild>
          <InfoCircledIcon
            className={`text-red-500 w-7 h-7 transition-transform ${isSearchError ? 'scale-1' : 'scale-0'}`}
          />
        </TooltipTrigger>

        <TooltipContent className="bg-card dark:bg-card border text-red-500">
          <p>{movieStore.error}</p>
        </TooltipContent>
      </Tooltip>

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
