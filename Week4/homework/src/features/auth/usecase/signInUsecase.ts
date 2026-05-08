import { signIn } from '@/features/auth/api/signIn'
import { setUserId } from '@/features/auth/storage/authStorage'

export async function signInUsecase(input: { loginId: string; password: string }) {
  const res = await signIn(input)
  const userId = res.data?.userId

  if (typeof userId !== 'number') {
    return { ok: false as const }
  }

  setUserId(userId)
  return { ok: true as const, userId }
}

