import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

type DetailHeroSectionProps = {
  backdropUrl: string
}

export function DetailHeroSection({ backdropUrl }: DetailHeroSectionProps) {
  return (
    <header className={styles.hero} aria-label="영화 배경 이미지">
      <div className={styles.heroMedia}>
        <div
          className={styles.heroBackdrop}
          style={{ backgroundImage: `url(${backdropUrl})` }}
          aria-hidden="true"
        />
        <div className={styles.heroOverlay} aria-hidden="true" />
      </div>
    </header>
  )
}

