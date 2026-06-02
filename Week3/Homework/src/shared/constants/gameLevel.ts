export type GameLevelId = 1 | 2 | 3

export const GAME_LEVEL_IDS: GameLevelId[] = [1, 2, 3]

export const GAME_LEVEL_CONFIG: Record<
  GameLevelId,
  {
    gridSize: number
    timeLimitSec: number
  }
> = {
  1: { gridSize: 2, timeLimitSec: 15 },
  2: { gridSize: 3, timeLimitSec: 20 },
  3: { gridSize: 4, timeLimitSec: 30 },
}

export function getGameLevelConfig(level: GameLevelId) {
  return GAME_LEVEL_CONFIG[level]
}
