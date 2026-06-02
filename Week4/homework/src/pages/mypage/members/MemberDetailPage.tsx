import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

import { Button, Card, CardContent, CardTitle } from '@/shared/ui'
import { fetchUserById, type User } from '@/features/user/api/fetchUserById'

export function MemberDetailPage() {
  const navigate = useNavigate()
  const { memberId } = useParams()

  const id = useMemo(() => {
    const n = Number(memberId)
    return Number.isFinite(n) ? n : null
  }, [memberId])

  const [loading, setLoading] = useState(true)
  const [member, setMember] = useState<User | null>(null)

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      if (id === null) {
        setLoading(false)
        setMember(null)
        return
      }

      try {
        setLoading(true)
        const res = await fetchUserById(id)
        if (cancelled) return
        setMember(res.data ?? null)
      } catch {
        if (cancelled) return
        setMember(null)
      } finally {
        if (cancelled) return
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [id])

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

          {loading ? (
            <div className="col-span-2 py-10 text-center text-sm text-muted-foreground">
              불러오는 중...
            </div>
          ) : member === null ? (
            <div className="col-span-2 py-10 text-center text-sm text-muted-foreground">
              회원 정보를 찾을 수 없습니다.
            </div>
          ) : (
            <>
          <div className="text-sm font-medium">이름</div>
          <div className="text-right text-sm text-muted-foreground">{member.name}</div>

          <div className="text-sm font-medium">아이디</div>
          <div className="text-right text-sm text-muted-foreground">{member.loginId}</div>

          <div className="text-sm font-medium">이메일</div>
          <div className="text-right text-sm text-muted-foreground">{member.email}</div>

          <div className="text-sm font-medium">나이</div>
          <div className="text-right text-sm text-muted-foreground">{member.age}세</div>

          <div className="text-sm font-medium">파트</div>
          <div className="text-right text-sm text-muted-foreground">{member.part}</div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

