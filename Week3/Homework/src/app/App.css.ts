import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  display: 'grid',
  placeItems: 'center',
  padding: 24,
  background: '#f8fafc',
  color: '#0f172a',
  fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif',
})

export const card = style({
  width: 'min(560px, 100%)',
  background: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.12)',
  borderRadius: 12,
  padding: 20,
})

export const title = style({
  margin: 0,
  fontSize: 22,
  fontWeight: 700,
})

export const description = style({
  marginTop: 8,
  marginBottom: 0,
  color: 'rgba(15, 23, 42, 0.72)',
  lineHeight: 1.5,
})

