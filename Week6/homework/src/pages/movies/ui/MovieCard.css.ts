import { style } from '@vanilla-extract/css'

export const link = style({
  display: 'block',
  textDecoration: 'none',
  color: 'inherit',
})

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  overflow: 'hidden',
  border: '1px solid #e5e7eb',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  ':hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 16px 32px rgba(15, 23, 42, 0.12)',
  },
})

export const posterWrap = style({
  aspectRatio: '2 / 3',
  overflow: 'hidden',
  backgroundColor: '#e5e7eb',
})

export const poster = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const body = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '1rem',
  flex: 1,
})

export const title = style({
  fontSize: '1.125rem',
  fontWeight: 700,
  lineHeight: 1.4,
  color: '#111827',
})

export const releaseDate = style({
  fontSize: '0.875rem',
  color: '#6b7280',
})

export const overview = style({
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: '#4b5563',
  display: '-webkit-box',
  WebkitLineClamp: 4,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
})
