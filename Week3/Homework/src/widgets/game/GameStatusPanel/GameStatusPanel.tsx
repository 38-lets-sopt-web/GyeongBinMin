import { Card } from '@/shared/components/card/Card'

import * as styles from './GameStatusPanel.css'

type GameStatusPanelProps = {
  /** 제한 시간(초) — 레벨에 맞춰 표시 (게임 타이머 연동 전까지 고정 표기) */
  timeLimitSec: number
}

export function GameStatusPanel({ timeLimitSec }: GameStatusPanelProps) {
  const timeLabel =
    Number.isInteger(timeLimitSec) ? String(timeLimitSec) : timeLimitSec.toFixed(1)

  return (
    <aside className={styles.root} aria-label="게임 상태">
      <Card className={styles.statCard}>
        <p className={styles.label}>남은 시간</p>
        <p className={styles.value}>{timeLabel}</p>
      </Card>
      <Card className={styles.statCard}>
        <p className={styles.label}>총 점수</p>
        <p className={styles.value}>0</p>
      </Card>
      <div className={styles.splitRow}>
        <Card className={styles.splitCard}>
          <p className={`${styles.label} ${styles.successLabel}`}>성공</p>
          <p className={styles.value}>0</p>
        </Card>
        <Card className={styles.splitCard}>
          <p className={`${styles.label} ${styles.failureLabel}`}>실패</p>
          <p className={styles.value}>0</p>
        </Card>
      </div>
      <Card className={styles.statCard}>
        <p className={styles.label}>안내 메시지</p>
        <p className={styles.messagePlaceholder} aria-live="polite">
          시작 후 안내가 표시됩니다.
        </p>
      </Card>
    </aside>
  )
}
