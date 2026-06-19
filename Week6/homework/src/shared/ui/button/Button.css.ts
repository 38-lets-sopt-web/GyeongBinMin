import { style } from '@vanilla-extract/css'

export const base = style({
  height: '2.5rem',
  padding: '0 0.875rem',
  borderRadius: '14px',
  fontWeight: 600,
  transition: 'transform 0.05s ease, opacity 0.15s ease',
  selectors: {
    '&:active': { transform: 'translateY(1px)' },
    '&:disabled': { opacity: 0.5, cursor: 'not-allowed' },
  },
})

export const primary = style({
  border: '1px solid #111827',
  backgroundColor: '#111827',
  color: '#ffffff',
})

export const ghost = style({
  border: '1px solid rgba(15, 23, 42, 0.10)',
  backgroundColor: '#ffffff',
  color: '#111827',
})

