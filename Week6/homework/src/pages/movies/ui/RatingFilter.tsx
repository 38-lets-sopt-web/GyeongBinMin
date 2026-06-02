import * as styles from '@/pages/movies/ui/RatingFilter.css.ts'

export type RatingFilterValue =
  | 'all'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'

const OPTIONS: { value: RatingFilterValue; label: string }[] = [
  { value: 'all', label: '전체 별점' },
  { value: '1', label: '1점 대' },
  { value: '2', label: '2점 대' },
  { value: '3', label: '3점 대' },
  { value: '4', label: '4점 대' },
  { value: '5', label: '5점 대' },
  { value: '6', label: '6점 대' },
  { value: '7', label: '7점 대' },
  { value: '8', label: '8점 대' },
  { value: '9', label: '9점 대' },
  { value: '10', label: '10점 대' },
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
