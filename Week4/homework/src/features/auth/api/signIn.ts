import { http } from '@/shared/lib/http'
import type { ApiResponse } from '@/shared/api/apiResponse'

export type SignInRequest = {
  loginId: string
  password: string
}

export type SignInResponseData = {
  userId: number
}

export async function signIn(req: SignInRequest) {
  const res = await http.post<ApiResponse<SignInResponseData>>(
    '/api/v1/auth/signin',
    req,
  )
  return res.data
}

