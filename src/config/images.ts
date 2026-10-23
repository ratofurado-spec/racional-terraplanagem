/**
 * Catálogo de imagens. Para trocar por fotos reais da Racional, substitua os arquivos
 * em /public/images (mantendo o nome) ou altere os caminhos e dimensões abaixo.
 * Fotos atuais: bancos de imagens livres (Unsplash), apenas ilustrativas.
 */
export interface Img {
  src: string
  w: number
  h: number
  alt: string
}

export const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const images = {
  hero: { src: 'images/hero.webp', w: 2200, h: 1467, alt: 'Escavadeira hidráulica em operação em terreno de obra, com poeira e luz lateral' },
  heroMobile: { src: 'images/hero-mobile.webp', w: 900, h: 1154, alt: 'Escavadeira hidráulica em operação em terreno de obra' },
  sobre: { src: 'images/sobre.webp', w: 1600, h: 1067, alt: 'Escavadeira carregando um caminhão com terra em um canteiro de obras' },
  terraplanagem: { src: 'images/terraplanagem.webp', w: 1600, h: 1067, alt: 'Caminhão articulado e escavadeira em movimentação de terra' },
  movimentacao: { src: 'images/movimentacao.webp', w: 1600, h: 1067, alt: 'Caminhão articulado transportando terra em uma obra' },
  locacao: { src: 'images/locacao.webp', w: 1600, h: 1201, alt: 'Braço de escavadeira contra o céu alaranjado do fim de tarde' },
  preparacao: { src: 'images/preparacao.webp', w: 1600, h: 1201, alt: 'Silhuetas de escavadeiras em um terreno ao entardecer' },
  porDoSol: { src: 'images/obra-por-do-sol.webp', w: 1100, h: 1650, alt: 'Guindaste e estrutura de obra contra o pôr do sol' },
} satisfies Record<string, Img>
