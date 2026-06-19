import { Link } from 'react-router-dom'

import type { MovieListItem } from '@/pages/movies/model/movieListItem'
import * as styles from '@/pages/movies/ui/MovieCard.css.ts'

type MovieCardProps = {
  movie: MovieListItem
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link to={`/movies/${movie.id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.posterWrap}>
          <img
            className={styles.poster}
            src={movie.posterUrl}
            alt={`${movie.title} 포스터`}
            loading="lazy"
          />
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{movie.title}</h2>
          <time className={styles.releaseDate} dateTime={movie.releaseDate}>
            {movie.releaseDate}
          </time>
          <p className={styles.overview}>{movie.overview}</p>
        </div>
      </article>
    </Link>
  )
}
