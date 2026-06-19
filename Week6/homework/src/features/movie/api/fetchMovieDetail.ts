import type { TmdbMovieDetailResponse } from '@/features/movie/api/types/tmdbMovieDetail'
import { mapToMovieDetail } from '@/features/movie/lib/mapToMovieDetail'
import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'
import { http } from '@/shared/lib/http'

type MovieDetailParams = {
  language: string
  api_key: string
}

export async function fetchMovieDetail(movieId: number): Promise<MovieDetail> {
  const params: MovieDetailParams = {
    language: 'ko-KR',
    api_key: import.meta.env.VITE_API_KEY,
  }

  const { data } = await http.get<TmdbMovieDetailResponse>(`/movie/${movieId}`, {
    params,
  })

  return mapToMovieDetail(data)
}

