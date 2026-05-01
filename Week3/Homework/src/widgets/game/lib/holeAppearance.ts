import type { ActiveKind, HoleAppearance } from '@/widgets/game/types'

export function getHoleAppearance(
  index: number,
  activeIndex: number | null,
  activeKind: ActiveKind | null,
): HoleAppearance {
  if (activeIndex !== index || activeKind === null) return 'hole'
  if (activeKind === 'moleHit') return 'moleHit'
  if (activeKind === 'bombHit') return 'bombHit'
  if (activeKind === 'mole') return 'mole'
  return 'bomb'
}
