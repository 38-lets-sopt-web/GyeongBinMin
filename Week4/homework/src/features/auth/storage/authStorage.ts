const USER_ID_KEY = 'userId'

export function setUserId(userId: number) {
  localStorage.setItem(USER_ID_KEY, String(userId))
}

export function getUserId() {
  const v = localStorage.getItem(USER_ID_KEY)
  if (!v) return null
  const n = Number(v)
  return Number.isNaN(n) ? null : n
}

export function clearUserId() {
  localStorage.removeItem(USER_ID_KEY)
}

