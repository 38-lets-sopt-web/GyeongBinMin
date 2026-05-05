import { createGlobalTheme } from '@vanilla-extract/css'

import { colors } from './tokens/color'
import { font } from './tokens/font'
import { radius } from './tokens/radius'
import { shadow } from './tokens/shadow'
import { typography } from './tokens/typography'

const tokens = {
  color: colors,
  font: { ...font, ...typography },
  radius,
  shadow,
}

export const themeVars = createGlobalTheme(':root', tokens)
