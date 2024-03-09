import { cn } from '@renderer/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface ISkeletonProps extends HTMLAttributes<HTMLDivElement> {}

const Skeleton: FC<ISkeletonProps> = (props) => {
  const { className, ...rest } = props

  return <div className={cn('animate-pulse rounded-md bg-primary/10', className)} {...rest} />
}

export default Skeleton
