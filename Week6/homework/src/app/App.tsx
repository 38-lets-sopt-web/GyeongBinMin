import { StrictMode } from 'react'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'
import { QueryProvider, ThemeProvider } from '@/app/providers'
import '@/shared/style/reset.css.ts'
import '@/shared/style/global.css.ts'

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <QueryProvider>
          <RouterProvider router={router} />
        </QueryProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
