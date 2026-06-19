import { useEffect, useMemo, useRef, useState } from 'react'

import { useDiscoverMovies } from '@/features/movie/hooks/useDiscoverMovies'
import * as styles from '@/pages/movies/MovieListPage.css.ts'
import { MovieCard } from '@/pages/movies/ui/MovieCard'
import {
  RatingFilter,
  type RatingFilterValue,
} from '@/pages/movies/ui/RatingFilter'
import { getHttpErrorMessage } from '@/shared/lib/http/httpError'

export function MovieListPage() {
  const [ratingFilter, setRatingFilter] = useState<RatingFilterValue>('all')
  const sentinelRef = useRef<HTMLDivElement>(null)

  const {
    data,
    error,
    isPending,
    isError,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useDiscoverMovies(ratingFilter)

  const movies = useMemo(
    () => data?.pages.flatMap((page) => page.movies) ?? [],
    [data],
  )

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel || !hasNextPage || isFetchingNextPage) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) fetchNextPage()
      },
      { rootMargin: '120px' },
    )

    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage, isFetchingNextPage])

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Movie Explorer</h1>

        <RatingFilter value={ratingFilter} onChange={setRatingFilter} />

        {isPending && (
          <p className={styles.loadStatus}>영화 목록을 불러오는 중…</p>
        )}

        {isError && (
          <p className={styles.errorStatus} role="alert">
            {getHttpErrorMessage(
              error,
              '영화 목록을 불러오지 못했습니다. API 키와 네트워크를 확인해 주세요.',
            )}
          </p>
        )}

        {!isPending && !isError && (
          <div className={styles.grid}>
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        )}

        {!isPending && !isError && movies.length === 0 && (
          <p className={styles.loadStatus}>조건에 맞는 영화가 없습니다.</p>
        )}

        {hasNextPage && !isError && (
          <div ref={sentinelRef} className={styles.sentinel} />
        )}

        {isFetchingNextPage && (
          <p className={styles.loadStatus} aria-live="polite">
            더 불러오는 중…
          </p>
        )}
      </div>
    </div>
  )
}
