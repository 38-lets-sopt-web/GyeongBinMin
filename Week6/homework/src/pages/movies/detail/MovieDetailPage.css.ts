import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f8f9fb',
  color: '#111827',
  padding: '48px 24px',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
})

export const backLink = style({
  display: 'inline-block',
  marginBottom: '24px',
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: '#3b82f6',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const placeholder = style({
  fontSize: '1rem',
  color: '#6b7280',
})
