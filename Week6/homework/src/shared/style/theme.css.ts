import { createTheme, createThemeContract } from '@vanilla-extract/css'

import { color, font } from '@/shared/style/tokens'

export const themeVars = createThemeContract({
  color: {
    background: null,
    foreground: null,
  },
  font: {
    body: null,
  },
})

export const appTheme = createTheme(themeVars, {
  color,
  font,
})
