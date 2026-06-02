import { useCallback, useEffect, useState } from 'react'

import {
  clearRankingRecords,
  getRankingRows,
  RANKING_STORAGE_KEY,
} from '@/shared/lib/rankingStorage'
import type { RankingRow } from '@/shared/types/ranking'

export function useRankingBoard() {
  const [rows, setRows] = useState<RankingRow[]>(() => getRankingRows())

  const refresh = useCallback(() => {
    setRows(getRankingRows())
  }, [])

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === RANKING_STORAGE_KEY || e.key === null) refresh()
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [refresh])

  const resetRanking = useCallback(() => {
    if (!window.confirm('모든 랭킹 기록을 삭제할까요?')) return
    clearRankingRecords()
    refresh()
  }, [refresh])

  return { rows, resetRanking }
}
