import { site } from '../config/site'

const onlyDigits = (v: string) => v.replace(/\D/g, '')

/** Link de WhatsApp com mensagem, ou null se o número ainda não foi configurado. */
export function whatsappUrl(message: string): string | null {
  const number = onlyDigits(site.whatsappNumber)
  if (number.length < 10) return null
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const hasWhatsApp = () => whatsappUrl('') !== null

/**
 * Destino de um botão de contato. Nunca retorna link inválido:
 * WhatsApp → e-mail → âncora para a seção de contato.
 */
export function contactTarget(message: string): { href: string; external: boolean } {
  const wa = whatsappUrl(message)
  if (wa) return { href: wa, external: true }
  if (site.email) {
    const subject = encodeURIComponent('Solicitação de orçamento')
    return { href: `mailto:${site.email}?subject=${subject}&body=${encodeURIComponent(message)}`, external: false }
  }
  return { href: '#contato', external: false }
}
