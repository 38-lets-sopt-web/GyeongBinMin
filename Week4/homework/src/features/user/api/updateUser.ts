import { http } from '@/shared/lib/http/http'

type ApiResponse<T> = {
  success: boolean
  status: number
  message: string
  code: string
  data?: T
}

export type UpdateUserRequest = {
  name: string
  email: string
  age: number
}

export async function updateUser(userId: number, req: UpdateUserRequest) {
  const res = await http.patch<ApiResponse<unknown>>(`/api/v1/users/${userId}`, req)
  return res.data
}

