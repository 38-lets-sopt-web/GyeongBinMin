import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'
import { formatCurrencyUsd } from '@/pages/movies/detail/lib/formatCurrencyUsd'
import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

type DetailBasicsSectionProps = {
  movie: MovieDetail
}

export function DetailBasicsSection({ movie }: DetailBasicsSectionProps) {
  return (
    <section className={styles.panel} aria-label="기본 정보">
      <h2 className={styles.sectionTitle}>기본 정보</h2>
      <div className={styles.basicsGrid}>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>원제</div>
          <div className={styles.basicValue}>{movie.originalTitle}</div>
        </div>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>원어</div>
          <div className={styles.basicValue}>{movie.originalLanguage}</div>
        </div>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>제작 국가</div>
          <div className={styles.basicValue}>
            {movie.productionCountries.join(', ')}
          </div>
        </div>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>사용 언어</div>
          <div className={styles.basicValue}>
            {movie.spokenLanguages.join(', ')}
          </div>
        </div>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>예산</div>
          <div className={styles.basicValue}>
            {formatCurrencyUsd(movie.budgetUsd)}
          </div>
        </div>
        <div className={styles.basicItem}>
          <div className={styles.basicLabel}>수익</div>
          <div className={styles.basicValue}>
            {formatCurrencyUsd(movie.revenueUsd)}
          </div>
        </div>
      </div>
    </section>
  )
}

