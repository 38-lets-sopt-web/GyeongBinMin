import { Link, useNavigate } from 'react-router-dom'

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Input, PasswordInput } from '@/shared/ui'
import { useSignupForm } from '@/features/signup/hooks/useSignupForm'

export function SignupPage() {
  const { values, setValues, canSubmit } = useSignupForm()
  const navigate = useNavigate()

  return (
    <div className="w-full bg-muted/40 py-12">
      <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
          <CardTitle className="text-hero-sm font-heading font-semibold">회원가입</CardTitle>
      </CardHeader>
        <CardContent className="grid gap-6 text-left">
          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="signup-userId">
              아이디
            </label>
            <Input
              id="signup-userId"
              value={values.userId}
              onChange={(e) => setValues((prev) => ({ ...prev, userId: e.target.value }))}
              placeholder="아이디를 입력해주세요."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="signup-password">
              비밀번호
            </label>
            <PasswordInput
              id="signup-password"
              value={values.password}
              onChange={(e) => setValues((prev) => ({ ...prev, password: e.target.value }))}
              placeholder="비밀번호를 입력해주세요."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="signup-passwordConfirm">
              비밀번호 확인
            </label>
            <PasswordInput
              id="signup-passwordConfirm"
              value={values.passwordConfirm}
              onChange={(e) =>
                setValues((prev) => ({ ...prev, passwordConfirm: e.target.value }))
              }
              placeholder="비밀번호를 다시 입력해주세요."
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="signup-name">
              이름
            </label>
            <Input
              id="signup-name"
              value={values.name}
              onChange={(e) => setValues((prev) => ({ ...prev, name: e.target.value }))}
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
              onChange={(e) => setValues((prev) => ({ ...prev, email: e.target.value }))}
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
              onChange={(e) => setValues((prev) => ({ ...prev, age: e.target.value }))}
              placeholder="나이를 입력해주세요."
              inputMode="numeric"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm font-medium" htmlFor="signup-part">
              파트
            </label>
            <Input
              id="signup-part"
              value={values.part}
              onChange={(e) => setValues((prev) => ({ ...prev, part: e.target.value }))}
              placeholder="파트명을 입력해주세요."
            />
          </div>
      </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <Button
            className="w-full cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed"
            disabled={!canSubmit}
            onClick={() => {
              if (!canSubmit) return
              navigate('/login')
            }}
          >
            회원가입
          </Button>
          <div className="text-sm text-muted-foreground">
            이미 계정이 있나요?{' '}
            <Link className="text-primary underline underline-offset-4" to="/login">
              로그인으로 돌아가기
            </Link>
          </div>
      </CardFooter>
      </Card>
    </div>
  )
}

