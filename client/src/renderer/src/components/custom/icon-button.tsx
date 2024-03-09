import { Button, ButtonProps } from '@renderer/components/ui/button'
import { cn } from '@renderer/lib/utils'
import { FC } from 'react'

interface IIconButtonProps extends ButtonProps {}

const IconButton: FC<IIconButtonProps> = (props) => {
  const { className, ...rest } = props

  return (
    <Button
      className={cn('rounded-full p-2 w-fit h-fit [&_svg]:w-[20px] [&_svg]:h-[20px]', className)}
      {...rest}
    />
  )
}

export default IconButton
