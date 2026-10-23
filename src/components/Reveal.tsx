import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'li' | 'article' | 'header' | 'figure'
}

/** Revela o conteúdo ao entrar na tela (IntersectionObserver, uma única vez). */
export function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${shown ? 'is-in' : ''} ${className}`}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  )
}
