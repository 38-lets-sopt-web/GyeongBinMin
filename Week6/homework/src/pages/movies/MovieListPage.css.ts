import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f8f9fb',
  color: '#111827',
  padding: '48px 24px 96px',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
})

export const title = style({
  margin: '0 0 32px',
  textAlign: 'center',
  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
  fontWeight: 700,
  letterSpacing: '-0.02em',
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '24px',
  '@media': {
    'screen and (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 560px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const sentinel = style({
  height: '1px',
  marginTop: '48px',
})

export const loadStatus = style({
  marginTop: '24px',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#6b7280',
})

export const errorStatus = style({
  marginTop: '24px',
  textAlign: 'center',
  fontSize: '0.875rem',
  color: '#dc2626',
})
