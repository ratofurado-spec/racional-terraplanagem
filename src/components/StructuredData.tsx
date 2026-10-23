import { site } from '../config/site'
import { hasWhatsApp } from '../lib/whatsapp'

/** LocalBusiness apenas com dados reais preenchidos em site.ts. */
export function StructuredData() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: site.name,
    description: site.description,
  }
  if (site.url) data.url = site.url
  if (site.phone) data.telephone = site.phone
  else if (hasWhatsApp()) data.telephone = `+${site.whatsappNumber.replace(/\D/g, '')}`
  if (site.email) data.email = site.email
  if (site.address) data.address = { '@type': 'PostalAddress', streetAddress: site.address, addressCountry: 'BR' }
  if (site.region) data.areaServed = site.region
  if (site.social.length) data.sameAs = site.social.map((s) => s.url)

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
