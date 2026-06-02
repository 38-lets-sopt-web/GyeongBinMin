import { Card } from '@/shared/ui'

export function MemberCard({
  name,
  part,
  onClick,
}: {
  name: string
  part: string
  onClick: () => void
}) {
  return (
    <Card className="cursor-pointer hover:bg-muted/30">
      <button
        type="button"
        className="w-full cursor-pointer rounded-lg p-4 text-left"
        onClick={onClick}
      >
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="mt-1 text-xs text-muted-foreground">{part}</div>
      </button>
    </Card>
  )
}

