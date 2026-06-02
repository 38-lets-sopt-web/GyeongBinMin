import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import * as styles from './GameEndModal.css'

type GameEndModalProps = {
  open: boolean
  finalScore: number
  onClose: () => void
}

export function GameEndModal({ open, finalScore, onClose }: GameEndModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open || typeof document === 'undefined') return null

  return createPortal(
    <div
      className={styles.backdrop}
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="game-end-title"
      >
        <h2 id="game-end-title" className={styles.title}>
          게임 종료
        </h2>
        <p className={styles.body}>
          최종 점수는 <span className={styles.score}>{finalScore}점</span>입니다.
        </p>
        <button type="button" className={styles.closeButton} onClick={onClose}>
          확인
        </button>
      </div>
    </div>,
    document.body,
  )
}
