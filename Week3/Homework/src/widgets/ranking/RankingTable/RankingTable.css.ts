import { style } from '@vanilla-extract/css'

import { themeVars } from '../../../shared/styles/theme.css'

export const section = style({
  width: '100%',
  minWidth: 0,
})

export const shell = style({
  padding: '1rem 1.25rem',
  boxShadow: themeVars.shadow.sm,
})

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.75rem',
  flexWrap: 'wrap',
  marginBottom: '1rem',
})

export const title = style({
  margin: 0,
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.lg,
  fontWeight: themeVars.font.weight.bold,
  color: themeVars.color.neutral900,
})

export const resetButton = style({
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.semibold,
  padding: '0.45rem 1rem',
  borderRadius: themeVars.radius.sm,
  border: 'none',
  cursor: 'pointer',
  background: themeVars.color.coral500,
  color: themeVars.color.neutral0,
  flexShrink: 0,
  selectors: {
    '&:hover': { filter: 'brightness(0.97)' },
    '&:focus-visible': {
      outline: `0.125rem solid ${themeVars.color.sky600}`,
      outlineOffset: '0.125rem',
    },
  },
})

export const tableViewport = style({
  width: '100%',
  overflow: 'hidden',
  borderRadius: themeVars.radius.md,
  border: `0.0625rem solid ${themeVars.color.sky500}`,
  minHeight: '12rem',
})

export const tableEl = style({
  width: '100%',
  borderCollapse: 'collapse',
  borderSpacing: 0,
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  tableLayout: 'fixed',
})

const thBase = style({
  textAlign: 'center',
  padding: '0.7rem 0.75rem',
  fontWeight: themeVars.font.weight.semibold,
  color: themeVars.color.neutral900,
  background: themeVars.color.sky200,
  borderBottom: `0.0625rem solid ${themeVars.color.sky500}`,
})

export const th = thBase

export const thLead = style([
  thBase,
  {
    borderTopLeftRadius: themeVars.radius.md,
  },
])

export const thTrail = style([
  thBase,
  {
    borderTopRightRadius: themeVars.radius.md,
  },
])

export const td = style({
  textAlign: 'center',
  padding: '0.65rem 0.75rem',
  color: themeVars.color.neutral900,
  background: themeVars.color.neutral0,
  borderBottom: `0.0625rem solid ${themeVars.color.slate900A12}`,
  fontVariantNumeric: 'tabular-nums',
})

export const row = style({})

export const empty = style({
  margin: 0,
  padding: '2.5rem 1rem',
  textAlign: 'center',
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  color: themeVars.color.sky600,
})
