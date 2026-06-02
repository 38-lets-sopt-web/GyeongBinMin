import { Link, useParams } from 'react-router-dom'

import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

export function MovieDetailPage() {
  const { movieId } = useParams<{ movieId: string }>()

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <Link to="/" className={styles.backLink}>
          ← 목록으로 돌아가기
        </Link>
        <p className={styles.placeholder}>
          영화 상세 페이지 (movieId: {movieId}) — API 연동 예정
        </p>
      </div>
    </div>
  )
}
