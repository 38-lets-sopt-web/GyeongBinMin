import type { GameLevelId } from '@/shared/constants/gameLevel'
import type { RankingRecord, RankingRow } from '@/shared/types/ranking'

const STORAGE_KEY = 'mole-game-ranking-v1'

function isGameLevelId(n: unknown): n is GameLevelId {
  return n === 1 || n === 2 || n === 3
}

function parseRecords(raw: unknown): RankingRecord[] {
  if (!Array.isArray(raw)) return []
  const out: RankingRecord[] = []
  for (const item of raw) {
    if (!item || typeof item !== 'object') continue
    const r = item as Record<string, unknown>
    const level = r.level
    const score = r.score
    const recordedAt = r.recordedAt
    if (!isGameLevelId(level)) continue
    if (typeof score !== 'number' || !Number.isFinite(score)) continue
    if (typeof recordedAt !== 'string') continue
    const id =
      typeof r.id === 'string' && r.id.length > 0
        ? r.id
        : `${recordedAt}:${level}:${score}`
    out.push({ id, level, score, recordedAt })
  }
  return out
}

export function sortRankingRecords(records: RankingRecord[]): RankingRecord[] {
  return [...records].sort((a, b) => {
    if (b.level !== a.level) return b.level - a.level
    return b.score - a.score
  })
}

function withRanks(records: RankingRecord[]): RankingRow[] {
  return sortRankingRecords(records).map((rec, i) => ({
    ...rec,
    rank: i + 1,
  }))
}

export function loadRankingRecords(): RankingRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    return parseRecords(JSON.parse(raw) as unknown)
  } catch {
    return []
  }
}

export function saveRankingRecords(records: RankingRecord[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(records))
}

export function getRankingRows(): RankingRow[] {
  return withRanks(loadRankingRecords())
}

export function recordRankingClear(level: GameLevelId, score: number): void {
  const next: RankingRecord = {
    id: crypto.randomUUID(),
    level,
    score,
    recordedAt: new Date().toISOString(),
  }
  const merged = [...loadRankingRecords(), next]
  saveRankingRecords(sortRankingRecords(merged))
}

export function clearRankingRecords(): void {
  localStorage.removeItem(STORAGE_KEY)
}

export { STORAGE_KEY as RANKING_STORAGE_KEY }
