import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
  padding: 0,
})

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  textSizeAdjust: '100%',
  overflowX: 'hidden',
})

globalStyle('body', {
  minHeight: '100vh',
  lineHeight: 1.5,
  overflowX: 'hidden',
})

globalStyle('img, picture, video, canvas, svg', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('input, button, textarea, select', {
  font: 'inherit',
  color: 'inherit',
})

globalStyle('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
})

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
})

globalStyle('ul, ol', {
  listStyle: 'none',
})

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
})

globalStyle('p, h1, h2, h3, h4, h5, h6', {
  overflowWrap: 'break-word',
})

globalStyle('#root', {
  isolation: 'isolate',
  minHeight: '100vh',
  overflowX: 'hidden',
})
