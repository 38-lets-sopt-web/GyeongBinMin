import { style } from '@vanilla-extract/css'

import { themeVars } from '../../styles/theme.css'

export const root = style({
  background: themeVars.color.sky100,
  borderRadius: themeVars.radius.lg,
  border: `0.0625rem solid ${themeVars.color.sky500}`,
  boxSizing: 'border-box',
  padding: '0.75rem 1rem',
})
