import { style } from '@vanilla-extract/css'

import { themeVars } from '../../../shared/styles/theme.css'

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
  width: '100%',
  maxWidth: '12.5rem',
  flexShrink: 0,
  '@media': {
    '(max-width: 48rem)': {
      maxWidth: 'none',
    },
  },
})

export const statCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '0.5rem',
  minHeight: '4.5rem',
})

export const label = style({
  margin: 0,
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.medium,
  color: themeVars.color.sky700,
})

export const value = style({
  margin: 0,
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.xl,
  fontWeight: themeVars.font.weight.bold,
  lineHeight: themeVars.font.lineHeight.snug,
  color: themeVars.color.neutral900,
})

export const successLabel = style({
  color: themeVars.color.green500,
})

export const failureLabel = style({
  color: themeVars.color.red500,
})

export const splitRow = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '0.5rem',
})

export const splitCard = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  gap: '0.35rem',
  minHeight: '4rem',
  minWidth: 0,
})

export const messagePlaceholder = style({
  margin: 0,
  marginTop: '0.25rem',
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  lineHeight: themeVars.font.lineHeight.normal,
  color: themeVars.color.sky600,
  minHeight: '2.5rem',
  opacity: 0.85,
})
