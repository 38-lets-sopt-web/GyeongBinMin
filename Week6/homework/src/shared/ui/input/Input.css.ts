import { style } from '@vanilla-extract/css'

export const input = style({
  width: '100%',
  height: '2.75rem',
  borderRadius: '14px',
  border: '1px solid rgba(15, 23, 42, 0.10)',
  padding: '0 0.875rem',
  fontSize: '1rem',
  backgroundColor: '#ffffff',
  outline: 'none',
  selectors: {
    '&:focus': { borderColor: 'rgba(15, 23, 42, 0.35)' },
    '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
  },
})

