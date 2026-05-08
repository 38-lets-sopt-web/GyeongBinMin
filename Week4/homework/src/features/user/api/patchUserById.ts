import { http } from '@/shared/lib/http'
import type { ApiResponse } from '@/shared/api/apiResponse'

export type PatchUserRequest = {
  name: string
  email: string
  age: number
}

export async function patchUserById(userId: number, req: PatchUserRequest) {
  const res = await http.patch<ApiResponse<unknown>>(`/api/v1/users/${userId}`, req)
  return res.data
}

