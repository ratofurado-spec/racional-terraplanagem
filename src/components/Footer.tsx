import { messages, navLinks, site } from '../config/site'
import { services } from '../data/services'
import { hasWhatsApp, whatsappUrl } from '../lib/whatsapp'

const telHref = (v: string) => `tel:+${v.replace(/\D/g, '')}`

export function Footer() {
  const wa = whatsappUrl(messages.floating)
  const hasChannels = !!(wa || site.phone || site.email || site.address || site.region || site.social.length)

  return (
    <footer id="contato" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} width="1134" height="558" alt={site.name} loading="lazy" />
          <p>{site.name}</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="footer__h">Navegação</h2>
          <ul>
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__h">Serviços</h2>
          <ul>
            {services.map((s) => (
              <li key={s.number}>{s.name}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="footer__h">Contato</h2>
          {hasChannels ? (
            <ul>
              {hasWhatsApp() && wa && (
                <li><a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              )}
              {site.phone && <li><a href={telHref(site.phone)}>{site.phone}</a></li>}
              {site.email && <li><a href={`mailto:${site.email}`}>{site.email}</a></li>}
              {site.address && <li>{site.address}</li>}
              {site.region && <li>Atendimento: {site.region}</li>}
              {site.social.map((s) => (
                <li key={s.url}><a href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a></li>
              ))}
            </ul>
          ) : (
            <p className="footer__pending">Canais de atendimento serão divulgados em breve.</p>
          )}
        </div>
      </div>

      <div className="container footer__legal">
        <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
        <p>Imagens ilustrativas.</p>
      </div>
    </footer>
  )
}
