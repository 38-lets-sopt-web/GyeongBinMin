import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { getUserId } from '@/features/auth/storage/authStorage'
import { fetchUserById } from '@/features/user/api/fetchUserById'
import { fetchUserList, type UserSummary } from '@/features/user/api/fetchUserList'
import { getHttpErrorMessage } from '@/shared/lib/http/httpError'
import { Button, Card, CardContent, Input } from '@/shared/ui'
import { MemberCard } from '@/pages/mypage/members/MemberCard'

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

        const myId = getUserId()
        if (!myId) {
          setUsers(list)
          return
        }

        if (list.some((u) => u.id === myId)) {
          setUsers(list)
          return
        }

        try {
          const me = await fetchUserById(myId)
          const u = me.data
          if (!u) throw new Error('No user data')
          if (cancelled) return

          const meSummary: UserSummary = { id: u.id, name: u.name, part: u.part }
          setUsers([meSummary, ...list])
        } catch (e) {
          if (cancelled) return
          setUsers(list)
        }
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
          onChange={(e) => setMemberId(e.target.value.replace(/[^\d]/g, ''))}
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
            } catch (e) {
              alert(getHttpErrorMessage(e, '조회에 실패했습니다.'))
              setSearchedUser(null)
            } finally {
              setPending(false)
            }
          }}
        >
          검색
        </Button>

        <div className="mt-10 text-sm font-semibold">검색 결과</div>

        <Card className="mt-3">
          <CardContent className="min-h-40 p-0">
            {searchedUser === null ? (
              <div className="flex min-h-40 items-center justify-center p-6 text-sm text-muted-foreground">
                원하는 ID를 검색해 보세요!
              </div>
            ) : (
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg p-6 text-left transition-colors hover:bg-muted/40"
                onClick={() => navigate(`/mypage/members/${searchedUser.id}`)}
              >
                <div className="text-sm font-semibold text-foreground">
                  {searchedUser.name} (#{searchedUser.id})
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{searchedUser.part}</div>

                <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  <div className="text-muted-foreground">아이디</div>
                  <div className="text-right">{searchedUser.loginId}</div>

                  <div className="text-muted-foreground">이메일</div>
                  <div className="text-right">{searchedUser.email}</div>

                  <div className="text-muted-foreground">나이</div>
                  <div className="text-right">{searchedUser.age}세</div>
                </div>

                <div className="mt-4 text-sm text-primary underline underline-offset-4">
                  상세 페이지로 이동
                </div>
              </button>
            )}
          </CardContent>
        </Card>

        <div className="mt-10 text-sm font-semibold">전체 멤버 리스트</div>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {users.map((u) => (
            <MemberCard
              key={u.id}
              name={u.name}
              part={u.part}
              onClick={() => navigate(`/mypage/members/${u.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

