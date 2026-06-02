import * as styles from '@/pages/movies/detail/MovieDetailPage.css.ts'

export function DetailRatingSection() {
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
      />
      <div className={styles.buttonRow}>
        <button className={styles.primaryButton} type="button">
          별점 저장
        </button>
        <button className={styles.ghostButton} type="button">
          별점 삭제하기
        </button>
      </div>
    </section>
  )
}

