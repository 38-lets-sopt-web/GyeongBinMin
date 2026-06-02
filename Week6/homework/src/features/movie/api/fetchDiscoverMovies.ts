import type { TmdbDiscoverResponse } from '@/features/movie/api/types/tmdbDiscover'
import { getDiscoverParams } from '@/features/movie/lib/getDiscoverParams'
import { mapToMovieListItem } from '@/features/movie/lib/mapToMovieListItem'
import type { MovieListItem } from '@/pages/movies/model/movieListItem'
import type { RatingFilterValue } from '@/pages/movies/ui/RatingFilter'
import { http } from '@/shared/lib/http'

export type DiscoverMoviesResult = {
  page: number
  totalPages: number
  movies: MovieListItem[]
}

export async function fetchDiscoverMovies(
  page: number,
  ratingFilter: RatingFilterValue,
): Promise<DiscoverMoviesResult> {
  const { data } = await http.get<TmdbDiscoverResponse>('/discover/movie', {
    params: getDiscoverParams(page, ratingFilter),
  })

  return {
    page: data.page,
    totalPages: data.total_pages,
    movies: data.results.map(mapToMovieListItem),
  }
}
