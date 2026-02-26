
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

export function AboutMe() {
  const aboutImg = PlaceHolderImages.find(img => img.id === "about-me")

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 border-2 border-primary/20 rounded-3xl group-hover:inset-0 transition-all duration-700"></div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={aboutImg?.imageUrl || ""}
                alt={aboutImg?.description || "Aura coach"}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                data-ai-hint={aboutImg?.imageHint}
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Sobre Mí</h2>
            <p className="font-decorative text-2xl text-primary">El camino hacia la plenitud</p>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hola, soy Aura. Mi misión es acompañarte en tu viaje de transformación personal. No creo en las soluciones rápidas, sino en la construcción de hábitos sostenibles que respeten tu ritmo y tus necesidades.
              </p>
              <p>
                Con más de 8 años de experiencia en fitness holístico y nutrición consciente, he ayudado a cientos de personas a reconectar con su vitalidad y confianza.
              </p>
              <p className="font-bold text-foreground italic">
                "Tu bienestar es la inversión más valiosa que puedes hacer en ti misma."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
