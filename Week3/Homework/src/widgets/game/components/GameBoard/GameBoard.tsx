import { useId } from 'react'

import MoleImage from '@/assets/image/du.webp'
import MoleCaughtImage from '@/assets/image/ducatch.webp'
import BombImage from '@/assets/image/me.webp'
import type { GameLevelId } from '@/shared/constants/gameLevel'
import { GAME_LEVEL_CONFIG, GAME_LEVEL_IDS } from '@/shared/constants/gameLevel'
import { Card } from '@/shared/components/card/Card'
import type { HoleAppearance } from '@/widgets/game/types'

import * as styles from './GameBoard.css'

type GameBoardProps = {
  level: GameLevelId
  onLevelChange: (level: GameLevelId) => void
  isPlaying: boolean
  onStart: () => void
  onStop: () => void
  getHoleAppearance: (index: number) => HoleAppearance
  onCellClick: (index: number) => void
}

const HOLE_LABEL: Record<HoleAppearance, string> = {
  hole: '구멍',
  mole: '두더지',
  bomb: '폭탄',
  moleHit: '맞은 두더지',
}

function holeButtonClass(appearance: HoleAppearance) {
  if (appearance === 'mole') return `${styles.hole} ${styles.moleCell}`
  if (appearance === 'bomb') return `${styles.hole} ${styles.bombCell}`
  if (appearance === 'moleHit') return `${styles.hole} ${styles.moleHitCell}`
  return styles.hole
}

function moleImageFor(appearance: HoleAppearance) {
  if (appearance === 'mole') return MoleImage
  if (appearance === 'moleHit') return MoleCaughtImage
  return null
}

function bombImageFor(appearance: HoleAppearance) {
  return appearance === 'bomb' ? BombImage : null
}

export function GameBoard({
  level,
  onLevelChange,
  isPlaying,
  onStart,
  onStop,
  getHoleAppearance,
  onCellClick,
}: GameBoardProps) {
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
              disabled={isPlaying}
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
            <button
              type="button"
              className={styles.startButton}
              onClick={onStart}
              disabled={isPlaying}
            >
              시작
            </button>
            <button
              type="button"
              className={styles.stopButton}
              onClick={onStop}
              disabled={!isPlaying}
            >
              중단
            </button>
          </div>
        </div>
        <Card className={styles.container}>
          <div
            className={styles.board}
            style={{ gridTemplateColumns: `repeat(${gridSize}, 1fr)` }}
          >
            {Array.from({ length: holeCount }, (_, i) => {
              const appearance = getHoleAppearance(i)
              const moleSrc = moleImageFor(appearance)
              const bombSrc = bombImageFor(appearance)
              const imageSrc = moleSrc ?? bombSrc
              return (
                <button
                  key={i}
                  type="button"
                  className={holeButtonClass(appearance)}
                  disabled={!isPlaying}
                  aria-label={`${HOLE_LABEL[appearance]} 칸 ${i + 1}`}
                  onClick={() => onCellClick(i)}
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt=""
                      className={styles.moleBombImage}
                      draggable={false}
                    />
                  ) : null}
                </button>
              )
            })}
          </div>
        </Card>
      </Card>
    </section>
  )
}
