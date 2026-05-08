import { useMemo, useState } from 'react'
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
import { signIn } from '@/features/auth/api/signIn'
import { setUserId } from '@/features/auth/storage/authStorage'
import { useSignInForm } from '@/features/auth/hooks/useSignInForm'

export function LoginPage() {
  const navigate = useNavigate()
  const { values, setValues, canSubmit } = useSignInForm()
  const [pending, setPending] = useState(false)

  const disabled = useMemo(() => pending || !canSubmit, [canSubmit, pending])

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
            onClick={async () => {
              if (disabled) return
              try {
                setPending(true)
                const res = await signIn({
                  loginId: values.loginId,
                  password: values.password,
                })

                const userId = res.data?.userId
                if (typeof userId !== 'number') {
                  alert('로그인에 실패했습니다.')
                  return
                }

                setUserId(userId)
                navigate('/mypage')
              } catch {
                alert('존재하지 않는 아이디거나 비밀번호가 일치하지 않습니다.')
              } finally {
                setPending(false)
              }
            }}
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

