import { useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Parallax vertical suave via transform. Só roda enquanto o container está visível,
 * é desativado em telas pequenas e com prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(factor = 0.15, minWidth = 768) {
  const container = useRef<HTMLElement | null>(null)
  const layer = useRef<T | null>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const host = container.current
    const el = layer.current
    if (!host || !el || reduced || window.innerWidth < minWidth) return

    let visible = false
    let frame = 0

    const update = () => {
      frame = 0
      const rect = host.getBoundingClientRect()
      const progress = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight
      const limit = rect.height * 0.08
      const y = Math.max(-limit, Math.min(limit, -progress * rect.height * factor))
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (visible && !frame) frame = requestAnimationFrame(update)
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) onScroll()
    })
    io.observe(host)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()

    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
      el.style.transform = ''
    }
  }, [factor, minWidth, reduced])

  return { container, layer }
}
