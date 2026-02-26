
"use client"

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import { Navbar } from "@/components/aura/Navbar"
import { Footer } from "@/components/aura/Footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const pkg = searchParams.get("pkg") || "essential"
  
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const pkgDisplayNames: Record<string, string> = {
    essential: "Aura Essentials",
    zen: "Zen Flow",
    radiant: "Radiant Strength"
  }

  return (
    <main className="min-h-screen bg-secondary/10">
      <Navbar />
      <div className="pt-32 pb-24 px-6 max-w-2xl mx-auto">
        <Link href="/#services" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group w-fit">
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Volver a programas
        </Link>
        
        <Card className="border-none shadow-2xl rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="bg-primary text-white p-10 text-center space-y-2">
            <Sparkles className="w-10 h-10 mx-auto mb-2 opacity-80" />
            <CardTitle className="text-3xl font-bold">Comienza tu viaje</CardTitle>
            <CardDescription className="text-white/80 text-lg">
              Estás a un paso de unirte a <span className="font-bold underline">{pkgDisplayNames[pkg]}</span>
            </CardDescription>
          </CardHeader>
          
          <CardContent className="p-10">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold">¡Solicitud recibida!</h3>
                <p className="text-muted-foreground text-lg">
                  Gracias por confiar en AuraFit. Revisaremos tus detalles y nos pondremos en contacto contigo en las próximas 24 horas para finalizar tu inscripción.
                </p>
                <Button asChild className="rounded-full px-8 py-6">
                  <Link href="/">Volver al inicio</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Tu nombre" required className="rounded-xl border-secondary/50 focus:ring-primary h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" required className="rounded-xl border-secondary/50 focus:ring-primary h-12" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="allergies">Alergias Alimentarias</Label>
                  <Textarea id="allergies" placeholder="Describe cualquier alergia o restricción..." className="rounded-xl border-secondary/50 focus:ring-primary min-h-[100px]" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="injuries">Historial de Lesiones</Label>
                  <Textarea id="injuries" placeholder="¿Tienes alguna lesión que debamos considerar?" className="rounded-xl border-secondary/50 focus:ring-primary min-h-[100px]" />
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full rounded-full bg-primary hover:bg-primary/90 text-white py-8 text-xl font-bold soft-glow transition-all active:scale-95">
                    Enviar Registro
                  </Button>
                </div>
                <p className="text-center text-xs text-muted-foreground">
                  Al enviar, aceptas nuestros términos de servicio y política de privacidad.
                </p>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
      <Footer />
    </main>
  )
}
