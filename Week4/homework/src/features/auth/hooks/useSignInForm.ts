import { useMemo, useState } from 'react'

export type SignInFormValues = {
  loginId: string
  password: string
}

export function useSignInForm() {
  const [values, setValues] = useState<SignInFormValues>({
    loginId: '',
    password: '',
  })

  const canSubmit = useMemo(() => {
    if (!values.loginId.trim()) return false
    if (!values.password) return false
    return true
  }, [values.loginId, values.password])

  return { values, setValues, canSubmit }
}

