import { type ButtonHTMLAttributes } from 'react'

import * as styles from '@/shared/ui/button/Button.css.ts'

type Variant = 'primary' | 'ghost'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const variantClass = variant === 'primary' ? styles.primary : styles.ghost

  return (
    <button
      {...props}
      className={[styles.base, variantClass, className].filter(Boolean).join(' ')}
    />
  )
}

