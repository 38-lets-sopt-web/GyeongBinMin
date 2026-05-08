import { Outlet } from 'react-router-dom'

export function RootLayout() {
  return (
    <div className="mx-auto flex min-h-svh w-full max-w-4xl flex-col px-4 py-10">
      <Outlet />
    </div>
  )
}
