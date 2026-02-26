
"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Heart, Zap, Sun } from "lucide-react"

const packages = [
  {
    id: "essential",
    title: "Aura Essentials",
    description: "Para quienes buscan un reinicio consciente.",
    price: "$49",
    icon: <Sun className="w-8 h-8 text-primary" />,
    features: ["Rutinas de 20 min", "Guía nutricional básica", "Soporte vía comunidad", "Meditaciones guiadas"]
  },
  {
    id: "zen",
    title: "Zen Flow",
    description: "Equilibrio total entre fuerza y flexibilidad.",
    price: "$89",
    icon: <Heart className="w-8 h-8 text-primary" />,
    features: ["Yoga & Pilates", "Plan de comidas personalizado", "Sesión 1:1 mensual", "Seguimiento de hidratación"],
    popular: true
  },
  {
    id: "radiant",
    title: "Radiant Strength",
    description: "Transformación profunda y personalizada.",
    price: "$149",
    icon: <Zap className="w-8 h-8 text-primary" />,
    features: ["Entrenamiento de alta intensidad", "Análisis de bio-tipos", "Chat 24/7 con Aura", "Talleres de mentalidad"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Nuestros Programas</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Elige el nivel que mejor resuene contigo y comienza tu transformación hoy.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {packages.map((pkg) => (
          <Card key={pkg.id} className={`floating-card border-none bg-white rounded-[2rem] overflow-hidden ${pkg.popular ? 'ring-2 ring-primary shadow-2xl scale-105' : 'shadow-lg'}`}>
            {pkg.popular && (
              <div className="bg-primary text-white text-sm font-bold py-1 text-center uppercase tracking-widest">
                Más Popular
              </div>
            )}
            <CardHeader className="text-center pt-10">
              <div className="mx-auto mb-4 bg-secondary p-4 rounded-2xl w-fit">{pkg.icon}</div>
              <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
              <CardDescription>{pkg.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 px-8">
              <div className="text-center">
                <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground">/mes</span>
              </div>
              <ul className="space-y-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="pb-10 pt-6 justify-center">
              <Button asChild className="w-full max-w-[200px] rounded-full bg-primary hover:bg-primary/90 text-white py-6 soft-glow">
                <Link href={`/register?pkg=${pkg.id}`}>Seleccionar</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
