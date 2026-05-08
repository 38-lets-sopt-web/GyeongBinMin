import { useNavigate, useParams } from 'react-router-dom'

import { Button, Card, CardContent, CardTitle } from '@/shared/ui'
import type { Member } from '@/features/member/types'

const MOCK_MEMBER: Member = {
  id: 1,
  name: '민경빈',
  userId: 'test',
  email: 'sopt@naver.com',
  age: 26,
  part: '웹',
}

export function MemberDetailPage() {
  const navigate = useNavigate()
  const { memberId } = useParams()

  const member = { ...MOCK_MEMBER, id: Number(memberId ?? 1) }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h1 className="mb-6 text-center text-title font-heading font-semibold">
        상세 정보
      </h1>

      <Button
        variant="ghost"
        className="mb-4 px-0 text-muted-foreground hover:bg-transparent hover:text-foreground"
        onClick={() => navigate(-1)}
      >
        ← 뒤로가기
      </Button>

      <Card className="mx-auto w-full max-w-xl">
        <CardContent className="grid grid-cols-2 gap-x-6 gap-y-3">
          <CardTitle className="col-span-2 sr-only">회원 상세</CardTitle>

          <div className="text-sm font-medium">이름</div>
          <div className="text-right text-sm text-muted-foreground">{member.name}</div>

          <div className="text-sm font-medium">아이디</div>
          <div className="text-right text-sm text-muted-foreground">{member.userId}</div>

          <div className="text-sm font-medium">이메일</div>
          <div className="text-right text-sm text-muted-foreground">{member.email}</div>

          <div className="text-sm font-medium">나이</div>
          <div className="text-right text-sm text-muted-foreground">{member.age}세</div>

          <div className="text-sm font-medium">파트</div>
          <div className="text-right text-sm text-muted-foreground">{member.part}</div>
        </CardContent>
      </Card>
    </div>
  )
}

