
"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { useTranslation } from "react-i18next"

export function Hero() {
  const { t } = useTranslation()
  const heroImg = PlaceHolderImages.find(img => img.id === "hero-image")

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20 bg-[#FFFDD0]"></div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <p className="font-decorative text-3xl text-primary">{t('hero.subtitle')}</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {t('hero.titlePart1')} <br />
            <span className="text-primary italic">{t('hero.titleHighlight')}</span> {t('hero.titlePart2')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 py-7 text-lg soft-glow transition-all duration-300 hover:scale-105">
              <Link href="#services">{t('hero.cta1')}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/10 px-10 py-7 text-lg transition-all duration-300">
              <Link href="#about">{t('hero.cta2')}</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-md mx-auto animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10 animate-pulse"></div>
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <Image
              src={heroImg?.imageUrl || ""}
              alt={heroImg?.description || "Hero image"}
              fill
              className="object-cover"
              data-ai-hint={heroImg?.imageHint}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
