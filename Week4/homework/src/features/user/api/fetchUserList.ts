import { http } from '@/shared/lib/http'
import type { ApiResponse } from '@/shared/api/apiResponse'

export type UserSummary = {
  id: number
  name: string
  part: 'iOS' | '안드로이드' | '웹'
}

export async function fetchUserList() {
  const res = await http.get<ApiResponse<{ users: UserSummary[] }>>('/api/v1/users')
  return res.data
}

