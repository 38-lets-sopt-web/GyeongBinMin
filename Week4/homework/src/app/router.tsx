import { createBrowserRouter, Navigate } from 'react-router-dom'

import { RootLayout } from '@/app/layouts/RootLayout'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignupPage } from '@/pages/signup/SignupPage'
import { MyPage } from '@/pages/mypage/MyPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      { path: 'mypage', element: <MyPage /> },
      { path: '*', element: <Navigate to="/login" replace /> },
    ],
  },
])

