import { http } from '@/shared/lib/http'

export type RatedMovieItem = {
  id: number
  rating: number
}

type TmdbRatedMoviesResponse = {
  page: number
  results: RatedMovieItem[]
  total_pages: number
}

export async function fetchRatedMovies(params: {
  guestSessionId: string
  page: number
}): Promise<TmdbRatedMoviesResponse> {
  const { data } = await http.get<TmdbRatedMoviesResponse>(
    `/guest_session/${params.guestSessionId}/rated/movies`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: 'ko-KR',
        page: params.page,
        sort_by: 'created_at.asc',
      },
    },
  )

  return data
}

