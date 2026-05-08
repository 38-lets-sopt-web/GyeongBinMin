import { useCallback, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  PasswordInput,
} from '@/shared/ui'
import { useSignInForm } from '@/features/auth/hooks/useSignInForm'
import { validateSignInInput } from '@/features/auth/lib/validateSignIn'
import { signInUsecase } from '@/features/auth/usecase/signInUsecase'
import { getHttpErrorMessage } from '@/shared/lib/http/httpError'

export function LoginPage() {
  const navigate = useNavigate()
  const { values, setValues } = useSignInForm()
  const [pending, setPending] = useState(false)

  const disabled = pending

  const handleLogin = useCallback(async () => {
    if (disabled) return
    const v = validateSignInInput(values)
    if (!v.ok) {
      alert(v.message)
      return
    }

    try {
      setPending(true)
      const res = await signInUsecase({
        loginId: values.loginId,
        password: values.password,
      })

      if (!res.ok) {
        alert('로그인에 실패했습니다.')
        return
      }

      navigate('/mypage')
    } catch (e) {
      alert(
        getHttpErrorMessage(e, '존재하지 않는 아이디거나 비밀번호가 일치하지 않습니다.'),
      )
    } finally {
      setPending(false)
    }
  }, [
    disabled,
    navigate,
    values.loginId,
    values.password,
  ])

  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-title font-heading font-semibold">SOPT MEMBERS</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input
            placeholder="아이디"
            autoComplete="username"
            value={values.loginId}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, loginId: e.target.value }))
            }
          />
          <PasswordInput
            placeholder="비밀번호"
            autoComplete="current-password"
            value={values.password}
            onChange={(e) =>
              setValues((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button
            className="w-full cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed"
            disabled={disabled}
            onClick={handleLogin}
          >
            로그인
          </Button>
          <Button
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/signup">회원가입</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

