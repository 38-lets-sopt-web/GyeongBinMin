import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'

function asNumber(value: string | undefined): number | null {
  if (!value) return null
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

function formatReleaseDate(date: string): string {
  const [y, m, d] = date.split('-')
  if (!y || !m || !d) return date
  return `${y}.${m}.${d}`
}

export function getMockMovieDetail(movieId: string | undefined): MovieDetail {
  const id = asNumber(movieId) ?? 0

  return {
    id,
    title: id ? `Movie #${id}` : 'Movie Detail',
    originalTitle: 'Original Title Example',
    originalLanguage: 'en',
    releaseDate: formatReleaseDate('2026-06-02'),
    status: 'Released',
    runtimeMinutes: 128,
    voteAverage: 8.4,
    voteCount: 12453,
    overview:
      '이 영역은 영화 줄거리(overview)입니다. API 연동 전까지는 퍼블리싱 확인용으로 텍스트가 표시됩니다. 충분히 긴 문장을 넣어 레이아웃이 자연스럽게 보이도록 했습니다.',
    posterUrl: `https://picsum.photos/seed/movie-poster-${id || 1}/360/540`,
    backdropUrl: `https://picsum.photos/seed/movie-backdrop-${id || 1}/1600/900`,
    genres: ['Action', 'Adventure', 'Sci-Fi'],
    productionCountries: ['US', 'KR'],
    spokenLanguages: ['English', 'Korean'],
    budgetUsd: 160_000_000,
    revenueUsd: 640_000_000,
  }
}

