import { createGuestSession } from '@/features/rating/api/createGuestSession'
import {
  readGuestSessionId,
  writeGuestSessionId,
} from '@/features/rating/storage/guestSessionStorage'

export async function ensureGuestSessionId(): Promise<string> {
  const existing = readGuestSessionId()
  if (existing) return existing

  const created = await createGuestSession()
  writeGuestSessionId(created.guestSessionId, created.expiresAt)
  return created.guestSessionId
}

