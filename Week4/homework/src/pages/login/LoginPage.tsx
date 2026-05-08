import { Link } from 'react-router-dom'

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Input } from '@/shared/ui'

export function LoginPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-title font-heading font-semibold">SOPT MEMBERS</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Input placeholder="아이디" autoComplete="username" />
          <Input
            type="password"
            placeholder="비밀번호"
            autoComplete="current-password"
          />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button className="w-full cursor-pointer hover:bg-primary/90">
            로그인
          </Button>
          <Button
            variant="ghost"
            className="w-full text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link to="/signup">회원가입으로 이동</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

