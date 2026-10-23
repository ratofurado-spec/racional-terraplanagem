import type { Img } from '../config/images'
import { images } from '../config/images'

export interface Service {
  number: string
  name: string
  description: string
  image: Img
  /** Posição do foco da imagem (object-position). */
  focus?: string
  /** Variação de layout editorial no desktop. */
  layout: 'wide-left' | 'mid-right' | 'tall-left' | 'wide-right'
}

/**
 * CONTEÚDO PROVISÓRIO — serviços sugeridos para validação com a empresa.
 * Remova ou ajuste os itens que não forem confirmados.
 */
export const services: Service[] = [
  {
    number: '01',
    name: 'Terraplanagem',
    description: 'Preparação e movimentação de solo para diferentes necessidades de obra.',
    image: images.terraplanagem,
    layout: 'wide-left',
  },
  {
    number: '02',
    name: 'Movimentação de terra',
    description: 'Serviços de movimentação e organização de terra conforme as características do projeto.',
    image: images.movimentacao,
    layout: 'mid-right',
  },
  {
    number: '03',
    name: 'Locação de máquinas',
    description: 'Equipamentos para apoiar as demandas operacionais da obra, conforme disponibilidade.',
    image: images.locacao,
    focus: '60% 40%',
    layout: 'tall-left',
  },
  {
    number: '04',
    name: 'Preparação de terrenos',
    description: 'Soluções de preparação de áreas para etapas posteriores da construção, quando aplicável ao projeto.',
    image: images.preparacao,
    layout: 'wide-right',
  },
]
