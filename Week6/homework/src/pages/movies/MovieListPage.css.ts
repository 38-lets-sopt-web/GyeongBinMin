import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f8f9fb',
  color: '#111827',
  padding: '3rem 1.5rem 6rem',
})

export const container = style({
  maxWidth: '75rem',
  margin: '0 auto',
})

export const title = style({
  margin: '0 0 2rem',
  textAlign: 'center',
  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '1.5rem',
  '@media': {
    'screen and (max-width: 64rem)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 35rem)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const sentinel = style({
  height: '1px',
  marginTop: '3rem',
})

export const loadStatus = style({
  marginTop: '1.5rem',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#6b7280',
})

export const errorStatus = style({
  marginTop: '1.5rem',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#dc2626',
})
