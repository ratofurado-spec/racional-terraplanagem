import { asset } from '../config/images'
import { messages } from '../config/site'
import { services } from '../data/services'
import { ContactLink } from './ContactLink'
import { Reveal } from './Reveal'

export function Services() {
  return (
    <section id="servicos" className="section services">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow"><i aria-hidden="true" />Nossas soluções</p>
          <h2 className="h2">Estrutura para cada etapa da obra.</h2>
        </Reveal>

        <ol className="services__list">
          {services.map((s) => (
            <li key={s.number} className={`service service--${s.layout}`}>
              <Reveal className="service__media">
                <div className="zoom">
                  <img
                    src={asset(s.image.src)}
                    width={s.image.w}
                    height={s.image.h}
                    alt={s.image.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: s.focus }}
                  />
                </div>
              </Reveal>
              <Reveal className="service__body" delay={100}>
                <span className="service__n" aria-hidden="true">{s.number}</span>
                <h3 className="h3">{s.name}</h3>
                <p>{s.description}</p>
                <ContactLink message={messages.service(s.name)} variant="link">
                  Solicitar orçamento
                </ContactLink>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
