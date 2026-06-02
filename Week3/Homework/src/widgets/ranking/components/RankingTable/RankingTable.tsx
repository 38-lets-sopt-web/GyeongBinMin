import { Card } from '@/shared/components/card/Card'
import type { RankingRow } from '@/shared/types/ranking'
import { formatDate } from '@/widgets/ranking/lib/formatDate'

import * as styles from './RankingTable.css'

export type { RankingRow }

type RankingTableProps = {
  rows: RankingRow[]
  onReset?: () => void
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
                    성공 시간
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className={styles.row}>
                    <td className={styles.td}>{row.rank}</td>
                    <td className={styles.td}>Level {row.level}</td>
                    <td className={styles.td}>{row.score}점</td>
                    <td className={styles.td}>{formatDate(row.recordedAt)}</td>
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
