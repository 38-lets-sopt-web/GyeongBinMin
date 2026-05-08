import { Link } from 'react-router-dom'

import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle, Input } from '@/shared/ui'

export function LoginPage() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className='text-2xl font-bold'>SOPTMEMBERS</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-3">
        <Input placeholder="아이디" />
        <Input type="password" placeholder="비밀번호" />
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        <Button className="w-full">로그인</Button>
        <Button variant="ghost" className="w-full" asChild>
          <Link to="/signup">회원가입으로 이동</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

