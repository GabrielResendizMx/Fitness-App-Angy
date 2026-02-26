
"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "react-i18next"

export function AboutMe() {
  const { t } = useTranslation()
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
            <h2 className="text-4xl md:text-5xl font-bold">{t('about.title')}</h2>
            <p className="font-decorative text-2xl text-primary">{t('about.subtitle')}</p>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p className="font-bold text-foreground italic">
                "{t('about.quote')}"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
