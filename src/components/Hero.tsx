import { asset, images } from '../config/images'
import { messages } from '../config/site'
import { useParallax } from '../hooks/useParallax'
import { ArrowIcon } from './Icons'
import { ContactLink } from './ContactLink'

export function Hero() {
  const { container, layer } = useParallax<HTMLDivElement>(0.22)

  return (
    <section id="inicio" className="hero" ref={container as never}>
      <div className="hero__media" ref={layer} aria-hidden="false">
        <picture>
          <source media="(max-width: 767px)" srcSet={asset(images.heroMobile.src)} width={images.heroMobile.w} height={images.heroMobile.h} />
          <img src={asset(images.hero.src)} width={images.hero.w} height={images.hero.h} alt={images.hero.alt} decoding="async" />
        </picture>
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__lines" aria-hidden="true">
        <i /><i /><i />
      </div>

      <div className="container hero__content">
        <p className="hero__tag" style={{ '--i': 0 } as never}>
          <span className="hero__dot" aria-hidden="true" />
          Terraplanagem <b>•</b> Movimentação de terra <b>•</b> Locação de máquinas
        </p>
        <h1 className="hero__title">
          <span className="line" style={{ '--i': 1 } as never}>Força para</span>
          <span className="line" style={{ '--i': 2 } as never}>
            <em>Transformar</em>
          </span>
          <span className="line" style={{ '--i': 3 } as never}>o terreno.</span>
        </h1>
        <p className="hero__lead" style={{ '--i': 4 } as never}>
          Soluções em terraplanagem, movimentação de terra e serviços com máquinas pesadas para obras e projetos.
        </p>
        <div className="hero__actions" style={{ '--i': 5 } as never}>
          <ContactLink message={messages.quote}>Solicitar orçamento</ContactLink>
          <a className="btn btn--ghost" href="#servicos">
            <span>Conhecer nossos serviços</span>
            <ArrowIcon className="btn__icon btn__icon--down" />
          </a>
        </div>
      </div>

      <a className="hero__scroll" href="#servicos" aria-label="Rolar para a próxima seção">
        <span>Role</span>
        <i aria-hidden="true" />
      </a>
    </section>
  )
}
