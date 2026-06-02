import { style } from '@vanilla-extract/css'

import { themeVars } from '../../styles/theme.css'

export const root = style({
  background: themeVars.color.sky100,
  borderRadius: themeVars.radius.lg,
  margin: '1rem 1.5rem',
  boxSizing: 'border-box',
  minHeight: '4.5rem',
  display: 'flex',
  alignItems: 'center',
})

export const inner = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: '1.25rem',
  width: '100%',
  margin: '0 auto',
  padding: '0.75rem 1.25rem',
  boxSizing: 'border-box',
})

export const brand = style({
  margin: 0,
  fontSize: themeVars.font.size.xl,
  fontWeight: themeVars.font.weight.bold,
  fontFamily: themeVars.font.family.sans,
  color: themeVars.color.neutral900,
})

export const tabs = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const tabBase = style({
  padding: '0.5rem 1rem',
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.medium,
  borderRadius: themeVars.radius.sm,
  cursor: 'pointer',
})

export const tab = style([
  tabBase,
  {
    border: `0.0625rem solid ${themeVars.color.sky500}`,
    background: themeVars.color.neutral0,
    color: themeVars.color.sky600,
    selectors: {
      '&:hover': {
        background: themeVars.color.sky50,
      },
    },
  },
])

export const tabActive = style([
  tabBase,
  {
    border: `0.0625rem solid ${themeVars.color.sky500}`,
    background: themeVars.color.sky500,
    color: themeVars.color.neutral0,
    fontWeight: themeVars.font.weight.semibold,
  },
])
