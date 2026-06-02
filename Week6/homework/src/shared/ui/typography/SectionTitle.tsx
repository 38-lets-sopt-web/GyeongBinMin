import { type ComponentPropsWithoutRef } from 'react'

import * as styles from '@/shared/ui/typography/Typography.css.ts'

type SectionTitleProps = ComponentPropsWithoutRef<'h2'>

export function SectionTitle({ className, ...props }: SectionTitleProps) {
  return (
    <h2
      {...props}
      className={[styles.sectionTitle, className].filter(Boolean).join(' ')}
    />
  )
}

