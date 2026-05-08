import { useEffect, useMemo, useState } from 'react'

import { getUserId } from '@/features/auth/storage/authStorage'
import { fetchUserById } from '@/features/user/api/fetchUserById'
import { patchUserById } from '@/features/user/api/patchUserById'
import { getHttpErrorMessage } from '@/shared/lib/http/httpError'
import { Button, Card, CardContent, Input } from '@/shared/ui'

export function MyInfoPage() {
  const userId = getUserId()
  const [loading, setLoading] = useState(true)
  const [pending, setPending] = useState(false)
  const [meta, setMeta] = useState<{ loginId: string; part: string }>({
    loginId: '-',
    part: '-',
  })
  const [form, setForm] = useState({
    name: '',
    email: '',
    age: '',
  })

  useEffect(() => {
    let cancelled = false

    ;(async () => {
      if (!userId) {
        setLoading(false)
        return
      }

      try {
        const res = await fetchUserById(userId)
        const u = res.data
        if (!u) throw new Error('No user data')
        if (cancelled) return

        setMeta({ loginId: u.loginId, part: u.part })
        setForm({
          name: u.name ?? '',
          email: u.email ?? '',
          age: String(u.age ?? ''),
        })
      } catch {
        if (cancelled) return
      } finally {
        if (cancelled) return
        setLoading(false)
      }
    })()

    return () => {
      cancelled = true
    }
  }, [userId])

  const emailWarning = useMemo(() => {
    const email = form.email.trim()
    if (!email) return ''
    // lightweight email check
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    return ok ? '' : '이메일 형식을 확인해주세요.'
  }, [form.email])

  const canSubmit = useMemo(() => {
    if (!userId) return false
    if (loading) return false
    if (pending) return false
    if (!form.name.trim()) return false
    if (!form.email.trim()) return false
    if (!form.age.trim()) return false
    if (emailWarning) return false
    const n = Number(form.age)
    if (Number.isNaN(n)) return false
    return true
  }, [emailWarning, form.age, form.email, form.name, loading, pending, userId])

  return (
    <div className="mx-auto w-full max-w-2xl">
      <h1 className="mb-6 text-center text-title font-heading font-semibold">내 정보</h1>

      <Card>
        <CardContent className="grid gap-3">
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-medium">아이디</div>
            <div className="text-sm text-muted-foreground">{meta.loginId}</div>
          </div>
          <div className="flex items-center justify-between gap-6">
            <div className="text-sm font-medium">파트</div>
            <div className="text-sm text-muted-foreground">{meta.part}</div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-name">
            이름
          </label>
          <Input
            id="my-name"
            placeholder="이름"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            disabled={loading || pending}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-email">
            이메일
          </label>
          <Input
            id="my-email"
            placeholder="sopt@sopt.org"
            value={form.email}
            onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
            disabled={loading || pending}
            aria-invalid={emailWarning ? true : undefined}
          />
          {emailWarning && (
            <div className="text-sm text-destructive">{emailWarning}</div>
          )}
        </div>
        <div className="grid gap-2">
          <label className="text-sm font-medium" htmlFor="my-age">
            나이
          </label>
          <Input
            id="my-age"
            placeholder="25"
            inputMode="numeric"
            value={form.age}
            onChange={(e) => setForm((prev) => ({ ...prev, age: e.target.value }))}
            disabled={loading || pending}
          />
        </div>

        <Button
          className="w-full cursor-pointer hover:bg-primary/90 disabled:cursor-not-allowed"
          disabled={!canSubmit}
          onClick={async () => {
            if (!canSubmit) return
            try {
              setPending(true)
              await patchUserById(userId!, {
                name: form.name.trim(),
                email: form.email.trim(),
                age: Number(form.age),
              })
              alert('저장에 성공했습니다.')
            } catch (e) {
              alert(getHttpErrorMessage(e, '저장에 실패했습니다.'))
            } finally {
              setPending(false)
            }
          }}
        >
          정보 수정
        </Button>
      </div>
    </div>
  )
}

