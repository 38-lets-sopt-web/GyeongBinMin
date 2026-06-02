import { useQuery } from '@tanstack/react-query'

import { fetchMovieDetail } from '@/features/movie/api/fetchMovieDetail'

export const movieDetailQueryKey = {
  all: ['movies', 'detail'] as const,
  byId: (movieId: number) => [...movieDetailQueryKey.all, movieId] as const,
}

export function useMovieDetail(movieId: number | null) {
  return useQuery({
    queryKey: movieId ? movieDetailQueryKey.byId(movieId) : movieDetailQueryKey.all,
    queryFn: () => {
      if (!movieId) throw new Error('movieId is required')
      return fetchMovieDetail(movieId)
    },
    enabled: movieId !== null,
  })
}

