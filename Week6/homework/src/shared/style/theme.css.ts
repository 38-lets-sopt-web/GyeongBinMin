import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { color, font, radius } from '@/shared/style/tokens'

export const themeVars = createThemeContract({
  color: {
    background: null,
    foreground: null,
    muted: null,
    mutedForeground: null,
    card: null,
    cardForeground: null,
    border: null,
    primary: null,
    primaryForeground: null,
    accent: null,
    accentForeground: null,
  },
  font: {
    body: null,
  },
  radius: {
    md: null,
  },
})

export const appTheme = createTheme(themeVars, {
  color,
  font,
  radius,
})
