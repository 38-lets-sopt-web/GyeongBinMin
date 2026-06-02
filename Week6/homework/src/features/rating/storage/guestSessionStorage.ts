type StoredGuestSession = {
  id: string
  expiresAtMs: number
}

const KEY = 'tmdb_guest_session'

function parseExpiresAt(expiresAt: string): number {
  // TMDB format: "2016-08-26 17:04:39 UTC"
  const ms = Date.parse(expiresAt.replace(' UTC', 'Z'))
  return Number.isFinite(ms) ? ms : Date.now() + 1000 * 60 * 60
}

export function readGuestSessionId(): string | null {
  const raw = localStorage.getItem(KEY)
  if (!raw) return null
  try {
    const parsed: unknown = JSON.parse(raw)
    if (
      typeof parsed === 'object' &&
      parsed !== null &&
      'id' in parsed &&
      'expiresAtMs' in parsed
    ) {
      const { id, expiresAtMs } = parsed as StoredGuestSession
      if (typeof id !== 'string' || typeof expiresAtMs !== 'number') return null
      if (Date.now() >= expiresAtMs) return null
      return id
    }
  } catch {
    return null
  }
  return null
}

export function writeGuestSessionId(id: string, expiresAt: string) {
  const stored: StoredGuestSession = {
    id,
    expiresAtMs: parseExpiresAt(expiresAt),
  }
  localStorage.setItem(KEY, JSON.stringify(stored))
}

