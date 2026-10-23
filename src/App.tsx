import { About } from './components/About'
import { ContactCTA } from './components/ContactCTA'
import { Differentials } from './components/Differentials'
import { Equipment } from './components/Equipment'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProjectGallery } from './components/ProjectGallery'
import { ServiceStrip } from './components/ServiceStrip'
import { Services } from './components/Services'
import { StructuredData } from './components/StructuredData'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <a className="skip" href="#sobre">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <ServiceStrip />
        <About />
        <Services />
        <Equipment />
        <Differentials />
        <ProjectGallery />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <StructuredData />
    </>
  )
}
