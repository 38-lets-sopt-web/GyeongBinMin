import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'
import { useEffect, useMemo, useState } from 'react'

import { useMyMovieRating } from '@/features/rating/hooks/useMyMovieRating'
import {
  useDeleteMovieRating,
  useSaveMovieRating,
} from '@/features/rating/hooks/useMovieRatingMutations'

function parseRating(value: string): number | null {
  const n = Number(value)
  if (!Number.isFinite(n)) return null
  return n
}

function isValidRating(n: number): boolean {
  if (n < 0.5 || n > 10) return false
  // 0.5 step
  return Math.abs(n * 2 - Math.round(n * 2)) < 1e-9
}

type DetailRatingSectionProps = {
  movieId: number
}

export function DetailRatingSection({ movieId }: DetailRatingSectionProps) {
  const { data: existingRating, isPending } = useMyMovieRating(movieId)
  const saveMutation = useSaveMovieRating(movieId)
  const deleteMutation = useDeleteMovieRating(movieId)

  const [value, setValue] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (existingRating === null || existingRating === undefined) return
    setValue(String(existingRating))
  }, [existingRating])

  const validationError = useMemo(() => {
    if (value.trim().length === 0) return null
    const parsed = parseRating(value)
    if (parsed === null) return '숫자를 입력해 주세요.'
    if (!isValidRating(parsed)) return '0.5 ~ 10.0 범위의 숫자만 저장할 수 있어요.'
    return null
  }, [value])

  const canSave = useMemo(() => validationError === null, [validationError])

  async function onSave() {
    setMessage(null)
    setError(null)

    const parsed = parseRating(value)
    if (parsed === null || !isValidRating(parsed)) {
      setError('0.5 ~ 10.0 범위의 숫자만 저장할 수 있어요.')
      return
    }

    await saveMutation.mutateAsync(parsed)
    setMessage('별점이 저장되었습니다.')
  }

  async function onDelete() {
    setMessage(null)
    setError(null)

    await deleteMutation.mutateAsync()
    setValue('')
    setMessage('별점이 삭제되었습니다.')
  }

  return (
    <section className={styles.panel} aria-label="별점 남기기">
      <h2 className={styles.sectionTitle}>별점 남기기</h2>
      <p className={styles.ratingHelp}>0.5 ~ 10.0</p>
      <input
        className={styles.ratingInput}
        type="number"
        inputMode="decimal"
        min={0.5}
        max={10}
        step={0.5}
        placeholder="예: 7.5"
        aria-label="별점 입력"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setMessage(null)
          setError(null)
        }}
        disabled={isPending || saveMutation.isPending || deleteMutation.isPending}
      />
      <div className={styles.buttonRow}>
        <button
          className={styles.primaryButton}
          type="button"
          onClick={onSave}
          disabled={!canSave || saveMutation.isPending || deleteMutation.isPending}
        >
          별점 저장
        </button>
        <button
          className={styles.ghostButton}
          type="button"
          onClick={onDelete}
          disabled={saveMutation.isPending || deleteMutation.isPending}
        >
          별점 삭제하기
        </button>
      </div>

      {(error ?? validationError) && (
        <p className={styles.ratingError}>{error ?? validationError}</p>
      )}
      {message && <p className={styles.ratingMessage}>{message}</p>}
    </section>
  )
}

