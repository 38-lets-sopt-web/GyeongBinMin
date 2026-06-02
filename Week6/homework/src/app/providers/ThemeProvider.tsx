import { type ReactNode } from 'react'

import { appTheme } from '@/shared/style/theme.css.ts'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <div className={appTheme}>{children}</div>
}
