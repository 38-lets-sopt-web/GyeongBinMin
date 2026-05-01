import { useState } from 'react'

import type { GameLevelId } from '@/shared/constants/gameLevel'
import { GameBoard } from '@/widgets/game/components/GameBoard/GameBoard'
import { GameEndModal } from '@/widgets/game/components/GameEndModal/GameEndModal'
import { GameStatusPanel } from '@/widgets/game/components/GameStatusPanel/GameStatusPanel'
import { useGameSession } from '@/widgets/game/hooks/useGameSession'

import * as styles from './GamePage.css'

const GamePage = () => {
  const [level, setLevel] = useState<GameLevelId>(1)
  const session = useGameSession(level)

  return (
    <div className={styles.page}>
      <GameStatusPanel
        remainingSec={session.remainingSec}
        score={session.score}
        successCount={session.successCount}
        failCount={session.failCount}
        guideMessage={session.guideMessage}
      />
      <main className={styles.mainArea}>
        <GameBoard
          level={level}
          onLevelChange={setLevel}
          isPlaying={session.isPlaying}
          onStart={session.startGame}
          onStop={session.stopGame}
          getHoleAppearance={session.getHoleAppearance}
          onCellClick={session.onCellClick}
        />
      </main>
      <GameEndModal
        open={session.endModalOpen}
        finalScore={session.lastFinalScore}
        onClose={session.closeEndModal}
      />
    </div>
  )
}

export default GamePage
