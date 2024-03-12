import './globals.css'

import { ThemeProvider } from '@renderer/components/custom/theme-provider'
import { TooltipProvider } from '@renderer/components/ui/tooltip'
import { router } from '@renderer/lib/router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <RouterProvider router={router} />
      </TooltipProvider>
    </ThemeProvider>
  </React.StrictMode>
)
