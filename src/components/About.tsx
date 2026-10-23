import { asset, images } from '../config/images'
import { messages } from '../config/site'
import { useParallax } from '../hooks/useParallax'
import { ContactLink } from './ContactLink'
import { Reveal } from './Reveal'

export function About() {
  const { container, layer } = useParallax<HTMLImageElement>(0.1, 960)

  return (
    <section id="sobre" className="section about">
      <div className="container about__grid">
        <Reveal className="about__media">
          <figure ref={container as never}>
            <img
              ref={layer}
              src={asset(images.sobre.src)}
              width={images.sobre.w}
              height={images.sobre.h}
              alt={images.sobre.alt}
              loading="lazy"
              decoding="async"
            />
          </figure>
          <span className="about__index" aria-hidden="true">01</span>
        </Reveal>

        <div className="about__text">
          <Reveal>
            <p className="eyebrow"><i aria-hidden="true" />Sobre a Racional</p>
            <h2 className="h2">
              Preparação de terreno.<br />Base para grandes projetos.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="lead">
              A Racional Terraplanagem atua no segmento de serviços de terraplanagem e movimentação de terra, com foco em atender às necessidades de cada projeto.
            </p>
            <p className="body">
              Conheça nossas soluções e entre em contato para conversar sobre as necessidades da sua obra.
            </p>
            <ContactLink message={messages.team} variant="ghost">Fale com nossa equipe</ContactLink>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
