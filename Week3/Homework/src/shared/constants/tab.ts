export const TABS = {
  GAME: 'game',
  RANKING: 'ranking',
} as const

export type TabValue = (typeof TABS)[keyof typeof TABS]
