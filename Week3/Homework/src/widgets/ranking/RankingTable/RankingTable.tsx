import type { GameLevelId } from '@/shared/constants/gameLevel'
import { Card } from '@/shared/components/card/Card'

import * as styles from './RankingTable.css'

export type RankingEntry = {
  rank: number
  level: GameLevelId
  score: number
  /** ISO 8601 (예: 게임 종료 시각) */
  recordedAt: string
}

type RankingTableProps = {
  rows: RankingEntry[]
  onReset?: () => void
}

function formatRecordedAt(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return '—'
  return d.toLocaleString('ko-KR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}

export function RankingTable({ rows, onReset = () => {} }: RankingTableProps) {
  return (
    <section className={styles.section} aria-label="랭킹 보드">
      <Card className={styles.shell}>
        <div className={styles.toolbar}>
          <h2 className={styles.title}>랭킹 보드</h2>
          <button
            type="button"
            className={styles.resetButton}
            onClick={onReset}
          >
            기록 초기화
          </button>
        </div>
        {rows.length === 0 ? (
          <p className={styles.empty}>아직 기록이 없습니다.</p>
        ) : (
          <div className={styles.tableViewport}>
            <table className={styles.tableEl}>
              <thead>
                <tr>
                  <th scope="col" className={styles.thLead}>
                    순위
                  </th>
                  <th scope="col" className={styles.th}>
                    레벨
                  </th>
                  <th scope="col" className={styles.th}>
                    점수
                  </th>
                  <th scope="col" className={styles.thTrail}>
                    기록 시각
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={`${row.rank}-${row.recordedAt}`} className={styles.row}>
                    <td className={styles.td}>{row.rank}</td>
                    <td className={styles.td}>Level {row.level}</td>
                    <td className={styles.td}>{row.score}점</td>
                    <td className={styles.td}>{formatRecordedAt(row.recordedAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </section>
  )
}
