/**
 * Fonte única das informações da empresa.
 * Campos vazios NÃO são exibidos no site. Preencha quando o cliente confirmar os dados.
 */
export interface SocialLink {
  label: string
  url: string
}

export const site = {
  name: 'Racional Terraplanagem',
  shortName: 'Racional',
  tagline: 'Terraplanagem e Locação de Máquinas',
  description:
    'A Racional Terraplanagem atua com serviços de terraplanagem, movimentação de terra e locação de máquinas. Solicite um orçamento.',
  /** Domínio definitivo (ex.: https://www.exemplo.com.br). Habilita canonical e og:url quando preenchido. */
  url: '',

  /** WhatsApp com DDI + DDD, somente dígitos. Ex.: '5511999999999'. */
  whatsappNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? '5511999894887',
  phone: '',
  email: '',
  address: '',
  region: '',
  social: [] as SocialLink[],
}

/** Mensagens pré-preenchidas do WhatsApp. */
export const messages = {
  quote: 'Olá! Acessei o site da Racional Terraplanagem e gostaria de solicitar um orçamento. Poderiam me ajudar?',
  team: 'Olá! Acessei o site da Racional Terraplanagem e gostaria de falar com a equipe sobre a minha obra.',
  service: (name: string) => `Olá! Gostaria de conversar sobre o serviço de ${name.toLowerCase()}.`,
  equipment: (name: string) => `Olá! Gostaria de consultar a disponibilidade de ${name.toLowerCase()}.`,
  floating: 'Olá! Acessei o site da Racional Terraplanagem e gostaria de atendimento.',
}

export const navLinks = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'equipamentos', label: 'Equipamentos' },
  { id: 'sobre', label: 'Sobre nós' },
  { id: 'contato', label: 'Contato' },
] as const
