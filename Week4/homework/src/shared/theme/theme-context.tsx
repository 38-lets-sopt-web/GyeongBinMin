import { createContext, useContext } from 'react'

import type { AppTheme } from './tokens'

const AppThemeContext = createContext<AppTheme | null>(null)

export function AppThemeProvider({
  value,
  children,
}: {
  value: AppTheme
  children: React.ReactNode
}) {
  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  )
}

export function useAppTheme() {
  const theme = useContext(AppThemeContext)
  if (!theme) {
    throw new Error('useAppTheme must be used within an AppThemeProvider')
  }
  return theme
}
