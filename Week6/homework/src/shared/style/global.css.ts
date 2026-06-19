import { globalStyle } from '@vanilla-extract/css'

import { themeVars } from '@/shared/style/theme.css.ts'

globalStyle('body', {
  fontFamily: themeVars.font.body,
  backgroundColor: themeVars.color.background,
  color: themeVars.color.foreground,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})
