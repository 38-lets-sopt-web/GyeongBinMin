import axios from 'axios'

type ApiErrorShape = {
  message?: unknown
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== 'string') return null
  const s = value.trim()
  return s.length > 0 ? s : null
}

export function getHttpErrorMessage(error: unknown, fallback: string) {
  if (!axios.isAxiosError(error)) return fallback

  const data: unknown = error.response?.data
  if (isRecord(data)) {
    const msg = asNonEmptyString((data as ApiErrorShape).message)
    if (msg) return msg
  }

  return asNonEmptyString(error.message) ?? fallback
}
