import { asset } from '../config/images'
import { gallery, galleryNote } from '../data/gallery'
import { Reveal } from './Reveal'

export function ProjectGallery() {
  return (
    <section id="galeria" className="section gallery">
      <div className="container">
        <Reveal className="section__head section__head--split">
          <div>
            <p className="eyebrow"><i aria-hidden="true" />Na prática</p>
            <h2 className="h2">Trabalho que se vê no terreno.</h2>
          </div>
          {galleryNote && <p className="note">{galleryNote}</p>}
        </Reveal>

        <div className="gallery__grid">
          {gallery.map((g, i) => (
            <Reveal as="figure" key={g.image.src + i} className={`gallery__item gallery__item--${g.area}`} delay={(i % 3) * 90}>
              <div className="zoom">
                <img
                  src={asset(g.image.src)}
                  width={g.image.w}
                  height={g.image.h}
                  alt={g.image.alt}
                  loading="lazy"
                  decoding="async"
                  style={{ objectPosition: g.focus }}
                />
              </div>
              {g.caption && <figcaption>{g.caption}</figcaption>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
