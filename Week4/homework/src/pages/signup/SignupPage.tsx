import { Link, useNavigate } from 'react-router-dom'
import { useMemo, useState } from 'react'

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/shared/ui'
import { useSignupSteps } from '@/features/signup/hooks/useSignupSteps'
import { signUp } from '@/features/signup/api/signUp'
import { SignupStepId } from '@/pages/signup/components/SignupStepId'
import { SignupStepPassword } from '@/pages/signup/components/SignupStepPassword'
import { SignupStepProfile } from '@/pages/signup/components/SignupStepProfile'

export function SignupPage() {
  const { step, values, setValues, next, back, canNextFromId, canNextFromPassword, canSubmit } =
    useSignupSteps()
  const navigate = useNavigate()
  const [pending, setPending] = useState(false)

  const primaryDisabled = useMemo(() => {
    if (pending) return true
    if (step === 'id') return !canNextFromId
    if (step === 'password') return !canNextFromPassword
    return !canSubmit
  }, [canNextFromId, canNextFromPassword, canSubmit, pending, step])

  return (
    <div className="w-full bg-muted/40 py-12">
      <Card className="mx-auto w-full max-w-2xl">
      <CardHeader>
          <CardTitle className="text-hero-sm font-heading font-semibold">회원가입</CardTitle>
      </CardHeader>
        <CardContent className="grid gap-6 text-left">
          {step === 'id' && (
            <SignupStepId
              value={values.loginId}
              onChange={(nextValue) =>
                setValues((prev) => ({ ...prev, loginId: nextValue }))
              }
            />
          )}

          {step === 'password' && (
            <SignupStepPassword
              password={values.password}
              passwordConfirm={values.passwordConfirm}
              onChangePassword={(nextValue) =>
                setValues((prev) => ({ ...prev, password: nextValue }))
              }
              onChangePasswordConfirm={(nextValue) =>
                setValues((prev) => ({ ...prev, passwordConfirm: nextValue }))
              }
            />
          )}

          {step === 'profile' && (
            <SignupStepProfile
              values={{
                name: values.name,
                email: values.email,
                age: values.age,
                part: values.part,
              }}
              onChange={(key, nextValue) =>
                setValues((prev) => ({ ...prev, [key]: nextValue }))
              }
            />
          )}
      </CardContent>
        <CardFooter className="flex flex-col gap-3">
          <div className="flex w-full gap-2">
            {step !== 'id' && (
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => back()}
              >
                이전
              </Button>
            )}
            <Button
              className="flex-1 cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed"
              disabled={primaryDisabled}
              onClick={async () => {
                if (primaryDisabled) return

                if (step !== 'profile') {
                  next()
                  return
                }

                try {
                  setPending(true)
                  await signUp(values)
                  alert(`${values.name}님 회원가입에 성공했습니다.`)
                  navigate('/login')
                } catch {
                  alert('회원가입에 실패했습니다.')
                } finally {
                  setPending(false)
                }
              }}
            >
              {step === 'profile' ? '회원가입' : '다음'}
            </Button>
          </div>
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

