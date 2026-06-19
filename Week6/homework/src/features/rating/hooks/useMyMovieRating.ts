import { useQuery } from '@tanstack/react-query'

import { fetchRatedMovies } from '@/features/rating/api/fetchRatedMovies'
import { ensureGuestSessionId } from '@/features/rating/lib/ensureGuestSession'

export const myMovieRatingQueryKey = {
  all: ['rating', 'guest-session'] as const,
  byMovieId: (movieId: number) => [...myMovieRatingQueryKey.all, movieId] as const,
}

async function fetchMyRating(movieId: number): Promise<number | null> {
  const guestSessionId = await ensureGuestSessionId()

  // TMDB에는 단건 rating 조회가 없어 rated/movies에서 찾아옴
  // 보통 개수가 많지 않아 앞쪽 페이지만 순회 (최대 5페이지)
  let page = 1
  const maxPagesToScan = 5

  while (page <= maxPagesToScan) {
    const res = await fetchRatedMovies({ guestSessionId, page })
    const found = res.results.find((m) => m.id === movieId)
    if (found) return found.rating
    if (page >= res.total_pages) return null
    page += 1
  }

  return null
}

export function useMyMovieRating(movieId: number) {
  return useQuery({
    queryKey: myMovieRatingQueryKey.byMovieId(movieId),
    queryFn: () => fetchMyRating(movieId),
  })
}

