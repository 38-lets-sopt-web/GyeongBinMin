import { Input } from '@/shared/ui'

import type { SignupValues } from '@/features/signup/hooks/useSignupSteps'

export function SignupStepProfile({
  values,
  onChange,
}: {
  values: Pick<SignupValues, 'name' | 'email' | 'age' | 'part'>
  onChange: <K extends keyof Pick<SignupValues, 'name' | 'email' | 'age' | 'part'>>(
    key: K,
    value: SignupValues[K],
  ) => void
}) {
  return (
    <>
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-name">
          이름
        </label>
        <Input
          id="signup-name"
          value={values.name}
          onChange={(e) => onChange('name', e.target.value)}
          placeholder="이름을 입력해주세요."
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-email">
          이메일
        </label>
        <Input
          id="signup-email"
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
          placeholder="이메일을 입력해주세요."
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-age">
          나이
        </label>
        <Input
          id="signup-age"
          value={values.age}
          onChange={(e) => onChange('age', e.target.value)}
          placeholder="나이를 입력해주세요."
          inputMode="numeric"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-part">
          파트
        </label>
        <select
          id="signup-part"
          value={values.part}
          onChange={(e) => onChange('part', e.target.value as SignupValues['part'])}
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-1 text-sm shadow-sm focus-visible:ring-1 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>
            파트를 선택해주세요.
          </option>
          <option value="iOS">iOS</option>
          <option value="안드로이드">안드로이드</option>
          <option value="웹">웹</option>
        </select>
      </div>
    </>
  )
}

