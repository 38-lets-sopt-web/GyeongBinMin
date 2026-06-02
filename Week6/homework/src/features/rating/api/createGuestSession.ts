import { http } from '@/shared/lib/http'

type CreateGuestSessionResponse = {
  success: boolean
  guest_session_id: string
  expires_at: string
}

export async function createGuestSession(): Promise<{
  guestSessionId: string
  expiresAt: string
}> {
  const { data } = await http.get<CreateGuestSessionResponse>(
    '/authentication/guest_session/new',
    {
      params: { api_key: import.meta.env.VITE_API_KEY },
    },
  )

  return { guestSessionId: data.guest_session_id, expiresAt: data.expires_at }
}

