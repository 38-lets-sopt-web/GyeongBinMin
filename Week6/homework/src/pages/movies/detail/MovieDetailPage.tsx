import { Link, useParams } from 'react-router-dom'

import { DetailBasicsSection } from '@/pages/movies/detail/sections/DetailBasicsSection'
import { DetailHeroSection } from '@/pages/movies/detail/sections/DetailHeroSection'
import { DetailOverviewSection } from '@/pages/movies/detail/sections/DetailOverviewSection'
import { DetailRatingSection } from '@/pages/movies/detail/sections/DetailRatingSection'
import { DetailSummarySection } from '@/pages/movies/detail/sections/DetailSummarySection'
import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'
import { useMovieDetail } from '@/features/movie/hooks/useMovieDetail'
import { getHttpErrorMessage } from '@/shared/lib/http/httpError'

function toMovieId(value: string | undefined): number | null {
  if (!value) return null
  const n = Number(value)
  return Number.isFinite(n) ? n : null
}

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>()
  const id = toMovieId(movieId)
  const { data: movie, isPending, isError, error } = useMovieDetail(id)

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.content}>
          <Link to="/" className={styles.backLink}>
            ← 목록으로 돌아가기
          </Link>

          {isPending && <p style={{ color: '#6b7280' }}>영화 정보를 불러오는 중…</p>}
          {isError && (
            <p role="alert" style={{ color: '#dc2626' }}>
              {getHttpErrorMessage(
                error,
                '영화 정보를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.',
              )}
            </p>
          )}

          {movie && (
            <>
              <DetailHeroSection backdropUrl={movie.backdropUrl} />
              <DetailSummarySection movie={movie} />
              <DetailOverviewSection overview={movie.overview} />

              <div className={styles.bottomGrid}>
                <DetailBasicsSection movie={movie} />
                <DetailRatingSection movieId={movie.id} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
