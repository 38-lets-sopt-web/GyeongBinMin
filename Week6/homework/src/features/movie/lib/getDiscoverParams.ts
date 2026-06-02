import type { RatingFilterValue } from '@/pages/movies/ui/RatingFilter'

type DiscoverParams = {
  page: number
  language: string
  api_key: string
  'vote_average.gte'?: number
}

export function getDiscoverParams(
  page: number,
  ratingFilter: RatingFilterValue,
): DiscoverParams {
  const params: DiscoverParams = {
    page,
    language: 'ko-KR',
    api_key: import.meta.env.VITE_API_KEY,
  }

  if (ratingFilter !== 'all') {
    params['vote_average.gte'] = Number(ratingFilter)
  }

  return params
}
