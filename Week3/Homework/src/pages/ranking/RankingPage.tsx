import {
  RankingTable,
  type RankingEntry,
} from '@/widgets/ranking/RankingTable/RankingTable'

import * as styles from './RankingPage.css'

const MOCK_RANKING: RankingEntry[] = [
  {
    rank: 1,
    level: 2,
    score: 20,
    recordedAt: '2026-04-25T01:14:15',
  },
]

const RankingPage = () => {
  return (
    <main className={styles.page}>
      <RankingTable rows={MOCK_RANKING} />
    </main>
  )
}

export default RankingPage
