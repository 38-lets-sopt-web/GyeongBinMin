import { StrictMode } from 'react'

import { root } from '@/app/layouts/rootLayout.css.ts'
import { QueryProvider, ThemeProvider } from '@/app/providers'
import '@/shared/style/reset.css.ts'
import '@/shared/style/global.css.ts'

function App() {
  return (
    <StrictMode>
      <ThemeProvider>
        <QueryProvider>
          <main className={root}>Week6 Movie App</main>
        </QueryProvider>
      </ThemeProvider>
    </StrictMode>
  )
}

export default App
