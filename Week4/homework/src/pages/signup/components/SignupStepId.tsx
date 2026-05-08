import { Input } from '@/shared/ui'

export function SignupStepId({
  value,
  onChange,
}: {
  value: string
  onChange: (next: string) => void
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium" htmlFor="signup-loginId">
        아이디
      </label>
      <Input
        id="signup-loginId"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="아이디를 입력해주세요."
      />
    </div>
  )
}

