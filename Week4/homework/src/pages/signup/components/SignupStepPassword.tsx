import { PasswordInput } from '@/shared/ui'

export function SignupStepPassword({
  password,
  passwordConfirm,
  onChangePassword,
  onChangePasswordConfirm,
}: {
  password: string
  passwordConfirm: string
  onChangePassword: (next: string) => void
  onChangePasswordConfirm: (next: string) => void
}) {
  return (
    <>
      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-password">
          비밀번호
        </label>
        <PasswordInput
          id="signup-password"
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요."
        />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-medium" htmlFor="signup-passwordConfirm">
          비밀번호 확인
        </label>
        <PasswordInput
          id="signup-passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => onChangePasswordConfirm(e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요."
        />
      </div>
    </>
  )
}

