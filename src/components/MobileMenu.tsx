import { useEffect, useRef } from 'react'
import { messages, navLinks } from '../config/site'
import { ContactLink } from './ContactLink'

interface Props {
  active: string
  onClose: (restoreFocus?: boolean) => void
}

export function MobileMenu({ active, onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    panel.current?.querySelector<HTMLElement>('a')?.focus()

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose(true)
      if (e.key !== 'Tab' || !panel.current) return
      // Mantém o foco dentro do menu (painel + botão de fechar no header).
      const focusables = Array.from(
        document.querySelectorAll<HTMLElement>('#menu-mobile a, .burger'),
      )
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    const onResize = () => window.innerWidth >= 960 && onClose()

    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prevOverflow
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [onClose])

  return (
    <div id="menu-mobile" className="mmenu" ref={panel}>
      <nav className="container mmenu__inner" aria-label="Menu móvel">
        <ol className="mmenu__list">
          {navLinks.map((l, i) => (
            <li key={l.id}>
              <a href={`#${l.id}`} aria-current={active === l.id ? 'true' : undefined} onClick={() => onClose()}>
                <span className="mmenu__n">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ol>
        <div onClick={() => onClose()}>
          <ContactLink message={messages.quote} className="mmenu__cta">
            Solicitar orçamento
          </ContactLink>
        </div>
      </nav>
    </div>
  )
}
