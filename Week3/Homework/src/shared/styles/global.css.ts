import { globalStyle } from '@vanilla-extract/css'

import { themeVars } from './theme.css'

globalStyle(':root', {
  colorScheme: 'light',
})

globalStyle('body', {
  background: themeVars.color.sky50,
  color: themeVars.color.neutral900,
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.md,
  lineHeight: themeVars.font.lineHeight.normal,
  fontWeight: themeVars.font.weight.regular,
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('#root', {
  minHeight: '100%',
})
