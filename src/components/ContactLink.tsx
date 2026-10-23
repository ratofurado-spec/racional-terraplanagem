import type { ReactNode } from 'react'
import { contactTarget } from '../lib/whatsapp'
import { ArrowIcon } from './Icons'

interface Props {
  message: string
  variant?: 'primary' | 'ghost' | 'link'
  children: ReactNode
  className?: string
  arrow?: boolean
}

/** Botão de contato: abre WhatsApp com mensagem contextual (ou o melhor destino disponível). */
export function ContactLink({ message, variant = 'primary', children, className = '', arrow = true }: Props) {
  const { href, external } = contactTarget(message)
  return (
    <a
      className={`btn btn--${variant} ${className}`}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{children}</span>
      {arrow && <ArrowIcon className="btn__icon" />}
    </a>
  )
}
