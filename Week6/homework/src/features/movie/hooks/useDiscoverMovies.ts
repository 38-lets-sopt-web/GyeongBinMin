import { useInfiniteQuery } from '@tanstack/react-query'

import { fetchDiscoverMovies } from '@/features/movie/api/fetchDiscoverMovies'
import type { RatingFilterValue } from '@/pages/movies/ui/RatingFilter'

export const discoverMoviesQueryKey = {
  all: ['movies', 'discover'] as const,
  list: (ratingFilter: RatingFilterValue) =>
    [...discoverMoviesQueryKey.all, ratingFilter] as const,
}

export function useDiscoverMovies(ratingFilter: RatingFilterValue) {
  return useInfiniteQuery({
    queryKey: discoverMoviesQueryKey.list(ratingFilter),
    queryFn: ({ pageParam }) => fetchDiscoverMovies(pageParam, ratingFilter),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  })
}
