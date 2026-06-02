import { style } from '@vanilla-extract/css'

export const page = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  alignItems: 'flex-start',
  padding: '1rem 1.5rem',
  flex: 1,
  minHeight: 0,
  boxSizing: 'border-box',
  '@media': {
    '(max-width: 48rem)': {
      flexDirection: 'column',
      alignItems: 'stretch',
    },
  },
})

export const mainArea = style({
  flex: 1,
  minWidth: 0,
})
