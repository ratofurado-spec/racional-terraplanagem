import { asset, images } from '../config/images'
import { messages } from '../config/site'
import { useParallax } from '../hooks/useParallax'
import { ContactLink } from './ContactLink'
import { Reveal } from './Reveal'

export function ContactCTA() {
  const { container, layer } = useParallax<HTMLDivElement>(0.16)

  return (
    <section id="orcamento" className="cta" ref={container as never}>
      <div className="cta__media" ref={layer} aria-hidden="true">
        <img src={asset(images.locacao.src)} width={images.locacao.w} height={images.locacao.h} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="cta__shade" aria-hidden="true" />
      <div className="container cta__content">
        <Reveal>
          <p className="eyebrow"><i aria-hidden="true" />Vamos conversar sobre sua obra?</p>
          <h2 className="h1">
            Seu próximo projeto<br />
            <em>começa aqui.</em>
          </h2>
        </Reveal>
        <Reveal delay={120} className="cta__side">
          <p>Entre em contato com a Racional Terraplanagem e conte um pouco sobre a sua necessidade.</p>
          <ContactLink message={messages.quote} className="btn--lg">SOLICITAR ORÇAMENTO</ContactLink>
        </Reveal>
      </div>
    </section>
  )
}
