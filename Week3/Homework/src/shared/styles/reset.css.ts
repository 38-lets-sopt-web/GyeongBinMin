import { globalStyle } from '@vanilla-extract/css'

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
})

globalStyle('*', {
  margin: 0,
})

globalStyle('html, body, #root', {
  height: '100%',
})

globalStyle('img, svg, video, canvas', {
  display: 'block',
  maxWidth: '100%',
})

globalStyle('button, input, select, textarea', {
  font: 'inherit',
  color: 'inherit',
})

globalStyle('button', {
  border: 'none',
  background: 'transparent',
  padding: 0,
})
