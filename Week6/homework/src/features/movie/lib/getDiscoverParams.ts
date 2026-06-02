import type { RatingFilterValue } from '@/pages/movies/ui/RatingFilter'

type DiscoverParams = {
  page: number
  language: string
  api_key: string
  'vote_average.gte'?: number
  'vote_average.lte'?: number
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
    const bucket = Number(ratingFilter)
    params['vote_average.gte'] = bucket
    params['vote_average.lte'] = bucket === 10 ? 10 : bucket + 0.999
  }

  return params
}
