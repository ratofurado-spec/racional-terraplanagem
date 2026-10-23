import { asset } from '../config/images'
import { messages } from '../config/site'
import { equipment, equipmentNote } from '../data/equipment'
import { ContactLink } from './ContactLink'
import { Reveal } from './Reveal'

export function Equipment() {
  if (equipment.length === 0) return null

  return (
    <section id="equipamentos" className="section equipment">
      <div className="container">
        <Reveal className="section__head section__head--split">
          <div>
            <p className="eyebrow"><i aria-hidden="true" />Equipamentos</p>
            <h2 className="h2">Máquinas preparadas para a operação.</h2>
          </div>
          {equipmentNote && <p className="note">{equipmentNote}</p>}
        </Reveal>

        <ul className="equipment__grid">
          {equipment.map((item, i) => (
            <Reveal as="li" key={item.name} className="machine" delay={i * 110}>
              <div className="machine__media zoom">
                <img
                  src={asset(item.image.src)}
                  width={item.image.w}
                  height={item.image.h}
                  alt={item.image.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: item.focus }}
                />
              </div>
              <div className="machine__info">
                <span className="machine__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="h3">{item.name}</h3>
                  <p>{item.description}</p>
                  {item.availability && <p className="machine__avail">{item.availability}</p>}
                </div>
                <ContactLink message={messages.equipment(item.name)} variant="ghost">
                  Consultar disponibilidade
                </ContactLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
