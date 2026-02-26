
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "react-i18next"

export function ResultsGallery() {
  const { t, i18n } = useTranslation()

  const results = [
    {
      name: "Carolina, 28",
      time: i18n.language.startsWith('es') ? "3 meses de Zen Flow" : "3 months of Zen Flow",
      before: PlaceHolderImages.find(img => img.id === "result-1-before")?.imageUrl,
      after: PlaceHolderImages.find(img => img.id === "result-1-after")?.imageUrl
    },
    {
      name: "Elena, 34",
      time: i18n.language.startsWith('es') ? "6 meses de Radiant Strength" : "6 months of Radiant Strength",
      before: PlaceHolderImages.find(img => img.id === "result-2-before")?.imageUrl,
      after: PlaceHolderImages.find(img => img.id === "result-2-after")?.imageUrl
    }
  ]

  return (
    <section id="results" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">{t('results.title')}</h2>
        <p className="font-decorative text-2xl text-primary italic">{t('results.subtitle')}</p>
      </div>
      <div className="max-w-5xl mx-auto px-6 grid gap-16">
        {results.map((result, idx) => (
          <div key={idx} className="grid md:grid-cols-2 gap-8 items-center bg-secondary/20 p-8 rounded-[3rem] shadow-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">{t('results.before')}</p>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-md">
                  <Image src={result.before || ""} alt="Before" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-center text-xs font-bold uppercase tracking-widest text-primary">{t('results.after')}</p>
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                  <Image src={result.after || ""} alt="After" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="space-y-6 text-center md:text-left md:pl-8">
              <h3 className="text-3xl font-bold">{result.name}</h3>
              <p className="text-lg text-primary font-medium">{result.time}</p>
              <p className="text-muted-foreground italic">
                "{t('results.quote')}"
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
