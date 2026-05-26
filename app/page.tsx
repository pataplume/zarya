import { Hero } from '@/components/sections/hero'
import { Explicatif } from '@/components/sections/explicatif'
import { Modules } from '@/components/sections/modules'
import { Securite } from '@/components/sections/securite'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Explicatif />
      <Modules />
      <Securite />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
