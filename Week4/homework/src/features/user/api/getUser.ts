import { http } from '@/shared/lib/http/http'

type ApiResponse<T> = {
  success: boolean
  status: number
  message: string
  code: string
  data?: T
}

export type User = {
  id: number
  loginId: string
  name: string
  email: string
  age: number
  part: 'iOS' | '안드로이드' | '웹'
}

export async function getUser(userId: number) {
  const res = await http.get<ApiResponse<User>>(`/api/v1/users/${userId}`)
  return res.data
}

