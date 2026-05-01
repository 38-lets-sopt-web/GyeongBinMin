export type GamePhase = 'idle' | 'playing' | 'ended'

/** 보드 칸에 표시되는 타겟 상태 */
export type ActiveKind = 'mole' | 'bomb' | 'moleHit'

/** 구멍 하나에 그릴 모습(빈 구멍·두더지·폭탄·맞은 연출) */
export type HoleAppearance = 'hole' | 'mole' | 'bomb' | 'moleHit'

export type TargetKind = 'mole' | 'bomb'

/** 구멍 클릭 시 점수에 반영할 결과 */
export type HoleClickOutcome = 'none' | 'mole' | 'bomb'
