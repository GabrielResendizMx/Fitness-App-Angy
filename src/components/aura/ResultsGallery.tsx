
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"

const results = [
  {
    name: "Carolina, 28",
    time: "3 meses de Zen Flow",
    before: PlaceHolderImages.find(img => img.id === "result-1-before")?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === "result-1-after")?.imageUrl
  },
  {
    name: "Elena, 34",
    time: "6 meses de Radiant Strength",
    before: PlaceHolderImages.find(img => img.id === "result-2-before")?.imageUrl,
    after: PlaceHolderImages.find(img => img.id === "result-2-after")?.imageUrl
  }
]

export function ResultsGallery() {
  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Historias de Éxito</h2>
        <p className="font-decorative text-2xl text-primary italic">Resultados reales, cambios profundos</p>
      </div>
      <div className="max-w-5xl mx-auto px-6 grid gap-16">
        {results.map((result, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-8 items-center bg-secondary/20 p-8 rounded-[3rem] shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">Antes</p>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-md">
                  <Image src={result.before || ""} alt="Before" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-primary">Después</p>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                  <Image src={result.after || ""} alt="After" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left md:pl-8">
              <h3 className="text-3xl font-bold">{result.name}</h3>
              <p className="text-lg text-primary font-medium">{result.time}</p>
              <p className="text-muted-foreground italic">
                "Nunca pensé que podría sentirme tan cómoda en mi propia piel. Aura no solo me enseñó a entrenar, sino a amar el proceso."
              </p>
              <div className="flex gap-1 justify-center md:justify-start">
                {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-primary text-xl">★</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
