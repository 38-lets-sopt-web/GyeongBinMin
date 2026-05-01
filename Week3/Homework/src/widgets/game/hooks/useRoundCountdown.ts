import { useCallback, useEffect, useRef, useState } from 'react'

const TICK_MS = 100
/** 0.1초 단위 정수로 보관해 표시·감소 시 부동소수점 오차를 피함 */
function secToTenths(sec: number) {
  return Math.max(0, Math.round(sec * 10))
}

/**
 * 라운드 진행 중 0.1초마다 감소하는 카운트다운 (`remainingSec`는 소수 한 자리).
 * 시작 값은 `reset(seconds)`를 이벤트 핸들러에서 호출해 맞춘다.
 */
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
