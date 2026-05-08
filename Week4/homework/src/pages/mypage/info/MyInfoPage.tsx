import { Button, Card, CardContent, Input } from '@/shared/ui'

export function MyInfoPage() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <h1 className="mb-6 text-center text-title font-heading font-semibold">내 정보</h1>

      <Card>
        <CardContent className="grid gap-3">
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-medium">아이디</div>
            <div className="text-sm text-muted-foreground">assignment</div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-medium">파트</div>
            <div className="text-sm text-muted-foreground">웹</div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-name">
            이름
          </label>
          <Input id="my-name" placeholder="이름" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-email">
            이메일
          </label>
          <Input id="my-email" placeholder="sopt@sopt.org" />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-age">
            나이
          </label>
          <Input id="my-age" placeholder="25" inputMode="numeric" />
        </div>

        <Button className="w-full cursor-pointer hover:bg-primary/90">정보 수정</Button>
      </div>
    </div>
  )
}

