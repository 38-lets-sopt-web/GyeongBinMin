import { useState } from 'react'

import type { GameLevelId } from '@/shared/constants/gameLevel'
import { getGameLevelConfig } from '@/shared/constants/gameLevel'
import { GameBoard } from '@/widgets/game/GameBoard/GameBoard'
import { GameStatusPanel } from '@/widgets/game/GameStatusPanel/GameStatusPanel'

import * as styles from './GamePage.css'

const GamePage = () => {
  const [level, setLevel] = useState<GameLevelId>(2)
  const { timeLimitSec } = getGameLevelConfig(level)

  return (
    <div className={styles.page}>
      <GameStatusPanel timeLimitSec={timeLimitSec} />
      <main className={styles.mainArea}>
        <GameBoard level={level} onLevelChange={setLevel} />
      </main>
    </div>
  )
}

export default GamePage
