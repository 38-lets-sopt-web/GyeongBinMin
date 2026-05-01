import { useId } from 'react'

import type { GameLevelId } from '@/shared/constants/gameLevel'
import { GAME_LEVEL_CONFIG, GAME_LEVEL_IDS } from '@/shared/constants/gameLevel'
import { Card } from '@/shared/components/card/Card'

import * as styles from './GameBoard.css'

type GameBoardProps = {
  level: GameLevelId
  onLevelChange: (level: GameLevelId) => void
}

export function GameBoard({ level, onLevelChange }: GameBoardProps) {
  const levelSelectId = useId()
  const { gridSize } = GAME_LEVEL_CONFIG[level]
  const holeCount = gridSize * gridSize

  return (
    <section className={styles.section} aria-label="게임 보드">
      <Card className={styles.shell}>
        <div className={styles.toolbar}>
          <div className={styles.levelField}>
            <label htmlFor={levelSelectId} className={styles.levelLabelText}>
              난이도
            </label>
            <select
              id={levelSelectId}
              className={styles.select}
              value={String(level)}
              onChange={(e) => onLevelChange(Number(e.target.value) as GameLevelId)}
            >
              {GAME_LEVEL_IDS.map((id) => (
                <option key={id} value={String(id)}>
                  Level {id}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.actions}>
            <button type="button" className={styles.startButton}>
              시작
            </button>
            <button type="button" className={styles.stopButton}>
              중단
            </button>
          </div>
        </div>
        <Card className={styles.container}>
          <div
            className={styles.board}
            style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
          >
            {Array.from({ length: holeCount }, (_, i) => (
              <div key={i} className={styles.hole} />
            ))}
          </div>
        </Card>
      </Card>
    </section>
  )
}
