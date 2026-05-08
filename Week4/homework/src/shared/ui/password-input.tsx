import { type ComponentProps, useId, useState } from 'react'

import { cn } from '@/shared/lib/utils'

type PasswordInputProps = Omit<ComponentProps<'input'>, 'type'> & {
  defaultVisible?: boolean
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M2.2 12c1.9-4.6 5.7-7.5 9.8-7.5s7.9 2.9 9.8 7.5c-1.9 4.6-5.7 7.5-9.8 7.5S4.1 16.6 2.2 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  )
}

function EyeOffIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M10.6 5.1A9.5 9.5 0 0 1 12 4.5c4.1 0 7.9 2.9 9.8 7.5a13.5 13.5 0 0 1-2.4 3.7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.6 6.6A13.2 13.2 0 0 0 2.2 12c1.9 4.6 5.7 7.5 9.8 7.5 1.6 0 3.1-.4 4.5-1.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14.5 14.5a3.5 3.5 0 0 1-5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 3l18 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
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
        type={visible ? 'password' : 'text'}
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
        {visible ? <EyeOffIcon className="size-5" /> : <EyeIcon className="size-5" />}
      </button>
    </div>
  )
}

