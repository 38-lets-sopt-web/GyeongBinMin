import { style } from '@vanilla-extract/css'

import { themeVars } from '@/shared/styles/theme.css'

export const backdrop = style({
  position: 'fixed',
  inset: 0,
  background: 'rgba(15, 23, 42, 0.45)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  zIndex: 1000,
})

export const dialog = style({
  width: '100%',
  maxWidth: '22rem',
  borderRadius: themeVars.radius.md,
  background: themeVars.color.neutral0,
  padding: '1.5rem',
  boxShadow: '0 1rem 2.5rem rgba(15, 23, 42, 0.2)',
  border: `0.0625rem solid ${themeVars.color.sky200}`,
  boxSizing: 'border-box',
})

export const title = style({
  margin: 0,
  marginBottom: '0.75rem',
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.lg,
  fontWeight: themeVars.font.weight.bold,
  color: themeVars.color.neutral900,
})

export const body = style({
  margin: 0,
  marginBottom: '1.25rem',
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  lineHeight: themeVars.font.lineHeight.normal,
  color: themeVars.color.sky700,
})

export const score = style({
  fontWeight: themeVars.font.weight.bold,
  color: themeVars.color.neutral900,
})

export const closeButton = style({
  fontFamily: themeVars.font.family.sans,
  fontSize: themeVars.font.size.sm,
  fontWeight: themeVars.font.weight.semibold,
  width: '100%',
  padding: '0.5rem 1rem',
  borderRadius: themeVars.radius.sm,
  border: 'none',
  cursor: 'pointer',
  background: themeVars.color.sky500,
  color: themeVars.color.neutral0,
  selectors: {
    '&:hover': { filter: 'brightness(0.95)' },
  },
})
