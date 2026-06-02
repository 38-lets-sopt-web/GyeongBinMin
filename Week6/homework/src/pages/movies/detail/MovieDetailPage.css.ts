import { style } from '@vanilla-extract/css'

export const page = style({
  minHeight: '100vh',
  background:
    'radial-gradient(62.5rem 25rem at 50% 0%, rgba(59,130,246,0.08), transparent 60%), #f8f9fb',
  color: '#111827',
  paddingBottom: '6rem',
})

export const container = style({
  maxWidth: '75rem',
  margin: '0 auto',
  padding: 0,
})

export const backLink = style({
  display: 'inline-block',
  margin: '2rem 1.5rem 1.5rem',
  fontSize: '0.9375rem',
  fontWeight: 500,
  color: '#111827',
  ':hover': {
    textDecoration: 'underline',
  },
})

export const hero = style({
  position: 'relative',
  height: '20rem',
  overflow: 'hidden',
  borderRadius: '20px',
  backgroundColor: '#e5e7eb',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  boxShadow: '0 18px 50px rgba(15, 23, 42, 0.12)',
  marginBottom: '1.5rem',
})

export const heroMedia = style({
  position: 'relative',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

export const heroBackdrop = style({
  position: 'absolute',
  inset: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
})

export const heroOverlay = style({
  position: 'absolute',
  inset: 0,
  background:
    'linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.06) 40%, rgba(0,0,0,0.22) 100%)',
})

export const content = style({
  maxWidth: '75rem',
  margin: '0 auto',
  padding: '0 1.5rem',
  position: 'relative',
  zIndex: 0,
})

export const card = style({
  display: 'grid',
  gridTemplateColumns: '17.5rem 1fr',
  gap: '1.75rem',
  padding: '1.5rem',
  backgroundColor: '#ffffff',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  borderRadius: '20px',
  boxShadow: '0 18px 50px rgba(15, 23, 42, 0.10)',
  marginTop: 0,
  '@media': {
    'screen and (max-width: 53.75rem)': {
      gridTemplateColumns: '1fr',
      marginTop: 0,
    },
  },
})

export const posterWrap = style({
  width: '100%',
  maxWidth: '17.5rem',
  aspectRatio: '2 / 3',
  overflow: 'hidden',
  borderRadius: '16px',
  backgroundColor: '#e5e7eb',
  border: '1px solid rgba(15, 23, 42, 0.08)',
})

export const poster = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
})

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.75rem',
})

export const titleRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '0.75rem',
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
  gap: '0.5rem',
  fontSize: '0.95rem',
  color: '#374151',
})

export const metaDot = style({
  color: '#cbd5e1',
})

export const genreList = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const genreChip = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '1.875rem',
  padding: '0 0.75rem',
  borderRadius: '999px',
  fontSize: '0.875rem',
  backgroundColor: 'rgba(59,130,246,0.10)',
  color: '#1d4ed8',
  border: '1px solid rgba(59,130,246,0.18)',
})

export const stats = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '0.625rem',
  marginTop: '0.5rem',
  '@media': {
    'screen and (max-width: 35rem)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const statCard = style({
  padding: '0.875rem 0.875rem 0.75rem',
  borderRadius: '14px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  backgroundColor: '#f8fafc',
})

export const statLabel = style({
  fontSize: '0.8rem',
  color: '#6b7280',
})

export const statValue = style({
  marginTop: '0.375rem',
  fontWeight: 700,
  fontSize: '1.05rem',
  color: '#111827',
})

export const section = style({
  marginTop: '1.75rem',
})

export const sectionTitle = style({
  margin: '0 0 0.75rem',
  fontSize: '1.125rem',
  fontWeight: 700,
})

export const overview = style({
  margin: 0,
  color: '#374151',
  lineHeight: 1.75,
  padding: '1.125rem',
  borderRadius: '16px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  backgroundColor: '#ffffff',
})

export const bottomGrid = style({
  marginTop: '1.75rem',
  display: 'grid',
  gridTemplateColumns: '1.2fr 0.8fr',
  gap: '1rem',
  '@media': {
    'screen and (max-width: 53.75rem)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const panel = style({
  padding: '1.25rem',
  borderRadius: '20px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  backgroundColor: '#ffffff',
})

export const basicsGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '0.75rem',
  '@media': {
    'screen and (max-width: 53.75rem)': {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    'screen and (max-width: 35rem)': {
      gridTemplateColumns: '1fr',
    },
  },
})

export const basicItem = style({
  padding: '0.875rem',
  borderRadius: '14px',
  border: '1px solid rgba(15, 23, 42, 0.08)',
  backgroundColor: '#f8fafc',
})

export const basicLabel = style({
  fontSize: '0.8rem',
  color: '#6b7280',
})

export const basicValue = style({
  marginTop: '0.375rem',
  fontWeight: 600,
  color: '#111827',
})

export const ratingHelp = style({
  margin: '0 0 0.75rem',
  fontSize: '0.875rem',
  color: '#6b7280',
})

export const ratingInput = style({
  width: '100%',
  height: '3rem',
  padding: '0 0.875rem',
  borderRadius: '14px',
  border: '1px solid rgba(15, 23, 42, 0.10)',
  backgroundColor: '#ffffff',
  fontSize: '1rem',
  outline: 'none',
  ':focus': {
    borderColor: '#3b82f6',
    boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.15)',
  },
})

export const buttonRow = style({
  marginTop: '0.75rem',
  display: 'flex',
  gap: '0.625rem',
  flexWrap: 'wrap',
})

export const primaryButton = style({
  height: '2.5rem',
  padding: '0 0.875rem',
  borderRadius: '14px',
  border: '1px solid #111827',
  backgroundColor: '#111827',
  color: '#ffffff',
  fontWeight: 600,
})

export const ghostButton = style({
  height: '2.5rem',
  padding: '0 0.875rem',
  borderRadius: '14px',
  border: '1px solid rgba(15, 23, 42, 0.10)',
  backgroundColor: '#ffffff',
  color: '#111827',
  fontWeight: 600,
})
