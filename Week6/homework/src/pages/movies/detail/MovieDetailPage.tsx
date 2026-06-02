import { Link, useParams } from 'react-router-dom'

import { getMockMovieDetail } from '@/pages/movies/detail/data/mockMovieDetail'
import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

function formatCurrencyUsd(value: number): string {
  if (!Number.isFinite(value) || value <= 0) return '-'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>()
  const movie = getMockMovieDetail(movieId)

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <div
          className={styles.heroBackdrop}
          style={{ backgroundImage: `url(${movie.backdropUrl})` }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </header>

      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← 목록으로 돌아가기
        </Link>

        <div className={styles.content}>
          <article className={styles.card}>
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
                    <div className={styles.statValue}>
                      {movie.originalLanguage}
                    </div>
                  </div>
                  <div className={styles.statCard}>
                    <div className={styles.statLabel}>제작 국가</div>
                    <div className={styles.statValue}>
                      {movie.productionCountries.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>줄거리</h2>
                <p className={styles.overview}>{movie.overview}</p>
              </section>

              <section className={styles.section}>
                <h2 className={styles.sectionTitle}>기본 정보</h2>
                <div className={styles.basicsGrid}>
                  <div className={styles.basicItem}>
                    <div className={styles.basicLabel}>원제</div>
                    <div className={styles.basicValue}>{movie.originalTitle}</div>
                  </div>
                  <div className={styles.basicItem}>
                    <div className={styles.basicLabel}>원어</div>
                    <div className={styles.basicValue}>
                      {movie.originalLanguage}
                    </div>
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
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
