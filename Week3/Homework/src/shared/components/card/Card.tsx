import type { ComponentPropsWithoutRef, ReactNode } from 'react'

import * as styles from './Card.css'

type CardProps = {
  children: ReactNode
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function Card({ children, className, ...rest }: CardProps) {
  const merged = className ? `${styles.root} ${className}` : styles.root
  return (
    <div className={merged} {...rest}>
      {children}
    </div>
  )
}
