import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  backgroundColor: '#f8f9fb',
  color: '#111827',
  paddingBottom: '96px',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
})

export const backLink = style({
  display: 'inline-block',
  margin: '32px 24px 24px',
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: '#3b82f6',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const hero = style({
  position: 'relative',
  height: '360px',
  overflow: 'hidden',
  borderBottom: '1px solid #e5e7eb',
})

export const heroBackdrop = style({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'blur(2px)',
  transform: 'scale(1.05)',
})

export const heroOverlay = style({
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(90deg, rgba(248,249,251,0.96) 0%, rgba(248,249,251,0.88) 45%, rgba(248,249,251,0.6) 100%)',
})

export const content = style({
  maxWidth: '1200px',
  margin: '-120px auto 0',
  padding: '0 24px',
})

export const card = style({
  display: 'grid',
  gridTemplateColumns: '280px 1fr',
  gap: '28px',
  padding: '24px',
  backgroundColor: '#ffffff',
  border: '1px solid #e5e7eb',
  borderRadius: '16px',
  boxShadow: '0 24px 60px rgba(15, 23, 42, 0.12)',
  '@media': {
    'screen and (max-width: 860px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const posterWrap = style({
  width: '100%',
  maxWidth: '280px',
  aspectRatio: '2 / 3',
  overflow: 'hidden',
  borderRadius: '14px',
  backgroundColor: '#e5e7eb',
  border: '1px solid #e5e7eb',
})

export const poster = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
})

export const titleRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '12px',
  flexWrap: 'wrap',
})

export const title = style({
  margin: 0,
  fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
  letterSpacing: '-0.02em',
})

export const subTitle = style({
  margin: 0,
  fontSize: '0.95rem',
  color: '#6b7280',
})

export const meta = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  fontSize: '0.95rem',
  color: '#374151',
})

export const metaDot = style({
  color: '#cbd5e1',
})

export const genreList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
})

export const genreChip = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '30px',
  padding: '0 12px',
  borderRadius: '999px',
  fontSize: '0.875rem',
  backgroundColor: '#eff6ff',
  color: '#1d4ed8',
  border: '1px solid #dbeafe',
})

export const stats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '10px',
  marginTop: '8px',
  '@media': {
    'screen and (max-width: 560px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const statCard = style({
  padding: '14px 14px 12px',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#f8fafc',
})

export const statLabel = style({
  fontSize: '0.8rem',
  color: '#6b7280',
})

export const statValue = style({
  marginTop: '6px',
  fontWeight: 700,
  fontSize: '1.05rem',
  color: '#111827',
})

export const section = style({
  marginTop: '28px',
})

export const sectionTitle = style({
  margin: '0 0 12px',
  fontSize: '1.125rem',
  fontWeight: 700,
})

export const overview = style({
  margin: 0,
  color: '#374151',
  lineHeight: 1.75,
})

export const basicsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '12px',
  '@media': {
    'screen and (max-width: 860px)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 560px)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const basicItem = style({
  padding: '14px',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
  backgroundColor: '#ffffff',
})

export const basicLabel = style({
  fontSize: '0.8rem',
  color: '#6b7280',
})

export const basicValue = style({
  marginTop: '6px',
  fontWeight: 600,
  color: '#111827',
})
