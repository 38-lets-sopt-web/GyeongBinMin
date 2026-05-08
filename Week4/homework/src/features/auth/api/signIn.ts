import { http } from '@/shared/lib/http/http'

type ApiResponse<T> = {
  success: boolean
  status: number
  message: string
  code: string
  data?: T
}

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

