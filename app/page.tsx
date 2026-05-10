import { Hero } from '@/components/sections/hero'
import { Promesse } from '@/components/sections/promesse'
import { Modules } from '@/components/sections/modules'
import { Securite } from '@/components/sections/securite'
import { Pilote } from '@/components/sections/pilote'
import { Faq } from '@/components/sections/faq'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Promesse />
      <Modules />
      <Securite />
      <Pilote />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
