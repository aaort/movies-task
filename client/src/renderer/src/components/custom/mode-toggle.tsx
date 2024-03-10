import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Theme, useTheme } from '@renderer/components/custom/theme-provider'
import { Button } from '@renderer/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@renderer/components/ui/dropdown-menu'

const MODES: Theme[] = ['light', 'dark', 'system'] as const

const ModeToggle = (): JSX.Element => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="center">
        {MODES.map((mode) => (
          <DropdownMenuItem key={mode} className="capitalize" onClick={() => setTheme(mode)}>
            {mode}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ModeToggle
