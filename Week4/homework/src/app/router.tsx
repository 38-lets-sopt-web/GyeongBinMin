import { createBrowserRouter, Navigate } from 'react-router-dom'

import { RootLayout } from '@/app/layouts/RootLayout'
import { LoginPage } from '@/pages/login/LoginPage'
import { SignupPage } from '@/pages/signup/SignupPage'
import { MemberDetailPage, MemberPage, MyInfoPage, MyPageLayout } from '@/pages/mypage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
      {
        path: 'mypage',
        element: <MyPageLayout />,
        children: [
          { index: true, element: <Navigate to="/mypage/info" replace /> },
          { path: 'info', element: <MyInfoPage /> },
          { path: 'members', element: <MemberPage /> },
          { path: 'members/:memberId', element: <MemberDetailPage /> },
        ],
      },
      { path: '*', element: <Navigate to="/login" replace /> },
    ],
  },
])

