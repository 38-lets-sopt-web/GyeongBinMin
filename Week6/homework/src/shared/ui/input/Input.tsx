import { type ComponentPropsWithoutRef } from 'react'

import * as styles from '@/shared/ui/input/Input.css.ts'

type InputProps = ComponentPropsWithoutRef<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      {...props}
      className={[styles.input, className].filter(Boolean).join(' ')}
    />
  )
}

