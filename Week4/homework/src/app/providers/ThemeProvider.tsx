import { useEffect } from "react"

import { AppThemeProvider } from "@/shared/theme/theme-context"
import { theme } from "@/shared/theme/tokens"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement

    root.style.setProperty("--primary", theme.color.primary)
    root.style.setProperty("--primary-foreground", theme.color.primaryForeground)
    root.style.setProperty("--accent", theme.color.accent)
    root.style.setProperty("--accent-foreground", theme.color.accentForeground)
    root.style.setProperty("--ring", theme.color.ring)

    root.style.setProperty("--sidebar-primary", theme.color.primary)
    root.style.setProperty("--sidebar-primary-foreground", theme.color.primaryForeground)
  }, [])

  return <AppThemeProvider value={theme}>{children}</AppThemeProvider>
}
