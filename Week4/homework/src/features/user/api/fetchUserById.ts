import { http } from '@/shared/lib/http'
import type { ApiResponse } from '@/shared/api/apiResponse'

export type User = {
  id: number
  loginId: string
  name: string
  email: string
  age: number
  part: 'iOS' | '안드로이드' | '웹'
}

export async function fetchUserById(userId: number) {
  const res = await http.get<ApiResponse<User>>(`/api/v1/users/${userId}`)
  return res.data
}

