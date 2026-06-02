import { style } from '@vanilla-extract/css'

export const wrapper = style({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '40px',
})

export const select = style({
  width: '100%',
  maxWidth: '720px',
  height: '52px',
  padding: '0 20px',
  fontSize: '1rem',
  fontWeight: 500,
  color: '#1f2937',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 16px center',
  paddingRight: '48px',
  ':focus': {
    outline: '2px solid #3b82f6',
    outlineOffset: '2px',
  },
})
