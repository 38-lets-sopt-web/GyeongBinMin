import { Card } from '@/shared/components/card/Card'

import * as styles from './GameStatusPanel.css'

type GameStatusPanelProps = {
  remainingSec: number
  score: number
  successCount: number
  failCount: number
  guideMessage: string
}

export function GameStatusPanel({
  remainingSec,
  score,
  successCount,
  failCount,
  guideMessage,
}: GameStatusPanelProps) {
  const timeLabel = remainingSec.toFixed(1)

  return (
    <aside className={styles.root} aria-label="게임 상태">
      <Card className={styles.statCard}>
        <p className={styles.label}>남은 시간</p>
        <p className={styles.value}>{timeLabel}</p>
      </Card>
      <Card className={styles.statCard}>
        <p className={styles.label}>총 점수</p>
        <p className={styles.value}>{score}</p>
      </Card>
      <div className={styles.splitRow}>
        <Card className={styles.splitCard}>
          <p className={`${styles.label} ${styles.successLabel}`}>성공</p>
          <p className={styles.value}>{successCount}</p>
        </Card>
        <Card className={styles.splitCard}>
          <p className={`${styles.label} ${styles.failureLabel}`}>실패</p>
          <p className={styles.value}>{failCount}</p>
        </Card>
      </div>
      <Card className={styles.statCard}>
        <p className={styles.label}>안내 메시지</p>
        <p className={styles.messagePlaceholder} aria-live="polite">
          {guideMessage}
        </p>
      </Card>
    </aside>
  )
}
