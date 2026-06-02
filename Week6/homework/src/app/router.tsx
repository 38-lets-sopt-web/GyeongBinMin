import { createBrowserRouter } from 'react-router-dom'

import { RootLayout } from '@/app/layouts/RootLayout'
import { MovieDetailPage, MovieListPage } from '@/pages/movies'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <MovieListPage /> },
      { path: 'movies/:movieId', element: <MovieDetailPage /> },
    ],
  },
])
