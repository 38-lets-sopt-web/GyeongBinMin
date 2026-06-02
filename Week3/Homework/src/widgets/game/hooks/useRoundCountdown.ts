import { useCallback, useEffect, useRef, useState } from 'react'

const TICK_MS = 100

function secToTenths(sec: number) {
  return Math.max(0, Math.round(sec * 10))
}

export function useRoundCountdown(running: boolean, onTimeUp: () => void) {
  const [remainingTenths, setRemainingTenths] = useState(0)
  const onTimeUpRef = useRef(onTimeUp)

  useEffect(() => {
    onTimeUpRef.current = onTimeUp
  }, [onTimeUp])

  const reset = useCallback((fullSeconds: number) => {
    setRemainingTenths(secToTenths(fullSeconds))
  }, [])

  useEffect(() => {
    if (!running) return
    const id = setInterval(() => {
      setRemainingTenths((t) => {
        if (t <= 1) {
          clearInterval(id)
          queueMicrotask(() => {
            onTimeUpRef.current()
          })
          return 0
        }
        return t - 1
      })
    }, TICK_MS)
    return () => clearInterval(id)
  }, [running])

  return { remainingSec: remainingTenths / 10, reset }
}
