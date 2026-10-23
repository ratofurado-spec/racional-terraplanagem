import { useEffect, useRef, useState } from 'react'
import { messages, navLinks, site } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { ContactLink } from './ContactLink'
import { MobileMenu } from './MobileMenu'

// Seções sem item no menu também são observadas, para o destaque não "grudar" no item anterior.
const ids = [...navLinks.map((l) => l.id), 'diferenciais', 'galeria', 'orcamento']

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const active = useActiveSection(ids)

  useEffect(() => {
    let last = window.scrollY > 24
    setScrolled(last)
    const onScroll = () => {
      const next = window.scrollY > 24
      if (next !== last) {
        last = next
        setScrolled(next)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = (restoreFocus = false) => {
    setOpen(false)
    if (restoreFocus) toggleRef.current?.focus()
  }

  return (
    <>
    <header className={`header ${scrolled || open ? 'is-solid' : ''}`}>
      <div className="container header__bar">
        <a className="header__logo" href="#inicio" aria-label={`${site.name} — ir para o início`}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} width="1134" height="558" alt={site.name} />
        </a>

        <nav className="header__nav" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="navlink" aria-current={active === l.id ? 'true' : undefined}>
              {l.label}
            </a>
          ))}
        </nav>

        <ContactLink message={messages.quote} className="header__cta">
          Solicitar orçamento
        </ContactLink>

        <button
          ref={toggleRef}
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

    </header>
    {/* Fora do <header>: o backdrop-filter do header criaria um containing block para o painel fixo. */}
    {open && <MobileMenu active={active} onClose={close} />}
    </>
  )
}
