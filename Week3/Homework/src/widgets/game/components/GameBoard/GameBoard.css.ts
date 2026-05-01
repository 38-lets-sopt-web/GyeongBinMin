import { style } from '@vanilla-extract/css'

import { themeVars } from '../../../../shared/styles/theme.css'

export const section = style({
  width: '100%',
  minWidth: 0,
})

export const shell = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.25rem',
  padding: '1rem 1.25rem',
})

export const toolbar = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
})

export const levelField = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

export const levelLabelText = style({
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.medium,
  color: themeVars.color.neutral900,
})

export const select = style({
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  padding: '0.35rem 0.75rem',
  borderRadius: themeVars.radius.sm,
  border: `0.0625rem solid ${themeVars.color.sky500}`,
  background: themeVars.color.neutral0,
  color: themeVars.color.neutral900,
  cursor: 'pointer',
})

export const actions = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
})

const buttonBase = style({
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.semibold,
  padding: '0.4rem 1rem',
  borderRadius: themeVars.radius.sm,
  border: 'none',
  cursor: 'pointer',
})

export const startButton = style([
  buttonBase,
  {
    background: themeVars.color.green500,
    color: themeVars.color.neutral0,
    selectors: {
      '&:hover': { filter: 'brightness(0.95)' },
      '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
    },
  },
])

export const stopButton = style([
  buttonBase,
  {
    background: themeVars.color.red500,
    color: themeVars.color.neutral0,
    selectors: {
      '&:hover': { filter: 'brightness(0.95)' },
      '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
    },
  },
])

export const container = style({
  display: 'inline-flex',
  flexDirection: 'column',
  alignSelf: 'center',
  maxWidth: '100%',
  boxSizing: 'border-box',
  background: themeVars.color.sky200,
})

export const board = style({
  display: 'grid',
  gap: '0.75rem',
  width: '24rem',
  maxWidth: '100%',
  aspectRatio: '1',
})

export const hole = style({
  aspectRatio: '1',
  width: '100%',
  borderRadius: themeVars.radius.full,
  background: themeVars.color.sky50,
  border: `0.05rem solid ${themeVars.color.sky600}`,
  boxSizing: 'border-box',
})
