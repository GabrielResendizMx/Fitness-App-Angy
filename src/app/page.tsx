
import { Navbar } from "@/components/aura/Navbar"
import { Hero } from "@/components/aura/Hero"
import { AboutMe } from "@/components/aura/AboutMe"
import { Services } from "@/components/aura/Services"
import { ResultsGallery } from "@/components/aura/ResultsGallery"
import { Footer } from "@/components/aura/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <ResultsGallery />
      <Footer />
    </main>
  )
}
