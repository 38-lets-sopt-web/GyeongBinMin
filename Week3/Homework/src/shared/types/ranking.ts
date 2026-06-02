import type { GameLevelId } from '@/shared/constants/gameLevel'

export type RankingRecord = {
  id: string
  level: GameLevelId
  score: number
  recordedAt: string
}

export type RankingRow = RankingRecord & {
  rank: number
}
