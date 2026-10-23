import { useEffect, useState } from 'react'
import { messages } from '../config/site'
import { whatsappUrl } from '../lib/whatsapp'
import { WhatsAppIcon } from './Icons'

/** Botão flutuante: só existe quando o WhatsApp estiver configurado e aparece após a primeira dobra. */
export function WhatsAppButton() {
  const [visible, setVisible] = useState(false)
  const href = whatsappUrl(messages.floating)

  useEffect(() => {
    if (!href) return
    let last = false
    const onScroll = () => {
      const next = window.scrollY > window.innerHeight * 0.6
      if (next !== last) {
        last = next
        setVisible(next)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [href])

  if (!href) return null

  return (
    <a
      className={`wafab ${visible ? 'is-visible' : ''}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
    >
      <WhatsAppIcon />
    </a>
  )
}
