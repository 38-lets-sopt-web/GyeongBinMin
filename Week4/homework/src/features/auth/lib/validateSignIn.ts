export type SignInValidationResult =
  | { ok: true }
  | { ok: false; message: string }

export function hasWhitespace(value: string) {
  return /\s/.test(value)
}

export function validateSignInInput(input: {
  loginId: string
  password: string
}): SignInValidationResult {
  const loginId = input.loginId.trim()
  const password = input.password.trim()

  if (!loginId && !password) {
    return { ok: false, message: '로그인 정보를 입력하세요 !' }
  }
  if (!loginId) {
    return { ok: false, message: '아이디를 입력해주세요.' }
  }
  if (!password) {
    return { ok: false, message: '비밀번호를 입력해주세요.' }
  }
  if (hasWhitespace(input.loginId) || hasWhitespace(input.password)) {
    return { ok: false, message: '공백은 사용할 수 없습니다.' }
  }
  if (/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input.password)) {
    return { ok: false, message: '비밀번호에 한글을 입력할 수 없습니다.' }
  }

  return { ok: true }
}

