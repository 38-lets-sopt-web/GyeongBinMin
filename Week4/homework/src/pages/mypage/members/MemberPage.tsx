import { Button, Card, CardContent, Input } from '@/shared/ui'
import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function MemberPage() {
  const navigate = useNavigate()
  const [memberId, setMemberId] = useState('')
  const [searchedId, setSearchedId] = useState<number | null>(null)

  const canSearch = useMemo(() => memberId.trim().length > 0, [memberId])

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
          disabled={!canSearch}
          onClick={() => setSearchedId(Number(memberId))}
        >
          검색
        </Button>

        <div className="mt-10 text-sm font-semibold">검색 결과</div>

        <Card className="mt-3">
          <CardContent className="flex min-h-40 items-center justify-center text-sm text-muted-foreground">
            {searchedId === null ? (
              <span>원하는 ID를 검색해 보세요!</span>
            ) : (
              <button
                type="button"
                className="w-full cursor-pointer rounded-lg p-6 text-left transition-colors hover:bg-muted/40"
                onClick={() => navigate(`/mypage/members/${searchedId}`)}
              >
                <div className="text-sm font-semibold text-foreground">
                  회원 #{searchedId}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  클릭해서 상세 정보 보기
                </div>
              </button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

