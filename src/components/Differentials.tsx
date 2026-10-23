import { differentials } from '../data/differentials'
import { Reveal } from './Reveal'

export function Differentials() {
  return (
    <section id="diferenciais" className="section diff">
      <div className="container diff__grid">
        <Reveal className="diff__head">
          <p className="eyebrow"><i aria-hidden="true" />Por que a Racional</p>
          <h2 className="h2">Compromisso com a execução.</h2>
        </Reveal>

        <ol className="diff__list">
          {differentials.map((d, i) => (
            <Reveal as="li" key={d.title} className="diff__item" delay={i * 70}>
              <span className="diff__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <h3>{d.title}</h3>
              <p>{d.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
