import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'
import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

type DetailSummarySectionProps = {
  movie: MovieDetail
}

export function DetailSummarySection({ movie }: DetailSummarySectionProps) {
  return (
    <section className={styles.card} aria-label="영화 요약">
      <div className={styles.posterWrap}>
        <img
          className={styles.poster}
          src={movie.posterUrl}
          alt={`${movie.title} 포스터`}
          loading="lazy"
        />
      </div>

      <div>
        <div className={styles.header}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{movie.title}</h1>
            <p className={styles.subTitle}>{movie.releaseDate}</p>
          </div>

          <div className={styles.meta} aria-label="영화 메타 정보">
            <span>{movie.status}</span>
            <span className={styles.metaDot}>•</span>
            <span>{movie.runtimeMinutes}분</span>
            <span className={styles.metaDot}>•</span>
            <span>평점 {movie.voteAverage.toFixed(1)}</span>
            <span className={styles.metaDot}>•</span>
            <span>투표 {movie.voteCount.toLocaleString()}개</span>
          </div>

          <div className={styles.genreList} aria-label="장르">
            {movie.genres.map((g) => (
              <span key={g} className={styles.genreChip}>
                {g}
              </span>
            ))}
          </div>

          <div className={styles.stats} aria-label="요약 정보">
            <div className={styles.statCard}>
              <div className={styles.statLabel}>원제</div>
              <div className={styles.statValue}>{movie.originalTitle}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>원어</div>
              <div className={styles.statValue}>{movie.originalLanguage}</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statLabel}>제작 국가</div>
              <div className={styles.statValue}>
                {movie.productionCountries.join(', ')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

