import { RankingTable } from '@/widgets/ranking/components/RankingTable/RankingTable'
import { useRankingBoard } from '@/widgets/ranking/hooks/useRankingBoard'

import * as styles from './RankingPage.css'

const RankingPage = () => {
  const { rows, resetRanking } = useRankingBoard()

  return (
    <main className={styles.page}>
      <RankingTable rows={rows} onReset={resetRanking} />
    </main>
  )
}

export default RankingPage
