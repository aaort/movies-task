import { Cross2Icon } from '@radix-ui/react-icons'
import { cn } from '@renderer/lib/utils'
import { IMovie, IMovieDetails } from 'omdb-sdk'
import { ComponentProps, FC, useState } from 'react'

interface IPosterProps extends ComponentProps<'div'> {
  movie: IMovieDetails | IMovie
}

const Poster: FC<IPosterProps> = (props) => {
  const { movie, className, ...rest } = props
  const [isImageAvailable, setIsImageAvailable] = useState<boolean>(true)

  const handleImageError = (): void => {
    setIsImageAvailable(false)
  }

  return (
    <div className={cn('poster-wrapper', className)} {...rest}>
      {isImageAvailable ? (
        <img
          src={movie.Poster}
          className="poster"
          hidden={!isImageAvailable}
          onError={handleImageError}
        />
      ) : (
        <Cross2Icon className="absolute z-10 text-slate-100 w-[30px] h-[30px]" />
      )}
    </div>
  )
}

export default Poster
