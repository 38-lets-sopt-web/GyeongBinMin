import { http } from '@/shared/lib/http'
import type { ApiResponse } from '@/shared/api/apiResponse'

export type SignUpRequest = {
  loginId: string
  password: string
  name: string
  email: string
  age: number
  part: 'iOS' | '안드로이드' | '웹'
}

export type SignUpInput = {
  loginId: string
  password: string
  name: string
  email: string
  age: string
  part: '' | 'iOS' | '안드로이드' | '웹'
}

export async function signUp(input: SignUpInput) {
  const req: SignUpRequest = {
    loginId: input.loginId,
    password: input.password,
    name: input.name,
    email: input.email,
    age: Number(input.age),
    part: input.part || '웹',
  }

  const res = await http.post<ApiResponse<unknown>>('/api/v1/auth/signup', req)
  return res.data
}

