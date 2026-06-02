import type { MovieDetail } from '@/pages/movies/detail/model/movieDetail'
import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'
import { SectionTitle } from '@/shared/ui/typography/SectionTitle'

type DetailOverviewSectionProps = {
  overview: MovieDetail['overview']
}

export function DetailOverviewSection({ overview }: DetailOverviewSectionProps) {
  return (
    <section className={styles.section} aria-label="줄거리">
      <SectionTitle className={styles.sectionTitle}>줄거리</SectionTitle>
      <p className={styles.overview}>{overview}</p>
    </section>
  )
}

