import * as styles from '@/pages/movies/ui/RatingFilter.css.ts'

export type RatingFilterValue = 'all' | '9' | '8' | '7' | '6'

const OPTIONS: { value: RatingFilterValue; label: string }[] = [
  { value: 'all', label: '전체 별점' },
  { value: '9', label: '9점 이상' },
  { value: '8', label: '8점 이상' },
  { value: '7', label: '7점 이상' },
  { value: '6', label: '6점 이상' },
]

type RatingFilterProps = {
  value: RatingFilterValue
  onChange: (value: RatingFilterValue) => void
}

export function RatingFilter({ value, onChange }: RatingFilterProps) {
  return (
    <div className={styles.wrapper}>
      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value as RatingFilterValue)}
        aria-label="별점 필터"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
