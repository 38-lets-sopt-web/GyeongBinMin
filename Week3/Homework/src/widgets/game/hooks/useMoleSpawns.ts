import type { RefObject } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import {
  MOLE_HIT_MS,
  PEEK_MS,
  SPAWN_DELAY_AFTER_BOMB_MS,
  SPAWN_DELAY_DEFAULT_MS,
} from '@/widgets/game/constants'
import { rollRandomSpawn } from '@/widgets/game/lib/randomSpawn'
import type { ActiveKind, HoleClickOutcome } from '@/widgets/game/types'

/**
 * 두더지/폭탄 스폰, 노출 시간(피크), 두더지 맞음 연출 타이머만 담당한다.
 * 점수·라운드 여부는 부모가 ref로 전달한다.
 */
export function useMoleSpawns(holeCount: number, isPlayingRef: RefObject<boolean>) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [activeKind, setActiveKind] = useState<ActiveKind | null>(null)

  const spawnTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const moleHitTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const peekTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const activeSpawnIdRef = useRef(0)
  const scheduleSpawnRef = useRef<(delay: number) => void>(() => {})

  const clearSpawnTimer = useCallback(() => {
    if (spawnTimerRef.current !== undefined) {
      clearTimeout(spawnTimerRef.current)
      spawnTimerRef.current = undefined
    }
  }, [])

  const clearMoleHitTimer = useCallback(() => {
    if (moleHitTimerRef.current !== undefined) {
      clearTimeout(moleHitTimerRef.current)
      moleHitTimerRef.current = undefined
    }
  }, [])

  const clearPeekTimer = useCallback(() => {
    if (peekTimerRef.current !== undefined) {
      clearTimeout(peekTimerRef.current)
      peekTimerRef.current = undefined
    }
  }, [])

  const clearAllTimers = useCallback(() => {
    clearSpawnTimer()
    clearMoleHitTimer()
    clearPeekTimer()
  }, [clearMoleHitTimer, clearPeekTimer, clearSpawnTimer])

  const scheduleSpawn = useCallback(
    (delay: number) => {
      clearSpawnTimer()
      spawnTimerRef.current = setTimeout(() => {
        if (!isPlayingRef.current) return
        const spawnId = ++activeSpawnIdRef.current
        const { index, kind } = rollRandomSpawn(holeCount)
        setActiveIndex(index)
        setActiveKind(kind)
        clearPeekTimer()
        peekTimerRef.current = setTimeout(() => {
          if (!isPlayingRef.current) return
          if (activeSpawnIdRef.current !== spawnId) return
          setActiveIndex(null)
          setActiveKind(null)
          scheduleSpawnRef.current(SPAWN_DELAY_DEFAULT_MS)
        }, PEEK_MS)
      }, delay)
    },
    [clearPeekTimer, clearSpawnTimer, holeCount, isPlayingRef],
  )

  useEffect(() => {
    scheduleSpawnRef.current = scheduleSpawn
  }, [scheduleSpawn])

  useEffect(() => {
    return () => {
      clearAllTimers()
    }
  }, [clearAllTimers])

  const beginSpawning = useCallback(() => {
    scheduleSpawn(SPAWN_DELAY_DEFAULT_MS)
  }, [scheduleSpawn])

  const halt = useCallback(() => {
    clearAllTimers()
    activeSpawnIdRef.current += 1
    setActiveIndex(null)
    setActiveKind(null)
  }, [clearAllTimers])

  const tryHitHole = useCallback(
    (index: number): HoleClickOutcome => {
      if (!isPlayingRef.current) return 'none'
      if (
        activeIndex !== index ||
        activeKind === null ||
        activeKind === 'moleHit' ||
        activeKind === 'bombHit'
      ) {
        return 'none'
      }

      clearPeekTimer()

      if (activeKind === 'mole') {
        setActiveKind('moleHit')
        clearMoleHitTimer()
        moleHitTimerRef.current = setTimeout(() => {
          if (!isPlayingRef.current) return
          setActiveIndex(null)
          setActiveKind(null)
          scheduleSpawnRef.current(SPAWN_DELAY_DEFAULT_MS)
        }, MOLE_HIT_MS)
        return 'mole'
      }

      setActiveKind('bombHit')
      clearMoleHitTimer()
      moleHitTimerRef.current = setTimeout(() => {
        if (!isPlayingRef.current) return
        setActiveIndex(null)
        setActiveKind(null)
        scheduleSpawnRef.current(SPAWN_DELAY_AFTER_BOMB_MS)
      }, MOLE_HIT_MS)
      return 'bomb'
    },
    [activeIndex, activeKind, clearMoleHitTimer, clearPeekTimer, isPlayingRef],
  )

  return {
    activeIndex,
    activeKind,
    beginSpawning,
    halt,
    tryHitHole,
  }
}
