import type { TargetKind } from '@/widgets/game/types'

function randomIndex(maxExclusive: number) {
  return Math.floor(Math.random() * maxExclusive)
}

function moleOrBomb(): TargetKind {
  return Math.random() < 0.5 ? 'mole' : 'bomb'
}

export function rollRandomSpawn(holeCount: number): { index: number; kind: TargetKind } {
  return {
    index: randomIndex(holeCount),
    kind: moleOrBomb(),
  }
}
