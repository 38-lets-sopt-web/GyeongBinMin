import type { TmdbMovieDetailResponse } from '@/features/movie/api/types/tmdbMovieDetail'
import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'

const POSTER_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const BACKDROP_BASE_URL = 'https://image.tmdb.org/t/p/w1280'
const IMAGE_FALLBACK =
  'https://placehold.co/1200x600/e5e7eb/6b7280?text=No+Image'

function formatReleaseDate(releaseDate: string): string {
  if (!releaseDate) return '-'
  const [year, month, day] = releaseDate.split('-')
  if (!year || !month || !day) return releaseDate
  return `${year}.${month}.${day}`
}

export function mapToMovieDetail(data: TmdbMovieDetailResponse): MovieDetail {
  return {
    id: data.id,
    title: data.title,
    originalTitle: data.original_title,
    originalLanguage: data.original_language,
    releaseDate: formatReleaseDate(data.release_date),
    status: data.status,
    runtimeMinutes: data.runtime ?? 0,
    voteAverage: data.vote_average,
    voteCount: data.vote_count,
    overview: data.overview?.trim() || '줄거리 정보가 없습니다.',
    posterUrl: data.poster_path
      ? `${POSTER_BASE_URL}${data.poster_path}`
      : IMAGE_FALLBACK,
    backdropUrl: data.backdrop_path
      ? `${BACKDROP_BASE_URL}${data.backdrop_path}`
      : IMAGE_FALLBACK,
    genres: data.genres.map((g) => g.name),
    productionCountries: data.production_countries.map((c) => c.name),
    spokenLanguages: data.spoken_languages.map((l) => l.english_name || l.name),
    budgetUsd: data.budget,
    revenueUsd: data.revenue,
  }
}

