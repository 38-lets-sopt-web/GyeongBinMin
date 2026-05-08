import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { fetchUserById } from '@/features/user/api/fetchUserById'
import { fetchUserList, type UserSummary } from '@/features/user/api/fetchUserList'
import { Button, Card, CardContent, Input } from '@/shared/ui'

export function MemberPage() {
  const navigate = useNavigate()
  const [memberId, setMemberId] = useState('')
  const [pending, setPending] = useState(false)
  const [users, setUsers] = useState<UserSummary[]>([])
  const [searchedUser, setSearchedUser] = useState<{
    id: number
    name: string
    loginId: string
    email: string
    age: number
    part: string
  } | null>(null)

  const canSearch = useMemo(() => memberId.trim().length > 0, [memberId])

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      try {
        const res = await fetchUserList()
        const list = res.data?.users ?? []
        if (cancelled) return
        setUsers(list)
      } catch {
        if (cancelled) return
        setUsers([])
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h1 className="mb-6 text-center text-title font-heading font-semibold">회원 조회</h1>

      <div className="mx-auto w-full max-w-xl">
        <div className="mb-2 text-sm font-medium">회원 ID</div>
        <Input
          id="member-id"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          placeholder="ID를 입력해주세요"
          inputMode="numeric"
        />

        <Button
          className="mt-4 w-full cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed"
          disabled={!canSearch || pending}
          onClick={async () => {
            if (!canSearch || pending) return
            const id = Number(memberId)
            if (Number.isNaN(id)) return

            try {
              setPending(true)
              const res = await fetchUserById(id)
              const u = res.data
              if (!u) throw new Error('No user data')
              setSearchedUser(u)
            } catch {
              alert('조회에 실패했습니다.')
              setSearchedUser(null)
            } finally {
              setPending(false)
            }
          }}
        >
          검색
        </Button>

        <div className="mt-10 text-sm font-semibold">전체 멤버 리스트</div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {users.map((u) => (
            <Card key={u.id} className="cursor-pointer hover:bg-muted/30">
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg p-4 text-left"
                onClick={() => navigate(`/mypage/members/${u.id}`)}
              >
                <div className="text-sm font-semibold text-foreground">{u.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{u.part}</div>
              </button>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-sm font-semibold">검색 결과</div>

        <Card className="mt-3">
          <CardContent className="flex min-h-40 items-center justify-center text-sm text-muted-foreground">
            {searchedUser === null ? (
              <span>원하는 ID를 검색해 보세요!</span>
            ) : (
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg p-6 text-left transition-colors hover:bg-muted/40"
                onClick={() => navigate(`/mypage/members/${searchedUser.id}`)}
              >
                <div className="text-sm font-semibold text-foreground">
                  {searchedUser.name} (#{searchedUser.id})
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  {searchedUser.part} · 클릭해서 상세 정보 보기
                </div>
              </button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

