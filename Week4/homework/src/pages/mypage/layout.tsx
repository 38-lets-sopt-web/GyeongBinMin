import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { Button } from '@/shared/ui'
import { clearUserId, getUserId } from '@/features/auth/storage/authStorage'
import { getUser } from '@/features/user/api/getUser'

function TabLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          'rounded-md px-3 py-2 text-sm font-medium transition-colors',
          isActive ? 'bg-white/10 text-white' : 'text-white/80 hover:text-white',
        ].join(' ')
      }
    >
      {children}
    </NavLink>
  )
}

export function MyPageLayout() {
  const navigate = useNavigate()
  const userId = getUserId()
  const [name, setName] = useState<string>('') 

  useEffect(() => {
    if (!userId) {
      navigate('/login', { replace: true })
      return
    }

    let cancelled = false

    ;(async () => {
      try {
        const res = await getUser(userId)
        const nextName = res.data?.name ?? ''
        if (cancelled) return
        setName(nextName)
      } catch {
        if (cancelled) return
        setName('')
      }
    })()

    return () => {
      cancelled = true
    }
  }, [navigate, userId])

  return (
    <div className="flex w-full flex-1 flex-col">
      <header className="w-full bg-[#173A5E] text-white">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4">
          <div className="flex flex-col">
            <div className="text-lg font-semibold leading-tight">SOPT MEMBERS</div>
            <div className="text-xs text-white/80">
              {(name || (userId ? `회원 #${userId}` : '회원'))}님, 안녕하세요!
            </div>
          </div>

          <nav className="flex items-center gap-1">
            <TabLink to="/mypage/info">내 정보</TabLink>
            <TabLink to="/mypage/members">회원 조회</TabLink>
            <Button
              variant="ghost"
              className="text-white/80 hover:bg-white/10 hover:text-white"
              onClick={() => {
                clearUserId()
                navigate('/login')
              }}
            >
              로그아웃
            </Button>
          </nav>
        </div>
      </header>

      <main className="w-full flex-1 bg-muted/40 px-4 py-10">
        <div className="mx-auto w-full max-w-4xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

