import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { mockMovies } from '@/pages/movies/data/mockMovies'
import type { MovieListItem } from '@/pages/movies/model/movieListItem'
import * as styles from '@/pages/movies/MovieListPage.css.ts'
import { MovieCard } from '@/pages/movies/ui/MovieCard'
import {
  RatingFilter,
  type RatingFilterValue,
} from '@/pages/movies/ui/RatingFilter'

const PAGE_SIZE = 8

function filterByRating(
  movies: MovieListItem[],
  rating: RatingFilterValue,
): MovieListItem[] {
  if (rating === 'all') return movies
  const minScore = Number(rating)
  return movies.filter((movie) => movie.voteAverage >= minScore)
}

export function MovieListPage() {
  const [ratingFilter, setRatingFilter] = useState<RatingFilterValue>('all')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const sentinelRef = useRef<HTMLDivElement>(null)

  const filteredMovies = useMemo(
    () => filterByRating(mockMovies, ratingFilter),
    [ratingFilter],
  )

  const visibleMovies = useMemo(
    () => filteredMovies.slice(0, visibleCount),
    [filteredMovies, visibleCount],
  )

  const hasMore = visibleCount < filteredMovies.length

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [ratingFilter])

  const loadMore = useCallback(() => {
    setVisibleCount((prev) =>
      Math.min(prev + PAGE_SIZE, filteredMovies.length),
    )
  }, [filteredMovies.length])

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasMore) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) loadMore()
      },
      { rootMargin: '120px' },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [hasMore, loadMore])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Movie Explorer</h1>

        <RatingFilter value={ratingFilter} onChange={setRatingFilter} />

        <div className={styles.grid}>
          {visibleMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <p className={styles.loadStatus}>조건에 맞는 영화가 없습니다.</p>
        )}

        {hasMore && <div ref={sentinelRef} className={styles.sentinel} />}

        {hasMore && (
          <p className={styles.loadStatus} aria-live="polite">
            더 불러오는 중…
          </p>
        )}
      </div>
    </div>
  )
}
