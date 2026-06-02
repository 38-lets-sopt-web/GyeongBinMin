import { style } from '@vanilla-extract/css'

import { themeVars } from '@/shared/style/theme.css.ts'

export const root = style({
  minHeight: '100vh',
  backgroundColor: themeVars.color.background,
  color: themeVars.color.foreground,
})
