import type { TmdbDiscoverMovie } from '@/features/movie/api/types/tmdbDiscover'
import type { MovieListItem } from '@/pages/movies/model/movieListItem'

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const POSTER_FALLBACK =
  'https://placehold.co/300x450/e5e7eb/6b7280?text=No+Image'

function formatReleaseDate(releaseDate: string): string {
  if (!releaseDate) return '-'
  const [year, month, day] = releaseDate.split('-')
  if (!year || !month || !day) return releaseDate
  return `${year}.${month}.${day}`
}

export function mapToMovieListItem(movie: TmdbDiscoverMovie): MovieListItem {
  return {
    id: movie.id,
    title: movie.title,
    releaseDate: formatReleaseDate(movie.release_date),
    overview: movie.overview?.trim() || '줄거리 정보가 없습니다.',
    posterUrl: movie.poster_path
      ? `${POSTER_BASE_URL}${movie.poster_path}`
      : POSTER_FALLBACK,
    voteAverage: movie.vote_average,
  }
}
