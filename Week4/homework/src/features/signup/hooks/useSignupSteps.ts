import { useCallback, useMemo, useState } from 'react'

export type SignupStep = 'id' | 'password' | 'profile'

export type SignupValues = {
  loginId: string
  password: string
  passwordConfirm: string
  name: string
  email: string
  age: string
  part: '' | 'iOS' | '안드로이드' | '웹'
}

export function useSignupSteps() {
  const [step, setStep] = useState<SignupStep>('id')
  const [values, setValues] = useState<SignupValues>({
    loginId: '',
    password: '',
    passwordConfirm: '',
    name: '',
    email: '',
    age: '',
    part: '',
  })

  const canNextFromId = useMemo(() => values.loginId.trim().length > 0, [values.loginId])

  const canNextFromPassword = useMemo(() => {
    if (!values.password) return false
    if (!values.passwordConfirm) return false
    if (values.password !== values.passwordConfirm) return false
    return true
  }, [values.password, values.passwordConfirm])

  const canSubmit = useMemo(() => {
    if (!values.name.trim()) return false
    if (!values.email.trim()) return false
    if (!values.age.trim()) return false
    if (!values.part.trim()) return false
    return true
  }, [values.age, values.email, values.name, values.part])

  const next = useCallback(() => {
    if (step === 'id') {
      if (!canNextFromId) return
      setStep('password')
      return
    }
    if (step === 'password') {
      if (!canNextFromPassword) return
      setStep('profile')
      return
    }
  }, [canNextFromId, canNextFromPassword, step])

  const back = useCallback(() => {
    if (step === 'profile') {
      setStep('password')
      return
    }
    if (step === 'password') {
      setStep('id')
      return
    }
  }, [step])

  return {
    step,
    setStep,
    values,
    setValues,
    back,
    next,
    canNextFromId,
    canNextFromPassword,
    canSubmit,
  }
}

