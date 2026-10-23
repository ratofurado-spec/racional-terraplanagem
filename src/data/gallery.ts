import type { Img } from '../config/images'
import { images } from '../config/images'

export interface GalleryItem {
  image: Img
  focus?: string
  /** Legenda — só preencha com informação confirmada. */
  caption?: string
  area: 'a' | 'b' | 'c' | 'd' | 'e' | 'f'
}

/** Imagens ilustrativas de bancos livres. Substitua por fotos reais de obras da Racional. */
export const gallery: GalleryItem[] = [
  { image: images.hero, focus: '65% 50%', area: 'a' },
  { image: images.porDoSol, focus: '50% 60%', area: 'b' },
  { image: images.sobre, focus: '40% 50%', area: 'c' },
  { image: images.preparacao, focus: '50% 55%', area: 'd' },
  { image: images.terraplanagem, focus: '55% 55%', area: 'e' },
  { image: images.locacao, focus: '65% 30%', area: 'f' },
]

export const galleryNote = 'Imagens ilustrativas de bancos de imagens livres. Não representam obras da Racional.'
