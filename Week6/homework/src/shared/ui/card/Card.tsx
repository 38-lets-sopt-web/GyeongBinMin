import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

import * as styles from '@/shared/ui/card/Card.css.ts'

type CardProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode
  padded?: boolean
}

export function Card({ padded = false, className, ...props }: CardProps) {
  return (
    <div
      {...props}
      className={[styles.card, padded ? styles.padded : '', className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

