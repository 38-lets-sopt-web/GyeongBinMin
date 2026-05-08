import { type ComponentProps, useId, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { cn } from '@/shared/lib/utils'

type PasswordInputProps = Omit<ComponentProps<'input'>, 'type'> & {
  defaultVisible?: boolean
}

export function PasswordInput({
  className,
  defaultVisible = false,
  id,
  ...props
}: PasswordInputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const [visible, setVisible] = useState(defaultVisible)

  return (
    <div className="relative">
      <input
        id={inputId}
        type={visible ? 'text' : 'password'}
        data-slot="input"
        className={cn(
          'border-input file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 disabled:bg-input/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 h-8 w-full min-w-0 rounded-lg border bg-transparent px-2.5 py-1 pr-10 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-3 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:ring-3 md:text-sm',
          className,
        )}
        autoComplete="current-password"
        {...props}
      />
      <button
        type="button"
        aria-label={visible ? '비밀번호 숨기기' : '비밀번호 보이기'}
        aria-controls={inputId}
        onClick={() => setVisible((v) => !v)}
        className="text-muted-foreground hover:text-foreground absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 transition-colors"
      >
        {visible ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
      </button>
    </div>
  )
}

