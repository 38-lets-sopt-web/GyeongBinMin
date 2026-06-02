import { Outlet } from 'react-router-dom'

import { root } from '@/app/layouts/rootLayout.css.ts'

export function RootLayout() {
  return (
    <div className={root}>
      <Outlet />
    </div>
  )
}
