import { useCallback, useRef, useState } from 'react'

import type { GameLevelId } from '@/shared/constants/gameLevel'
import { getGameLevelConfig } from '@/shared/constants/gameLevel'
import { getHoleAppearance } from '@/widgets/game/lib/holeAppearance'
import type { GamePhase } from '@/widgets/game/types'

import { useMoleSpawns } from './useMoleSpawns'
import { useRoundCountdown } from './useRoundCountdown'

type UseGameSessionOptions = {
  onNaturalComplete?: (payload: { level: GameLevelId; score: number }) => void
}

export function useGameSession(level: GameLevelId, options?: UseGameSessionOptions) {
  const onNaturalComplete = options?.onNaturalComplete
  const { gridSize, timeLimitSec } = getGameLevelConfig(level)
  const holeCount = gridSize * gridSize

  const [phase, setPhase] = useState<GamePhase>('idle')
  const [score, setScore] = useState(0)
  const [successCount, setSuccessCount] = useState(0)
  const [failCount, setFailCount] = useState(0)
  const [guideMessage, setGuideMessage] = useState('시작 버튼을 눌러 게임을 시작하세요.')
  const [endModalOpen, setEndModalOpen] = useState(false)
  const [lastFinalScore, setLastFinalScore] = useState(0)

  const phaseRef = useRef('idle')
  const scoreRef = useRef(0)
  const isPlayingRef = useRef(false)

  const { activeIndex, activeKind, beginSpawning, halt, tryHitHole } = useMoleSpawns(
    holeCount,
    isPlayingRef,
  )

  const endGame = useCallback(
    (finalScore: number) => {
      if (phaseRef.current !== 'playing') return
      isPlayingRef.current = false
      phaseRef.current = 'ended'
      halt()
      setPhase('ended')
      setLastFinalScore(finalScore)
      setGuideMessage(`게임 종료! 최종 점수 ${finalScore}점`)
      setEndModalOpen(true)
      onNaturalComplete?.({ level, score: finalScore })
    },
    [halt, level, onNaturalComplete],
  )

  const handleTimeUp = useCallback(() => {
    endGame(scoreRef.current)
  }, [endGame])

  const { remainingSec: tickRemainingSec, reset: resetCountdown } = useRoundCountdown(
    phase === 'playing',
    handleTimeUp,
  )

  const startGame = useCallback(() => {
    halt()
    resetCountdown(timeLimitSec)
    setScore(0)
    scoreRef.current = 0
    setSuccessCount(0)
    setFailCount(0)
    setGuideMessage('두더지는 +1점, 폭탄은 -1점입니다.')
    setEndModalOpen(false)
    isPlayingRef.current = true
    phaseRef.current = 'playing'
    setPhase('playing')
    beginSpawning()
  }, [beginSpawning, halt, resetCountdown, timeLimitSec])

  const stopGame = useCallback(() => {
    if (phaseRef.current !== 'playing') return
    halt()
    isPlayingRef.current = false
    phaseRef.current = 'idle'
    setPhase('idle')
    setScore(0)
    scoreRef.current = 0
    setSuccessCount(0)
    setFailCount(0)
    setGuideMessage('중단되었습니다. 다시 시작할 수 있습니다.')
    setEndModalOpen(false)
  }, [halt])

  const closeEndModal = useCallback(() => {
    halt()
    isPlayingRef.current = false
    phaseRef.current = 'idle'
    setPhase('idle')
    setGuideMessage('시작 버튼을 눌러 게임을 시작하세요.')
    setEndModalOpen(false)
  }, [halt])

  const onCellClick = useCallback(
    (index: number) => {
      const outcome = tryHitHole(index)
      if (outcome === 'none') return

      if (outcome === 'mole') {
        setScore((s) => {
          const next = s + 1
          scoreRef.current = next
          return next
        })
        setSuccessCount((c) => c + 1)
        setGuideMessage('두더지 잡기 성공! +1점')
        return
      }

      setScore((s) => {
        const next = s - 1
        scoreRef.current = next
        return next
      })
      setFailCount((c) => c + 1)
      setGuideMessage('폭탄입니다! -1점')
    },
    [tryHitHole],
  )

  const holeAppearanceAt = useCallback(
    (index: number) => getHoleAppearance(index, activeIndex, activeKind),
    [activeIndex, activeKind],
  )

  const displayRemainingSec =
    phase === 'idle' ? timeLimitSec : phase === 'ended' ? 0 : tickRemainingSec

  return {
    phase,
    gridSize,
    timeLimitSec,
    remainingSec: displayRemainingSec,
    score,
    successCount,
    failCount,
    guideMessage,
    endModalOpen,
    lastFinalScore,
    isPlaying: phase === 'playing',
    startGame,
    stopGame,
    closeEndModal,
    onCellClick,
    getHoleAppearance: holeAppearanceAt,
  }
}
