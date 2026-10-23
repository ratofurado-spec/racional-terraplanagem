import type { Img } from '../config/images'
import { images } from '../config/images'

export interface Equipment {
  name: string
  description: string
  image: Img
  focus?: string
  /** Texto de disponibilidade/locação — preencha apenas quando confirmado. */
  availability?: string
}

/** Nota discreta indicando lista ilustrativa. Deixe vazio quando a lista for confirmada. */
export const equipmentNote = 'Equipamentos e imagens ilustrativos, sujeitos à confirmação.'

/**
 * Cadastre aqui somente as máquinas que a empresa realmente oferece.
 * Os itens abaixo são EXEMPLOS ILUSTRATIVOS para validação.
 */
export const equipment: Equipment[] = [
  {
    name: 'Escavadeira hidráulica',
    description: 'Escavação, carregamento e movimentação de solo em frentes de obra.',
    image: images.hero,
    focus: '70% 50%',
  },
  {
    name: 'Caminhão basculante',
    description: 'Transporte de terra e materiais entre a frente de serviço e o destino.',
    image: images.movimentacao,
    focus: '35% 55%',
  },
]
